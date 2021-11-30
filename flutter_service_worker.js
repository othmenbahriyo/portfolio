'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9ffbf43126e33be52cd2bf7e01d627f9",
".git/config": "27072963bea7736f4f70dfcc1a45ec0a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e9ccc624008a2febf2a128013445dee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a086134618e78e70868093e4f97e9a9f",
".git/logs/refs/heads/main": "ae07d8e27145b775e71feb57c51e1708",
".git/logs/refs/remotes/origin/main": "ef35982fed34460fabd751d1712a1205",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/02/cf4c197f14d06f4da5e253bacdf4853cc08df6": "8ae8b035cdae15746a64a6749ebfc4c8",
".git/objects/04/f9fd1159561896fe8cbb7718efdc63302b9991": "c0705fa00206bedf261214d7663d2f79",
".git/objects/05/410620985f1ea2addf9a54f0de86fe745c5030": "fdc3b86e71c9036a01f1441dbd8e6c9a",
".git/objects/0a/1b8c9053200aac49530a3b81278240c99f4dbe": "2cab984f340a233a6e145032fb953c63",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/0e/5cb6975562a9a88b357b042b107925b314a75f": "0d13bbfd4467c5df50a76a4b154944cf",
".git/objects/10/47170b19c04683c94a6cd9dc98930ccadd160b": "bc624997ca74f0dc1f82633fdc8e27ff",
".git/objects/11/d31e3530da3d7642242169efdbbcff8da4d441": "27bf4d3130290185a43ad121439f0033",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/16/639ff3687c5afc6c48c9a8248fce94bc19aac1": "1414d5c6a9a192bd92b052a304862b6e",
".git/objects/16/b04a4391e4bb270be7dac78d5c448d7151ffe7": "a7e5fa8e87e859d656dbb4f86c5633e7",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/19/4fa61068ccbfbfb1835b59cc6a41997c6036db": "4e056af7c729733df8d21b4f95ef6db7",
".git/objects/1a/8577b191b78a39b2d19723de5fcfe372db31ed": "3e13cee617183ad1e3fc89b3b9991aed",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1d/c743dab8f3a6419ab93843801a856ed43778de": "0e3c8ef3d02a57525110d6797b971b22",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/20/ada8084381d5fe636aaf653bef0bc8f9abadce": "2afbbea838be7a36da5dd1f645edb008",
".git/objects/21/4ba1b004d874802481d4c5b0431219326212f2": "5f67921c8a8ae6012f2def31b6e79f04",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/1d1d133c999de0fb57da8eff3dfcbffcdb1d98": "dd00d1ad78344c33a7d77d50b3437276",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2f/172d57ec4c17a18b77d10bcab34be734c7dc98": "95aa2957e7cf5ec7156a6bf0049023a9",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/eae1d78e06b017b3b9fcd1a9e7010dd2c7479c": "bbd8e0d78bf13070a393782e87a15204",
".git/objects/30/8002eed833aac674ab68b6cdff6ea7916f6c6a": "7d01a4f2af8c9d06756c75989c80b32f",
".git/objects/32/2d7f3c60889e61dbc26560de876ca615fa3319": "842e3a798c1270213f7d599fe3fe5411",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/79dadef77d4048290a78600636a61c3b6703b5": "a90e131773ad82c7fa1d4d5df32247fc",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/6dbbea6bcb06ec37df5dec5c4b364d9fd4978e": "fc330277dcd553d4b0672df129ba204a",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/36/3639bd6c831cb2a17ac70cd939fa7cd98da3e5": "4410221835016b4b2722c7fabd375e56",
".git/objects/36/6b6784a89cdfe48652a39ffee9eeab5a6fc5e3": "854b2398574ef5c8eec28e863bb368a9",
".git/objects/38/17e823971f9fcfc4c8d84bd52ac4a246327699": "154c1ae2e93b8bf4929c390914aff0bf",
".git/objects/3c/ef6160847a53e2908edecfc565573240708bdd": "d0e0ebd2fc7ad4f4c9983017b8308bce",
".git/objects/3d/6b532214aff773d39669b691b72111d2e8b8a9": "fe0853e04bb4999ccb91c9ec6e74c772",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/3f/455d3eb58fd8e2a69c7735b7e7b17770115e94": "a5eaf1b55f953aa77a185ec9e347409e",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/40/7a7f642f8a028a629b780052f0a253f9df27b3": "f0da3e95b202ddc61a0cd9e9bb182b59",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/9ba7fc1f075d8d890fdcadac26a11e25b3c3ad": "304f9aceace0ee830b607fcacec072c0",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/46/325aa86d555260c096a428bccd05cd20aa83aa": "857cbcac7aa83a497992c488088644fb",
".git/objects/47/5940996e20b8b36ef0662b04807056746b9136": "4f70c9893315db55af1062cca78b28a1",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/48/4a52ec7cdb7b4bc05242fd00efff3690ca7437": "1912f879c205a7b6d137ccc2baeacd9f",
".git/objects/48/ee647dd4e1a0e409346f39354b31d2c405f473": "ef91c4ceeb6c82706260d828a1e9bec4",
".git/objects/49/6c06370e18804f15348ea81bf5fb799817fa0f": "e5d89cdcbe350af194ca57c195d09262",
".git/objects/49/d69ebda62b931ae287370c564de9d34a30669c": "2a7572e88f1555e45a4252568dd2bfd9",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4c/1519dfb225b5ec0f40a1e61094b0755e07e17f": "929dbfb894de404d84c7862814f106dc",
".git/objects/4c/e2b1ab02e0cf14416f45f2d600d2ddb71fa97b": "fa8a4bd38e9161bec052b8f695b5f39f",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/17994d71d4b5aabc343d09937f375ed4756f22": "4bf9c63a3c150f34e2306d59e445616e",
".git/objects/50/a2b4004497b2b27a2f38d9f31dba5cd1d5bc24": "013fefa9733e62883f18b0d0f964feda",
".git/objects/54/ba559633176c318a7d0df054811c4d7d338b64": "7466c99694a284ad866fab0c0e7c1732",
".git/objects/56/23e953fdeb1395252ecd661b5b5b66925079bc": "6ec8f42cdec37807026b644262a83f31",
".git/objects/57/6f3378e532c6249a53a91df460fe0bbf5112f0": "5a230287b1ee6cf0914febebc8165340",
".git/objects/58/1680955f8b5b26b4272c792c23d8347ce49847": "6c6f3f62c05986a7a603b65735d0a5c9",
".git/objects/5a/314c0a3d2e9f71e47ce4c383d5362206fc04dd": "f11b33618bc394b52c66ffd79f6f88aa",
".git/objects/5a/e61536814dfe4a2a0d5524abfaa94977f8ce27": "b0f7dce190bed35a8de5d24c1e7bd2da",
".git/objects/5c/9462c899deb9d699640c3df7fe6632c50e28cd": "3513122f081bb8bba9aba1b312359828",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/03d207b47fbfd1d8e1256835e0cfd0465f4110": "9d55aec9b88df03917d1d3420286c2eb",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/2cb5acbffda9d7f188b9680450293339dbc2c1": "05462484c205794c532b3fbc94b4a13a",
".git/objects/62/3bccf02584b8f8643927e749c5a7db3eef5f0f": "c751bb26c0dd3033e499d169d0feb2f8",
".git/objects/62/406b3ffe22f66436564d9eb555d818d5928170": "ba3df79b1a81765078ca3b7a95b4ccdc",
".git/objects/64/f35d6a59970476597daad3d84277fc76f047c8": "11cffb98d469c6a6268721102ed4ed9b",
".git/objects/66/5c6d419c9c34c596b29433f568fa09cf7923b5": "978d9d1568607761de850d67ac0539d9",
".git/objects/69/1ea481b964ddaebadb26b85652ea0c17e42612": "e6ebfdca7cb00d3f8f94aa02ee9aad44",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6f/0f212fe39f08337ebfcb48a5239073dbc5f33d": "748e8e745761bedf57fe2d467221a01f",
".git/objects/73/aa2cee20d1c2e73d112a7608328d0c8bcd14f0": "8a16a2ccddef4273c166eca95bec8987",
".git/objects/75/a6b1135cba9a47699f0e61e9f2ad35955e9d15": "da000d8ff0c9a65897c023fc613be72e",
".git/objects/76/0f53af3efdec23f05df41c62e991f41b4a700c": "5ac9f41f4246e804d66bd8bd3f3faad6",
".git/objects/76/40a3b13b455018d2bdaff21d3caa85ba8264ee": "348a0d4e275740f94ed75b3517e58762",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/804dc2d90239b260412b3f0f6da01d450bcb56": "6d7db82911b630c409fe54e23885cb94",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7c/7b1aded77404aea752643233f54c72fa6f085a": "08c599f7431238ba2bd09fa18fa6b40f",
".git/objects/7e/fd7f9d6f6595bc19a40f81e2d9f209ce4ff8ea": "218d7d24d8ac445d06ece71bef69d844",
".git/objects/7f/376c5309eb9c03d2b70a92aded41dd5e33cea6": "6bcbc4be8b1c63b1cc12f39dbef398f4",
".git/objects/80/58ed331e2f39ea59fc41158fe7fb4a246eec48": "b321451c99c01ad5de862539f58309f5",
".git/objects/83/110084f03852737891fd62361d33403bcccdfe": "64a4fbe6d11ed5b178ba0d0e768a5cab",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/86/08afcc0e3a9ed95fb61fd92d30ef396b90f2ed": "9b4e9cc6881936f8166e23b101949fac",
".git/objects/88/9e285fe6c96c0b4f4ed7f371d0a54343b6b038": "971720261a36c55ece60675c472c128f",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/89/64abac9cbb660d8916b540dbff6f0eed46f30b": "ba7778b9d153e1f8385a71bc859a268f",
".git/objects/89/73c7a0fbf6c34b1f3774287c0977d25c864b49": "b22081dfeb055ac559d7dfa7d2cf385e",
".git/objects/89/c06c55066f2995eb1d2b013d03c95fbc4d8fbb": "3eadc358c1a799f032dfaf72e04dd543",
".git/objects/89/def8103f234ac247d5712b7a4a1ee771b9732e": "ca376cfdef3395365c4acd598a4e770b",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8c/e417f5163c2df35c50f96af105173b3c06d167": "30f9d6d67378fef4460afc5aba7836fc",
".git/objects/8c/e87c277a7f4de29e702175e67eeed5169f23b5": "b0f8eca877b90e2cd746d947dc30634f",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/90/8aca0dbc64f6d28ce3bc2a45420618a40c8d08": "fa2d49cb77ee505db68c60a6055fded7",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/a64ee50d95ab22ac567cd72415d4d19178ff1c": "fba29b350027d96b2d3881db0a076955",
".git/objects/91/041960f3943bc2db4a30a505ff67be7f17a693": "0c8a2cffce192f5271bff6efd6dcd52c",
".git/objects/93/45da47209dd0fd253ac08506388a917a21e315": "8fbe996c73d4ecf369a31008865e283e",
".git/objects/93/9b4144723b2fc1b89c56f4ae1e888d8aa7480a": "a584e822833ecbba2b209120ff84bf9a",
".git/objects/95/95021236254a0112febd96a93a5971daf18c1c": "bba736cd7a044a7d7d2e161cd97c19c1",
".git/objects/95/cc483ff4b5d4a73ea2d9dc282e8e346393f8a5": "363a37207d713a0eddb73a3a35ca0b00",
".git/objects/96/4d9c4a7fcbc67f1fdbdd0e616d0a69c4b30d33": "ffaf460eda96c4a332a185fa4d8ee4ff",
".git/objects/97/b0db098cf1adec29c7b1cb35dafcf74d5a3f5c": "b982b841f8eb8bd0cc68f1aedec1c778",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9c/e93acd3ee16d6f775b8b38068179a29d353d0c": "3c9ea9e35c9f12b7a2edf30139ec3e38",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/9f/305092d6a47a61486b8df21af704ce7e246293": "3617c5852b230d605910fd9689deaa67",
".git/objects/a0/f859bebfe79dfcb2b0b82ac7e4ac2fc5dbe238": "d366f57e7880a65b89991284b69d2dc6",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8ebcd8ab68b7ab14363f9c33bafcb86c624021": "659a0f628fb092070e46fe138c761e84",
".git/objects/a3/c179290fc4d9370efada50166356cc1edaefb1": "281202fb3ddb69ae562ffdbf5041c517",
".git/objects/a4/375e8443bb3298009176f45980385970b3518f": "301cd8c01adc7eb5241850b5d4840c19",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/4761b2a45b6ccd35b39035909053a796a99eed": "316b41d380f92b325a40a04ccbcc8553",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/ad/7589fe901355c5e4dbe55e83dacddf0755d17f": "f20ec69c17d35da0923241dfd4b2e853",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/ad/942e021e40d123c91734a5d36a46e2d51b0957": "124eaf5892c1dffab7cd24baa664939b",
".git/objects/ae/45f2ab229495cd13e781d552f9b37340504837": "26d29bf8256b768cca92e248e90356b8",
".git/objects/ae/4e078c07f665302c983a86381ee6d0dc90e4c3": "d9f9593887b579088efcbdb2a3353feb",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/af/846f365a802938c8e661d1fb2641cd301d3135": "ff7dede45bf8864d25bb409ac0ce6a52",
".git/objects/b0/9a3b35807a17a18d34119c03f674b067a7c7df": "d8defe88185f58ef0b5e49535ade320b",
".git/objects/b1/70cb6db1b945b1d8e40e8eb3cee3775359eec8": "dafed0c533a491010bbe81a6e1b3ea63",
".git/objects/b2/8f7c13886548d1c58f56ec6aa3c1cd0e84e860": "807390420d53828fae0bc92036d1deea",
".git/objects/b3/8e863c93d9dbcd6daf6fd56d908efb4ee4ae12": "57dc0ac90432c312a86e4bf3f573973f",
".git/objects/b4/1354fbf150c5518741588cfba2a16242e6f251": "36c39516acb73cfc284041d50f9667ee",
".git/objects/b4/c049e991c6db36173bea58b3fba19359370c8c": "a8ff2aa3e29b367e110b28c1ea0dbed6",
".git/objects/b7/44395aa4dffdbf09645455f8dc3ee78e57e3b0": "ac81099a74f2af6aa09aa86170e4c80a",
".git/objects/b8/d5fb062c13b2fec299f337655075e5d15b2c80": "42b60982b3bf9aae309bc20d359df884",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bb/46ae7072e10eb529c2eb35d909f0740b9f3b47": "dd48bbbcc8aa3cc874a92d58c3471900",
".git/objects/bb/6684684ef88b4ca56b18e52d3fb19821dba92f": "51a9329c8bca6dd5242031f1eac0a67e",
".git/objects/bb/f5c4ad3f0035e4142616b26eff9e14c48c37ae": "08d0e88adee635876a46c9d7daf3814b",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/ea5adbfc75da07b6a47702d13f83cb8612d654": "6f616f06c156409976995f2b9225cff9",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c3/415bacda3907dd4b7ee415961dd16724bef1e4": "5b38f9150da6aec27ebd022bf3792df5",
".git/objects/c3/c4a6546dcffc8153e9fe799c2c05ae362fb530": "71cf46beb85a5dde07d34f0ce0616e5b",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c6/9df815041de845c80b02963c4e639636acfe7d": "eb82b1686fe3c50a4824f7c9a0a67675",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/ca/eb8ca72f2f6821e587257838308de4900e75cd": "04adab3398ff4c272d3be8dec92eac45",
".git/objects/ca/ed4e36e4148f4d3127fa5c8d3c98d4469e5e3d": "394eb8fd61590fcf4914d6737265022e",
".git/objects/cb/72dacf252c8d327bc2d1de8e05026952205621": "52c76c9f6bf21bfd7a6ed061b5e53fd9",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/d39713fc4988d86dae35eca669d77e3f58622e": "ce8f9129f21a4e26ff0e7f5360ecd986",
".git/objects/cf/1c7bb25f4d256af231cab29fe1f19fa8a0e5d7": "ec3d19a5a87ffa2b72b899834958ab91",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/d0/5b84fd4fdaa851e0fb21655696235e357ca2cc": "cc42a28a956c5dfc7c5726c74a4000aa",
".git/objects/d1/6a479e2326c10d83f85d7f71d231e7cdf1b6a5": "b25110c5217a5e0bbbd5f045b524347e",
".git/objects/d5/685f7e90bb87ab7815d08e2a273a6e34463d0a": "17dfbeb3e6c51cbba1e0f54d56322369",
".git/objects/d6/70f3091e12c9c625ed9f4272248d3c33771124": "15c8398c63f82eced0eecae246990fd2",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/29cbc638ca660b25dcfcf9f3784fdfad387730": "472ee6df67cc56f34173d839613dfee5",
".git/objects/d9/2b6275feee99fead4b2c7cf285f49b7b76dbf3": "97f981fcc0d238cc74da13345f1b2069",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/aff0d1d42cbbb0ed0126008780a3c58913067d": "86ab16107a2cf619de02ee01bb31d084",
".git/objects/d9/d54964c439001b7af725bcc4ad8e2a264873f9": "c81e5dd754620507e45fe9605c677804",
".git/objects/dc/dbd81e06ec1e3facd6ed4acbbcfcc66bac7d4d": "537bcb77e94df31a1e7b1f46d3a30e34",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e0/4dfbce0097c53591c75d47114fb20519d745d7": "eb83a5fbff83d61315d37e666bc98e13",
".git/objects/e0/890ad616fcbdedc4be36c24d758a5ec5e11130": "cf493e431c8f22e4626b036b05c37f2a",
".git/objects/e0/8f5e7ca4054a133d1cd3ccfd961c5c7a7a3ba8": "e0ac67aa21aa6cc6058819c8148625b8",
".git/objects/e1/333e0ab8242d296f468067fbe8b0f452d32a0c": "330083cb20b5a7b04577285d19041ec6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/4d6ddd8af4018bd5056f67e48d029cfaa5cdd6": "0e64c0c9167ca2d8589ce15b1af6e6c3",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/099bb890b861cbd604e35ab70b0a73ac18794c": "8c0babf62fb5c8c042a6cda1eec49c0f",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/fe1df024af1fa281ce510b0f968c6b25055b7b": "f09ab098286aa7bc16c17ac2db74ff31",
".git/objects/e9/855c8750066327b440183ab19a9f3b16f8c5ab": "22fdb2d0980cf3020c98e05b4b6836b1",
".git/objects/e9/d45cc10161d1885a19811af32c2d410793e19d": "ae1bc428ace74408aae12b5462bc6699",
".git/objects/ea/9963298c0d02129989b2a862b30d71b17071e8": "38c26bd4a3f6c2e726cea3e7a68d551b",
".git/objects/eb/6cec9b146c4d9e4909180ac9432cd661ae1bd6": "1a2adad7e2ad7002368a3b21c9a95c6c",
".git/objects/ef/e28ebb797278f9dcc084d7a6c292e78ecb29a2": "83edbc0b4ba391e049ad3fe288d90859",
".git/objects/f0/bbfd00253adac5f014c5b535e67df0cf6294d0": "1a74148bb0eba9c94866967a8db3e9aa",
".git/objects/f5/50a5061b6474c1eaebc752cd0bb54c16cfda19": "8f1f7e98aabee93b62237fd1e69505f9",
".git/objects/f6/5314ce181d1b9bd3a66a4c9e38689091a270cc": "9e3fb1c826461ca06bcaf731e22c680e",
".git/objects/f7/370d580f5a686ea94bc7773c54a6339ff22b24": "f9f3e1ca3bdec7a7492e8a2f750ee8fd",
".git/objects/f8/a62007d46be6c9a4f28ce798fd1fe592841e18": "520db898e4ad6337f32361e8dea22569",
".git/objects/f8/d07cb7500d30f20c075e13a09daf1379d7196f": "f5185b87fec7f43b081e39c11cfaebf9",
".git/objects/fa/1f0ff51687b50b15ca5bbb9ffa097670a38965": "1f1d4b412e822b80f0bb4c8ffacef05e",
".git/objects/fa/7e7b3151b14a38a2afc921b731e337ed881e29": "7cd73c5a0869837f87a6dcef5ebb2449",
".git/objects/fc/09eaafa9888db204c3648d29abb05088385275": "d007d96c5d237e7812087070ec71bd1e",
".git/objects/fe/eee11a5808c9b02fc459a1bf5dd7724d2065fd": "1e68c4096eb1c85f50658b01827aae47",
".git/objects/ff/7af5833fe53c35e458ca6fe1a303fb351d65aa": "84a2aa77988c82ee209daedee886dac1",
".git/refs/heads/main": "1123bd403cde182da28fc35363c16487",
".git/refs/remotes/origin/main": "1123bd403cde182da28fc35363c16487",
"assets/AssetManifest.json": "4dfce69a3d905e2c57551fb37324d082",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/2.png": "2fd26f6122147bcedb625229174656b1",
"assets/assets/3.jpg": "3ae75162a466ece1e67d06e2322adbe8",
"assets/assets/aaa.jpeg": "1de68326d0bedb1f682d8ec66fefa747",
"assets/assets/aero.png": "b6803293145e4fc1f69f7abf5f425aa5",
"assets/assets/andi.jpg": "950342b18317a245fb564343b499c590",
"assets/assets/andi.png": "ff4dd7a55adb88dcf1b06833bbedf2f3",
"assets/assets/andi2.jpg": "22cb5e0ef5e42e2f8d1fce7ba79d8291",
"assets/assets/andi2.png": "65c1bcfd09562b0c80ec2eb9479a489f",
"assets/assets/android.png": "658e9849ac141bfc3046b4e30cac34e1",
"assets/assets/asm.png": "ab3e2e2dea7b75ef7cf0b26af59ce712",
"assets/assets/aviation.png": "9ff08dbb75af99a5fbe7f4cdf90698eb",
"assets/assets/aviationpng.png": "9097182f91f3dfce59d8cfa7be796101",
"assets/assets/az.png": "1deda17ef23f0146101b0e57706b3a0b",
"assets/assets/az1.png": "bc5614b2527fb49e47ee5e4f40cc7263",
"assets/assets/az3.png": "52a4841574d3e602dbd4d127ce2ae806",
"assets/assets/banner.jpg": "24afd59f078d93450789e686d08fb08b",
"assets/assets/book.png": "781de9cc825c1ec6934a4e8874d514a6",
"assets/assets/camp.png": "264e8120c7e93f3bf9e27feef91d6d9f",
"assets/assets/close.png": "e134976a56de4e03f07886ec57b02f05",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/enetcom.png": "00a9e61c1ca18ab51b53e0acb857be9b",
"assets/assets/firebasepng.png": "e8c2f7686c8f46511a01384207366ea6",
"assets/assets/flutter%2520(1).png": "3c19844633ad2f6a5de4c1dc280481fd",
"assets/assets/flutter.png": "4b2645829a599f2e0073f093eb5b9f53",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/getx.png": "6cb994c621b4d1a9acaa1e82f3984381",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/int.png": "70a810f2e4134db22d4da1dcc9912313",
"assets/assets/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/js.png": "1296a866e32efdce72f186a914eaa80a",
"assets/assets/logistique.png": "315cf1f1c59a5a0e7e16a03c1c890156",
"assets/assets/logo-3andi.png": "83321c2157d3e0c53ed3345aaf884fcc",
"assets/assets/mhms-logo.png": "342aca5f0536d5e220a29e12cafa1126",
"assets/assets/mob.jpg": "e9fa953241bed1746c0a4e3732636e45",
"assets/assets/mob.png": "396d7583e769f42caf8642ba0f67739d",
"assets/assets/mongo.png": "93901fd22c1fe99c18dfbad6b6f21a1e",
"assets/assets/music.png": "ed6f559f21a586a13380f1e31a144e00",
"assets/assets/mysqlpng.png": "64bd4c190d6fc9644e8ad464711ef297",
"assets/assets/nest.png": "429bcad2082bda8936ab191778067390",
"assets/assets/node.png": "38c3a911493bf29320caa2cb901e0ecb",
"assets/assets/open.png": "f887afc5ea92c3d3ef73145fda75eb83",
"assets/assets/oth.jpg": "8e557e4b8094b66c0d98162f64da7846",
"assets/assets/oth.png": "029852c7c2bb7f8183cdf5c8d0eac1fb",
"assets/assets/othb.png": "3543fbcf6efeb7e6b0f24f3d13620842",
"assets/assets/othwiths.png": "de1a22391e4e13c75319947a4ab398b9",
"assets/assets/php.png": "95ff3068316abd1bf21611a462a4a0c4",
"assets/assets/procaisse-logo.png": "c8d3ac07e17892de53fbea2e76fbe742",
"assets/assets/procaissemobility.jpg": "b3eb4e1f84aecc3b208dcef7dfaa1225",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/proresto-logo.png": "532f73fee6a4cc69f0398b4f2cb1df47",
"assets/assets/proresto.png": "3dbba169d7e4c1c108cad8872aa93320",
"assets/assets/prors.png": "989f649e329eb07513e82a6e7a2bb57f",
"assets/assets/Protech.png": "3ef03e18ea085f5f428f24f473f72e36",
"assets/assets/python.png": "d935495ed56b1d60cadc1cb9a3ea6e70",
"assets/assets/reduction1.png": "607c7fe915707a6fcb20fbf2269b64b4",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/sof.PNG": "0849c622b04e33ea899d22eeb8cf9b65",
"assets/assets/sport.png": "4348a9963d3eeff44d1ea62fe97fdaf2",
"assets/assets/sportpng.png": "0dea2fd3120e4b72d29bd2702b9a7b9a",
"assets/assets/spring.png": "9b6b213af1978c86144d5fa4f92e720f",
"assets/assets/sql.png": "a73ee94b3da26c6d08e727d9e7331e73",
"assets/assets/sqls.png": "367020f31a0deeeab9e379b6c4f18865",
"assets/assets/treetronix.png": "b2fc2d82bc2bebee0f80e3fe81a95b89",
"assets/assets/umlpng.png": "93526a7faa6b562b852bef9f201f7fc2",
"assets/assets/vernicolor.png": "ef2a971533dec78dd6ae8f2ed5cc2a78",
"assets/assets/vscode.png": "441ab21e94b5a5645948c3271d44d172",
"assets/assets/waiter-logo.png": "7e0ba4974c370270897fbc60440e138a",
"assets/assets/waiter.png": "153046f161d33753421d670b1b05c51b",
"assets/assets/web.png": "968671063715cb94339f2bd9bbefbaac",
"assets/assets/whs.png": "7a3db3523b318590355c8b8863feb395",
"assets/assets/wided.jpg": "c46f67aa4b791cf6cba5764bc2fea25a",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f346246121e49429e07901c0b83fdadd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "7508ab915d3bfc418e50e2c1c53456d2",
"icons/Icon-192.png": "7508ab915d3bfc418e50e2c1c53456d2",
"icons/Icon-512.png": "7508ab915d3bfc418e50e2c1c53456d2",
"index.html": "f164d1082f8301707fc031d20bd56ecd",
"/": "f164d1082f8301707fc031d20bd56ecd",
"main.dart.js": "23274f2839fe0909381f79add16190ae",
"manifest.json": "49784c7ae91d2aad3874685b094eef3c",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
