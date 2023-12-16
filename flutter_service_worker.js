'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "558df4672b8fccc3a84ab5ae92dd93fb",
"index.html": "4d6a1641fbac6d2e5261f5a440c51949",
"/": "4d6a1641fbac6d2e5261f5a440c51949",
"main.dart.js": "389366174676f563ed3c2236f3d3b772",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "756ea28730b69b0ed42ea5f8854497df",
"bannerad.html": "780f021ba193b13eda1559a6d1a4f747",
"assets/AssetManifest.json": "a8c9b108840c80e7f26ee5baa9ebc84b",
"assets/NOTICES": "9871201a4c2314469de7116205fb8ae3",
"assets/FontManifest.json": "85e66239b31588f6f55824ebc7bf711f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3ee23b77d14b55e78ae91c0b49578505",
"assets/fonts/MaterialIcons-Regular.otf": "903222e33c284d06bff53e56ccc17950",
"assets/assets/images/Tours/challenger.png": "22ac98d5cc5d4d3eaebb1d2e0942a176",
"assets/assets/images/Tours/itf.png": "1095f0a1be923dd71e62d786a124993b",
"assets/assets/images/flags/tg.png": "1a178848b68f47fbcda37ddea5263eb0",
"assets/assets/images/flags/me.png": "efda5a43949211eecfcd832cd319bb72",
"assets/assets/images/flags/la.png": "0c8aee041da0cfec52cf057ee880fc60",
"assets/assets/images/flags/mr.png": "9fceeadc5e11146d5398696ffdbc7e6f",
"assets/assets/images/flags/ni.png": "3039e8241c02c05bce10e48c164553f2",
"assets/assets/images/flags/lv.png": "b0756cc1a37378b6f29fe40dbf5552fb",
"assets/assets/images/flags/om.png": "0779b65b244d7ab2f03f393f62c552c6",
"assets/assets/images/flags/af.png": "9ffcffd0d33a55062b8f67d4d4329e5c",
"assets/assets/images/flags/cy.png": "1470c4d8047b1ea61c4331b81d5c3376",
"assets/assets/images/flags/bj.png": "cf54a0872ef3c81286cba0628bcf78ba",
"assets/assets/images/flags/aq.png": "82607b9974662169b2ab5784786520ae",
"assets/assets/images/flags/cn.png": "c005c7cbc14bf9d8b2f81d2e9c3cc686",
"assets/assets/images/flags/gb-sct.png": "4403fbae9af71c205f445162c7de4f44",
"assets/assets/images/flags/co.png": "17409e4345c557a21a6e1dbd630772ed",
"assets/assets/images/flags/cx.png": "7889bc042e66efe366a012733e306287",
"assets/assets/images/flags/ag.png": "adabb8a47a6d8b233835dfd796de56b0",
"assets/assets/images/flags/ms.png": "53aecb05d9a09a7b5766c473191cb9db",
"assets/assets/images/flags/md.png": "55274d7bd05135466d48fcde79025a98",
"assets/assets/images/flags/zm.png": "7d612b81bbb9cc7284f7ed5a391acc5c",
"assets/assets/images/flags/vn.png": "80fc420e56ab316fb33f3591fbdefd5c",
"assets/assets/images/flags/tf.png": "961bdb3414d6f506ca1ca2bf51840640",
"assets/assets/images/flags/td.png": "9628f405a65bcb07d3d3ba451efb4ace",
"assets/assets/images/flags/yt.png": "e885cf000a5c5425bb09eb5aa4a50cfc",
"assets/assets/images/flags/lb.png": "2d24cb35d32714a314b450117d5f8040",
"assets/assets/images/flags/mf.png": "d576f5a2763a3d43e5700875591019b0",
"assets/assets/images/flags/lu.png": "a0efdcf9b36b5d607532c7b78e8b4684",
"assets/assets/images/flags/mq.png": "3026c46b624d059b9892b7b9df31c038",
"assets/assets/images/flags/cz.png": "e2924c8ae08507bb2b15983897f7a065",
"assets/assets/images/flags/ae.png": "41214682573081bd17e0609d934adb89",
"assets/assets/images/flags/cm.png": "675e1f296b41ae2602a44559d9d09cac",
"assets/assets/images/flags/bi.png": "5ffd47f33e649609b8f07ce89952032c",
"assets/assets/images/flags/ar.png": "95f96b10623db96767dcbb3e6c71f664",
"assets/assets/images/flags/as.png": "e899b155f34b6018f74b7fbe8cbff2c9",
"assets/assets/images/flags/bh.png": "befefb7625f128b46e0ea24bbedc5553",
"assets/assets/images/flags/cl.png": "e3548561671ba3cfc726289052c3447e",
"assets/assets/images/flags/ad.png": "5907d3dbab26dae252ed2d9dc43f55d3",
"assets/assets/images/flags/mp.png": "c48f15d4fecc9b4f38f263c19c9a407d",
"assets/assets/images/flags/lt.png": "f8c96b0faba7d47b5a725275521f82ca",
"assets/assets/images/flags/mg.png": "35a440b46d3361bb8afa85c74facaf4f",
"assets/assets/images/flags/lc.png": "c739ebb20ec2695e4c1d8dcae16432ea",
"assets/assets/images/flags/tr.png": "6a66c421c25c531398028debdbf5dfe5",
"assets/assets/images/flags/ua.png": "6babc519e5a8f1fc92c62c62979ade91",
"assets/assets/images/flags/tv.png": "752fdb120d578fc254e53c496bc2c92e",
"assets/assets/images/flags/vi.png": "33a0e5ed441f340ee80c4cc46dca0b12",
"assets/assets/images/flags/mt.png": "3f82cdea8d9ccdba076bb83b68bdd8ee",
"assets/assets/images/flags/no.png": "a4e346c8c8491f4b6ad7e50e4880bb71",
"assets/assets/images/flags/mc.png": "813c02641e768a61bfaa9bdb9b3a98be",
"assets/assets/images/flags/ch.png": "ac55ea5453dd8f345cd7a037ee60e1bf",
"assets/assets/images/flags/bl.png": "1c52dbb68817ae8513641d8895bd0a63",
"assets/assets/images/flags/aw.png": "bef30d88d4ba7f017a83dbeab54330ad",
"assets/assets/images/flags/bz.png": "0da4fe27efd9eb975808e5af5785be55",
"assets/assets/images/flags/bm.png": "4bff7bc7bed29e9a4450e907aa670782",
"assets/assets/images/flags/ci.png": "2125c9eda2c4307d79fc07e493f06641",
"assets/assets/images/flags/mu.png": "29907eb4d70609894d6eb68573a70362",
"assets/assets/images/flags/us.png": "893d30ad358050b16a7276b13cd6af47",
"assets/assets/images/flags/tw.png": "b82f4e6a8df7c65a8d6347b521ac5acd",
"assets/assets/images/flags/ye.png": "0dce7009001f92cd32f1f03edd703ffb",
"assets/assets/images/flags/mw.png": "596f56a9e3682fd3c83b8977f4afab12",
"assets/assets/images/flags/nl.png": "cc10b68f74de622430825b0e46447dae",
"assets/assets/images/flags/ls.png": "15c1eaba1a58d488666c1a4a0a3327b1",
"assets/assets/images/flags/bo.png": "51738ea8db5ac4378070af77891b1872",
"assets/assets/images/flags/at.png": "d0517d4e6b82aa23f465e1b6785e9e3b",
"assets/assets/images/flags/ck.png": "9a2058cc099d52e4be15acbe490aac4a",
"assets/assets/images/flags/by.png": "08a6777fb8b0ca71793b3f8f41381c31",
"assets/assets/images/flags/au.png": "478bfdc17a44f267ac4caa217c672b69",
"assets/assets/images/flags/bn.png": "41ac6989c6ee0baf638950a1304a6118",
"assets/assets/images/flags/ma.png": "b34b7c8c5db08d271abd036ab4d49dc7",
"assets/assets/images/flags/nz.png": "b7d48871999af76ec0cb8cfe91ff55d1",
"assets/assets/images/flags/lr.png": "fff3e8b21427d94c980c1c338e95db7b",
"assets/assets/images/flags/mv.png": "2c4c43c713b6ab742c754de31c305b7a",
"assets/assets/images/flags/tc.png": "b183dadb34052b06bb417e8e3c03a136",
"assets/assets/images/flags/ug.png": "ffbeff684b9566075193e600bbc273b9",
"assets/assets/images/flags/tt.png": "055f269e5d6e9c56646e46fbf2f4b615",
"assets/assets/images/flags/pl.png": "be3bdd13b447db288026ab646ce908ed",
"assets/assets/images/flags/rs.png": "fe24893a736cb8a3ba14323769aa72f1",
"assets/assets/images/flags/in.png": "ded33bf7428316fc7911998e0d85c0be",
"assets/assets/images/flags/ge.png": "d6c2f37db0867ddf89de8807460b4180",
"assets/assets/images/flags/gr.png": "77dda6ed43988e1e0909ef1a87f8ee7e",
"assets/assets/images/flags/gs.png": "caec8208235820215599a654b3e085eb",
"assets/assets/images/flags/gd.png": "5a3d4b466f3d480776d769db0f9804c9",
"assets/assets/images/flags/io.png": "352f41490efb0534b282cc2c88ba1405",
"assets/assets/images/flags/hk.png": "8a5f4e9b9a2e02bb543628b3a328d35f",
"assets/assets/images/flags/kp.png": "68be2a03ed6f61096a602760ce9edc51",
"assets/assets/images/flags/gb-nir.png": "763b400459e922d00d591055b22501b7",
"assets/assets/images/flags/kg.png": "621b17257c886698ca9569e2084da734",
"assets/assets/images/flags/pm.png": "08719b4566d8e725be3e871e7ed0d329",
"assets/assets/images/flags/sv.png": "a9671c4ada8f0ad27b70c0641e664f53",
"assets/assets/images/flags/re.png": "c9a95c0a2446b8308dbacc55c86c4236",
"assets/assets/images/flags/sa.png": "318447294d1eb88ff1e206842a30127b",
"assets/assets/images/flags/sc.png": "253a244c00ada4afbeb10e69dde5dd65",
"assets/assets/images/flags/st.png": "d248d268c1bebc6b2230024c0e0d1825",
"assets/assets/images/flags/ke.png": "1cc898a3e3311c0c44f095c4c6ac8f9a",
"assets/assets/images/flags/im.png": "25c671f3360531e154e2b718583d9ffb",
"assets/assets/images/flags/kr.png": "dcd969dc6354577b36faa90f4fe7511d",
"assets/assets/images/flags/gf.png": "fa5dfe695700a3e9789b276cdbfe23fb",
"assets/assets/images/flags/dj.png": "9a166a507cfbe9d5830ea5333a389cbc",
"assets/assets/images/flags/gq.png": "6578a2057e213f2bfec37bf346d1d0af",
"assets/assets/images/flags/gp.png": "4943a37870963ff46f2ed96f2ecb2243",
"assets/assets/images/flags/dk.png": "c04d78b92383f9a4330c12e79ba275c1",
"assets/assets/images/flags/gg.png": "09d0d3e289b44009ede88d0b42b5dde8",
"assets/assets/images/flags/il.png": "34cd28236e72518a15334e47e4084ee6",
"assets/assets/images/flags/pn.png": "ddce1b32dffdd26270352c0f46691cb1",
"assets/assets/images/flags/sb.png": "858b38867c11e9a9c90180ff12639e84",
"assets/assets/images/flags/py.png": "056b5b3e0a98a7cd37e85afa0c6c3508",
"assets/assets/images/flags/ru.png": "cbb03edeeb04c456abc4ab8551823324",
"assets/assets/images/flags/kw.png": "cff67de5ca24edac4884bb2cb061651f",
"assets/assets/images/flags/do.png": "7df8b0a2d0b7443d774e7451f89398a0",
"assets/assets/images/flags/gt.png": "f2a6953411e53e777bcfd7f8c8759e0c",
"assets/assets/images/flags/gb.png": "7567c641d0fa8a4c30d0bd83f3ff13c5",
"assets/assets/images/flags/gu.png": "138d2ee10f0ae0659230e028c8e21535",
"assets/assets/images/flags/je.png": "8132a5e07986479048e9a0d9b8740066",
"assets/assets/images/flags/hm.png": "fc6bfba80528849200048e9425e48bc2",
"assets/assets/images/flags/sg.png": "b25c003f369c2cad7bb0b5a1444a58cc",
"assets/assets/images/flags/pk.png": "8c4707ae29fa7f548445ed96398a214f",
"assets/assets/images/flags/sr.png": "a44c706c794ae7e47e9e13cc96c35ce8",
"assets/assets/images/flags/se.png": "fc102b115ad91353a914086b88adc31b",
"assets/assets/images/flags/jp.png": "fb892c0a4d636acc241cee4dcaf5aabd",
"assets/assets/images/flags/gw.png": "0a27c9e01d4cbbae02e75968e1c888eb",
"assets/assets/images/flags/eh.png": "a445134387c3e7275f6ab84d0a99ac54",
"assets/assets/images/flags/dz.png": "dbf712f72b98815f1e2ec2f9af1d3b16",
"assets/assets/images/flags/ga.png": "76bf120c14bb79f032afb8a90b9d696d",
"assets/assets/images/flags/fr.png": "d576f5a2763a3d43e5700875591019b0",
"assets/assets/images/flags/dm.png": "1cffba4b3fdd07c315ca34d63300df7e",
"assets/assets/images/flags/hn.png": "c68514afd2288e537c759c80a0db29ca",
"assets/assets/images/flags/sd.png": "df05a5e216e319eda3359def54bd99a7",
"assets/assets/images/flags/rw.png": "17127d8abb518d1310ea21916ab5addf",
"assets/assets/images/flags/ph.png": "e4d206fa942e1c1af5aa0ff2062f4c48",
"assets/assets/images/flags/ss.png": "6e796e22b0dba5c9e5791520ea58ac73",
"assets/assets/images/flags/qa.png": "22618797ac4f3379539ab4845977af9b",
"assets/assets/images/flags/pe.png": "f5d4089eecae9e8a803529ebfe8cc1dd",
"assets/assets/images/flags/pr.png": "61a17e5adc5096b0b8694f8b0f62a72c",
"assets/assets/images/flags/si.png": "b22dc30e9ab74048fe7507bc3a20d4c1",
"assets/assets/images/flags/ht.png": "0ee3ddecf671416d0336b2730a4dcb55",
"assets/assets/images/flags/es.png": "9aff382d294ef9b7727acb3e08a39aa8",
"assets/assets/images/flags/gl.png": "7f46508c6e3cf6f06862621176496969",
"assets/assets/images/flags/gm.png": "fca1f27fa11662e6c77e2eb13773ffdf",
"assets/assets/images/flags/er.png": "2519908ab7d1ded08333520a1b2c4e4a",
"assets/assets/images/flags/fi.png": "f98a8fad3e65883fc3e1466e527018e7",
"assets/assets/images/flags/ee.png": "484410b068f3f66a03e3eabb67af0992",
"assets/assets/images/flags/kn.png": "76454ca5e77bc957b61c5cf0cec385aa",
"assets/assets/images/flags/hu.png": "3c7bdf628442a5c903b758a6395a6209",
"assets/assets/images/flags/iq.png": "5669734d928193ed5ae7de0442d0ca21",
"assets/assets/images/flags/ky.png": "5520111baf1a8e1568426642ec89c568",
"assets/assets/images/flags/sh.png": "1094c5ea12dc551fa4db211d05662a23",
"assets/assets/images/flags/ps.png": "acb4a5c12dae6b9657341f0b7fbffe2e",
"assets/assets/images/flags/pf.png": "be3fe1544416f439ffd4f1498dec756f",
"assets/assets/images/flags/sj.png": "a4e346c8c8491f4b6ad7e50e4880bb71",
"assets/assets/images/flags/id.png": "2e452a492d6e622fded70f5a126e0cf4",
"assets/assets/images/flags/is.png": "052686580d37f11477349ba2405ea712",
"assets/assets/images/flags/eg.png": "6f06f2829ab36dfc6b5002c5b1c3e86f",
"assets/assets/images/flags/fk.png": "1e0c5f4f0da8498689a7650daf336a04",
"assets/assets/images/flags/fj.png": "827833959e8d8f04303d2a2679395a2f",
"assets/assets/images/flags/gn.png": "a1d326a786cb3225d5bc3a0c7bfc1a5e",
"assets/assets/images/flags/gy.png": "a93a8702c4588e11c8b6056490f122bb",
"assets/assets/images/flags/ir.png": "eff361620279951d64e3666ab34ad105",
"assets/assets/images/flags/km.png": "d9c6c71295ba5f63d3af0c4111998948",
"assets/assets/images/flags/ie.png": "40e9066a558dd1772c3ffbae837a21e2",
"assets/assets/images/flags/kz.png": "935e83b2b90bc6689f15877a12c9083d",
"assets/assets/images/flags/ro.png": "d1e499af472d1fd816ca167bf74a072a",
"assets/assets/images/flags/sk.png": "ad04f3d8f1baa2ef3c4bc656512a17a9",
"assets/assets/images/flags/pg.png": "de17daf4a8d3f520dfd428c34e3ea647",
"assets/assets/images/flags/pt.png": "629cab8450ecd8095778ec5e074e76d1",
"assets/assets/images/flags/so.png": "4423a8c737a09596784cc4a4bcd22ce9",
"assets/assets/images/flags/sx.png": "09b80d96170337276e5425060694c173",
"assets/assets/images/flags/hr.png": "b759434adb73862c888f5ee4af9a458f",
"assets/assets/images/flags/ki.png": "26b35959db8b806afd7ccd8905185829",
"assets/assets/images/flags/jm.png": "2b415ec96f85d0841a904e6f3d8cf096",
"assets/assets/images/flags/ec.png": "9fdb7cbade2b5205d072c940bf61f369",
"assets/assets/images/flags/et.png": "34f9e624dfdaab6de86cae3ee7b6511c",
"assets/assets/images/flags/fo.png": "154bbb903db8fc6a3e9d635b8052c7c5",
"assets/assets/images/flags/kh.png": "ead82f13fee0bc79e75d8dc47e473307",
"assets/assets/images/flags/sy.png": "e89f496d5b98f0dbb9e2d8b2c1b302ae",
"assets/assets/images/flags/sn.png": "3c328fd8beff61834948b9d0b25ead7a",
"assets/assets/images/flags/pw.png": "5ca42b345fa8bce547f77784a5f3d298",
"assets/assets/images/flags/sl.png": "80d319cb44e6fde6edce920380b15d08",
"assets/assets/images/flags/gb-eng.png": "8f66a9d0b76989a2e2571017931da71c",
"assets/assets/images/flags/fm.png": "09d9ba762d1d0585b01070259d029641",
"assets/assets/images/flags/gi.png": "0ba8197ad172065aa2c2768f9e51d1c9",
"assets/assets/images/flags/de.png": "1657efc0597b45c63cc695f6da4b2d9b",
"assets/assets/images/flags/gh.png": "885dddae753ba3a214ba37c3ed5db7ca",
"assets/assets/images/flags/jo.png": "16612e0851092879faeedc910d6c0fde",
"assets/assets/images/flags/it.png": "4986922a4957241ebc1a014001f7fcaa",
"assets/assets/images/flags/pa.png": "ba0970a28b88a820f8c6bc12608736f4",
"assets/assets/images/flags/sz.png": "e566252e1537fdfb7fafaaa74cd950c7",
"assets/assets/images/flags/sm.png": "f0648b4911c623e6fb86f43a5cac5b83",
"assets/assets/images/flags/tn.png": "db81cb028324bfbb50029d580b55d20d",
"assets/assets/images/flags/ml.png": "3078737fbdf19e026e19517094b64961",
"assets/assets/images/flags/cg.png": "178a7159597ceb18b98ec75e8cff16b2",
"assets/assets/images/flags/ax.png": "34a9dbaf45ccd1a9bf1fc903716a68a6",
"assets/assets/images/flags/ao.png": "3b0a8b2b79d871170b0cc758198f9db2",
"assets/assets/images/flags/bt.png": "be47d51fabc08b802561e2d5ff9c1238",
"assets/assets/images/flags/bb.png": "862e3ff4e7f8ec48945296fa1462efbf",
"assets/assets/images/flags/cf.png": "3566588c001b4edd61d59fc0ce25f2f8",
"assets/assets/images/flags/mm.png": "ce80be7b89f39d580e23fd0f2ca09cf5",
"assets/assets/images/flags/li.png": "7b0a8a658f4d0da128ba7b516e9ed9c3",
"assets/assets/images/flags/na.png": "191e6652b3613f7306cecb98bbb273af",
"assets/assets/images/flags/mz.png": "f4f90cc91baa0e106eeacb491402fdb7",
"assets/assets/images/flags/to.png": "f582c44865f12bd45350b15b9e29ae32",
"assets/assets/images/flags/vg.png": "b9f9538dcd7aad0a0b20d7b409b7c691",
"assets/assets/images/flags/ve.png": "54e6d731c4c5aaf9b86e42352c85e173",
"assets/assets/images/flags/tz.png": "053f1386cee1ea078cd9f7d3d7a0aa70",
"assets/assets/images/flags/tm.png": "f1d8d25930b03bca9198ca2f5066aa7d",
"assets/assets/images/flags/mx.png": "2d283c552bc536dadcbf5b91b16e8e11",
"assets/assets/images/flags/nc.png": "84845acc4ce87bb1607ecc2a7c503984",
"assets/assets/images/flags/mo.png": "0616115397d8f0c152f61635e2f277dd",
"assets/assets/images/flags/lk.png": "b19da8a9a64dd9d9e33ac020b9b31bb3",
"assets/assets/images/flags/cd.png": "4b85139ead09cd012de81c32ca16e7d4",
"assets/assets/images/flags/al.png": "6ecbb81f4dacc9cec602d6e426a0b5b7",
"assets/assets/images/flags/bw.png": "31d5a6638e8c1ecbe15f4cecb5cc747f",
"assets/assets/images/flags/cr.png": "468b0bcdeddf61e0b9f95242188d0eda",
"assets/assets/images/flags/bv.png": "a4e346c8c8491f4b6ad7e50e4880bb71",
"assets/assets/images/flags/am.png": "cea4593dedced5f9a47d0326cc97bd7f",
"assets/assets/images/flags/az.png": "5bf6b80595f6121b86e78ee7e69b4ea7",
"assets/assets/images/flags/ba.png": "8b5d26e76e3abc156420a2eb1080eafb",
"assets/assets/images/flags/mn.png": "1607808770c9db7d7c093bb39c4fbbbe",
"assets/assets/images/flags/nu.png": "fb1e280896d9b9786ed7a4ae961c6ad7",
"assets/assets/images/flags/my.png": "99505cde00499b0bac455cc83781ad40",
"assets/assets/images/flags/tl.png": "bdf24d1b2bbac8c8428b5d09a1bff0f0",
"assets/assets/images/flags/ws.png": "68c50d1c2df712df9f38f223d867eecc",
"assets/assets/images/flags/th.png": "5db26a3d46482b35dae7e00168aca459",
"assets/assets/images/flags/xk.png": "7c6e64fee82639724524e2c435309f24",
"assets/assets/images/flags/nf.png": "ac979905c1460f6dde08a367500fe22a",
"assets/assets/images/flags/ly.png": "a81b2acef54ee58cf4084b7ebfcb9ea9",
"assets/assets/images/flags/ai.png": "bd30732270e10cae1db4ad7a9528c0eb",
"assets/assets/images/flags/br.png": "75bacbd9e934b8fce149fcc7ee151deb",
"assets/assets/images/flags/cv.png": "8f16441cf82e5fe1a01fab68491bbd7c",
"assets/assets/images/flags/be.png": "720fa4dcd28d9cc052e02135c726a6b8",
"assets/assets/images/flags/ca.png": "7c3c25918d8eb37abdf7d4811b45e77c",
"assets/assets/images/flags/bd.png": "c87b960dc1cad24dcb68cb956fa5481e",
"assets/assets/images/flags/cw.png": "d2689a09374efce67d34212a063fa88a",
"assets/assets/images/flags/bs.png": "2e6e2a7c58b71e32bc1b71ebbe54d56b",
"assets/assets/images/flags/ng.png": "38bd09578ce4ead4dab2df6e203d8ca9",
"assets/assets/images/flags/mk.png": "314b55b33f6b2d602cde2ff9906ed3cf",
"assets/assets/images/flags/np.png": "6b36cb9b308b8bc6bb456fafa6fd146a",
"assets/assets/images/flags/va.png": "514d071b45065211b3eda50530eeab36",
"assets/assets/images/flags/uz.png": "775b90c76411fc2ed3fc8a11b2103440",
"assets/assets/images/flags/um.png": "893d30ad358050b16a7276b13cd6af47",
"assets/assets/images/flags/tk.png": "d0124852f982f0271e3c07751ffa323f",
"assets/assets/images/flags/vc.png": "757ea72480996ccf9c9c536e50cc1336",
"assets/assets/images/flags/zw.png": "afc4156f4d806cee151a20e817fde93c",
"assets/assets/images/flags/nr.png": "563b798b592540ef8db95999b2683e52",
"assets/assets/images/flags/ne.png": "2af3d8f4208a35c4c694311843d60a2b",
"assets/assets/images/flags/cu.png": "a3f906dbd0427cff02392ec1e02b63c7",
"assets/assets/images/flags/bq.png": "5875b579eae6ce5942223499465bbdef",
"assets/assets/images/flags/bf.png": "21c5cd218446658587ecf3c22878c1b0",
"assets/assets/images/flags/bg.png": "eafe0717309b8daf99025be3c1f44e58",
"assets/assets/images/flags/cc.png": "52c08ff3b43e5671c566298ea51c40dd",
"assets/assets/images/flags/gb-wls.png": "99bef7542cbc251309fca9387ba6bb9b",
"assets/assets/images/flags/mh.png": "3e46f8dae7b888d1f84fe496dac51be4",
"assets/assets/images/flags/za.png": "355780e44b539b17321e484564d8a249",
"assets/assets/images/flags/uy.png": "a830960a8de1a881e0e559e5b2281a09",
"assets/assets/images/flags/wf.png": "209adf7472d54b913731a38424d66627",
"assets/assets/images/flags/vu.png": "1410abcfd788a57f7cdff5ee44ab7b09",
"assets/assets/images/flags/tj.png": "cec93e0e72313f7120d1a848aba81beb",
"assets/assets/images/SFSymbols/figure.tennis.png": "06d880a8612d2fe77144f247d4377159",
"assets/assets/fonts/clanot-narrowbook-cufonfonts/ClanOT-NarrowBlack.otf": "1ccfbadbc0c65b5f0e134c4a9b05c6a7",
"assets/assets/fonts/clanot-narrowbook-cufonfonts/ClanOT-NarrowThin.otf": "d02b513386d1f622b4d3c1707d25dbb7",
"assets/assets/fonts/clanot-narrowbook-cufonfonts/ClanOT-NarrowBook.otf": "83f873188c0f8bc17543637e1d3fcf63",
"assets/assets/fonts/clanot-narrowbook-cufonfonts/ClanOT-NarrowBold.otf": "9766c49bde2758a21af8b2e102c784fc",
"assets/assets/fonts/clanot-narrowbook-cufonfonts/ClanOT-NarrowNews.otf": "584592a176d4ec4f5b79280a65e61582",
"assets/assets/fonts/clanot-narrowbook-cufonfonts/ClanOT-NarrowMedium.otf": "d4031f504fbb8b3f3abf6fcaadd83dde",
"assets/assets/fonts/clanot-narrowbook-cufonfonts/ClanOT-NarrowUltra.otf": "11bc26083b46535f14a7832a711e56b2",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
