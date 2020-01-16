
var map;
var marker;
var checkSpreadCounter = 0;
var json = [
  {
    "": 0,
    "Unnamed: 0": 0,
    "Tweets": "It was great to host our colleagues from @EC_StockholmRep today at our premises.\n\nTalked about our mission and poss… https://t.co/sPfc9ekcMQ",
    "Dates": "2014-01-16",
    "Longitude": 19.734079165129277,
    "Latitude": 4.562436748754981,
    "Sentiment": "neutral"
  },
  {
    "": 1,
    "Unnamed: 0": 1,
    "Tweets": "#phep #globalhealth #Ebola #smem https://t.co/M3yjsPeR46",
    "Dates": "2014-01-16",
    "Longitude": 25.097397817559898,
    "Latitude": 1.4350002548175045,
    "Sentiment": "positive"
  },
  {
    "": 2,
    "Unnamed: 0": 2,
    "Tweets": "#Ebola in #DRC . Cases traced to Mabalako still fueling DRC Ebola outbreak https://t.co/R1TTcNymSf",
    "Dates": "2014-01-16",
    "Longitude": 13.847132758380656,
    "Latitude": 0.6930882452294185,
    "Sentiment": "neutral"
  },
  {
    "": 3,
    "Unnamed: 0": 3,
    "Tweets": "My first opinion piece for 2014 is for Project Syndicate @ProSyn : 👉👉 Why an #Ebola Vaccine Is Not Enough.\nhttps://t.co/4SHKubijCc",
    "Dates": "2014-01-16",
    "Longitude": 23.097257724789458,
    "Latitude": 1.695304102643345,
    "Sentiment": "neutral"
  },
  {
    "": 4,
    "Unnamed: 0": 4,
    "Tweets": "Ease of movement in #DRC allows people to put food on the table, keep children in school, sell goods &amp; seek refuge… https://t.co/OiM6QYl4Ej",
    "Dates": "2014-01-16",
    "Longitude": 17.58964929642542,
    "Latitude": -0.6772077768439928,
    "Sentiment": "neutral"
  },
  {
    "": 5,
    "Unnamed: 0": 5,
    "Tweets": "Advanced #Diagnostics for Infectious Disease's final program is now online! Our opening session features… https://t.co/RzUX36vOm4",
    "Dates": "2014-01-16",
    "Longitude": 14.091432465320608,
    "Latitude": 8.862100284236018,
    "Sentiment": "neutral"
  },
  {
    "": 6,
    "Unnamed: 0": 6,
    "Tweets": "Great to see strong interest in excellent learning shared through #GettingtoZero @gatesfoundation #Ebola https://t.co/MPJCLmt9M0",
    "Dates": "2014-01-16",
    "Longitude": 18.21942554471977,
    "Latitude": 4.8515953376334,
    "Sentiment": "positive"
  },
  {
    "": 7,
    "Unnamed: 0": 7,
    "Tweets": "Human transmission of #WuhanPneumonia may be occuring as #Japan @NHKWorld_News confirms first case of #coronavirus… https://t.co/e544cklLu9",
    "Dates": "2014-01-16",
    "Longitude": 23.746004960168992,
    "Latitude": 1.6190169865884783,
    "Sentiment": "neutral"
  },
  {
    "": 8,
    "Unnamed: 0": 8,
    "Tweets": "Cases traced to Mabalako still fueling DRC #Ebola outbreak https://t.co/RQq7RWpKEG",
    "Dates": "2014-01-16",
    "Longitude": 20.444318537083632,
    "Latitude": 7.233794220226336,
    "Sentiment": "neutral"
  },
  {
    "": 9,
    "Unnamed: 0": 9,
    "Tweets": "La enfermedad X podría matar a millones - advertencia de Bill Gates\nLa guerra NUCLEAR no es la mayor https://t.co/66T3BG0NTH #ebola",
    "Dates": "2014-01-16",
    "Longitude": 25.794853059489416,
    "Latitude": -2.6153996277724607,
    "Sentiment": "neutral"
  },
  {
    "": 10,
    "Unnamed: 0": 10,
    "Tweets": "This is about trust, no social media strategy is going to fix broken trust. Its much deeper. How #war and… https://t.co/URenIo3Y8x",
    "Dates": "2014-01-16",
    "Longitude": 18.427271051831415,
    "Latitude": 8.73311956558096,
    "Sentiment": "positive"
  },
  {
    "": 11,
    "Unnamed: 0": 11,
    "Tweets": "30 nuevos medicamentos aprobados en 2019 por la @EMA_News:\n\n🔸 1/3 corresponden a las áreas de #hematología y… https://t.co/2MS92eERGI",
    "Dates": "2014-01-16",
    "Longitude": 24.379029531379082,
    "Latitude": 8.945907986214458,
    "Sentiment": "positive"
  },
  {
    "": 12,
    "Unnamed: 0": 12,
    "Tweets": "As global focus shifts to #WuhanSARS, good time to remember @WHO @MSF\n@WHOGOARN partners and multiple responders st… https://t.co/4EYrvuHvTG",
    "Dates": "2014-01-16",
    "Longitude": 16.207628990815962,
    "Latitude": 1.440709562619372,
    "Sentiment": "neutral"
  },
  {
    "": 13,
    "Unnamed: 0": 13,
    "Tweets": "”During a Public Health Emergency like the #Ebola virus the media has to be very careful on how they report it, dur… https://t.co/aCZIGlDwqX",
    "Dates": "2014-01-16",
    "Longitude": 26.894616211284553,
    "Latitude": 7.545208212130808,
    "Sentiment": "neutral"
  },
  {
    "": 14,
    "Unnamed: 0": 14,
    "Tweets": "Three new confirmed #Ebola cases @WHO @MinSanteRDC https://t.co/pQ4yDtndkJ",
    "Dates": "2014-01-16",
    "Longitude": 28.51148344298154,
    "Latitude": 2.860678346883865,
    "Sentiment": "neutral"
  },
  {
    "": 15,
    "Unnamed: 0": 15,
    "Tweets": "@ombaggio Thank you for the conversation! What is specific to Eastern Congo that warrants a different approach, whi… https://t.co/MTisAtuC38",
    "Dates": "2014-01-16",
    "Longitude": 22.276226834322358,
    "Latitude": 5.510131431319134,
    "Sentiment": "negative"
  },
  {
    "": 16,
    "Unnamed: 0": 16,
    "Tweets": "Human Transmission Of New Coronavirus May Be Occuring; Ebola Outbreak Stabilizes https://t.co/Ti4FmO91AV… https://t.co/J1UpXXu67n",
    "Dates": "2014-01-16",
    "Longitude": 20.421851942612136,
    "Latitude": 4.5690566858501525,
    "Sentiment": "neutral"
  },
  {
    "": 17,
    "Unnamed: 0": 17,
    "Tweets": "#Ebola en #RDC        https://t.co/XOq82C1HMd",
    "Dates": "2014-01-16",
    "Longitude": 21.404648615367012,
    "Latitude": 3.696246899050992,
    "Sentiment": "neutral"
  },
  {
    "": 18,
    "Unnamed: 0": 18,
    "Tweets": "This update includes news on the #Ebola vaccine, #infectious disease in China, #dengue in SEA, #tobacco control,… https://t.co/vxDmJCAlvr",
    "Dates": "2014-01-16",
    "Longitude": 28.27118669479279,
    "Latitude": 2.591486389498419,
    "Sentiment": "positive"
  },
  {
    "": 19,
    "Unnamed: 0": 19,
    "Tweets": "Amahugurwa y’abanyamakuru kuri Ebola: Abanyamakuru bakwiye kuba nyambere mu gutanga amakuru yizewe, kugenzura neza… https://t.co/atS2SZRu2G",
    "Dates": "2014-01-16",
    "Longitude": 23.970469377926552,
    "Latitude": 7.499950919950578,
    "Sentiment": "neutral"
  },
  {
    "": 20,
    "Unnamed: 0": 20,
    "Tweets": "La Enfermedad X necesita investigación urgente como el Ébola 2019\nLas enfermedades virales son una de las https://t.co/S0cEP9nWUK #ebola",
    "Dates": "2014-01-16",
    "Longitude": 15.290864668034239,
    "Latitude": 2.178370765485263,
    "Sentiment": "negative"
  },
  {
    "": 21,
    "Unnamed: 0": 21,
    "Tweets": "Journalists from different media houses are being  enlightened on how to report public health emergencies… https://t.co/TqTwAl71mi",
    "Dates": "2014-01-16",
    "Longitude": 27.74339833183444,
    "Latitude": 1.2373229968276842,
    "Sentiment": "positive"
  },
  {
    "": 22,
    "Unnamed: 0": 22,
    "Tweets": "Journalists from different media houses are being  enlightened on how to report public health emergencies… https://t.co/jRTGecIuOX",
    "Dates": "2014-01-16",
    "Longitude": 16.130540158332998,
    "Latitude": 7.228132058411575,
    "Sentiment": "neutral"
  },
  {
    "": 23,
    "Unnamed: 0": 23,
    "Tweets": "El #Ebola mata dos veces\".\nArtículo de @Hache_Hache \nhttps://t.co/ueSFTopdb1",
    "Dates": "2014-01-16",
    "Longitude": 19.312024575532003,
    "Latitude": 8.585807761363503,
    "Sentiment": "positive"
  },
  {
    "": 24,
    "Unnamed: 0": 24,
    "Tweets": "“Media will internationalize a Public Health crisis and this will help in tackling it... “ -Rajat Madhok \n\n#Ebola… https://t.co/WEyWl1Odap",
    "Dates": "2014-01-16",
    "Longitude": 24.70264304644687,
    "Latitude": 12.00703547915716,
    "Sentiment": "neutral"
  },
  {
    "": 25,
    "Unnamed: 0": 25,
    "Tweets": "@VincentCrypt46 @Jordan_Sather_ Virus?  #Ebola\nVaccine by J&amp;J approved JUST LAST WEEK \n\nhttps://t.co/b7u0452GaA\n\nAn… https://t.co/JJ6N75CgEk",
    "Dates": "2014-01-16",
    "Longitude": 18.795190563076346,
    "Latitude": 2.6982699094307203,
    "Sentiment": "neutral"
  },
  {
    "": 26,
    "Unnamed: 0": 26,
    "Tweets": "“In early 80s and 90s American Journalists massively informed the world about HIV,  never underestimate the role of… https://t.co/5eB5urnWxX",
    "Dates": "2014-01-16",
    "Longitude": 18.279698218856655,
    "Latitude": 3.0181479522541452,
    "Sentiment": "neutral"
  },
  {
    "": 27,
    "Unnamed: 0": 27,
    "Tweets": "@RajatMadhok : the media helps set the agenda, monitors appropriateness of response to the emergency and helps to '… https://t.co/ZH81Scgz6d",
    "Dates": "2014-01-16",
    "Longitude": 16.88293608547029,
    "Latitude": 9.369802366357174,
    "Sentiment": "neutral"
  },
  {
    "": 28,
    "Unnamed: 0": 28,
    "Tweets": "@unicefrw communication Expert shared his experience on the role of Mass Media in informing the public about the pr… https://t.co/buaXW3Teu9",
    "Dates": "2014-01-16",
    "Longitude": 20.13198059443932,
    "Latitude": 6.667530951304657,
    "Sentiment": "neutral"
  },
  {
    "": 29,
    "Unnamed: 0": 29,
    "Tweets": "#Ebola-Ausbruch: Tod aus dem Regenwald https://t.co/7iwbl2Fo3n https://t.co/2jb5OZTCiw",
    "Dates": "2014-01-16",
    "Longitude": 22.802761841976274,
    "Latitude": 8.935756663274868,
    "Sentiment": "neutral"
  },
  {
    "": 30,
    "Unnamed: 0": 30,
    "Tweets": "“The Mobile Journalism is and will be key in informing communities about a certain Public Health Emergence like… https://t.co/o4Gw3Tw5gE",
    "Dates": "2014-01-16",
    "Longitude": 19.258098424396,
    "Latitude": 3.4041879024047383,
    "Sentiment": "neutral"
  },
  {
    "": 31,
    "Unnamed: 0": 31,
    "Tweets": "With @RBCRwanda and @arjrwanda, we're training journalists from across Rwanda on #Ebola. \n\n#TwirindeEbola https://t.co/LsCz7sSdFl",
    "Dates": "2014-01-16",
    "Longitude": 27.8041505577484,
    "Latitude": 7.434466145964981,
    "Sentiment": "neutral"
  },
  {
    "": 32,
    "Unnamed: 0": 32,
    "Tweets": "Zones de santé les plus affectées par le #virus #Ebola en #RDC et nombre de #vaccinations effectuées https://t.co/2IyVqjaegm",
    "Dates": "2014-01-16",
    "Longitude": 21.92563479692018,
    "Latitude": -7.163784333620628,
    "Sentiment": "neutral"
  },
  {
    "": 33,
    "Unnamed: 0": 33,
    "Tweets": "Local and international journalists being empowered with knowledge on how to better report public health emergencie… https://t.co/k1MyXlz0n6",
    "Dates": "2014-01-16",
    "Longitude": 23.01542285125807,
    "Latitude": 12.852803177182778,
    "Sentiment": "neutral"
  },
  {
    "": 34,
    "Unnamed: 0": 34,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 14 janvier 2014 https://t.co/3pgeVkkJOH",
    "Dates": "2014-01-16",
    "Longitude": 20.23856684032756,
    "Latitude": 3.304414449828499,
    "Sentiment": "neutral"
  },
  {
    "": 35,
    "Unnamed: 0": 35,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 15 janvier 2014 https://t.co/hVbgL0SE3Q",
    "Dates": "2014-01-16",
    "Longitude": 20.539323897237534,
    "Latitude": 10.977649943500465,
    "Sentiment": "neutral"
  },
  {
    "": 36,
    "Unnamed: 0": 36,
    "Tweets": "Mr @AldoHavugimana chairman of @arjrwanda officiated a 3 days training of Journalists on Ebola prevention. He insis… https://t.co/CarV6BzXdD",
    "Dates": "2014-01-16",
    "Longitude": 24.142826980629025,
    "Latitude": 6.09404359709157,
    "Sentiment": "neutral"
  },
  {
    "": 37,
    "Unnamed: 0": 37,
    "Tweets": "@RwandaHealth spokesman Kayumba: Media is a core partner in preventing and preparedness for epidemics. #Ebola #Rwanda @unicefrw @arjrwanda",
    "Dates": "2014-01-16",
    "Longitude": 21.121403492865568,
    "Latitude": 1.581757308671126,
    "Sentiment": "neutral"
  },
  {
    "": 38,
    "Unnamed: 0": 38,
    "Tweets": "“You will never report or write on Public Health Threat like #Ebola when you don’t even understand the Virus, Commu… https://t.co/PEBwm4Amdl",
    "Dates": "2014-01-16",
    "Longitude": 17.82761578349746,
    "Latitude": 2.577738085632968,
    "Sentiment": "neutral"
  },
  {
    "": 39,
    "Unnamed: 0": 39,
    "Tweets": "In his Welcome remark Mr @AldoHavugimana a journalist and the President of @arjrwanda focused on the role of the me… https://t.co/rjDjOAEIEQ",
    "Dates": "2014-01-16",
    "Longitude": 25.879976687815393,
    "Latitude": 1.7128021913566984,
    "Sentiment": "neutral"
  },
  {
    "": 40,
    "Unnamed: 0": 40,
    "Tweets": "Happening now at Hilltop Hotel is the training on Public Health Emergencies reporting and writing focusing on… https://t.co/1Zp6q3MECq",
    "Dates": "2014-01-16",
    "Longitude": 26.11389325319776,
    "Latitude": 7.966043948199465,
    "Sentiment": "positive"
  },
  {
    "": 41,
    "Unnamed: 0": 41,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 15 jan; données du 14 jan 2014. Trois (3) nouveaux… https://t.co/2efw7HzUpT",
    "Dates": "2014-01-16",
    "Longitude": 20.383825671064116,
    "Latitude": 9.123674125378141,
    "Sentiment": "neutral"
  },
  {
    "": 42,
    "Unnamed: 0": 42,
    "Tweets": "Learn more about what @Cardno's @P4_Project and partners are doing to improve public health outcomes across the glo… https://t.co/VCVMGSmZp2",
    "Dates": "2014-01-16",
    "Longitude": 20.695854649657353,
    "Latitude": 6.032622593929101,
    "Sentiment": "neutral"
  },
  {
    "": 43,
    "Unnamed: 0": 43,
    "Tweets": "@HassanRouhani The story about the #Congo #Ebola crisis truly broke my heart. Nothing gets past me. Killing Medical… https://t.co/w57QCITfEd",
    "Dates": "2014-01-16",
    "Longitude": 20.914498072385115,
    "Latitude": 5.054137329887144,
    "Sentiment": "neutral"
  },
  {
    "": 44,
    "Unnamed: 0": 44,
    "Tweets": "It is amazing how the Red Cross volunteers have been supporting the response to #Ebola in #DRCongo, and how efforts… https://t.co/dc10yZFuwv",
    "Dates": "2014-01-16",
    "Longitude": 27.1791088382695,
    "Latitude": 9.941711406446842,
    "Sentiment": "positive"
  },
  {
    "": 45,
    "Unnamed: 0": 45,
    "Tweets": "In #DRCongo, misinformation about #Ebola persists even as cases slow. \n\nSharing information with at-risk communitie… https://t.co/hFxTtZ1lwv",
    "Dates": "2014-01-16",
    "Longitude": 19.354216274991124,
    "Latitude": -4.113717269886973,
    "Sentiment": "neutral"
  },
  {
    "": 46,
    "Unnamed: 0": 46,
    "Tweets": "Heridos graves dos voluntarios de @CruzRojaEsp  por un ataque en el entierro de un enfermo de #ébola en RDC https://t.co/DzBe6ZN1Uj",
    "Dates": "2014-01-16",
    "Longitude": 19.420999449086256,
    "Latitude": -1.469783264042566,
    "Sentiment": "neutral"
  },
  {
    "": 47,
    "Unnamed: 0": 47,
    "Tweets": "Protective clothing limits the interaction doctors in DRC can have with #Ebola patients. Frustrated by this, a Cong… https://t.co/Mr9A4RxDBZ",
    "Dates": "2014-01-16",
    "Longitude": 18.510439233329578,
    "Latitude": 4.517642729116124,
    "Sentiment": "neutral"
  },
  {
    "": 48,
    "Unnamed: 0": 48,
    "Tweets": "BBC Newsday interviews @CIFOR scientist on deforestation, bats and Ebola study: Suspected Ebola carriers often thri… https://t.co/qCS8rzbZf8",
    "Dates": "2014-01-16",
    "Longitude": 19.238264791094853,
    "Latitude": -4.737274224190708,
    "Sentiment": "positive"
  },
  {
    "": 49,
    "Unnamed: 0": 49,
    "Tweets": "A short and clear read about why it is important to involve communities and negotiate a compromise between… https://t.co/csy2AQHt2W",
    "Dates": "2014-01-16",
    "Longitude": 20.963663759350332,
    "Latitude": -1.6963174532143848,
    "Sentiment": "neutral"
  },
  {
    "": 50,
    "Unnamed: 0": 50,
    "Tweets": "#Rougeole et #Ebola en #RDC  https://t.co/IUvaLwRmj5",
    "Dates": "2014-01-16",
    "Longitude": 25.761306573804667,
    "Latitude": -1.3110283867495856,
    "Sentiment": "neutral"
  },
  {
    "": 51,
    "Unnamed: 0": 51,
    "Tweets": "@MSF: DRC #Ebola outbreak crisis update, January 2014 https://t.co/CxQf89yvpT via @msf",
    "Dates": "2014-01-16",
    "Longitude": 20.736010260957375,
    "Latitude": -1.452319900166164,
    "Sentiment": "neutral"
  },
  {
    "": 52,
    "Unnamed: 0": 52,
    "Tweets": "@NicolasJSimard @karinagould @LongondoEteni Le focus sur le système de santé est primordial car il n’y a pas qu’… https://t.co/zkT6rZP9Wh",
    "Dates": "2014-01-16",
    "Longitude": 25.75755428521615,
    "Latitude": 12.271898908019287,
    "Sentiment": "neutral"
  },
  {
    "": 53,
    "Unnamed: 0": 53,
    "Tweets": "@OmariMemes MEGA #BIGFAX\n\n#BattleMemesByOmari #HeyGuysItsOmariPlzBeMyFanCuzImLonely #Oxygen #DragonBallMeme… https://t.co/7zap3kIz4m",
    "Dates": "2014-01-16",
    "Longitude": 23.235674334865323,
    "Latitude": 7.65646586476228,
    "Sentiment": "neutral"
  },
  {
    "": 54,
    "Unnamed: 0": 54,
    "Tweets": "MEGA #BIGFAX\n\n#BattleMemesByOmari #HeyGuysItsOmariPlzBeMyFanCuzImLonely #Oxygen #DragonBallMeme #DragonBallSuper… https://t.co/mgPvmrAnN4",
    "Dates": "2014-01-16",
    "Longitude": 15.245931991097077,
    "Latitude": 3.9564174046383913,
    "Sentiment": "positive"
  },
  {
    "": 55,
    "Unnamed: 0": 55,
    "Tweets": "Nope. Can't hold it in any longer. Just curling up remembering every person I've ever met affected by a disaster in… https://t.co/qXV3ZGJhPI",
    "Dates": "2014-01-16",
    "Longitude": 24.647364027993167,
    "Latitude": 12.100876480256636,
    "Sentiment": "neutral"
  },
  {
    "": 56,
    "Unnamed: 0": 56,
    "Tweets": "US approves @Merck ’s #Ebola vaccine https://t.co/tWia0RwL0E",
    "Dates": "2014-01-16",
    "Longitude": 19.1731039747406,
    "Latitude": 4.523924453412931,
    "Sentiment": "neutral"
  },
  {
    "": 57,
    "Unnamed: 0": 57,
    "Tweets": "Can you believe #Ebola still lingers in #DRC? Compound crises of disease, violence, refugees &amp; distrust. Even with… https://t.co/BQjeueB4hu",
    "Dates": "2014-01-16",
    "Longitude": 20.296168445486565,
    "Latitude": 0.3400223775831299,
    "Sentiment": "positive"
  },
  {
    "": 58,
    "Unnamed: 0": 58,
    "Tweets": "This was a huge issue in 2018. Here is update on the human crisis #ebola in a war zone. Africa.\n\nhttps://t.co/Q24jr94Vkd",
    "Dates": "2014-01-16",
    "Longitude": 17.89170880760892,
    "Latitude": 3.8708734052837612,
    "Sentiment": "negative"
  },
  {
    "": 59,
    "Unnamed: 0": 59,
    "Tweets": "#HeikoMaas will für #Ebola-Massen-Infektion in #Deutschland sorgen https://t.co/j8rpBChI8T #anonymousnews via @anoynews",
    "Dates": "2014-01-16",
    "Longitude": 22.431702094913266,
    "Latitude": 2.642169055318873,
    "Sentiment": "positive"
  },
  {
    "": 60,
    "Unnamed: 0": 60,
    "Tweets": "@UNICEFDRC Bravo et merci pour l’excellent travail.   On ne parle pas assez de tous ces héros dans l’ombre si impor… https://t.co/nrnYqrA1py",
    "Dates": "2014-01-16",
    "Longitude": 25.69734821758495,
    "Latitude": 6.214099452736601,
    "Sentiment": "negative"
  },
  {
    "": 61,
    "Unnamed: 0": 61,
    "Tweets": ".@NewsHour video  PBS Newshour: How war and misinformation are complicating the #DRCongo #DRC's #Ebola battle https://t.co/mi2KVCkJ8q",
    "Dates": "2014-01-16",
    "Longitude": 15.748546381803807,
    "Latitude": 1.0359524901403758,
    "Sentiment": "neutral"
  },
  {
    "": 62,
    "Unnamed: 0": 62,
    "Tweets": "@dahboo7 🚨🇺🇸🤯😶🤔🤔\nWHAT'S UP\n#Kentucky??! #Cyber #attacks #SecurityThreats-\nALERTS!! #Law Makers whisked away by #DHS… https://t.co/7v7ttP3sdJ",
    "Dates": "2014-01-16",
    "Longitude": 23.003928688809598,
    "Latitude": -2.534307286856891,
    "Sentiment": "neutral"
  },
  {
    "": 63,
    "Unnamed: 0": 63,
    "Tweets": "Cases traced to Mabalako still fueling DRC Ebola outbreak https://t.co/DP4hpoEgEv  @CEPI #Profectus #Ebola",
    "Dates": "2014-01-16",
    "Longitude": 21.180047352628826,
    "Latitude": 6.817170669252027,
    "Sentiment": "negative"
  },
  {
    "": 64,
    "Unnamed: 0": 64,
    "Tweets": "fighting the #Ebola virus in a war zone; when attacks are being made on medical teams: special correspondent… https://t.co/TYzEOB0UGS",
    "Dates": "2014-01-15",
    "Longitude": 18.81561583083573,
    "Latitude": -2.988425349071969,
    "Sentiment": "neutral"
  },
  {
    "": 65,
    "Unnamed: 0": 65,
    "Tweets": "Today Rwandan Journalists start a training workshop on Communicating in Public Health Emergencies. @arjrwanda,… https://t.co/QQHH4Zfxkh",
    "Dates": "2014-01-15",
    "Longitude": 22.416044107950466,
    "Latitude": 6.017568918937542,
    "Sentiment": "positive"
  },
  {
    "": 66,
    "Unnamed: 0": 66,
    "Tweets": "Hey!\nThe nightly news is actually talking about #Ebola in the #Congo",
    "Dates": "2014-01-15",
    "Longitude": 19.44702997148934,
    "Latitude": -0.07583065788974874,
    "Sentiment": "neutral"
  },
  {
    "": 67,
    "Unnamed: 0": 67,
    "Tweets": "Las otras formas de matar que tiene el ébola: https://t.co/2rvpi34LQm #Ébola",
    "Dates": "2014-01-15",
    "Longitude": 24.385358337472297,
    "Latitude": 4.1452095808846545,
    "Sentiment": "neutral"
  },
  {
    "": 68,
    "Unnamed: 0": 68,
    "Tweets": "#Butembo: lancement d’une campagne de vaccination anti-#Ebola\n\n#RDC\n https://t.co/L85MIO20VQ via @ElectionNet",
    "Dates": "2014-01-15",
    "Longitude": 20.09350712987392,
    "Latitude": 4.135397290740215,
    "Sentiment": "neutral"
  },
  {
    "": 69,
    "Unnamed: 0": 69,
    "Tweets": "@Presidence_RDC Qui va payer  ça apres? #Ebola n'existes pas",
    "Dates": "2014-01-15",
    "Longitude": 18.619050120256723,
    "Latitude": 6.535059279542036,
    "Sentiment": "neutral"
  },
  {
    "": 70,
    "Unnamed: 0": 70,
    "Tweets": "Tonite @NewsHour - Phase one #ChinaTradeDeal signed. What's in it, what's not, what now? @nickschifrin reports,… https://t.co/rInssawWd4",
    "Dates": "2014-01-15",
    "Longitude": 25.73796629499506,
    "Latitude": 7.9975225819389255,
    "Sentiment": "neutral"
  },
  {
    "": 71,
    "Unnamed: 0": 71,
    "Tweets": "Report Signs immediately #Ebola https://t.co/JmdOtY5lqM",
    "Dates": "2014-01-15",
    "Longitude": 25.96430217850225,
    "Latitude": 2.4492766407583764,
    "Sentiment": "neutral"
  },
  {
    "": 72,
    "Unnamed: 0": 72,
    "Tweets": "@CIDRAP: Cases traced to Mabalako still fueling DRC #Ebola outbreak https://t.co/kRaPN31v8k",
    "Dates": "2014-01-15",
    "Longitude": 18.017770283933825,
    "Latitude": 5.222925048442989,
    "Sentiment": "neutral"
  },
  {
    "": 73,
    "Unnamed: 0": 73,
    "Tweets": "Cases traced to Mabalako still fueling #DRCongo #Ebola outbreak https://t.co/icjsKiIPMd https://t.co/E5nOh2n3LW",
    "Dates": "2014-01-15",
    "Longitude": 24.203072546323362,
    "Latitude": 10.018819732327664,
    "Sentiment": "neutral"
  },
  {
    "": 74,
    "Unnamed: 0": 74,
    "Tweets": "The @US_FDA has approved the #Ebola vaccine Ervebo. \n\nIt's given through a single injection 10 days ahead of potent… https://t.co/5g1n1HW90V",
    "Dates": "2014-01-15",
    "Longitude": 17.810656355265753,
    "Latitude": 1.9439606832760772,
    "Sentiment": "neutral"
  },
  {
    "": 75,
    "Unnamed: 0": 75,
    "Tweets": "[Film] « #Ebola, c'est pareil au massacre à la machette ». #RDC \nhttps://t.co/8FadfifZiv",
    "Dates": "2014-01-15",
    "Longitude": 24.72835178769323,
    "Latitude": 6.748099818723183,
    "Sentiment": "neutral"
  },
  {
    "": 76,
    "Unnamed: 0": 76,
    "Tweets": "Jan 14, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,403: 3,285 confirmed 118 probable. t… https://t.co/z3bqdqgjwi",
    "Dates": "2014-01-15",
    "Longitude": 19.00305433134779,
    "Latitude": 10.547946343927839,
    "Sentiment": "positive"
  },
  {
    "": 77,
    "Unnamed: 0": 77,
    "Tweets": "@WHOAFRO 2. The North Kivu-Ituri #Ebola outbreak shows little sign of letting up — though it looked like it might b… https://t.co/rwjXWW3la9",
    "Dates": "2014-01-15",
    "Longitude": 17.008279091400638,
    "Latitude": 2.474400543233777,
    "Sentiment": "neutral"
  },
  {
    "": 78,
    "Unnamed: 0": 78,
    "Tweets": "Encore un jour triste pour la #RDC. Une equipe de la Croix-Rouge @crrdc1 et @ifrc attaquée avec deux volontaires bl… https://t.co/QmgNYbZFRK",
    "Dates": "2014-01-15",
    "Longitude": 21.1621454112464,
    "Latitude": 5.717683095695948,
    "Sentiment": "neutral"
  },
  {
    "": 79,
    "Unnamed: 0": 79,
    "Tweets": "DRC reports a health care worker has contracted #Ebola. The person, who was vaccinated (no indication how long ago)… https://t.co/38fNMNEHBE",
    "Dates": "2014-01-15",
    "Longitude": 26.817351542751904,
    "Latitude": 8.077516784620283,
    "Sentiment": "positive"
  },
  {
    "": 80,
    "Unnamed: 0": 80,
    "Tweets": "The apparent #assassination of #AmbassadorYovanovitch is barelymaking a blip on most major news networks!\nWhat the… https://t.co/ssLrULmB2P",
    "Dates": "2014-01-15",
    "Longitude": 16.85598609714884,
    "Latitude": 5.505624117264914,
    "Sentiment": "neutral"
  },
  {
    "": 81,
    "Unnamed: 0": 81,
    "Tweets": ".@newhumanitarian  --In Congo’s #Ebola zone, misinformation persists even as cases slow  #DRC #DRCongo  by… https://t.co/klRv5FXtpL",
    "Dates": "2014-01-15",
    "Longitude": 18.78191882201766,
    "Latitude": 0.7442498597334208,
    "Sentiment": "neutral"
  },
  {
    "": 82,
    "Unnamed: 0": 82,
    "Tweets": "@CongopresseN @juantedbelkas @kabund_jmkkrock @auguyka70 Ce support est vraiment le bienvenu pour faire face àa cet… https://t.co/Yh9u0kgmrA",
    "Dates": "2014-01-15",
    "Longitude": 17.556773427340975,
    "Latitude": 0.4129218804117736,
    "Sentiment": "neutral"
  },
  {
    "": 83,
    "Unnamed: 0": 83,
    "Tweets": "NIH Video Replay: Demystifying Medicine - #Ebola: Then, Now and the NIH/ Daniel Chertow, MD, MPH, CC, NIH and Nancy… https://t.co/PblELOvGb8",
    "Dates": "2014-01-15",
    "Longitude": 23.28236980485179,
    "Latitude": 4.551758413139593,
    "Sentiment": "neutral"
  },
  {
    "": 84,
    "Unnamed: 0": 84,
    "Tweets": "With #Ebola comes stigma because of misinformation&amp;misrepresentation.\n\nOur programs aim to counter the disease, ref… https://t.co/yfiW5RhebX",
    "Dates": "2014-01-15",
    "Longitude": 21.853748112413733,
    "Latitude": 0.2863714820686405,
    "Sentiment": "neutral"
  },
  {
    "": 85,
    "Unnamed: 0": 85,
    "Tweets": "@ombaggio Since when are communities unable to bury their own people with the necessary care to avoid Ebola transmission?  #ebola",
    "Dates": "2014-01-15",
    "Longitude": 17.867603091167236,
    "Latitude": 3.12214535588129,
    "Sentiment": "neutral"
  },
  {
    "": 86,
    "Unnamed: 0": 86,
    "Tweets": "Proud to be part of the RAPIDE-TKM trial team #ebola #research https://t.co/k2tqPkBjxY https://t.co/tzB10q8vgN",
    "Dates": "2014-01-15",
    "Longitude": 13.434913986870365,
    "Latitude": -2.668053801318341,
    "Sentiment": "positive"
  },
  {
    "": 87,
    "Unnamed: 0": 87,
    "Tweets": "For #WednesdayWisdom - what will it take to end Congo's #Ebola outbreak for good in 2014? Five practical suggestion… https://t.co/rdYLdxC0NO",
    "Dates": "2014-01-15",
    "Longitude": 21.785092006735734,
    "Latitude": 8.70029539891728,
    "Sentiment": "neutral"
  },
  {
    "": 88,
    "Unnamed: 0": 88,
    "Tweets": "Make time to read this, it captivating! @HelenBranswell dives into how all the right elements came together leading… https://t.co/wgdMUK9v60",
    "Dates": "2014-01-15",
    "Longitude": 20.9112124087831,
    "Latitude": 6.879809732330531,
    "Sentiment": "neutral"
  },
  {
    "": 89,
    "Unnamed: 0": 89,
    "Tweets": "#RDC #Nord-Kivu  NZANZU KASIVITA CARLY appeler aux actions intenses pour éradiquer la maladie à Virus #Ebola qui a… https://t.co/fVb0tdVhrz",
    "Dates": "2014-01-15",
    "Longitude": 19.912094936142942,
    "Latitude": 0.013990362490965857,
    "Sentiment": "neutral"
  },
  {
    "": 90,
    "Unnamed: 0": 90,
    "Tweets": "#RDC #Nord-Kivu Une grande délégation de l'inter agences des @ONU_fr venue de New York a été reçu par le gouverneur… https://t.co/Myrd3MMHNW",
    "Dates": "2014-01-15",
    "Longitude": 21.531290734720702,
    "Latitude": 1.4921450754279406,
    "Sentiment": "neutral"
  },
  {
    "": 91,
    "Unnamed: 0": 91,
    "Tweets": "#Mambasa Survivor speech once discharged : \"I'm happy, really happy. Just want to thank God who helps me to survive… https://t.co/h6rfZQAvw5",
    "Dates": "2014-01-15",
    "Longitude": 10.79656796644927,
    "Latitude": 0.8840820599134322,
    "Sentiment": "neutral"
  },
  {
    "": 92,
    "Unnamed: 0": 92,
    "Tweets": "Un #Vaccin contre #Ebola approuvé pour l'usage aux USA        https://t.co/E3laY1onCj",
    "Dates": "2014-01-15",
    "Longitude": 18.282014701775434,
    "Latitude": 2.554296787600931,
    "Sentiment": "neutral"
  },
  {
    "": 93,
    "Unnamed: 0": 93,
    "Tweets": "In Congo’s #Ebola zone, misinformation persists even as cases slow: https://t.co/MsE7CsQfJn via @newhumanitarian… https://t.co/5XilpnvuD5",
    "Dates": "2014-01-15",
    "Longitude": 22.74840691946419,
    "Latitude": 8.108788378658524,
    "Sentiment": "neutral"
  },
  {
    "": 94,
    "Unnamed: 0": 94,
    "Tweets": "#Mambasa Health zone. Great event! #Ebola Survivor discharged from Treatment Unit. Important ceremony full of hope… https://t.co/jZbNBdxb5P",
    "Dates": "2014-01-15",
    "Longitude": 19.540788669807743,
    "Latitude": 1.750088513308632,
    "Sentiment": "neutral"
  },
  {
    "": 95,
    "Unnamed: 0": 95,
    "Tweets": "Les habitants de #Ndindi, une cellule de #Beni réclament une meilleure surveillance des personnes contacts d’#Ebola… https://t.co/K5JcIl1dxu",
    "Dates": "2014-01-15",
    "Longitude": 28.341449035956007,
    "Latitude": -1.0540545567759185,
    "Sentiment": "neutral"
  },
  {
    "": 96,
    "Unnamed: 0": 96,
    "Tweets": "Les habitants de #Ndindi, une cellule de #Beni réclament une meilleure surveillance des personnes contacts d’#Ebola… https://t.co/U8KtYNER0Q",
    "Dates": "2014-01-15",
    "Longitude": 15.987922476798747,
    "Latitude": 2.3550843700496813,
    "Sentiment": "neutral"
  },
  {
    "": 97,
    "Unnamed: 0": 97,
    "Tweets": "Les habitants de #Ndindi, une cellule de #Beni réclament une meilleure surveillance des personnes contacts d’#Ebola… https://t.co/Dq6HbBEppK",
    "Dates": "2014-01-15",
    "Longitude": 20.1267828499858,
    "Latitude": 6.678853480271679,
    "Sentiment": "neutral"
  },
  {
    "": 98,
    "Unnamed: 0": 98,
    "Tweets": "Great article on problems associated with the #ebola outbreak in #Beni and #NKivu. Explains why local people are so… https://t.co/YQUmqAUFwJ",
    "Dates": "2014-01-15",
    "Longitude": 24.429715852164314,
    "Latitude": 3.24492687892104,
    "Sentiment": "neutral"
  },
  {
    "": 99,
    "Unnamed: 0": 99,
    "Tweets": "https://t.co/506KgDL2Lx – learn the TRUTH  Great resource 🎯to learn from &amp; disseminate🎤🌎🗣 #ebolawebsite #Ebola… https://t.co/F1AI6hoVVc",
    "Dates": "2014-01-15",
    "Longitude": 28.272621019592545,
    "Latitude": 6.193717501443803,
    "Sentiment": "neutral"
  },
  {
    "": 100,
    "Unnamed: 0": 100,
    "Tweets": "@WarChildCan @worldvisioncan @CBelieveCA @mmm_org @genevacall @Prog2030Can @Fondation_PGL @SaveChildrenCan… https://t.co/yPamGJVI69",
    "Dates": "2014-01-15",
    "Longitude": 16.95586510021882,
    "Latitude": 5.951198472969003,
    "Sentiment": "positive"
  },
  {
    "": 101,
    "Unnamed: 0": 101,
    "Tweets": "Here are ten big moments that will stick with us—and could continue to shape #TheFutureOf health for us all &gt;&gt;… https://t.co/q8LvoCRz43",
    "Dates": "2014-01-15",
    "Longitude": 21.03966448181019,
    "Latitude": 2.5707697319541705,
    "Sentiment": "neutral"
  },
  {
    "": 102,
    "Unnamed: 0": 102,
    "Tweets": "@WarChildCan @worldvisioncan @CBelieveCA @mmm_org @genevacall @Can2030Agenda @Fondation_PGL @SaveChildrenCan… https://t.co/7GDkbACDyK",
    "Dates": "2014-01-15",
    "Longitude": 27.26144862002186,
    "Latitude": 4.121028945961722,
    "Sentiment": "neutral"
  },
  {
    "": 103,
    "Unnamed: 0": 103,
    "Tweets": "I’m walking around this beautiful museum and found #kentbrantly  pic, proud to be part of #emory #Ebola https://t.co/2h9CfnsGYR",
    "Dates": "2014-01-15",
    "Longitude": 25.424820842068947,
    "Latitude": 4.409209395026746,
    "Sentiment": "neutral"
  },
  {
    "": 104,
    "Unnamed: 0": 104,
    "Tweets": "Canada va allouer 56 millions de dollars dans le cadre d’appui dans le domaine de la santé en #RDC. C’est une répon… https://t.co/SbUgWTCZh1",
    "Dates": "2014-01-15",
    "Longitude": 24.61232072647824,
    "Latitude": -0.5879952109846496,
    "Sentiment": "positive"
  },
  {
    "": 105,
    "Unnamed: 0": 105,
    "Tweets": "Red Cross volunteers attacked during #Ebola burial in #DRCongo👉 https://t.co/7paxzbYB2N\n\n📷: @IFRC https://t.co/pDmviJu1Q6",
    "Dates": "2014-01-15",
    "Longitude": 26.022326285719778,
    "Latitude": 1.240356611161161,
    "Sentiment": "negative"
  },
  {
    "": 106,
    "Unnamed: 0": 106,
    "Tweets": "@GrumFromNorwich @HighWireTalk So you only listen to scientists with conflicts of interest? Gotcha.  Good to know l… https://t.co/eSNKVNnTH8",
    "Dates": "2014-01-15",
    "Longitude": 23.73212249829789,
    "Latitude": 4.117573443898734,
    "Sentiment": "neutral"
  },
  {
    "": 107,
    "Unnamed: 0": 107,
    "Tweets": "DRC #Ebola: CMRE update, January 14 https://t.co/VegSUwl0rr",
    "Dates": "2014-01-15",
    "Longitude": 17.507989884774517,
    "Latitude": -0.7426689132732855,
    "Sentiment": "negative"
  },
  {
    "": 108,
    "Unnamed: 0": 108,
    "Tweets": "Pharmacokinetics of TKM-130803 in #SierraLeone patients with #Ebola virus disease @EBioMedicine. A huge logistical… https://t.co/0Pr33ZUM9f",
    "Dates": "2014-01-15",
    "Longitude": 29.138691165431077,
    "Latitude": 7.236105143540362,
    "Sentiment": "positive"
  },
  {
    "": 109,
    "Unnamed: 0": 109,
    "Tweets": "Important article on #Ebola #EbolaVirus #EbolaVaccine #EbolaEpidemic #MaternalDeath #FetalDeath and the exclusion o… https://t.co/X6m0E2KUTJ",
    "Dates": "2014-01-15",
    "Longitude": 15.912543566323915,
    "Latitude": 3.8667271913267314,
    "Sentiment": "neutral"
  },
  {
    "": 110,
    "Unnamed: 0": 110,
    "Tweets": "DR Congo: Red Cross volunteers attacked during #Ebola burial https://t.co/dA1YOQSst4",
    "Dates": "2014-01-15",
    "Longitude": 24.398418010940897,
    "Latitude": 6.510872962940493,
    "Sentiment": "negative"
  },
  {
    "": 111,
    "Unnamed: 0": 111,
    "Tweets": "Research in @TropMed_IntHlth: https://t.co/Y5M3keU1oj #Ebola",
    "Dates": "2014-01-15",
    "Longitude": 22.844814663437138,
    "Latitude": -0.20828302728824255,
    "Sentiment": "neutral"
  },
  {
    "": 112,
    "Unnamed: 0": 112,
    "Tweets": "Enfermedad por el virus del Ébola • Brote de ébola en Guinea • Brote epidémico • República https://t.co/BV2LnWdDw6 #ebola",
    "Dates": "2014-01-15",
    "Longitude": 29.007134012854085,
    "Latitude": 5.877481626775935,
    "Sentiment": "neutral"
  },
  {
    "": 113,
    "Unnamed: 0": 113,
    "Tweets": "🎧 Ce matin sur @RFI nous faisions le point sur les deux épidémies qui ravagent actuellement la République Démocrati… https://t.co/klkioPjWsY",
    "Dates": "2014-01-15",
    "Longitude": 23.04291165112397,
    "Latitude": 3.4030971187868637,
    "Sentiment": "neutral"
  },
  {
    "": 114,
    "Unnamed: 0": 114,
    "Tweets": "A un paso de hallar la #cura del Ébola 🎯 #TodoEnUnSóloLugar https://t.co/fYT7U4A3Er #ebola #enfermedades",
    "Dates": "2014-01-15",
    "Longitude": 24.45231921167548,
    "Latitude": 0.3287593606319019,
    "Sentiment": "neutral"
  },
  {
    "": 115,
    "Unnamed: 0": 115,
    "Tweets": "@rodrah1 Très possible. C'est la Croix-Rouge et le service de Protection Civile de la RDC qui enterre désormais tou… https://t.co/Ya0YPGFZzv",
    "Dates": "2014-01-15",
    "Longitude": 16.712846011966853,
    "Latitude": 0.2419506593910632,
    "Sentiment": "positive"
  },
  {
    "": 116,
    "Unnamed: 0": 116,
    "Tweets": "What we're reading, in @statnews by @HelenBranswell: ‘Against all odds’: The inside story of how scientists across… https://t.co/pQQxhMdIgZ",
    "Dates": "2014-01-15",
    "Longitude": 26.755018152743858,
    "Latitude": 2.727979351821248,
    "Sentiment": "neutral"
  },
  {
    "": 117,
    "Unnamed: 0": 117,
    "Tweets": "Interesting read, relevant questions \n#DRC #Ebola #HumanitarianAction \nWhat Will It Take To Finally End Congo's Ebo… https://t.co/XREjaLs3Qg",
    "Dates": "2014-01-15",
    "Longitude": 23.14062057933264,
    "Latitude": 7.498863509087807,
    "Sentiment": "positive"
  },
  {
    "": 118,
    "Unnamed: 0": 118,
    "Tweets": "Dit zou niet mogen gebeuren. Twee hulpverleners van het Rode Kruis zijn aangevallen tijdens een begrafenis van een… https://t.co/DNq9OrkUnP",
    "Dates": "2014-01-15",
    "Longitude": 25.839715093383862,
    "Latitude": 8.249298164509806,
    "Sentiment": "positive"
  },
  {
    "": 119,
    "Unnamed: 0": 119,
    "Tweets": "On a front line, our volunteers are taking these hits while making THE difference in the #Ebola fight. The job of p… https://t.co/ZyHu982mAX",
    "Dates": "2014-01-15",
    "Longitude": 24.751712815877355,
    "Latitude": -6.953570533254782,
    "Sentiment": "neutral"
  },
  {
    "": 120,
    "Unnamed: 0": 120,
    "Tweets": "Here we are in the middle of #ClimateCrisis #WWIll #Flu #Ebola and #BedBugs then all of a sudden #BillieEilish",
    "Dates": "2014-01-15",
    "Longitude": 19.735909496467297,
    "Latitude": 1.3316304506308292,
    "Sentiment": "positive"
  },
  {
    "": 121,
    "Unnamed: 0": 121,
    "Tweets": "First FDA-approved treatment for preventing #Ebola virus @AmerNurse2Day | #ECM https://t.co/sr90VGdv2G",
    "Dates": "2014-01-15",
    "Longitude": 22.39198785818134,
    "Latitude": 6.849899719702002,
    "Sentiment": "positive"
  },
  {
    "": 122,
    "Unnamed: 0": 122,
    "Tweets": "#RDC: Des volontaires de la Croix-Rouge attaqués lors de l'enterrement d'#Ebola dans le territoire de #Mambasa. Deu… https://t.co/DuyT7xUWy5",
    "Dates": "2014-01-15",
    "Longitude": 25.042108422993078,
    "Latitude": 2.788435427648521,
    "Sentiment": "neutral"
  },
  {
    "": 123,
    "Unnamed: 0": 123,
    "Tweets": "This is Judie Alimonti; one of the lab technicians who worked quietly for years on the #Ebola #vaccine.  Without he… https://t.co/qIPTVFPqhw",
    "Dates": "2014-01-15",
    "Longitude": 18.87519771262041,
    "Latitude": 0.2969242696715386,
    "Sentiment": "negative"
  },
  {
    "": 124,
    "Unnamed: 0": 124,
    "Tweets": "#Biakato Mine, #Mandima Health zone. A Soldier convinced by @BarakaHumudi and @WHO #RCCE colleagues is now seated a… https://t.co/enCNmz6cQy",
    "Dates": "2014-01-15",
    "Longitude": 22.580664891537804,
    "Latitude": 2.966855048525665,
    "Sentiment": "positive"
  },
  {
    "": 125,
    "Unnamed: 0": 125,
    "Tweets": "#EBOLA #RDCongo « Nous avons besoin que les personnes qui seraient contaminées se sentent en confiance. C’est indis… https://t.co/GSIl0eNVLC",
    "Dates": "2014-01-15",
    "Longitude": 25.355957365964322,
    "Latitude": 9.307838211103284,
    "Sentiment": "neutral"
  },
  {
    "": 126,
    "Unnamed: 0": 126,
    "Tweets": "Very excited our review on research exploring post-infection #vaccine use to treat dangerous #pathogens like #Ebola… https://t.co/GAC9s15Blo",
    "Dates": "2014-01-15",
    "Longitude": 25.29388344364062,
    "Latitude": 6.465699561541912,
    "Sentiment": "neutral"
  },
  {
    "": 127,
    "Unnamed: 0": 127,
    "Tweets": "I dag ble to frivillige #ebola-arbeidere fra Røde Kors skadet i et angrep under en begravelse i #DRCongo. De får nå… https://t.co/vpDcrvRzuN",
    "Dates": "2014-01-15",
    "Longitude": 24.848522714825222,
    "Latitude": 6.512743709709293,
    "Sentiment": "neutral"
  },
  {
    "": 128,
    "Unnamed: 0": 128,
    "Tweets": "Dr. Amit Uppal of NYC Health + Hospitals @BellevueHosp #inManhattan is known as a driving force for safety. He shel… https://t.co/eM5xr1twpl",
    "Dates": "2014-01-15",
    "Longitude": 25.555057250730272,
    "Latitude": 7.374446398991617,
    "Sentiment": "neutral"
  },
  {
    "": 129,
    "Unnamed: 0": 129,
    "Tweets": "Specialist technique used to study drugs completed for first time during #Ebola outbreak https://t.co/WDw8XUS6Y7",
    "Dates": "2014-01-15",
    "Longitude": 30.273839944604994,
    "Latitude": 7.380118118439524,
    "Sentiment": "positive"
  },
  {
    "": 130,
    "Unnamed: 0": 130,
    "Tweets": "#EBOLA #Suisse Si des progrés ont été réalisés sur la #vaccination, les traitements et la prévention de la maladie,… https://t.co/WFvXCqcNbp",
    "Dates": "2014-01-15",
    "Longitude": 16.632969727786854,
    "Latitude": -3.944342969143097,
    "Sentiment": "neutral"
  },
  {
    "": 131,
    "Unnamed: 0": 131,
    "Tweets": "New UofG research by Dr Janet Scott in @EBioMedicine\nreveals a specialist technique used to study drugs has been co… https://t.co/F0EfisT6Sk",
    "Dates": "2014-01-15",
    "Longitude": 22.615339713018013,
    "Latitude": 3.096199400393579,
    "Sentiment": "neutral"
  },
  {
    "": 132,
    "Unnamed: 0": 132,
    "Tweets": "Glad to share our paper:\nPharmacokinetics of TKM-130803 in #SierraLeone patients with #Ebola virus disease… https://t.co/at5psDS2Rr",
    "Dates": "2014-01-15",
    "Longitude": 19.157000006662408,
    "Latitude": -0.4900326474843659,
    "Sentiment": "neutral"
  },
  {
    "": 133,
    "Unnamed: 0": 133,
    "Tweets": "I often feel very lucky to know @ryanlenorabrown &amp; particularly so when she writes stories as compellingly &amp; sensit… https://t.co/8ziUaY7VXr",
    "Dates": "2014-01-15",
    "Longitude": 22.428437535508785,
    "Latitude": 7.379449628687828,
    "Sentiment": "positive"
  },
  {
    "": 134,
    "Unnamed: 0": 134,
    "Tweets": "Im Osten der Dem. Rep. #Kongo toben bewaffnete Konflikte, die Menschen leiden unter #Ebola und Hunger. Die Welthung… https://t.co/rMsBNS4NaP",
    "Dates": "2014-01-15",
    "Longitude": 15.40712993943459,
    "Latitude": -0.03905408339936223,
    "Sentiment": "neutral"
  },
  {
    "": 135,
    "Unnamed: 0": 135,
    "Tweets": "#FredNatLab’s Clinical Monitoring Research Program Directorate provides high-quality research support services to a… https://t.co/Wg4l8eI2qO",
    "Dates": "2014-01-15",
    "Longitude": 19.67818704666217,
    "Latitude": 1.9423636719926107,
    "Sentiment": "neutral"
  },
  {
    "": 136,
    "Unnamed: 0": 136,
    "Tweets": "Stepping up to the challenge: studying drug dosage during an #Ebola outbreak - joint study of @UofGlasgow,… https://t.co/lnO3sCm3aN",
    "Dates": "2014-01-15",
    "Longitude": 28.778484116713607,
    "Latitude": -0.737512743714154,
    "Sentiment": "neutral"
  },
  {
    "": 137,
    "Unnamed: 0": 137,
    "Tweets": "🩺2.89 metric tons of medical and non-medical supplies and equipment delivered to hubs in Beni and Butembo daily \n\nP… https://t.co/CyGXXFL8P4",
    "Dates": "2014-01-15",
    "Longitude": 18.427291745348022,
    "Latitude": -2.7309957152817264,
    "Sentiment": "positive"
  },
  {
    "": 138,
    "Unnamed: 0": 138,
    "Tweets": "Röda Korsets lokala volontärer har genomfört enastående 20 000 säkra begravningar sedan #Ebola bröt ut i Kongo förra sommaren.",
    "Dates": "2014-01-15",
    "Longitude": 17.395395831285995,
    "Latitude": 8.0983835948953,
    "Sentiment": "neutral"
  },
  {
    "": 139,
    "Unnamed: 0": 139,
    "Tweets": "Två Röda Kors-volontärer attackerades och skadades i samband med en säker begravning av en person som dött av… https://t.co/8sgqfJfWJ4",
    "Dates": "2014-01-15",
    "Longitude": 18.050599836877343,
    "Latitude": 8.06876888153682,
    "Sentiment": "positive"
  },
  {
    "": 140,
    "Unnamed: 0": 140,
    "Tweets": "The science stories that shaped 2019: first image of a #blackhole, progress in fight against #Ebola, and promise an… https://t.co/86uuejQOwl",
    "Dates": "2014-01-15",
    "Longitude": 23.480127911328257,
    "Latitude": 4.250411596198275,
    "Sentiment": "neutral"
  },
  {
    "": 141,
    "Unnamed: 0": 141,
    "Tweets": "#DYK that #Ebola in Sierra Leone was initially seen as “a god-sent disease?\n\n\"Deaths, especially the ones connected… https://t.co/BCZ5JUPFWs",
    "Dates": "2014-01-15",
    "Longitude": 20.942164684610987,
    "Latitude": 5.408900843212997,
    "Sentiment": "neutral"
  },
  {
    "": 142,
    "Unnamed: 0": 142,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 503 suspected/3403 total confirmed &amp; probable cases (118 probable/3285 confirmed… https://t.co/btU9Dw7GoG",
    "Dates": "2014-01-15",
    "Longitude": 27.5745224988122,
    "Latitude": 7.924521399396266,
    "Sentiment": "neutral"
  },
  {
    "": 143,
    "Unnamed: 0": 143,
    "Tweets": "#Ebola response and community engagement: how to build a bridge? Correspondence in @TheLancet: https://t.co/S5DRQub3dS",
    "Dates": "2014-01-15",
    "Longitude": 15.785441308304305,
    "Latitude": 6.517223052791245,
    "Sentiment": "neutral"
  },
  {
    "": 144,
    "Unnamed: 0": 144,
    "Tweets": "Julienne Anokon tehtävä on mennä kaukaisiin maaseudun paikkoihin, istua ja kuunnella kun ihmiset huutavat. Lue lisä… https://t.co/1u8Jejjydg",
    "Dates": "2014-01-15",
    "Longitude": 21.675909087562168,
    "Latitude": -2.310819012640616,
    "Sentiment": "neutral"
  },
  {
    "": 145,
    "Unnamed: 0": 145,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 14 janvier 2014 https://t.co/YXSt8WD5jG",
    "Dates": "2014-01-15",
    "Longitude": 17.76525014422652,
    "Latitude": 9.423864930980372,
    "Sentiment": "neutral"
  },
  {
    "": 146,
    "Unnamed: 0": 146,
    "Tweets": "Zones de santé les plus affectées par l'#épidémie d '#Ebola en #RDC et nombre de #vaccinations  effectuées. https://t.co/6nAkC7lMSH",
    "Dates": "2014-01-15",
    "Longitude": 27.772954183434614,
    "Latitude": 4.232338110933012,
    "Sentiment": "neutral"
  },
  {
    "": 147,
    "Unnamed: 0": 147,
    "Tweets": "Great example of looking for innovative ways to engage communities - different solutions for different contexts… https://t.co/TZzRQfpATN",
    "Dates": "2014-01-15",
    "Longitude": 11.67471474453667,
    "Latitude": -2.052602765464716,
    "Sentiment": "neutral"
  },
  {
    "": 148,
    "Unnamed: 0": 148,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 14 Janvier 2014 avec les données collectées jusqu'au 13.01.2014 👇🏾\n\n➡… https://t.co/Zi1gCZpbHV",
    "Dates": "2014-01-15",
    "Longitude": 22.375488006366297,
    "Latitude": 7.6763690724428635,
    "Sentiment": "positive"
  },
  {
    "": 149,
    "Unnamed: 0": 149,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 13 janvier 2014 https://t.co/IL1PGM38UV",
    "Dates": "2014-01-15",
    "Longitude": 20.77947497388943,
    "Latitude": 3.449666324616255,
    "Sentiment": "neutral"
  },
  {
    "": 150,
    "Unnamed: 0": 150,
    "Tweets": "Suivi de l '#épidémie d'#Ebola en #RDC au 14 janvier 2014 https://t.co/bHaeaDTUgT",
    "Dates": "2014-01-15",
    "Longitude": 16.4520245235825,
    "Latitude": 10.568750412857362,
    "Sentiment": "neutral"
  },
  {
    "": 151,
    "Unnamed: 0": 151,
    "Tweets": "Human activities link fruit bat presence to #Ebola outbreaks. #Deforestation alter natural circulation of viruses a… https://t.co/sGK2Vouzf3",
    "Dates": "2014-01-15",
    "Longitude": 25.828640828292883,
    "Latitude": 4.920185320410445,
    "Sentiment": "neutral"
  },
  {
    "": 152,
    "Unnamed: 0": 152,
    "Tweets": "@PaolaSacchi3 @panorama_it @MaleEdizioni @stefaniacraxi si parla di visione politica in grande. non dei microbi che… https://t.co/OuJ9ugoahW",
    "Dates": "2014-01-15",
    "Longitude": 23.449130062072626,
    "Latitude": 6.198334930071912,
    "Sentiment": "neutral"
  },
  {
    "": 153,
    "Unnamed: 0": 153,
    "Tweets": "Bwanasura Health zone in #Komanda. @fabrice_kano @WHO #RCCE in discussion with #Ebola Survivors. There are lot of n… https://t.co/UvMeqxDO5p",
    "Dates": "2014-01-15",
    "Longitude": 22.4599243165407,
    "Latitude": 13.209520361486952,
    "Sentiment": "neutral"
  },
  {
    "": 154,
    "Unnamed: 0": 154,
    "Tweets": "Sono 66 i #farmaci autorizzati Ema 2019, 30 nuovi principi attivi | 7 farmaci per #MalattieRare, 5 #biosimilari, 1… https://t.co/UzXhb1IQDa",
    "Dates": "2014-01-15",
    "Longitude": 25.03048611516934,
    "Latitude": 8.929180671956926,
    "Sentiment": "positive"
  },
  {
    "": 155,
    "Unnamed: 0": 155,
    "Tweets": "ifrc: Meet the moto-taxi drivers 🏍️ who are critical responders to the #Ebola outbreak in #DRCongo. https://t.co/fo4w3B38qv",
    "Dates": "2014-01-15",
    "Longitude": 29.75870092530399,
    "Latitude": 4.976659713627659,
    "Sentiment": "neutral"
  },
  {
    "": 156,
    "Unnamed: 0": 156,
    "Tweets": "All my solidarity and thoughts to our brave #RedCross @crrdc1 volunteers injured in #DRCongo. Community engagement… https://t.co/jS2V7jgMmI",
    "Dates": "2014-01-15",
    "Longitude": 11.278820416678885,
    "Latitude": 11.239809581681463,
    "Sentiment": "positive"
  },
  {
    "": 157,
    "Unnamed: 0": 157,
    "Tweets": "5 new conformed #Ebola cases in DRC yesterday. Highest we have had in the new year https://t.co/BWbDq3HA4G",
    "Dates": "2014-01-15",
    "Longitude": 31.311852909631327,
    "Latitude": 4.611514588380936,
    "Sentiment": "positive"
  },
  {
    "": 158,
    "Unnamed: 0": 158,
    "Tweets": "Trust is something that we need to nurture everyday and it takes time in communities that have lost trust in the hu… https://t.co/0vS3JSrZi3",
    "Dates": "2014-01-15",
    "Longitude": 20.26740449040792,
    "Latitude": 2.702725205721902,
    "Sentiment": "negative"
  },
  {
    "": 159,
    "Unnamed: 0": 159,
    "Tweets": "[#SEANCE #video] Paradigme et paradoxe de la coopération en « #santémondiale » : de la #pandémie de #sida à l’… https://t.co/SefkLkFw7I",
    "Dates": "2014-01-15",
    "Longitude": 22.50087493157241,
    "Latitude": 1.425438283818922,
    "Sentiment": "neutral"
  },
  {
    "": 160,
    "Unnamed: 0": 160,
    "Tweets": "There were 5 #Ebola cases reported on Monday &amp; 1 death. The outbreak totals are now 3403 cases &amp; 2236 deaths. https://t.co/DDZTzcrh61",
    "Dates": "2014-01-15",
    "Longitude": 23.86738290228265,
    "Latitude": 6.1750599567638265,
    "Sentiment": "neutral"
  },
  {
    "": 161,
    "Unnamed: 0": 161,
    "Tweets": "Jophet a survécu à #Ebola, mais a perdu son fils, sa femme et sa mère à cause de la maladie. Il s'occupe maintenant… https://t.co/xMj27L7Dcv",
    "Dates": "2014-01-15",
    "Longitude": 22.095772565154487,
    "Latitude": -1.3621795715407243,
    "Sentiment": "neutral"
  },
  {
    "": 162,
    "Unnamed: 0": 162,
    "Tweets": "Les enseignants sont également mis à contribution pour renforcer les messages clés liés aux bonnes pratiques face a… https://t.co/38PElSMM2O",
    "Dates": "2014-01-15",
    "Longitude": 26.31533256293106,
    "Latitude": 2.0436062559615324,
    "Sentiment": "neutral"
  },
  {
    "": 163,
    "Unnamed: 0": 163,
    "Tweets": "Ratisser large dans les rues &amp; quartiers pour ne pas laisser les enfants abandonnés derrière. A Ngongolio, un quart… https://t.co/z5K9fbnT3A",
    "Dates": "2014-01-15",
    "Longitude": 22.171722803926144,
    "Latitude": 1.897607489934797,
    "Sentiment": "positive"
  },
  {
    "": 164,
    "Unnamed: 0": 164,
    "Tweets": "Every single burial carries risks of #Ebola infection &amp; attacks. But our volunteers stay the course. They have done… https://t.co/uckhjNSCgj",
    "Dates": "2014-01-15",
    "Longitude": 24.663456411511643,
    "Latitude": -1.942753259884551,
    "Sentiment": "negative"
  },
  {
    "": 165,
    "Unnamed: 0": 165,
    "Tweets": "‘Against all odds’: The inside story of how scientists across three continents produced an #Ebola #vaccine… https://t.co/d4E24r5x0U",
    "Dates": "2014-01-15",
    "Longitude": 22.914882705389328,
    "Latitude": 7.330063536239527,
    "Sentiment": "neutral"
  },
  {
    "": 166,
    "Unnamed: 0": 166,
    "Tweets": "In a recent article @Sulaima27235281 tells us about his experiences during the Sierra Leone #Ebola outbreak and how… https://t.co/f3SfRL6DIt",
    "Dates": "2014-01-15",
    "Longitude": 22.92244135649819,
    "Latitude": 9.287859990742154,
    "Sentiment": "neutral"
  },
  {
    "": 167,
    "Unnamed: 0": 167,
    "Tweets": "Plus linked Comment: Safety and immunogenicity of vesicular stomatitis virus-based vaccines for #Ebola virus disease https://t.co/K4WQYebdD1",
    "Dates": "2014-01-15",
    "Longitude": 15.37200830184141,
    "Latitude": 2.0853547619234063,
    "Sentiment": "neutral"
  },
  {
    "": 168,
    "Unnamed: 0": 168,
    "Tweets": "New online: Safety and immunogenicity of a highly attenuated rVSVN4CT1-EBOVGP1 #Ebola virus vaccine: a randomised,… https://t.co/qq18wqHDUZ",
    "Dates": "2014-01-15",
    "Longitude": 16.460144288994076,
    "Latitude": 7.917485772791286,
    "Sentiment": "positive"
  },
  {
    "": 169,
    "Unnamed: 0": 169,
    "Tweets": "Two Red Cross volunteers were injured following an attack while conducting a burial outside of Mambasa, #DRCongo.… https://t.co/jARo3ldo3D",
    "Dates": "2014-01-15",
    "Longitude": 21.620330660670092,
    "Latitude": 6.880263333766951,
    "Sentiment": "neutral"
  },
  {
    "": 170,
    "Unnamed: 0": 170,
    "Tweets": "@karinagould you're welcome in #DRC but I wish you take your time to meet with another crew working in the response… https://t.co/aEl6ls5sTW",
    "Dates": "2014-01-15",
    "Longitude": 22.284908367827903,
    "Latitude": 4.55908169820288,
    "Sentiment": "positive"
  },
  {
    "": 171,
    "Unnamed: 0": 171,
    "Tweets": "La enfermedad X podría matar a millones - advertencia de Bill Gates\nLa guerra NUCLEAR no es la mayor https://t.co/66T3BG0NTH #ebola",
    "Dates": "2014-01-15",
    "Longitude": 17.620306846481913,
    "Latitude": 0.6128018697687918,
    "Sentiment": "neutral"
  },
  {
    "": 172,
    "Unnamed: 0": 172,
    "Tweets": "A 9h10 TU sur @RFI nous parlons des 2 #épidémies qui sévissent actuellement en #RDC : #rougeole et #Ebola. RDV sur… https://t.co/0xwohrtLly",
    "Dates": "2014-01-15",
    "Longitude": 27.496656005391852,
    "Latitude": 3.299911843344043,
    "Sentiment": "neutral"
  },
  {
    "": 173,
    "Unnamed: 0": 173,
    "Tweets": "#8forces #vaccine #ebola ‘Against all odds’: The inside story of how scientists across three continents produced an… https://t.co/UajhXxb3Zy",
    "Dates": "2014-01-15",
    "Longitude": 27.07771317183188,
    "Latitude": 9.110574288025632,
    "Sentiment": "neutral"
  },
  {
    "": 174,
    "Unnamed: 0": 174,
    "Tweets": "#RDC #Ebola https://t.co/wyFvD516RD",
    "Dates": "2014-01-15",
    "Longitude": 22.413836065178685,
    "Latitude": 1.3924543093758373,
    "Sentiment": "neutral"
  },
  {
    "": 175,
    "Unnamed: 0": 175,
    "Tweets": "Read about the latest events in sub-Saharan Africa:\n\nhttps://t.co/7wHXNzvPOA\n\n#Museveni #Gnassingbé #ECOWAS #Orange… https://t.co/ovqwmvJRTu",
    "Dates": "2014-01-15",
    "Longitude": 28.50061193130077,
    "Latitude": -1.408856401255406,
    "Sentiment": "neutral"
  },
  {
    "": 176,
    "Unnamed: 0": 176,
    "Tweets": "#ebola  tu nunca va hacer feliz , son maricones , #np field my own let me Li's",
    "Dates": "2014-01-15",
    "Longitude": 17.381055523371373,
    "Latitude": 15.320450710701477,
    "Sentiment": "positive"
  },
  {
    "": 177,
    "Unnamed: 0": 177,
    "Tweets": "Day 8: PPE day! Our participants went through a little simulation at Naguru Hospital, about dealing with suspected… https://t.co/ZJSnNenuN7",
    "Dates": "2014-01-15",
    "Longitude": 24.227231552709455,
    "Latitude": 0.5520575642243695,
    "Sentiment": "neutral"
  },
  {
    "": 178,
    "Unnamed: 0": 178,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 14 janvier; données du 13 jan 2014. Cinq (5) nouvea… https://t.co/hpgF5gdIqn",
    "Dates": "2014-01-15",
    "Longitude": 21.072810026767595,
    "Latitude": 11.017947061872366,
    "Sentiment": "neutral"
  },
  {
    "": 179,
    "Unnamed: 0": 179,
    "Tweets": "@JeanClaudekat2 C qui inquiète c lorsque c verbiages sortent de quelqu’un qui s’appelle défenseur d droits d l’homm… https://t.co/Lu3oKNpx8d",
    "Dates": "2014-01-15",
    "Longitude": 24.84299614400414,
    "Latitude": -2.419074274891903,
    "Sentiment": "positive"
  },
  {
    "": 180,
    "Unnamed: 0": 180,
    "Tweets": "La Enfermedad X necesita investigación urgente como el Ébola 2019\nLas enfermedades virales son una de las https://t.co/S0cEP9nWUK #ebola",
    "Dates": "2014-01-15",
    "Longitude": 22.304691071347523,
    "Latitude": -2.256718728887023,
    "Sentiment": "negative"
  },
  {
    "": 181,
    "Unnamed: 0": 181,
    "Tweets": "Terrific discussion on #GettingtoZeroBook @gatesfoundation in beautiful (snowy!) Seattle yesterday. Big thanks to… https://t.co/SpFuY0wMxb",
    "Dates": "2014-01-15",
    "Longitude": 29.150449921442803,
    "Latitude": -2.8310449732382743,
    "Sentiment": "neutral"
  },
  {
    "": 182,
    "Unnamed: 0": 182,
    "Tweets": "BIG JUCIY #FAX\n\n#BattleMemesByOmari #HeyItsOmariPlzBeMyFanCuzImLonely #Kamehameha #Fusions #Gods #Oxygen #Niggadick… https://t.co/fLHvGm3h27",
    "Dates": "2014-01-15",
    "Longitude": 23.05720868902916,
    "Latitude": 5.025180284396449,
    "Sentiment": "neutral"
  },
  {
    "": 183,
    "Unnamed: 0": 183,
    "Tweets": ".@EBioMedicine Pharmacokinetics of TKM-130803 in #SierraLeone  patients with #Ebola virus disease:  plasma concentr… https://t.co/29BoLCN3hY",
    "Dates": "2014-01-15",
    "Longitude": 16.201922077985785,
    "Latitude": 12.294716322663774,
    "Sentiment": "neutral"
  },
  {
    "": 184,
    "Unnamed: 0": 184,
    "Tweets": ".@WHOAFRO  Democratic Republic of Congo: #Ebola Virus Disease - External Situation Report 75  #DRC… https://t.co/ki3nchWeqc",
    "Dates": "2014-01-15",
    "Longitude": 22.54924360658883,
    "Latitude": 4.915089412918817,
    "Sentiment": "neutral"
  },
  {
    "": 185,
    "Unnamed: 0": 185,
    "Tweets": ".@TheLancetInfDis Lancet Infect Dis: Safety and immunogenicity of a highly attenuated rVSVN4CT1-EBOVGP1 #Ebola viru… https://t.co/z8lg50yHZW",
    "Dates": "2014-01-15",
    "Longitude": 18.1252253596403,
    "Latitude": 3.9621519548585398,
    "Sentiment": "positive"
  },
  {
    "": 186,
    "Unnamed: 0": 186,
    "Tweets": "🇨🇩 Together, we are making a difference in the fight against #Ebola in the #DRC. \n\nSince the beginning of the outbr… https://t.co/Fq2Hw1dp5G",
    "Dates": "2014-01-15",
    "Longitude": 23.92840173988505,
    "Latitude": 8.710566254212177,
    "Sentiment": "neutral"
  },
  {
    "": 187,
    "Unnamed: 0": 187,
    "Tweets": "@amymaxmen Some parallels to the #Ebola response? People/communities lacking information and feeling powerless in t… https://t.co/JfiYVBI3fV",
    "Dates": "2014-01-15",
    "Longitude": 21.307019749113078,
    "Latitude": 5.904979611845792,
    "Sentiment": "neutral"
  },
  {
    "": 188,
    "Unnamed: 0": 188,
    "Tweets": "Book - Lest We Forget: A Doctor’s Experience with Life and Death During the #Ebola Outbreak https://t.co/8NpbDu8GCu HT @KwanKew",
    "Dates": "2014-01-15",
    "Longitude": 22.68972962718523,
    "Latitude": 3.784485744173832,
    "Sentiment": "neutral"
  },
  {
    "": 189,
    "Unnamed: 0": 189,
    "Tweets": "Pour l'équipe d'intervention, la crise concernait Ebola, tandis que pour la population, elle concernait la tombe v… https://t.co/GBXfBWyJ18",
    "Dates": "2014-01-15",
    "Longitude": 23.78711503080076,
    "Latitude": 1.7993506502941843,
    "Sentiment": "neutral"
  },
  {
    "": 190,
    "Unnamed: 0": 190,
    "Tweets": "For the response team, the crisis was about Ebola, but for village members it was about the empty grave.\"\n\nWhy it… https://t.co/vxWWcdEptn",
    "Dates": "2014-01-15",
    "Longitude": 15.715750199689651,
    "Latitude": 5.748111154075478,
    "Sentiment": "positive"
  },
  {
    "": 191,
    "Unnamed: 0": 191,
    "Tweets": "An #Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/wTjpDHiux2 via @rtdnews",
    "Dates": "2014-01-15",
    "Longitude": 12.459207878696004,
    "Latitude": 1.6626378981154941,
    "Sentiment": "neutral"
  },
  {
    "": 192,
    "Unnamed: 0": 192,
    "Tweets": "SO I COULD SEE #BILLGATES THE #JEFFYEPSTIENS SUPPORTER BEING CHUMMY W CROUPT #ADAMSHCIFF BUT BILL IS AINT… https://t.co/Nya1YILlkz",
    "Dates": "2014-01-15",
    "Longitude": 21.90642850363491,
    "Latitude": 6.12760984800814,
    "Sentiment": "neutral"
  },
  {
    "": 193,
    "Unnamed: 0": 193,
    "Tweets": "Poster 55 from 4:15-5:15 on Tuesday 28Jan. Happy to talk about #ebola #virus #replication and minigenomes",
    "Dates": "2014-01-15",
    "Longitude": 18.713612837806895,
    "Latitude": 3.5852661738959037,
    "Sentiment": "negative"
  },
  {
    "": 194,
    "Unnamed: 0": 194,
    "Tweets": "Jan 13, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,398: 3,280 confirmed 118 probable.… https://t.co/co4UKhJ8Ig",
    "Dates": "2014-01-14",
    "Longitude": 19.665472687501,
    "Latitude": 10.34022376642881,
    "Sentiment": "neutral"
  },
  {
    "": 195,
    "Unnamed: 0": 195,
    "Tweets": "@amazon prime expands to #ebola! https://t.co/777Qm1W0RB",
    "Dates": "2014-01-14",
    "Longitude": 20.495967004036665,
    "Latitude": 0.2752000656733635,
    "Sentiment": "neutral"
  },
  {
    "": 196,
    "Unnamed: 0": 196,
    "Tweets": "The work of @WHO teams won’t stop until #Ebola epidemic ends. Teams are out every day calling on households in the… https://t.co/pXan98EosU",
    "Dates": "2014-01-14",
    "Longitude": 23.445104485532088,
    "Latitude": 1.548857300916886,
    "Sentiment": "negative"
  },
  {
    "": 197,
    "Unnamed: 0": 197,
    "Tweets": "2. There were 3 cases reported on Sunday, no deaths. I see from the @WHOAFRO #Ebola dashboard that there were 5 cas… https://t.co/7QNMY8IBAq",
    "Dates": "2014-01-14",
    "Longitude": 27.531310594727053,
    "Latitude": 12.702812163127833,
    "Sentiment": "neutral"
  },
  {
    "": 198,
    "Unnamed: 0": 198,
    "Tweets": "1. #Ebola update: \nResponse workers were attacked yesterday at Bandibwame, which I take it is in Lolwa health zone… https://t.co/Z8vq074zOy",
    "Dates": "2014-01-14",
    "Longitude": 18.108030007968143,
    "Latitude": 0.32073420412407794,
    "Sentiment": "neutral"
  },
  {
    "": 199,
    "Unnamed: 0": 199,
    "Tweets": "Mike Elgan Thanks for following me. My fb: https://t.co/uS667xjdMz. Visit and \"Like\" if you like. #civilwar #ebola #history",
    "Dates": "2014-01-14",
    "Longitude": 25.790613233488127,
    "Latitude": -0.46967619445666564,
    "Sentiment": "neutral"
  },
  {
    "": 200,
    "Unnamed: 0": 200,
    "Tweets": "So this is where I've been for the last few weeks!Privileged to be part of the #JnJ #Ebola vaccine trial in #Goma.H… https://t.co/xY20RVxE3S",
    "Dates": "2014-01-14",
    "Longitude": 17.581476171334494,
    "Latitude": 0.5036409621160702,
    "Sentiment": "positive"
  },
  {
    "": 201,
    "Unnamed: 0": 201,
    "Tweets": "#SocialMedia and disaster management: Case of the north and south Kivu regions in the Democratic Republic of the Co… https://t.co/oVxXOs9t0F",
    "Dates": "2014-01-14",
    "Longitude": 18.2006572835718,
    "Latitude": 2.5407931612122567,
    "Sentiment": "neutral"
  },
  {
    "": 202,
    "Unnamed: 0": 202,
    "Tweets": "NEWS SCAN: More #Ebola in DRC; #H3N2 #flu susceptibility https://t.co/XnFCNsAq19 #influenza",
    "Dates": "2014-01-14",
    "Longitude": 23.532381805238,
    "Latitude": 9.244168954959267,
    "Sentiment": "positive"
  },
  {
    "": 203,
    "Unnamed: 0": 203,
    "Tweets": "Dans les communautés locales de #Beni #RDC, la vigilance citoyenne, le suivi quotidien des contacts à risque d'… https://t.co/qLPsC1GH7b",
    "Dates": "2014-01-14",
    "Longitude": 25.396881790810482,
    "Latitude": -0.20732475582609577,
    "Sentiment": "neutral"
  },
  {
    "": 204,
    "Unnamed: 0": 204,
    "Tweets": "Ebola drugs trial raises prospect of cure for deadly disease\nFinancial Times - 13 AUG 2019\n\nIn a trial conducted si… https://t.co/ZpY0Zm7bU7",
    "Dates": "2014-01-14",
    "Longitude": 23.896348749085764,
    "Latitude": -4.338411625502058,
    "Sentiment": "neutral"
  },
  {
    "": 205,
    "Unnamed: 0": 205,
    "Tweets": "OMG. #DRC #Ebola https://t.co/6aklvV7bzE",
    "Dates": "2014-01-14",
    "Longitude": 17.338172460936526,
    "Latitude": 5.739631953151194,
    "Sentiment": "neutral"
  },
  {
    "": 206,
    "Unnamed: 0": 206,
    "Tweets": "@CDCgov @WYMT we are hearing people say that there are confirmed cases of #Ebola being reported in #BarbourvilleKY… https://t.co/MzYonIzTkc",
    "Dates": "2014-01-14",
    "Longitude": 17.00206529760119,
    "Latitude": 6.50249558585122,
    "Sentiment": "neutral"
  },
  {
    "": 207,
    "Unnamed: 0": 207,
    "Tweets": "Dr. Ian Crozier survived #Ebola virus disease &amp; now works with #FredNatLab connecting patient bedside &amp; laboratory… https://t.co/CzGjasmP0v",
    "Dates": "2014-01-14",
    "Longitude": 18.60817961764216,
    "Latitude": 11.381927981025616,
    "Sentiment": "neutral"
  },
  {
    "": 208,
    "Unnamed: 0": 208,
    "Tweets": "An #Ebola #vaccine used to be a pipe dream — until the tireless work of scientists around the world made it a reali… https://t.co/H3jrgfIieS",
    "Dates": "2014-01-14",
    "Longitude": 25.227093812394003,
    "Latitude": 8.155647387498277,
    "Sentiment": "positive"
  },
  {
    "": 209,
    "Unnamed: 0": 209,
    "Tweets": "#AFROWeekly Health Emergencies Bulletin Week 2/2014 is out. @WHOAFRO monitored 68 health emergency events in… https://t.co/GU5olUM997",
    "Dates": "2014-01-14",
    "Longitude": 20.065639062990844,
    "Latitude": 2.1418886942355058,
    "Sentiment": "negative"
  },
  {
    "": 210,
    "Unnamed: 0": 210,
    "Tweets": "In Congo zijn ondertussen *6000* peuters overleden aan de Mazelen, dat is bijna 3x zo veel als het totaal aantal EB… https://t.co/kX4A8MEGIF",
    "Dates": "2014-01-14",
    "Longitude": 19.612089575303976,
    "Latitude": 5.087586605662223,
    "Sentiment": "neutral"
  },
  {
    "": 211,
    "Unnamed: 0": 211,
    "Tweets": "Happy New Year! First #podcast of the year is up now. We talk about the big #science stories of 2019 and look ahead… https://t.co/DAxt8j2Xt4",
    "Dates": "2014-01-14",
    "Longitude": 20.174924293666038,
    "Latitude": 6.7509692270368085,
    "Sentiment": "positive"
  },
  {
    "": 212,
    "Unnamed: 0": 212,
    "Tweets": "Don't forget your #FDA approved #Ebola vaccine with your next flu shot. Because science is settled and vaccines are… https://t.co/APJjZU5R2K",
    "Dates": "2014-01-14",
    "Longitude": 28.117874114254604,
    "Latitude": 3.227540628005694,
    "Sentiment": "neutral"
  },
  {
    "": 213,
    "Unnamed: 0": 213,
    "Tweets": "Ebola vaccine approved by FDA, 100% effective in preventing Ebola.\n\n#science #FDA #ebola #virus #virology… https://t.co/LvXSTkz7XU",
    "Dates": "2014-01-14",
    "Longitude": 17.6256910995632,
    "Latitude": 3.468118731122403,
    "Sentiment": "negative"
  },
  {
    "": 214,
    "Unnamed: 0": 214,
    "Tweets": "Well this is an interesting development. #Ebola #WUT 😳😳😳😷🚑🚨🦠💉❌🆘📢",
    "Dates": "2014-01-14",
    "Longitude": 26.548512922983296,
    "Latitude": 4.907700902767779,
    "Sentiment": "neutral"
  },
  {
    "": 215,
    "Unnamed: 0": 215,
    "Tweets": "PREVAC-UP: The Partnership for Research on Ebola Vaccination extends follow-up https://t.co/hQW20PDPTg via… https://t.co/0afEqJfeg8",
    "Dates": "2014-01-14",
    "Longitude": 25.376776323533953,
    "Latitude": 0.5345120081461254,
    "Sentiment": "neutral"
  },
  {
    "": 216,
    "Unnamed: 0": 216,
    "Tweets": "DRC #Ebola: 5 new cases on January 13, 3,403 total https://t.co/BOKFW1OCuo",
    "Dates": "2014-01-14",
    "Longitude": 17.9963086966272,
    "Latitude": 0.011681421610052034,
    "Sentiment": "neutral"
  },
  {
    "": 217,
    "Unnamed: 0": 217,
    "Tweets": "Dans les communautés locales de #Beni #RDC, la vigilance citoyenne, le suivi quotidien des contacts à risque d'… https://t.co/UqQjucwD9z",
    "Dates": "2014-01-14",
    "Longitude": 24.704359707906775,
    "Latitude": 3.3442540445032587,
    "Sentiment": "positive"
  },
  {
    "": 218,
    "Unnamed: 0": 218,
    "Tweets": "New Free Associations #podcast #episode: Matt, Chris, and Jen examine a study on new treatments for #Ebola, they di… https://t.co/4hBB3txKjK",
    "Dates": "2014-01-14",
    "Longitude": 21.41161328267943,
    "Latitude": 10.053489307694884,
    "Sentiment": "neutral"
  },
  {
    "": 219,
    "Unnamed: 0": 219,
    "Tweets": "Les Forces Alliées Démocratiques groupe #islamiste ougandais ont attaqué sans succès un poste #MINUSCO dans l’… https://t.co/VZt09BtSlT",
    "Dates": "2014-01-14",
    "Longitude": 22.01975389407054,
    "Latitude": 3.121708220333365,
    "Sentiment": "neutral"
  },
  {
    "": 220,
    "Unnamed: 0": 220,
    "Tweets": "#AFROWeekly Health Emergencies Bulletin Week 2/2014 is out. @WHOAfro monitored 68 health #emergency events in… https://t.co/pLShkjGyw1",
    "Dates": "2014-01-14",
    "Longitude": 22.68435426086308,
    "Latitude": 6.994430652253195,
    "Sentiment": "neutral"
  },
  {
    "": 221,
    "Unnamed: 0": 221,
    "Tweets": "DRC #Ebola: CMRE update, January 13 https://t.co/71DjG8JfQj",
    "Dates": "2014-01-14",
    "Longitude": 26.10213041501791,
    "Latitude": 1.6203283581595707,
    "Sentiment": "neutral"
  },
  {
    "": 222,
    "Unnamed: 0": 222,
    "Tweets": "Kahindo is the director of Komanda Primary School in #DRCongo where 3000 students begin their day with lessons on h… https://t.co/0rrh94pjEo",
    "Dates": "2014-01-14",
    "Longitude": 22.82955387627908,
    "Latitude": 4.773122800210384,
    "Sentiment": "positive"
  },
  {
    "": 223,
    "Unnamed: 0": 223,
    "Tweets": "#Ebola vaccine trail ongoing in #DRC. Great collaborative effort. https://t.co/jtkOZ5JBpe",
    "Dates": "2014-01-14",
    "Longitude": 24.723033056579528,
    "Latitude": 5.308873570672436,
    "Sentiment": "neutral"
  },
  {
    "": 224,
    "Unnamed: 0": 224,
    "Tweets": "PREVAC-UP: The Partnership for Research on Ebola Vaccination extends follow-up and builds research capacity against… https://t.co/CVoqZRTKzC",
    "Dates": "2014-01-14",
    "Longitude": 21.36054294286588,
    "Latitude": -2.6371094836670324,
    "Sentiment": "positive"
  },
  {
    "": 225,
    "Unnamed: 0": 225,
    "Tweets": "The CUBE makes it possible for health workers to safely provide more intensive care to #Ebola patients. Watch Dr. K… https://t.co/HzT1TxRTZ9",
    "Dates": "2014-01-14",
    "Longitude": 27.926175824729796,
    "Latitude": 4.394301326278389,
    "Sentiment": "neutral"
  },
  {
    "": 226,
    "Unnamed: 0": 226,
    "Tweets": "Min Gould toured @WHO’s Africa Regional Office today. The Centre helps to promote health &amp; coordinate responses to… https://t.co/lko2fZQ3yU",
    "Dates": "2014-01-14",
    "Longitude": 19.562172834385727,
    "Latitude": 2.7854006741268043,
    "Sentiment": "positive"
  },
  {
    "": 227,
    "Unnamed: 0": 227,
    "Tweets": "Opened Special Issue \"Vaccines for Ebola Virus and Related Diseases\" by Guest Editor Prof. David A. Schwartz. Recei… https://t.co/WZFzJi11AM",
    "Dates": "2014-01-14",
    "Longitude": 22.290221458795884,
    "Latitude": 8.045719314550698,
    "Sentiment": "neutral"
  },
  {
    "": 228,
    "Unnamed: 0": 228,
    "Tweets": "Aujourd'hui, la min. Gould a visité le bureau africain de l'@OMS, qui promeut la santé et coordonne les réponses au… https://t.co/1xZgx6Xbs0",
    "Dates": "2014-01-14",
    "Longitude": 25.84326776135285,
    "Latitude": 0.027156268119171045,
    "Sentiment": "positive"
  },
  {
    "": 229,
    "Unnamed: 0": 229,
    "Tweets": "Check out Prof Lokesh Joshi's article for @rte discussing how @nuigalway based start-up Aquila Bioscience hope to h… https://t.co/mVUrhpVYY8",
    "Dates": "2014-01-14",
    "Longitude": 19.666651013970338,
    "Latitude": 2.695715736300544,
    "Sentiment": "neutral"
  },
  {
    "": 230,
    "Unnamed: 0": 230,
    "Tweets": "#Ituri : 4 blessés dans une attaque des équipes de la riposte contre #Ebola par « la communauté » à #Bandibwame… https://t.co/1J2D11w0VZ",
    "Dates": "2014-01-14",
    "Longitude": 25.936275295761114,
    "Latitude": 4.544555864301049,
    "Sentiment": "positive"
  },
  {
    "": 231,
    "Unnamed: 0": 231,
    "Tweets": "#Pandemic Threats and Health #Emergencies \nNews Pouch 14 January 2014 \nHighlights latest research and policy articl… https://t.co/sFyroAwbn2",
    "Dates": "2014-01-14",
    "Longitude": 25.201425852222175,
    "Latitude": -0.13352169996203234,
    "Sentiment": "neutral"
  },
  {
    "": 232,
    "Unnamed: 0": 232,
    "Tweets": "Latest figures show DRC Ebola outbreak is second biggest on record\nhttps://t.co/jnilZxcz2n\n#DRC #Ebola https://t.co/X9Y4oZAgiH",
    "Dates": "2014-01-14",
    "Longitude": 16.061336707266328,
    "Latitude": 5.051142878467219,
    "Sentiment": "neutral"
  },
  {
    "": 233,
    "Unnamed: 0": 233,
    "Tweets": "The #Democratic Republic of Congo (DRC) is grappling with the world’s second biggest #Ebola outbreak on record, the… https://t.co/AoT7JTcW0A",
    "Dates": "2014-01-14",
    "Longitude": 21.289136767785724,
    "Latitude": 6.728055688693285,
    "Sentiment": "neutral"
  },
  {
    "": 234,
    "Unnamed: 0": 234,
    "Tweets": "‘Against all odds’: The inside story of how scientists across three continents produced an #Ebola #vaccine. https://t.co/wxaooqbwls",
    "Dates": "2014-01-14",
    "Longitude": 21.818944784811865,
    "Latitude": -2.949513073769597,
    "Sentiment": "positive"
  },
  {
    "": 235,
    "Unnamed: 0": 235,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/Biq6MnCRye $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/Wbf7J822y4",
    "Dates": "2014-01-14",
    "Longitude": 25.231479824051743,
    "Latitude": 5.612953986628209,
    "Sentiment": "positive"
  },
  {
    "": 236,
    "Unnamed: 0": 236,
    "Tweets": "Lutte contre la maladie à #virus #Ebola           https://t.co/QEUJuB4Xrz",
    "Dates": "2014-01-14",
    "Longitude": 21.641476662430843,
    "Latitude": 4.4607499127386765,
    "Sentiment": "neutral"
  },
  {
    "": 237,
    "Unnamed: 0": 237,
    "Tweets": "@cstambul @Validamentre Cristo si è fermato CON l'#ebola!",
    "Dates": "2014-01-14",
    "Longitude": 15.650684102305934,
    "Latitude": 7.829363045488483,
    "Sentiment": "positive"
  },
  {
    "": 238,
    "Unnamed: 0": 238,
    "Tweets": "Im @dlfkultur: Historiker Hubertus Büschel zur Geschichte der #Entwicklungszusammenarbeit. +++ Budget für @BNITM_de… https://t.co/GitOp8jTuJ",
    "Dates": "2014-01-14",
    "Longitude": 25.001281474776572,
    "Latitude": 7.765928973288975,
    "Sentiment": "neutral"
  },
  {
    "": 239,
    "Unnamed: 0": 239,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/8e2VrdBDCM",
    "Dates": "2014-01-14",
    "Longitude": 15.750252712320837,
    "Latitude": 2.06373297255099,
    "Sentiment": "positive"
  },
  {
    "": 240,
    "Unnamed: 0": 240,
    "Tweets": "@sono_farmaci @Validamentre E poi... “Cristo si è fermato a #Ebola”",
    "Dates": "2014-01-14",
    "Longitude": 25.73020642295657,
    "Latitude": 8.863712715548687,
    "Sentiment": "neutral"
  },
  {
    "": 241,
    "Unnamed: 0": 241,
    "Tweets": "#Houston #Health #Museum eye-opening conversation on the harrowing accounts of the #Ebola outbreak in African… https://t.co/IMpGYLNEg4",
    "Dates": "2014-01-14",
    "Longitude": 29.581167262328513,
    "Latitude": 5.451169011584093,
    "Sentiment": "neutral"
  },
  {
    "": 242,
    "Unnamed: 0": 242,
    "Tweets": "#RDC #ITURI Quatre blessés dont deux graves bilan d'une attaqué  des hommes armés non identifiés contre une équipe… https://t.co/HztWEZxdJu",
    "Dates": "2014-01-14",
    "Longitude": 28.641639025269587,
    "Latitude": 7.528622983744908,
    "Sentiment": "neutral"
  },
  {
    "": 243,
    "Unnamed: 0": 243,
    "Tweets": "ongoing crisis highlights urgent need to develop safe, effective #vaccines against #Ebola. goal has been priority f… https://t.co/9wghu8eFW0",
    "Dates": "2014-01-14",
    "Longitude": 23.980308601660873,
    "Latitude": 5.519911773256795,
    "Sentiment": "neutral"
  },
  {
    "": 244,
    "Unnamed: 0": 244,
    "Tweets": "Here are ten big moments that will stick with us—and could continue to shape #TheFutureOf health for us all &gt;&gt;… https://t.co/CrDh0MsM5j",
    "Dates": "2014-01-14",
    "Longitude": 18.120293537933577,
    "Latitude": 9.328262893069315,
    "Sentiment": "neutral"
  },
  {
    "": 245,
    "Unnamed: 0": 245,
    "Tweets": "“I explain that people are often [#Ebola] vaccinated without consent...[WHO press officer] replies that they must h… https://t.co/VvLJ1Iustw",
    "Dates": "2014-01-14",
    "Longitude": 22.56705956620982,
    "Latitude": 2.232604448949,
    "Sentiment": "positive"
  },
  {
    "": 246,
    "Unnamed: 0": 246,
    "Tweets": "L'@IOMBurundi en collaboration avec le @mspls_bdi avec le soutien de @DFID_UK\n @JapanGov\n &amp; @UEauBurundi\na organisé… https://t.co/z0GQuvc01i",
    "Dates": "2014-01-14",
    "Longitude": 25.50015046430451,
    "Latitude": -0.5914796614957538,
    "Sentiment": "positive"
  },
  {
    "": 247,
    "Unnamed: 0": 247,
    "Tweets": "Buried alive: lessons from #Haitiearthquake ⁦@baltimoresun⁩ #disasterresponse #Ebola #malaria #Haiti  https://t.co/szjw4jaXCi",
    "Dates": "2014-01-14",
    "Longitude": 24.111481256038505,
    "Latitude": 3.414331851288911,
    "Sentiment": "neutral"
  },
  {
    "": 248,
    "Unnamed: 0": 248,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 410 suspected/3398 total confirmed &amp; probable cases (118 probable/3280 confirmed… https://t.co/7ssLaeVvuS",
    "Dates": "2014-01-14",
    "Longitude": 18.522509022343122,
    "Latitude": 7.80366457185151,
    "Sentiment": "neutral"
  },
  {
    "": 249,
    "Unnamed: 0": 249,
    "Tweets": "L'épidémie de la maladie à virus #Ebola n'est pas encore terminée. Nos équipes travaillent chaq jr &amp; visitent les m… https://t.co/DaJW1G0paC",
    "Dates": "2014-01-14",
    "Longitude": 17.624934069720833,
    "Latitude": 3.196712182331451,
    "Sentiment": "neutral"
  },
  {
    "": 250,
    "Unnamed: 0": 250,
    "Tweets": "#Burundi @MuyingaProvince  au point d'entrée de suveillance #Ebola en commune #butihinda, frontière #Kobero, les in… https://t.co/4GhC5RTXc6",
    "Dates": "2014-01-14",
    "Longitude": 22.851526596147178,
    "Latitude": -0.3950001627648545,
    "Sentiment": "neutral"
  },
  {
    "": 251,
    "Unnamed: 0": 251,
    "Tweets": "Great to host Hon Karina Gould, Canada’s Minister for International Development in the SHOC room, our emergencies n… https://t.co/2izqAnGAXP",
    "Dates": "2014-01-14",
    "Longitude": 26.262649959744895,
    "Latitude": 3.9327296468097335,
    "Sentiment": "positive"
  },
  {
    "": 252,
    "Unnamed: 0": 252,
    "Tweets": "@HelenBranswell: At start of the 2018 #DRC outbreak we had #Ebola #vaccine. Why didn't @WHO role it out en masse? W… https://t.co/Mv37VzE1Cz",
    "Dates": "2014-01-14",
    "Longitude": 23.667574158192135,
    "Latitude": 11.320015346005764,
    "Sentiment": "neutral"
  },
  {
    "": 253,
    "Unnamed: 0": 253,
    "Tweets": "#Ebola « Pourquoi ça ne finit pas ? » : l’inquiétude monte après la réapparition du virus dans des localités de l’e… https://t.co/QqEm3IPLG9",
    "Dates": "2014-01-14",
    "Longitude": 22.51304144068489,
    "Latitude": 5.275494578280825,
    "Sentiment": "neutral"
  },
  {
    "": 254,
    "Unnamed: 0": 254,
    "Tweets": "Looking at total health ODA spend in Sierra Leone only tiny fraction in health workforce development and this has d… https://t.co/koAn4TqUca",
    "Dates": "2014-01-14",
    "Longitude": 15.800659008858922,
    "Latitude": -0.06130881754430373,
    "Sentiment": "neutral"
  },
  {
    "": 255,
    "Unnamed: 0": 255,
    "Tweets": "#RDC #Canada La ministre Gould, sera en #RC et en #RDCongo cette semaine pour travailler avec les partenaires du Ca… https://t.co/ffctWpc53W",
    "Dates": "2014-01-14",
    "Longitude": 24.281758381674514,
    "Latitude": 0.6383345091441801,
    "Sentiment": "negative"
  },
  {
    "": 256,
    "Unnamed: 0": 256,
    "Tweets": "Pour ceux qui ont aimé #Chernobyl, le drama scientifico-catastrophe #TheHotZone est très fort aussi, et bien trop s… https://t.co/0FF80y2pBy",
    "Dates": "2014-01-14",
    "Longitude": 24.936790143932733,
    "Latitude": -3.8619507799803836,
    "Sentiment": "neutral"
  },
  {
    "": 257,
    "Unnamed: 0": 257,
    "Tweets": "@ShPublicHealth Answering your own question: Many #Africans continue to die from preventable diseases (#Ebola,… https://t.co/g9PxgSryoH",
    "Dates": "2014-01-14",
    "Longitude": 24.24753213287721,
    "Latitude": 6.740538472382493,
    "Sentiment": "neutral"
  },
  {
    "": 258,
    "Unnamed: 0": 258,
    "Tweets": "#ebola , How do you make a corner move ? Antarctic continent",
    "Dates": "2014-01-14",
    "Longitude": 22.082089779872,
    "Latitude": 3.3468881954219856,
    "Sentiment": "neutral"
  },
  {
    "": 259,
    "Unnamed: 0": 259,
    "Tweets": "Medical professionals need to find a way to counter the anti-vaccine media empire by mounting a vigorous pro-vacci… https://t.co/8O4gikx6A0",
    "Dates": "2014-01-14",
    "Longitude": 18.16083716885563,
    "Latitude": 5.8604911298929485,
    "Sentiment": "positive"
  },
  {
    "": 260,
    "Unnamed: 0": 260,
    "Tweets": "Check out the @Cardno  @P4_Project's video gallery. It highlights activities leading to better public health outcom… https://t.co/kwJtmfpY4P",
    "Dates": "2014-01-14",
    "Longitude": 19.46469293922888,
    "Latitude": 0.8448507120108641,
    "Sentiment": "neutral"
  },
  {
    "": 261,
    "Unnamed: 0": 261,
    "Tweets": "Best written summary of the #Ebola #DRC outbreak I have read. Zero hubris. Add in the additional missteps by the go… https://t.co/chJyUmEYtJ",
    "Dates": "2014-01-14",
    "Longitude": 17.61688895606132,
    "Latitude": -1.700718072019236,
    "Sentiment": "neutral"
  },
  {
    "": 262,
    "Unnamed: 0": 262,
    "Tweets": "Grâce au soutien de @DFID_UK @JapanGov &amp; @UEauBurundi, la semaine dernière l'OIM a collaboré avec @mspls_bdi pour m… https://t.co/cXjE5ZJhR9",
    "Dates": "2014-01-14",
    "Longitude": 21.8330228801356,
    "Latitude": -4.854982188915303,
    "Sentiment": "neutral"
  },
  {
    "": 263,
    "Unnamed: 0": 263,
    "Tweets": "Bien que #Ebola fait des morts, croire à son existence n'est pas facile pour certains habitants. @OMSRDCONGO… https://t.co/Zs9TJPgQSE",
    "Dates": "2014-01-14",
    "Longitude": 24.816571113064562,
    "Latitude": 5.170341397729475,
    "Sentiment": "neutral"
  },
  {
    "": 264,
    "Unnamed: 0": 264,
    "Tweets": "En 2014, 16 meses después del inicio del brote de #ebola en el #Congo , el virus sigue muy presente. Ya van 2.232 m… https://t.co/vHgdmE8DpI",
    "Dates": "2014-01-14",
    "Longitude": 26.337213668482473,
    "Latitude": -0.2600195797749745,
    "Sentiment": "neutral"
  },
  {
    "": 265,
    "Unnamed: 0": 265,
    "Tweets": "🇨🇩 | El #ébola sigue muy presente en la República Democrática del Congo.\n\n👤 @Evissx\n\nhttps://t.co/3JjEbCKODH https://t.co/NWGewSlcQi",
    "Dates": "2014-01-14",
    "Longitude": 15.635895237498222,
    "Latitude": 5.321051561688693,
    "Sentiment": "neutral"
  },
  {
    "": 266,
    "Unnamed: 0": 266,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 13 janvier 2014 \nhttps://t.co/NLTCOK8uQg",
    "Dates": "2014-01-14",
    "Longitude": 16.36308551447815,
    "Latitude": 5.935877647421061,
    "Sentiment": "positive"
  },
  {
    "": 267,
    "Unnamed: 0": 267,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 13 janvier 2014 https://t.co/eqDqub57q1",
    "Dates": "2014-01-14",
    "Longitude": 7.432908195284231,
    "Latitude": 2.1183954767861524,
    "Sentiment": "positive"
  },
  {
    "": 268,
    "Unnamed: 0": 268,
    "Tweets": "So utterly #humlbed to support this incredible human being @MandewaCole and his team @TheLNP A true inspiration - w… https://t.co/wNQxB5MLpB",
    "Dates": "2014-01-14",
    "Longitude": 20.83596561476795,
    "Latitude": 3.3292722176310465,
    "Sentiment": "neutral"
  },
  {
    "": 269,
    "Unnamed: 0": 269,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/2L0R7NaVAG",
    "Dates": "2014-01-14",
    "Longitude": 26.732813437756995,
    "Latitude": 4.954174690154862,
    "Sentiment": "neutral"
  },
  {
    "": 270,
    "Unnamed: 0": 270,
    "Tweets": "Zones de santé les plus affectées par l'#épidémie d'#Ebola en #RDC https://t.co/ecoFE79rVg",
    "Dates": "2014-01-14",
    "Longitude": 20.451837900273915,
    "Latitude": 1.0349655320992714,
    "Sentiment": "positive"
  },
  {
    "": 271,
    "Unnamed: 0": 271,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 13 janvier 2014 https://t.co/TntGK9Bxxv",
    "Dates": "2014-01-14",
    "Longitude": 19.46702459607672,
    "Latitude": 7.612962610619004,
    "Sentiment": "neutral"
  },
  {
    "": 272,
    "Unnamed: 0": 272,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 13 Janvier 2014 avec les données collectées jusqu'au 12.01.2014 👇🏾\n\n➡… https://t.co/MuCcPdKlsL",
    "Dates": "2014-01-14",
    "Longitude": 21.134780471354706,
    "Latitude": 0.8299510769775638,
    "Sentiment": "neutral"
  },
  {
    "": 273,
    "Unnamed: 0": 273,
    "Tweets": "Can We Reach 75 Followers for this Account Please\n#BattleMemesByOmari #HeyGuysItsOmariPlzBeMyFanCuzImLonely… https://t.co/3THCZV95Yo",
    "Dates": "2014-01-14",
    "Longitude": 23.228022270408417,
    "Latitude": 6.04672055331954,
    "Sentiment": "neutral"
  },
  {
    "": 274,
    "Unnamed: 0": 274,
    "Tweets": "14/01/2019 The fight against #Ebola virus  continues , the staff of @KinihiraProvin1 were reminded about how to to… https://t.co/wdQY5NmQnA",
    "Dates": "2014-01-14",
    "Longitude": 27.128844778435933,
    "Latitude": -1.8108203385391581,
    "Sentiment": "neutral"
  },
  {
    "": 275,
    "Unnamed: 0": 275,
    "Tweets": "#RDCongo #Ebola : 3 nouveaux cas enregistrés à Beni après une période d’un mois sans cas positif\nhttps://t.co/LHpB6g9FAC",
    "Dates": "2014-01-14",
    "Longitude": 15.33943185252749,
    "Latitude": 3.1574572290733887,
    "Sentiment": "neutral"
  },
  {
    "": 276,
    "Unnamed: 0": 276,
    "Tweets": "#Ebola #DRC #youthinvolvement https://t.co/R0CcYKCdA7",
    "Dates": "2014-01-14",
    "Longitude": 20.730548265883666,
    "Latitude": 1.6651508838869473,
    "Sentiment": "positive"
  },
  {
    "": 277,
    "Unnamed: 0": 277,
    "Tweets": "Tout de même, aucune nouvelle province ni zone de santé n’a rapporté un nouveau cas confirmé ou probable d'#Ebola.… https://t.co/6FryzRfvVk",
    "Dates": "2014-01-14",
    "Longitude": 17.101511508472697,
    "Latitude": 2.5228784451356026,
    "Sentiment": "neutral"
  },
  {
    "": 278,
    "Unnamed: 0": 278,
    "Tweets": "Une nouvelle aire de santé (AS) a rapporté un cas confirmé de la maladie à virus #Ebola dans la zone de santé de Mu… https://t.co/wFMJz2YflR",
    "Dates": "2014-01-14",
    "Longitude": 20.553150104753733,
    "Latitude": 2.060252017274061,
    "Sentiment": "neutral"
  },
  {
    "": 279,
    "Unnamed: 0": 279,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 13 jan; données du 12 jan 2014 incluant le récapitu… https://t.co/NF7cX8JXTw",
    "Dates": "2014-01-14",
    "Longitude": 28.6058904757005,
    "Latitude": 1.167747184167971,
    "Sentiment": "positive"
  },
  {
    "": 280,
    "Unnamed: 0": 280,
    "Tweets": "Thanks to the DRC army for rescuing some of our team members who were attacked in Badibwame #DRCongo while supporti… https://t.co/OSkpstr80x",
    "Dates": "2014-01-14",
    "Longitude": 22.248126132077285,
    "Latitude": 6.570041362682225,
    "Sentiment": "neutral"
  },
  {
    "": 281,
    "Unnamed: 0": 281,
    "Tweets": "Sensitizing young people in Butembo #DRCongo on the importance of vaccination as prevention against #Ebola virus in… https://t.co/lXvpNe8upW",
    "Dates": "2014-01-14",
    "Longitude": 25.66099926649491,
    "Latitude": 4.364663147057033,
    "Sentiment": "neutral"
  },
  {
    "": 282,
    "Unnamed: 0": 282,
    "Tweets": "Sensitizing young people in Butembo #DRCongo on the importance of vaccination as prevention against #Ebola virus in… https://t.co/ADPdMlChx8",
    "Dates": "2014-01-14",
    "Longitude": 33.74898552736285,
    "Latitude": 6.199753577946414,
    "Sentiment": "neutral"
  },
  {
    "": 283,
    "Unnamed: 0": 283,
    "Tweets": "Ten days after being in contact with an #Ebola patient, the 22-year old man was intercepted at an #Ebola  checkpoin… https://t.co/K6nLQduJqf",
    "Dates": "2014-01-14",
    "Longitude": 15.952242819234307,
    "Latitude": 1.1981067390681805,
    "Sentiment": "neutral"
  },
  {
    "": 284,
    "Unnamed: 0": 284,
    "Tweets": "Ten days after being in contact with an #Ebola patient, the 22-year old man was intercepted at an #Ebola  checkpoin… https://t.co/m0jwOsOs45",
    "Dates": "2014-01-14",
    "Longitude": 25.21018304752737,
    "Latitude": -1.453592118343514,
    "Sentiment": "positive"
  },
  {
    "": 285,
    "Unnamed: 0": 285,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/jt375rftbh $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/fzngl5w4LG",
    "Dates": "2014-01-14",
    "Longitude": 23.119118177769064,
    "Latitude": 3.934262669817822,
    "Sentiment": "neutral"
  },
  {
    "": 286,
    "Unnamed: 0": 286,
    "Tweets": "News Scan for Jan 13, 2014 https://t.co/mRF5lpes3r  #Ebola",
    "Dates": "2014-01-14",
    "Longitude": 17.837574224016283,
    "Latitude": 6.170201605423898,
    "Sentiment": "negative"
  },
  {
    "": 287,
    "Unnamed: 0": 287,
    "Tweets": "PREVAC-UP : L’étude évaluera également l’effet des co-infections, comme la malaria et les helminthes, sur la répons… https://t.co/axdtVLu2zu",
    "Dates": "2014-01-14",
    "Longitude": 19.756281684342696,
    "Latitude": 2.954382251506837,
    "Sentiment": "neutral"
  },
  {
    "": 288,
    "Unnamed: 0": 288,
    "Tweets": "#Ethics case: How should Dr R reconcile the cultural importance of honoring local burial rituals with his obligatio… https://t.co/hd21qXezjd",
    "Dates": "2014-01-14",
    "Longitude": 25.31487489782616,
    "Latitude": 8.283748881506675,
    "Sentiment": "neutral"
  },
  {
    "": 289,
    "Unnamed: 0": 289,
    "Tweets": "Please follow @sl_child to hear about the work with #ebola #orphans in #tombo #SierraLeone @idriselba https://t.co/68YOy9Dag6",
    "Dates": "2014-01-13",
    "Longitude": 17.296119583715,
    "Latitude": 5.428578435723194,
    "Sentiment": "negative"
  },
  {
    "": 290,
    "Unnamed: 0": 290,
    "Tweets": "@CIDRAP News Scan for January 13 https://t.co/7k2ayZ4R87 #Ebola #CWD #vaccination #avianflu",
    "Dates": "2014-01-13",
    "Longitude": 21.758889039707277,
    "Latitude": 3.5710568363400874,
    "Sentiment": "positive"
  },
  {
    "": 291,
    "Unnamed: 0": 291,
    "Tweets": "Couldn't agree more–effective engagement at all levels has been critical to scaling up access to effective #Ebola i… https://t.co/D6JzLWsWz7",
    "Dates": "2014-01-13",
    "Longitude": 20.01955136063215,
    "Latitude": 3.624873617956903,
    "Sentiment": "neutral"
  },
  {
    "": 292,
    "Unnamed: 0": 292,
    "Tweets": "NEWS SCAN: New DRC #Ebola cases; More #CWD in Minnesota; Mandatory vaccination in Europe; #Avianflu in 3 nations… https://t.co/KlMR2aIUkF",
    "Dates": "2014-01-13",
    "Longitude": 28.539066034238665,
    "Latitude": -1.2378745028403362,
    "Sentiment": "neutral"
  },
  {
    "": 293,
    "Unnamed: 0": 293,
    "Tweets": "Great piece on the distrust that permeates the #Congo #Ebola response, and how an anthropologist is trying to turn… https://t.co/v5P9MKkLTG",
    "Dates": "2014-01-13",
    "Longitude": 20.733820241988994,
    "Latitude": 7.739615528894145,
    "Sentiment": "neutral"
  },
  {
    "": 294,
    "Unnamed: 0": 294,
    "Tweets": "13ene2014 #NacionalDSN R.D.#Congo - Seguridad frente a pandemias y epidemias #Ébola https://t.co/XaAUr6CPpd @WHO➡️… https://t.co/QKq6md5d6K",
    "Dates": "2014-01-13",
    "Longitude": 18.309336584031026,
    "Latitude": 5.706048240446787,
    "Sentiment": "neutral"
  },
  {
    "": 295,
    "Unnamed: 0": 295,
    "Tweets": "#Ebola au Nord-Kivu: 3 nouveaux cas confirmés  dans la zone de santé de #Beni\n\n#RDC\n https://t.co/XnNgtWEGEr via @ElectionNet",
    "Dates": "2014-01-13",
    "Longitude": 18.4001650969183,
    "Latitude": 5.276104224653388,
    "Sentiment": "positive"
  },
  {
    "": 296,
    "Unnamed: 0": 296,
    "Tweets": "Sometimes guidelines can have major impact.  These have helped change the management options available for dealing… https://t.co/5Mzmi4NCmu",
    "Dates": "2014-01-13",
    "Longitude": 18.19782227610343,
    "Latitude": 0.44906240708185097,
    "Sentiment": "negative"
  },
  {
    "": 297,
    "Unnamed: 0": 297,
    "Tweets": "Jophet survived #Ebola, but lost his son, wife &amp; mother to the disease. He now cares for children at a @UNICEF-supp… https://t.co/R7zsLyBOSD",
    "Dates": "2014-01-13",
    "Longitude": 23.434333131152048,
    "Latitude": 7.627558445494373,
    "Sentiment": "neutral"
  },
  {
    "": 298,
    "Unnamed: 0": 298,
    "Tweets": "#Ébola: la preocupación aumenta después de que el virus reaparece en localidades del este de la RDC https://t.co/tIXi1HyTzD",
    "Dates": "2014-01-13",
    "Longitude": 19.99225765924745,
    "Latitude": 4.151061082957685,
    "Sentiment": "negative"
  },
  {
    "": 299,
    "Unnamed: 0": 299,
    "Tweets": "“In less than half a decade, #Ebola has gone from being nearly a death sentence to a #vaccine-preventable disease.”… https://t.co/BNIWsG1d5s",
    "Dates": "2014-01-13",
    "Longitude": 19.39526345382976,
    "Latitude": 3.611172970833731,
    "Sentiment": "neutral"
  },
  {
    "": 300,
    "Unnamed: 0": 300,
    "Tweets": "when I go to Africa for vacation\nWatch for Ebola \n#memes\n#africa\n#rassism \n#Ebola https://t.co/yOA0rq3tKq",
    "Dates": "2014-01-13",
    "Longitude": 23.959700537937202,
    "Latitude": 0.6579740007518677,
    "Sentiment": "neutral"
  },
  {
    "": 301,
    "Unnamed: 0": 301,
    "Tweets": "Once #ERVEBO induced immunity wears off, an #Ebola infection can be expected to be even more severe due to an aller… https://t.co/3e8xh4BLJn",
    "Dates": "2014-01-13",
    "Longitude": 15.840745852276282,
    "Latitude": 1.5704680479053552,
    "Sentiment": "positive"
  },
  {
    "": 302,
    "Unnamed: 0": 302,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/0AanN4Y0A3 $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/PLBbvIEJoQ",
    "Dates": "2014-01-13",
    "Longitude": 23.200248157252016,
    "Latitude": 3.647864156466747,
    "Sentiment": "neutral"
  },
  {
    "": 303,
    "Unnamed: 0": 303,
    "Tweets": "Regardez comment les acteurs de la riposte contre la maladie à virus #EBOLA sont menacés à la machette à l'est du p… https://t.co/D5eOJD6sad",
    "Dates": "2014-01-13",
    "Longitude": 29.369373613031875,
    "Latitude": 0.406380039279266,
    "Sentiment": "positive"
  },
  {
    "": 304,
    "Unnamed: 0": 304,
    "Tweets": "Heureuse d'avoir participé en réalisant #illustration de couverture et ornements de texte.\n\"LES SURVIVANTES, Parole… https://t.co/n22kxH4yFi",
    "Dates": "2014-01-13",
    "Longitude": 27.11175458458134,
    "Latitude": 1.7891823337780046,
    "Sentiment": "neutral"
  },
  {
    "": 305,
    "Unnamed: 0": 305,
    "Tweets": "Écouter Bulletin Koma Ebola Du 13 Janvvier 2014 Kinande. A #Butembo, une campagne de vaccination contre le virus… https://t.co/r6ECQPCbWR",
    "Dates": "2014-01-13",
    "Longitude": 27.70032224434425,
    "Latitude": 2.0771124349842474,
    "Sentiment": "neutral"
  },
  {
    "": 306,
    "Unnamed: 0": 306,
    "Tweets": "Écouter Bulletin Koma Ebola Du 13 Janvier 2014 Swahili. A #Butembo, une campagne de vaccination contre le virus… https://t.co/GQu8PVwhSR",
    "Dates": "2014-01-13",
    "Longitude": 19.511750157673287,
    "Latitude": -0.5508772277341647,
    "Sentiment": "neutral"
  },
  {
    "": 307,
    "Unnamed: 0": 307,
    "Tweets": "Écouter Bulletin Koma Ebola Du 13 Janvier 2014 Français. A #Butembo, une campagne de vaccination contre le virus… https://t.co/ryb5exYZCO",
    "Dates": "2014-01-13",
    "Longitude": 19.454099059646104,
    "Latitude": 0.6419378739019441,
    "Sentiment": "positive"
  },
  {
    "": 308,
    "Unnamed: 0": 308,
    "Tweets": "In #DRC, the #DiseaseDetectives of CDC’s Epidemic Intelligence Service are proving their worth as they work to stop… https://t.co/dCsXqCJZF4",
    "Dates": "2014-01-13",
    "Longitude": 13.231004293034447,
    "Latitude": 8.31529882123747,
    "Sentiment": "positive"
  },
  {
    "": 309,
    "Unnamed: 0": 309,
    "Tweets": "Five years after Emory chose care over fear, #Ebola patients Kent Brantly and Nancy Writebol returned to mark the m… https://t.co/9Z1jvExItW",
    "Dates": "2014-01-13",
    "Longitude": 17.548295726776352,
    "Latitude": -1.9579948135835998,
    "Sentiment": "neutral"
  },
  {
    "": 310,
    "Unnamed: 0": 310,
    "Tweets": "Always fascinating to hear the story of the discovery of #Ebola.  An incredible team effort that included the… https://t.co/vQYSmiIAO7",
    "Dates": "2014-01-13",
    "Longitude": 22.42112334865883,
    "Latitude": 4.858279993886673,
    "Sentiment": "neutral"
  },
  {
    "": 311,
    "Unnamed: 0": 311,
    "Tweets": "The story of the #Ebola vaccine began, as scientific advances often do, with a good idea and a lucky break.\"\n\nThe… https://t.co/rhzvwvfuw0",
    "Dates": "2014-01-13",
    "Longitude": 21.202807638259255,
    "Latitude": 6.548492085737154,
    "Sentiment": "positive"
  },
  {
    "": 312,
    "Unnamed: 0": 312,
    "Tweets": "@DrKynast @EUDataNewsHub @MarieWolfrom @AFP #DRC had several outbreaks of #EBOLA since the mid-70s, and is one of t… https://t.co/mOesIT03Wy",
    "Dates": "2014-01-13",
    "Longitude": 21.78132350193116,
    "Latitude": 1.8187648701301087,
    "Sentiment": "negative"
  },
  {
    "": 313,
    "Unnamed: 0": 313,
    "Tweets": "Results from #GSUPublicHealth's Dr. Gerardo Chowell and PhD candidate Amna Tariq's recent paper, published in… https://t.co/vu7Wne4HBU",
    "Dates": "2014-01-13",
    "Longitude": 15.855401829382402,
    "Latitude": 3.773368598787309,
    "Sentiment": "neutral"
  },
  {
    "": 314,
    "Unnamed: 0": 314,
    "Tweets": "The U.S. Food and Drug Administration announced the approval of #Ervebo, the first FDA-approved vaccine for the pre… https://t.co/XCwDMY2WxR",
    "Dates": "2014-01-13",
    "Longitude": 25.287900775663967,
    "Latitude": 11.352964471396113,
    "Sentiment": "neutral"
  },
  {
    "": 315,
    "Unnamed: 0": 315,
    "Tweets": "Don't miss the #NIH Demystifying Medicine Lectures Series\n\"Ebola: Then, Now &amp; the NIH\"\nJan. 14, 4pm ET,\nfeaturing s… https://t.co/65mi4EpoDQ",
    "Dates": "2014-01-13",
    "Longitude": 25.57272592896211,
    "Latitude": 1.3265094826262334,
    "Sentiment": "neutral"
  },
  {
    "": 316,
    "Unnamed: 0": 316,
    "Tweets": "DTRA contributes historic #ebola  effort Read the full story here https://t.co/YFTEHQc0Fl",
    "Dates": "2014-01-13",
    "Longitude": 16.420245355229227,
    "Latitude": 5.491028009284271,
    "Sentiment": "neutral"
  },
  {
    "": 317,
    "Unnamed: 0": 317,
    "Tweets": "Never knew that #Ebola is named after a river 😱 https://t.co/LTpVGTyLlk",
    "Dates": "2014-01-13",
    "Longitude": 24.05148149438784,
    "Latitude": 0.3374337751172569,
    "Sentiment": "neutral"
  },
  {
    "": 318,
    "Unnamed: 0": 318,
    "Tweets": "@fabricemvondo_ @EUDataNewsHub @MarieWolfrom @AFP Under #Belgium rule the Infrastructure was much better. Now it's… https://t.co/lF7DsLzlt9",
    "Dates": "2014-01-13",
    "Longitude": 14.476834061278435,
    "Latitude": 5.620432333938565,
    "Sentiment": "positive"
  },
  {
    "": 319,
    "Unnamed: 0": 319,
    "Tweets": "Here are ten big moments that will stick with us—and could continue to shape #TheFutureOf health for us all &gt;&gt;… https://t.co/0LQJdcBEkx",
    "Dates": "2014-01-13",
    "Longitude": 24.451720034032107,
    "Latitude": -2.769632833339653,
    "Sentiment": "neutral"
  },
  {
    "": 320,
    "Unnamed: 0": 320,
    "Tweets": "ONGs | Los niños de República Democrática del #Congo frente al #ébola \n\nhttps://t.co/OnhmbY4UgV",
    "Dates": "2014-01-13",
    "Longitude": 11.999193280687447,
    "Latitude": 10.73945771880132,
    "Sentiment": "neutral"
  },
  {
    "": 321,
    "Unnamed: 0": 321,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/ADKGbsUnoO",
    "Dates": "2014-01-13",
    "Longitude": 25.097818359510054,
    "Latitude": 16.421581407368727,
    "Sentiment": "neutral"
  },
  {
    "": 322,
    "Unnamed: 0": 322,
    "Tweets": "EBOLA NEWS: NIAID-supported Partnership for Research on Ebola Vaccination extends study of three #Ebola #vaccine re… https://t.co/wIKVAijxeg",
    "Dates": "2014-01-13",
    "Longitude": 28.28586704772788,
    "Latitude": -1.7406894577249714,
    "Sentiment": "neutral"
  },
  {
    "": 323,
    "Unnamed: 0": 323,
    "Tweets": "@InsermTransfert Transfert est ravi d’accompagner le projet européen #PREVAC-UP visant à étendre le suivi et renfor… https://t.co/GW5KTJvDJA",
    "Dates": "2014-01-13",
    "Longitude": 21.589026732941125,
    "Latitude": 2.018925564099059,
    "Sentiment": "positive"
  },
  {
    "": 324,
    "Unnamed: 0": 324,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/xGbN6ZYrQ1",
    "Dates": "2014-01-13",
    "Longitude": 21.380764227723784,
    "Latitude": 6.945733027537835,
    "Sentiment": "positive"
  },
  {
    "": 325,
    "Unnamed: 0": 325,
    "Tweets": "I've been following the #Ebola outbreak in #DRC for nearly 18 months now, and while we need to end it fast, this… https://t.co/SQQO3i4qoD",
    "Dates": "2014-01-13",
    "Longitude": 17.002437902860834,
    "Latitude": 5.9752391224539885,
    "Sentiment": "neutral"
  },
  {
    "": 326,
    "Unnamed: 0": 326,
    "Tweets": "@SciTania #Ebola : comment tout a commencé en 1976\nhttps://t.co/wUCSo0RrHD\n#virologie #histmed https://t.co/ddow0vQgFg",
    "Dates": "2014-01-13",
    "Longitude": 21.863195143933662,
    "Latitude": -0.25613416906034203,
    "Sentiment": "neutral"
  },
  {
    "": 327,
    "Unnamed: 0": 327,
    "Tweets": "#STUDY: Vitamin A Supplementation Was Associated with Reduced Mortality in Patients with #Ebola Virus Disease durin… https://t.co/UC1cmSgR9L",
    "Dates": "2014-01-13",
    "Longitude": 23.109379943220958,
    "Latitude": 4.175666523375639,
    "Sentiment": "neutral"
  },
  {
    "": 328,
    "Unnamed: 0": 328,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/QHVeznSQlV $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/rc5mCktF3N",
    "Dates": "2014-01-13",
    "Longitude": 20.842236390364214,
    "Latitude": 9.387717884987053,
    "Sentiment": "positive"
  },
  {
    "": 329,
    "Unnamed: 0": 329,
    "Tweets": "Health workers leading the fight against #Ebola are our everyday motivation! \n\nSince the beginning of the outbreak,… https://t.co/b359w198zO",
    "Dates": "2014-01-13",
    "Longitude": 22.363694016996547,
    "Latitude": 0.28282225716531295,
    "Sentiment": "neutral"
  },
  {
    "": 330,
    "Unnamed: 0": 330,
    "Tweets": "#Prevac Etudier la sécurité à long terme des vaccins contre #Ebola et la durabilité de la réponse immunitaire. C'es… https://t.co/RIYa7sOHw8",
    "Dates": "2014-01-13",
    "Longitude": 26.285449222012254,
    "Latitude": 5.490395066884417,
    "Sentiment": "positive"
  },
  {
    "": 331,
    "Unnamed: 0": 331,
    "Tweets": "@septemberrbloom Damn..I will ensure you’re eulogy is well written..#Ebola",
    "Dates": "2014-01-13",
    "Longitude": 23.824265043667715,
    "Latitude": -1.0221139173108416,
    "Sentiment": "neutral"
  },
  {
    "": 332,
    "Unnamed: 0": 332,
    "Tweets": "INSERM: PREVAC-UP: The Partnership for Research on #Ebola Vaccination extends follow-up and builds research capacit… https://t.co/VIsNhucLub",
    "Dates": "2014-01-13",
    "Longitude": 17.641871474139514,
    "Latitude": 3.4259890148426697,
    "Sentiment": "neutral"
  },
  {
    "": 333,
    "Unnamed: 0": 333,
    "Tweets": "Worried by new cases of #Ebola in Mambasa, #AfricaCDC #MinSanteRDC and other partners set up new #vaccination rings… https://t.co/lWwy0wTH83",
    "Dates": "2014-01-13",
    "Longitude": 19.107685942547068,
    "Latitude": 2.7097428078566494,
    "Sentiment": "positive"
  },
  {
    "": 334,
    "Unnamed: 0": 334,
    "Tweets": "#Ebola : l’inquiétude monte après la réapparition du virus dans des localités de l’est de la RDC https://t.co/vErYryIYux",
    "Dates": "2014-01-13",
    "Longitude": 21.615501467121522,
    "Latitude": 3.6689363019952164,
    "Sentiment": "neutral"
  },
  {
    "": 335,
    "Unnamed: 0": 335,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/dtsYEAjtyP $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/lCJXy4Uq3a",
    "Dates": "2014-01-13",
    "Longitude": 24.93507951843875,
    "Latitude": 0.392975012827673,
    "Sentiment": "neutral"
  },
  {
    "": 336,
    "Unnamed: 0": 336,
    "Tweets": "#phep #Ebola #Zika https://t.co/HBd6JBrjYO",
    "Dates": "2014-01-13",
    "Longitude": 19.9502603080726,
    "Latitude": 4.378035577965883,
    "Sentiment": "neutral"
  },
  {
    "": 337,
    "Unnamed: 0": 337,
    "Tweets": "La ministre Gould, sera en #RC et en #RDCongo cette semaine pour travailler avec les partenaires du Canada en… https://t.co/zkSitwd6Pr",
    "Dates": "2014-01-13",
    "Longitude": 17.34181627538238,
    "Latitude": -4.402346422727014,
    "Sentiment": "neutral"
  },
  {
    "": 338,
    "Unnamed: 0": 338,
    "Tweets": "Minister Gould will be in #RC and #DRCongo this week, working with Canada’s #African partners on #climatechange,… https://t.co/V8zlb0nQ5P",
    "Dates": "2014-01-13",
    "Longitude": 16.464655512543434,
    "Latitude": 0.44781269271996216,
    "Sentiment": "positive"
  },
  {
    "": 339,
    "Unnamed: 0": 339,
    "Tweets": "Containing the deadly #Ebola outbreak amid active conflict in the #DRC 🇨🇩  continues to present many challenges. Bu… https://t.co/hOD6tdjNn2",
    "Dates": "2014-01-13",
    "Longitude": 21.23201433756191,
    "Latitude": 5.2668057785445495,
    "Sentiment": "positive"
  },
  {
    "": 340,
    "Unnamed: 0": 340,
    "Tweets": "9.EMM publishes research that is immediately relevant to society, like this paper addressing the origin of the… https://t.co/MLBLtvD4lg",
    "Dates": "2014-01-13",
    "Longitude": 18.437959219752244,
    "Latitude": 3.770673506808333,
    "Sentiment": "positive"
  },
  {
    "": 341,
    "Unnamed: 0": 341,
    "Tweets": "Kasese calls for restoration of #Ebola screening centers via @pmldaily https://t.co/IlaiVWYgZD",
    "Dates": "2014-01-13",
    "Longitude": 23.95199517026404,
    "Latitude": 5.841563905577525,
    "Sentiment": "positive"
  },
  {
    "": 342,
    "Unnamed: 0": 342,
    "Tweets": "A scientific triumph came out of #Ebola outbreaks of the last decade, UK's Public Health Rapid Support Team Directo… https://t.co/kTQJJdz4I6",
    "Dates": "2014-01-13",
    "Longitude": 23.775362132568738,
    "Latitude": 7.526489282779734,
    "Sentiment": "negative"
  },
  {
    "": 343,
    "Unnamed: 0": 343,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/Lss72chtNK $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/9embhqTVK1",
    "Dates": "2014-01-13",
    "Longitude": 23.469979175439157,
    "Latitude": 0.9720540708434848,
    "Sentiment": "neutral"
  },
  {
    "": 344,
    "Unnamed: 0": 344,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/ovO9qglDpx",
    "Dates": "2014-01-13",
    "Longitude": 23.883224215916247,
    "Latitude": 0.02241954651140876,
    "Sentiment": "neutral"
  },
  {
    "": 345,
    "Unnamed: 0": 345,
    "Tweets": "A scientific triumph came out of #Ebola outbreaks of the last decade, UK's Public Health Rapid Support Team Directo… https://t.co/JNqC7wklSt",
    "Dates": "2014-01-13",
    "Longitude": 24.26010262017405,
    "Latitude": 11.724124860538,
    "Sentiment": "negative"
  },
  {
    "": 346,
    "Unnamed: 0": 346,
    "Tweets": "#Ervebo was approved in #Europe (Nov 2019) &amp; in the #US (Dec 2019). This is the story of how #scientists across 10… https://t.co/tLqC5l3Hcv",
    "Dates": "2014-01-13",
    "Longitude": 20.278845680584546,
    "Latitude": 7.346005317581983,
    "Sentiment": "positive"
  },
  {
    "": 347,
    "Unnamed: 0": 347,
    "Tweets": "The 'rule of 6' influences the transcription initiation of #Ebola  \nvirus. Find our recent publication by Simone Ba… https://t.co/fJJ62rBcrw",
    "Dates": "2014-01-13",
    "Longitude": 21.481869955810286,
    "Latitude": 3.1617707785041578,
    "Sentiment": "positive"
  },
  {
    "": 348,
    "Unnamed: 0": 348,
    "Tweets": "La historia de la primera #vacuna contra el #Ebola. Esfuerzo de la cooperación científica. #VaccineWork… https://t.co/gCQOK1HWbn",
    "Dates": "2014-01-13",
    "Longitude": 17.57050755220653,
    "Latitude": 4.856750434612846,
    "Sentiment": "positive"
  },
  {
    "": 349,
    "Unnamed: 0": 349,
    "Tweets": "WHO: #measles has killed more than 6,000 people in #DRCongo.\n@WHO called on international partners and agencies to… https://t.co/Pjy1FI1ed5",
    "Dates": "2014-01-13",
    "Longitude": 18.629485270219323,
    "Latitude": -0.9093447836504547,
    "Sentiment": "negative"
  },
  {
    "": 350,
    "Unnamed: 0": 350,
    "Tweets": "Situation Update on #Ebola Virus Disease #Preparedness - #SouthSudan Update 16 - 31 Dec 2019\nTwo alerts reported fr… https://t.co/s3zqCBtyHo",
    "Dates": "2014-01-13",
    "Longitude": 15.2480652643915,
    "Latitude": 4.9590165246393445,
    "Sentiment": "positive"
  },
  {
    "": 351,
    "Unnamed: 0": 351,
    "Tweets": "#Ebola Virus Disease (EVD) Points of Entry (PoE) #Uganda preparedness dashboards for Kanungu District was covered f… https://t.co/J9M0fNeO35",
    "Dates": "2014-01-13",
    "Longitude": 20.55884730885603,
    "Latitude": 2.1544855948810717,
    "Sentiment": "positive"
  },
  {
    "": 352,
    "Unnamed: 0": 352,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/KWQwztzdit $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/tcpiQ4yzXQ",
    "Dates": "2014-01-13",
    "Longitude": 20.788415400506562,
    "Latitude": 5.313881470312114,
    "Sentiment": "positive"
  },
  {
    "": 353,
    "Unnamed: 0": 353,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/5Xl8shn1kW $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/MOAfKdm5dX",
    "Dates": "2014-01-13",
    "Longitude": 29.028143979924483,
    "Latitude": 2.290354545583516,
    "Sentiment": "positive"
  },
  {
    "": 354,
    "Unnamed: 0": 354,
    "Tweets": "@institutpasteur AEE will work on #Ebola #preparedness in #RépubliqueCentrafricaine w/@I_P_Bangui &amp; Université de B… https://t.co/Z9b51pRO8I",
    "Dates": "2014-01-13",
    "Longitude": 20.55809736853512,
    "Latitude": -0.6033346341557904,
    "Sentiment": "negative"
  },
  {
    "": 355,
    "Unnamed: 0": 355,
    "Tweets": "#RDC  3 nouveaux cas confirmés  d'#Ebola  dans la zone de santé de\n #Beni https://t.co/csINmP5Vbk via @ElectionNet",
    "Dates": "2014-01-13",
    "Longitude": 25.54021117065583,
    "Latitude": 5.447880395710518,
    "Sentiment": "positive"
  },
  {
    "": 356,
    "Unnamed: 0": 356,
    "Tweets": "Case Definitions Used During the First 6 Months of the 10th #Ebola Outbreak in #DRC \nCase definitions are critical… https://t.co/gPWyIT2Tab",
    "Dates": "2014-01-13",
    "Longitude": 15.534776422042428,
    "Latitude": -3.4766977013427063,
    "Sentiment": "neutral"
  },
  {
    "": 357,
    "Unnamed: 0": 357,
    "Tweets": "The story of the #ebola #vaccine, spanning many continents, brilliant minds, and stumbling blocks... told beautiful… https://t.co/cxo8DHg3vB",
    "Dates": "2014-01-13",
    "Longitude": 28.165621949316225,
    "Latitude": 2.4949516711060067,
    "Sentiment": "positive"
  },
  {
    "": 358,
    "Unnamed: 0": 358,
    "Tweets": "Je n'insisterai jamais assez sur le besoin de rester vigilant face à #Ebola, même après des mois sans cas. Nous l'a… https://t.co/4HrrskF4Po",
    "Dates": "2014-01-13",
    "Longitude": 21.095309428310863,
    "Latitude": 16.747402675544826,
    "Sentiment": "positive"
  },
  {
    "": 359,
    "Unnamed: 0": 359,
    "Tweets": "Health workers leading the fight against #Ebola are our #MondayMotivation! Since the beginning of the outbreak, our… https://t.co/Ua16ZB6yb8",
    "Dates": "2014-01-13",
    "Longitude": 16.71070682535053,
    "Latitude": 6.010607908033644,
    "Sentiment": "negative"
  },
  {
    "": 360,
    "Unnamed: 0": 360,
    "Tweets": "How long did developing a #vaccine for #ebola take? With how many #researchers, in how many countries? How quick on… https://t.co/nbWArelilT",
    "Dates": "2014-01-13",
    "Longitude": 14.133158240484182,
    "Latitude": 2.2094664895109384,
    "Sentiment": "negative"
  },
  {
    "": 361,
    "Unnamed: 0": 361,
    "Tweets": "Un equipo de 40 personas de la OMS @who trabaja \"casi sin parar\" para garantizar los suministros contra el #ébola e… https://t.co/xBdJYOUZ9h",
    "Dates": "2014-01-13",
    "Longitude": 21.106061479409114,
    "Latitude": 5.054781719647827,
    "Sentiment": "negative"
  },
  {
    "": 362,
    "Unnamed: 0": 362,
    "Tweets": "Mobilization of 428 members of the #Butembo youth association for the strategy \"1000 vaccines against #Ebola per da… https://t.co/pHwQBPvjjl",
    "Dates": "2014-01-13",
    "Longitude": 27.704526609823567,
    "Latitude": 0.8510163622149114,
    "Sentiment": "negative"
  },
  {
    "": 363,
    "Unnamed: 0": 363,
    "Tweets": "#IPCC #Arctic #Science #ClimateChange #Ebola #Blackhole #Physics “The world awoke to the need to combat global heat… https://t.co/gdrnHUBDVo",
    "Dates": "2014-01-13",
    "Longitude": 21.59117137411829,
    "Latitude": 9.822119888745679,
    "Sentiment": "negative"
  },
  {
    "": 364,
    "Unnamed: 0": 364,
    "Tweets": "Vaccines can't stop #Ebola in a war zone.\n\"We found that ring #vaccination is effective until the levels of inacces… https://t.co/bNZnSB9z5p",
    "Dates": "2014-01-13",
    "Longitude": 17.66208189656389,
    "Latitude": 4.984539283810839,
    "Sentiment": "negative"
  },
  {
    "": 365,
    "Unnamed: 0": 365,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/jt375rftbh $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/aOvu1jeFBQ",
    "Dates": "2014-01-13",
    "Longitude": 21.995439309186477,
    "Latitude": 5.061897271628058,
    "Sentiment": "negative"
  },
  {
    "": 366,
    "Unnamed: 0": 366,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/kMshlwYwFj $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/q7IIqh95cC",
    "Dates": "2014-01-13",
    "Longitude": 20.41477468018336,
    "Latitude": 2.8777668634632256,
    "Sentiment": "negative"
  },
  {
    "": 367,
    "Unnamed: 0": 367,
    "Tweets": "I guess these top vaccine experts openly raising questions about vaccine safety at a @WHO conference are anti vaxxe… https://t.co/MzqJRLTl4o",
    "Dates": "2014-01-13",
    "Longitude": 15.362741659277468,
    "Latitude": 3.422507246540438,
    "Sentiment": "neutral"
  },
  {
    "": 368,
    "Unnamed: 0": 368,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/wDvPZ6c2eR",
    "Dates": "2014-01-13",
    "Longitude": 24.47927538135852,
    "Latitude": 7.0831341370371135,
    "Sentiment": "positive"
  },
  {
    "": 369,
    "Unnamed: 0": 369,
    "Tweets": "Speaking of N95, ito ay uri ng \"particulate respirator\" dahil nafifilter nito ang mga air particles. Ginagamit din… https://t.co/60aNtAnIE3",
    "Dates": "2014-01-13",
    "Longitude": 26.75456798218774,
    "Latitude": -5.371075612525759,
    "Sentiment": "negative"
  },
  {
    "": 370,
    "Unnamed: 0": 370,
    "Tweets": "#ebola https://t.co/zMaAhEbndQ",
    "Dates": "2014-01-13",
    "Longitude": 19.47993894122968,
    "Latitude": 5.564614059327781,
    "Sentiment": "neutral"
  },
  {
    "": 371,
    "Unnamed: 0": 371,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/ncLPL1qDkV",
    "Dates": "2014-01-13",
    "Longitude": 25.757970338605066,
    "Latitude": 6.98829055162568,
    "Sentiment": "neutral"
  },
  {
    "": 372,
    "Unnamed: 0": 372,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 460 suspected/3395 total confirmed &amp; probable cases (118 probable/3277 confirmed… https://t.co/wNp0M9aOLI",
    "Dates": "2014-01-13",
    "Longitude": 14.18454790697151,
    "Latitude": -2.867357135031294,
    "Sentiment": "neutral"
  },
  {
    "": 373,
    "Unnamed: 0": 373,
    "Tweets": "In the newswrap, we talk about the CFA, #Ebola in DRC, security in the Sahel, and more. We have shoutouts to… https://t.co/TS3e1gak6x",
    "Dates": "2014-01-13",
    "Longitude": 17.605311913792313,
    "Latitude": 7.295978085855948,
    "Sentiment": "positive"
  },
  {
    "": 374,
    "Unnamed: 0": 374,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/D48w76YGxC $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/SBiNDao4oa",
    "Dates": "2014-01-13",
    "Longitude": 24.085428449114346,
    "Latitude": 4.234936975884216,
    "Sentiment": "neutral"
  },
  {
    "": 375,
    "Unnamed: 0": 375,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/elRPy49u4i",
    "Dates": "2014-01-13",
    "Longitude": 18.05547099823188,
    "Latitude": -2.4782249048032243,
    "Sentiment": "neutral"
  },
  {
    "": 376,
    "Unnamed: 0": 376,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/KnanFIAiqg $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/degzKdJ09V",
    "Dates": "2014-01-13",
    "Longitude": 19.42820063535701,
    "Latitude": 3.4762276356626223,
    "Sentiment": "neutral"
  },
  {
    "": 377,
    "Unnamed: 0": 377,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/iDZ6PF0ciB $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/O8zhF8xi39",
    "Dates": "2014-01-13",
    "Longitude": 21.6833007806013,
    "Latitude": 8.265158788698233,
    "Sentiment": "neutral"
  },
  {
    "": 378,
    "Unnamed: 0": 378,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/1Msg10FcuP $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/Xv4DdYKbB6",
    "Dates": "2014-01-13",
    "Longitude": 23.810488685954184,
    "Latitude": 7.373969412110519,
    "Sentiment": "neutral"
  },
  {
    "": 379,
    "Unnamed: 0": 379,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/KWQwztzdit $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/OmQvIUA2Z7",
    "Dates": "2014-01-13",
    "Longitude": 16.302857342453507,
    "Latitude": -0.45766682828089156,
    "Sentiment": "neutral"
  },
  {
    "": 380,
    "Unnamed: 0": 380,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/6Wlo8X0LDu",
    "Dates": "2014-01-13",
    "Longitude": 19.83694387215702,
    "Latitude": 2.9688735034309417,
    "Sentiment": "neutral"
  },
  {
    "": 381,
    "Unnamed: 0": 381,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/ukQUUHLDHW $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/rSuQh80C8b",
    "Dates": "2014-01-13",
    "Longitude": 15.525216580285498,
    "Latitude": 7.444443658362333,
    "Sentiment": "neutral"
  },
  {
    "": 382,
    "Unnamed: 0": 382,
    "Tweets": "DRC #Ebola: CMRE update, January 12 https://t.co/nG1tkvjPA7",
    "Dates": "2014-01-12",
    "Longitude": 21.392869945424337,
    "Latitude": 3.7305291328125043,
    "Sentiment": "neutral"
  },
  {
    "": 383,
    "Unnamed: 0": 383,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/lNHGoyaK6k $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/FQMja1BRuo",
    "Dates": "2014-01-12",
    "Longitude": 20.890816741569168,
    "Latitude": 7.1946258815649085,
    "Sentiment": "neutral"
  },
  {
    "": 384,
    "Unnamed: 0": 384,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/JRRb5ajlDo $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/WdDnKtfi7L",
    "Dates": "2014-01-12",
    "Longitude": 21.90724405009529,
    "Latitude": -3.776091780940501,
    "Sentiment": "positive"
  },
  {
    "": 385,
    "Unnamed: 0": 385,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/1ggGlZp0uI",
    "Dates": "2014-01-12",
    "Longitude": 21.125418964129707,
    "Latitude": 9.552786698753675,
    "Sentiment": "negative"
  },
  {
    "": 386,
    "Unnamed: 0": 386,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/8eXrnAPYXl",
    "Dates": "2014-01-12",
    "Longitude": 26.713197246257753,
    "Latitude": -0.8487580774710421,
    "Sentiment": "positive"
  },
  {
    "": 387,
    "Unnamed: 0": 387,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/BiLyVdirRw",
    "Dates": "2014-01-12",
    "Longitude": 20.389788156762894,
    "Latitude": 4.611710333368068,
    "Sentiment": "neutral"
  },
  {
    "": 388,
    "Unnamed: 0": 388,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/VdKpZ3CcNI",
    "Dates": "2014-01-12",
    "Longitude": 22.156834767235022,
    "Latitude": 5.165550905425599,
    "Sentiment": "neutral"
  },
  {
    "": 389,
    "Unnamed: 0": 389,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/LM8AHvXwyJ",
    "Dates": "2014-01-12",
    "Longitude": 17.298794819875752,
    "Latitude": 6.011071066295043,
    "Sentiment": "positive"
  },
  {
    "": 390,
    "Unnamed: 0": 390,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/0DXYHlLdX3",
    "Dates": "2014-01-12",
    "Longitude": 16.762758994878407,
    "Latitude": 0.13107506540872604,
    "Sentiment": "negative"
  },
  {
    "": 391,
    "Unnamed: 0": 391,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/t1FCdMA61k",
    "Dates": "2014-01-12",
    "Longitude": 21.697462573807925,
    "Latitude": -1.3432304224835372,
    "Sentiment": "neutral"
  },
  {
    "": 392,
    "Unnamed: 0": 392,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/SrC2McPg3V",
    "Dates": "2014-01-12",
    "Longitude": 16.95329516945582,
    "Latitude": 11.691216981142272,
    "Sentiment": "positive"
  },
  {
    "": 393,
    "Unnamed: 0": 393,
    "Tweets": "Jan12, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,395: 3,277 confirmed 118 probable.  t… https://t.co/vGUCu1uGYW",
    "Dates": "2014-01-12",
    "Longitude": 26.071180250049906,
    "Latitude": 6.910384953953051,
    "Sentiment": "neutral"
  },
  {
    "": 394,
    "Unnamed: 0": 394,
    "Tweets": "The complex logistics of #Ebola response #DRC #RDC @MinSanteRDC @OMSRDCONGO @EteniLongondo  https://t.co/Jevd2sVPOM via @reliefweb",
    "Dates": "2014-01-12",
    "Longitude": 21.48616105086263,
    "Latitude": -1.9801613006665209,
    "Sentiment": "neutral"
  },
  {
    "": 395,
    "Unnamed: 0": 395,
    "Tweets": "La famine est moins mediatisée que l'ebola car c'est un probleme que les riches n'auront pas\" #ebola",
    "Dates": "2014-01-12",
    "Longitude": 22.835795702863518,
    "Latitude": 8.79169712517482,
    "Sentiment": "neutral"
  },
  {
    "": 396,
    "Unnamed: 0": 396,
    "Tweets": "Molt trista la dada però, per donar context, crec que el 45% de la poblacio té menys de 18 anys i per tant no estan… https://t.co/A0BM8UAfNt",
    "Dates": "2014-01-12",
    "Longitude": 26.730102366238143,
    "Latitude": 2.1665284171683115,
    "Sentiment": "positive"
  },
  {
    "": 397,
    "Unnamed: 0": 397,
    "Tweets": "#Ebola ha assolit un nivell de resistència, dsd fa 3 mesos, continua circulant i es resisteix a apagar-se. En mig a… https://t.co/xOEG2RBCgz",
    "Dates": "2014-01-12",
    "Longitude": 24.270896784899755,
    "Latitude": 3.0841421676106506,
    "Sentiment": "neutral"
  },
  {
    "": 398,
    "Unnamed: 0": 398,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 460 suspected/3395 total confirmed &amp; probable cases (118 probable/3275 confirmed… https://t.co/l744CNKS7G",
    "Dates": "2014-01-12",
    "Longitude": 18.97967795109704,
    "Latitude": 5.396494941632001,
    "Sentiment": "neutral"
  },
  {
    "": 399,
    "Unnamed: 0": 399,
    "Tweets": "Dans un silence assourdissant, la zone de santé de #Beni a reçu jeudi un nouveau cas confirmé de #Ebola après 29 jo… https://t.co/9lbP9r7w5b",
    "Dates": "2014-01-12",
    "Longitude": 27.840291434512352,
    "Latitude": 6.267188110649358,
    "Sentiment": "neutral"
  },
  {
    "": 400,
    "Unnamed: 0": 400,
    "Tweets": "@ShooguhLipz I always think of anti-vaxxers when I hear anything about #Ebola. Wonder if it were a circulating Nort… https://t.co/cpu4O0Uc5q",
    "Dates": "2014-01-12",
    "Longitude": 26.345984689596996,
    "Latitude": 7.402660079052291,
    "Sentiment": "neutral"
  },
  {
    "": 401,
    "Unnamed: 0": 401,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 12 Janvier 2014 avec les données collectées jusqu'au 11.01.20 👇\n\n➡️… https://t.co/3Ja81CZPCO",
    "Dates": "2014-01-12",
    "Longitude": 20.514051718700205,
    "Latitude": -0.5916242371629536,
    "Sentiment": "neutral"
  },
  {
    "": 402,
    "Unnamed: 0": 402,
    "Tweets": "#Ebola update https://t.co/B8B6pSxIPb",
    "Dates": "2014-01-12",
    "Longitude": 14.868483949531681,
    "Latitude": 11.962758748684646,
    "Sentiment": "neutral"
  },
  {
    "": 403,
    "Unnamed: 0": 403,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/izd3IlXrNM",
    "Dates": "2014-01-12",
    "Longitude": 21.2311462768658,
    "Latitude": 2.1512744310027374,
    "Sentiment": "negative"
  },
  {
    "": 404,
    "Unnamed: 0": 404,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 11 janvier 2014 https://t.co/UxCqmdFuT7",
    "Dates": "2014-01-12",
    "Longitude": 18.56891017784224,
    "Latitude": 5.796589764130496,
    "Sentiment": "neutral"
  },
  {
    "": 405,
    "Unnamed: 0": 405,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 12 janvier 2014 https://t.co/gUjz6d9f8w",
    "Dates": "2014-01-12",
    "Longitude": 19.158674975921123,
    "Latitude": 6.165930496975277,
    "Sentiment": "neutral"
  },
  {
    "": 406,
    "Unnamed: 0": 406,
    "Tweets": "@bama9455 @jay2kQ17 https://t.co/4nj1MX4fpX #WakeUpAmerica #FactsMatter #CORRUPTION #Censorship… https://t.co/ufNEG7OU6x",
    "Dates": "2014-01-12",
    "Longitude": 24.092362424386554,
    "Latitude": 9.608296358838771,
    "Sentiment": "positive"
  },
  {
    "": 407,
    "Unnamed: 0": 407,
    "Tweets": "‘Against all odds’: The inside story of how scientists across three continents produced an Ebola vaccine by… https://t.co/Q1J0JKTle6",
    "Dates": "2014-01-12",
    "Longitude": 26.844801246444682,
    "Latitude": 3.4901335787555623,
    "Sentiment": "positive"
  },
  {
    "": 408,
    "Unnamed: 0": 408,
    "Tweets": "Everything you need to know about the first FDA-approved #Ebola vaccine.  https://t.co/qnJWsRQKkz",
    "Dates": "2014-01-12",
    "Longitude": 20.6203724713561,
    "Latitude": 8.85653777628453,
    "Sentiment": "neutral"
  },
  {
    "": 409,
    "Unnamed: 0": 409,
    "Tweets": "Superstar Canadian journalist @HelenBranswell breaks down recent updates  on and analysis of #Ebola. https://t.co/5bnIOmkhW9",
    "Dates": "2014-01-12",
    "Longitude": 12.61219390132586,
    "Latitude": 2.0749376083572733,
    "Sentiment": "neutral"
  },
  {
    "": 410,
    "Unnamed: 0": 410,
    "Tweets": "What the Government is Really Saying https://t.co/kmOjIGBMG9 #ebola #family #governement #responsibility #retirement #selfreliance #skills",
    "Dates": "2014-01-12",
    "Longitude": 23.90560171020594,
    "Latitude": 2.428598169655734,
    "Sentiment": "neutral"
  },
  {
    "": 411,
    "Unnamed: 0": 411,
    "Tweets": "@realDonaldTrump #LeakedVideo! Head #UN #Scientist Admits #Vaccines Are Killing People https://t.co/BiLrBemLC3… https://t.co/16HodU2M0t",
    "Dates": "2014-01-12",
    "Longitude": 30.203864297926835,
    "Latitude": 0.47511167775675345,
    "Sentiment": "neutral"
  },
  {
    "": 412,
    "Unnamed: 0": 412,
    "Tweets": "@CBLevineMS ¯\\_(ツ)_/¯\nPeople in this part of DRC move around a lot, for a number of reasons — not least of which is… https://t.co/4eKlyBxSfC",
    "Dates": "2014-01-12",
    "Longitude": 25.248869265821302,
    "Latitude": 5.423322641436405,
    "Sentiment": "neutral"
  },
  {
    "": 413,
    "Unnamed: 0": 413,
    "Tweets": "SHOULD WE BE MAD AT SAWYER? https://t.co/irXisYhbta #ebola",
    "Dates": "2014-01-12",
    "Longitude": 30.636026228695677,
    "Latitude": -0.6153156654577909,
    "Sentiment": "positive"
  },
  {
    "": 414,
    "Unnamed: 0": 414,
    "Tweets": "No comments necessary. #Ebola https://t.co/z6dzLLQMVT",
    "Dates": "2014-01-12",
    "Longitude": 13.7242104225965,
    "Latitude": 8.215897927004274,
    "Sentiment": "neutral"
  },
  {
    "": 415,
    "Unnamed: 0": 415,
    "Tweets": "@HelenBranswell Hard to accept but is it possible some kind of subterranian circulation of the virus? It seems the… https://t.co/hygSyGEiqx",
    "Dates": "2014-01-12",
    "Longitude": 22.829454717185044,
    "Latitude": 10.399674499743233,
    "Sentiment": "neutral"
  },
  {
    "": 416,
    "Unnamed: 0": 416,
    "Tweets": "punts de transmissió o reactivacio. La infecció hi és encara q no la veiem. I les zones és passen infectats de… https://t.co/6YsZOdKDEB",
    "Dates": "2014-01-12",
    "Longitude": 22.43663795399025,
    "Latitude": 6.645373774316223,
    "Sentiment": "neutral"
  },
  {
    "": 417,
    "Unnamed: 0": 417,
    "Tweets": "Estem davant d' una nova \"cosa\", i dic \"cosa\" pq no se ben bé com qualificar-la. #Ebola ha corregut molt camp, ha i… https://t.co/9o0m0tjNta",
    "Dates": "2014-01-12",
    "Longitude": 14.161759161117466,
    "Latitude": 0.6958677996344695,
    "Sentiment": "neutral"
  },
  {
    "": 418,
    "Unnamed: 0": 418,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 12 jan; données datées du 11 jan 2014. ▪︎Deux nouve… https://t.co/YbOIz5QXsg",
    "Dates": "2014-01-12",
    "Longitude": 24.719009568665072,
    "Latitude": -1.7488492973243588,
    "Sentiment": "neutral"
  },
  {
    "": 419,
    "Unnamed: 0": 419,
    "Tweets": "Great detailed story on Canadian and German scientists who developed #Ebola vaccine, starting in #Winnipeg at Natio… https://t.co/kumjzY4Zm9",
    "Dates": "2014-01-12",
    "Longitude": 23.137770078627945,
    "Latitude": 5.95214430519729,
    "Sentiment": "neutral"
  },
  {
    "": 420,
    "Unnamed: 0": 420,
    "Tweets": "@AfricaCDC Epidemiologist and Head of Emergency Preparedness and Response Division, @MerawiA visited facilities and… https://t.co/ej8SY5iXyr",
    "Dates": "2014-01-12",
    "Longitude": 21.63904477201541,
    "Latitude": -1.0730921550681245,
    "Sentiment": "neutral"
  },
  {
    "": 421,
    "Unnamed: 0": 421,
    "Tweets": "#deutschland nimmt auf Vorschlag von Herrn #Maas (#spd) #ebola Patienten auf.\n#Migration \n#migranten\n#Asylantrag… https://t.co/qPtbbzhcZS",
    "Dates": "2014-01-12",
    "Longitude": 25.484606773687972,
    "Latitude": -2.5414052685275994,
    "Sentiment": "negative"
  },
  {
    "": 422,
    "Unnamed: 0": 422,
    "Tweets": "2. The second #Ebola case reported Saturday was at Beni, another place that has repeatedly stopped transmission onl… https://t.co/zIa7jCgrdh",
    "Dates": "2014-01-12",
    "Longitude": 24.080781298739783,
    "Latitude": 8.8208848157368,
    "Sentiment": "positive"
  },
  {
    "": 423,
    "Unnamed: 0": 423,
    "Tweets": "1. More bad news in DRC's #Ebola outbreak. There was a case reported Saturday at Musienene.\nMusienene had gone 131… https://t.co/5zfLCBfkTA",
    "Dates": "2014-01-12",
    "Longitude": 24.570022001968855,
    "Latitude": 6.855758518920519,
    "Sentiment": "neutral"
  },
  {
    "": 424,
    "Unnamed: 0": 424,
    "Tweets": "To improve reporting and analysis of key indicators, @AfricaCDC facilitates training in the use of #SPSS for epidem… https://t.co/sjmlcvczzW",
    "Dates": "2014-01-12",
    "Longitude": 26.95545836356338,
    "Latitude": -0.02505520572232456,
    "Sentiment": "neutral"
  },
  {
    "": 425,
    "Unnamed: 0": 425,
    "Tweets": "Worried by new cases of #Ebola in Mambasa, @AfricaCDC @MinSanteRDC and other partners set up new vaccination rings… https://t.co/HijSpX8LyC",
    "Dates": "2014-01-12",
    "Longitude": 19.464980892477822,
    "Latitude": 0.5151559761890372,
    "Sentiment": "positive"
  },
  {
    "": 426,
    "Unnamed: 0": 426,
    "Tweets": "Video: Bringing religions together to prevent #Ebola | @UNICEF #Rwanda https://t.co/RGw2GgDqj6",
    "Dates": "2014-01-12",
    "Longitude": 28.461484862104,
    "Latitude": -2.050409455560498,
    "Sentiment": "neutral"
  },
  {
    "": 427,
    "Unnamed: 0": 427,
    "Tweets": "Facebook memory... #Ebola #SierraLeone I will never get tired of sharing this. First, it was, is the highlight of m… https://t.co/PLbKJQzAby",
    "Dates": "2014-01-12",
    "Longitude": 21.654392242932275,
    "Latitude": 2.8959932132193638,
    "Sentiment": "neutral"
  },
  {
    "": 428,
    "Unnamed: 0": 428,
    "Tweets": "Quand elle a attaqué @MTamfum sur #Ebola #RDC ,mes doutes sur @luchaRDC étaient tombés\nUne mutation qui a touché à… https://t.co/n9jKQolzBs",
    "Dates": "2014-01-12",
    "Longitude": 18.752255791555882,
    "Latitude": 5.47440381757104,
    "Sentiment": "positive"
  },
  {
    "": 429,
    "Unnamed: 0": 429,
    "Tweets": "The current #Ebola outbreak is the 10th in the DRC. It has killed far fewer people than the decades-long rebel warf… https://t.co/JhpowQ2xHk",
    "Dates": "2014-01-12",
    "Longitude": 16.91474113273297,
    "Latitude": 15.77878592828622,
    "Sentiment": "positive"
  },
  {
    "": 430,
    "Unnamed: 0": 430,
    "Tweets": "Newly updated #Ebola clinical reference. https://t.co/xo8Iaf7e1x https://t.co/fVutk42FUD",
    "Dates": "2014-01-12",
    "Longitude": 23.37930292793987,
    "Latitude": 9.761965310052332,
    "Sentiment": "negative"
  },
  {
    "": 431,
    "Unnamed: 0": 431,
    "Tweets": "South Sudan: Patient with #Ebola-like symptoms quarantined in Mapel https://t.co/0ZX0j6ASLW",
    "Dates": "2014-01-12",
    "Longitude": 22.374581058562477,
    "Latitude": 1.616459772027925,
    "Sentiment": "neutral"
  },
  {
    "": 432,
    "Unnamed: 0": 432,
    "Tweets": "DRC #Ebola: 2 new cases on January 11, 5 this week, 3,395 total https://t.co/6UzvfWK3he",
    "Dates": "2014-01-12",
    "Longitude": 14.262500270976924,
    "Latitude": 9.465710102812182,
    "Sentiment": "neutral"
  },
  {
    "": 433,
    "Unnamed: 0": 433,
    "Tweets": "First #Ebola #vaccine approved\nhttps://t.co/4tX9hNcTIK",
    "Dates": "2014-01-12",
    "Longitude": 19.813911995511127,
    "Latitude": 2.6003164117052835,
    "Sentiment": "neutral"
  },
  {
    "": 434,
    "Unnamed: 0": 434,
    "Tweets": "The inside story of how scientists across three continents produced an #Ebola vaccine. https://t.co/2LmJPICSlB",
    "Dates": "2014-01-12",
    "Longitude": 17.700367381513853,
    "Latitude": 9.021217042620851,
    "Sentiment": "neutral"
  },
  {
    "": 435,
    "Unnamed: 0": 435,
    "Tweets": "#BENI #EBOLA: Après plusieurs semaines sans nouveau cas, 3cas confirmés de la maladie à virus #Ebola enregistrés. P… https://t.co/MPOPu4133p",
    "Dates": "2014-01-12",
    "Longitude": 29.93670426464686,
    "Latitude": 3.7947667781309438,
    "Sentiment": "neutral"
  },
  {
    "": 436,
    "Unnamed: 0": 436,
    "Tweets": "#Ebola Trois nouveaux cas confirmés à #Beni. Bibiche Matadi, chargée de surveillance au sein de la riposte appelle… https://t.co/U393y7Yzi8",
    "Dates": "2014-01-12",
    "Longitude": 24.662635673591872,
    "Latitude": 2.677145970416366,
    "Sentiment": "neutral"
  },
  {
    "": 437,
    "Unnamed: 0": 437,
    "Tweets": "Patient with #Ebola-like symptoms quarantined in #Mapel\nhttps://t.co/pS2JT2Fh1A",
    "Dates": "2014-01-12",
    "Longitude": 16.321808385110998,
    "Latitude": 2.242743164171802,
    "Sentiment": "neutral"
  },
  {
    "": 438,
    "Unnamed: 0": 438,
    "Tweets": "@DjDaboTrabo #Reggaekuruka #shidamarambekse utawala tuned at large loving the show big up #mochamajames… https://t.co/vA2TV4AHYE",
    "Dates": "2014-01-12",
    "Longitude": 23.7359227526252,
    "Latitude": 3.2254587008768465,
    "Sentiment": "neutral"
  },
  {
    "": 439,
    "Unnamed: 0": 439,
    "Tweets": "Toujours impressionné par la bravour &amp; le courage des équipes de la communication de risque, mobilisation sociale &amp;… https://t.co/6l6fXRCxVu",
    "Dates": "2014-01-12",
    "Longitude": 18.876131613116215,
    "Latitude": 8.98033275508432,
    "Sentiment": "negative"
  },
  {
    "": 440,
    "Unnamed: 0": 440,
    "Tweets": "#Uganda Local leaders in #Katwe Landing Site in #Kasese District are appealing to the District Health Department an… https://t.co/3wFduIJ3FL",
    "Dates": "2014-01-12",
    "Longitude": 25.029946377670257,
    "Latitude": 2.1552809083830256,
    "Sentiment": "neutral"
  },
  {
    "": 441,
    "Unnamed: 0": 441,
    "Tweets": "Also, while the rVSV-ZEBOV vaccine is a #live #virus #vaccine, it is live (and relatively non-harmful) rVSV, NOT LI… https://t.co/XEI70CldX9",
    "Dates": "2014-01-12",
    "Longitude": 22.584054276786695,
    "Latitude": 0.06313599468431308,
    "Sentiment": "neutral"
  },
  {
    "": 442,
    "Unnamed: 0": 442,
    "Tweets": "⁦Le journaliste @EmmanuelFreuden s’est rendu à #Beni pour essayer de comprendre les causes de la méfiance de la pop… https://t.co/OYpLxnOvXQ",
    "Dates": "2014-01-12",
    "Longitude": 31.93688138360012,
    "Latitude": 2.884993144337011,
    "Sentiment": "neutral"
  },
  {
    "": 443,
    "Unnamed: 0": 443,
    "Tweets": "For the record : #Ebola #vaccines #vaccination is NOT mandatory for ANYONE, even those in current outbreak zones. I… https://t.co/PLTJpIoSZ1",
    "Dates": "2014-01-12",
    "Longitude": 23.997679584908045,
    "Latitude": 8.617223228938428,
    "Sentiment": "neutral"
  },
  {
    "": 444,
    "Unnamed: 0": 444,
    "Tweets": "Jan 11, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,393, of which 3,275 are confirmed an… https://t.co/aqX9G8XTvT",
    "Dates": "2014-01-12",
    "Longitude": 22.601105819246733,
    "Latitude": 4.474773620155897,
    "Sentiment": "neutral"
  },
  {
    "": 445,
    "Unnamed: 0": 445,
    "Tweets": "Notre gouvernement est l'équivalent d'ebola #Ebola\n\nIl faut maintenant savoir l'eradiquer!\n\n#peursurlelac… https://t.co/lAM2xZgj7J",
    "Dates": "2014-01-12",
    "Longitude": 29.436120959793175,
    "Latitude": 10.258618761684271,
    "Sentiment": "negative"
  },
  {
    "": 446,
    "Unnamed: 0": 446,
    "Tweets": "Dear @Twitter there is currently a #disinformation campaign regarding #Ebola vaccinations from anti-vax accounts. H… https://t.co/CW0rTG2VeI",
    "Dates": "2014-01-12",
    "Longitude": 21.77998910321543,
    "Latitude": 3.132318645056962,
    "Sentiment": "neutral"
  },
  {
    "": 447,
    "Unnamed: 0": 447,
    "Tweets": "Oggi ultimo quarto di finale con una sfida \"medica\".\nL'#Immunoterapia, usata nella lotta contro il #cancro vs… https://t.co/ObJPn0flwh",
    "Dates": "2014-01-12",
    "Longitude": 26.33116470517232,
    "Latitude": 2.01604990262476,
    "Sentiment": "positive"
  },
  {
    "": 448,
    "Unnamed: 0": 448,
    "Tweets": "Au quartier Butsili de #Beni #RDC, beaucoup de gens ont maintenant pris conscience de l'importance de se sensibilis… https://t.co/4iMp966Xfc",
    "Dates": "2014-01-12",
    "Longitude": 22.662643227413607,
    "Latitude": 6.105733918202278,
    "Sentiment": "positive"
  },
  {
    "": 449,
    "Unnamed: 0": 449,
    "Tweets": "He was one of eleven people treated for an Ebola infection in the US during the West Africa outbreak in 2014-2016.… https://t.co/pfNB1Vow4f",
    "Dates": "2014-01-12",
    "Longitude": 27.578404168695087,
    "Latitude": -1.5180122726604015,
    "Sentiment": "neutral"
  },
  {
    "": 450,
    "Unnamed: 0": 450,
    "Tweets": "@MagickalG @realDonaldTrump @RobertKennedyJr @delbigtree @BusyDrT @BANNEDdotVIDEO @POTUS @NaturalNewsHR @vaxxed2… https://t.co/qgHE6bIzMu",
    "Dates": "2014-01-12",
    "Longitude": 24.708715983424334,
    "Latitude": -0.3191718978358473,
    "Sentiment": "neutral"
  },
  {
    "": 451,
    "Unnamed: 0": 451,
    "Tweets": "@MackayIM @Matthew31987083 @KrutikaKuppalli @rebelfd @EbolaMapAmerica @HelenBranswell @GeopoliticalJD Keep an eye o… https://t.co/JbE226ynnT",
    "Dates": "2014-01-12",
    "Longitude": 19.356420593826677,
    "Latitude": 6.948741643216786,
    "Sentiment": "neutral"
  },
  {
    "": 452,
    "Unnamed: 0": 452,
    "Tweets": "FDA Approves #Ebola #Vaccine For Use And Distribution In United States 275.000 vials shipped to DRC -they need more… https://t.co/2uwPjde1uL",
    "Dates": "2014-01-12",
    "Longitude": 23.209525367730198,
    "Latitude": -0.6854413321814619,
    "Sentiment": "neutral"
  },
  {
    "": 453,
    "Unnamed: 0": 453,
    "Tweets": "Rappel. La fin de l'année est passée. #Ebola est toujours là. Et @fatshi13 est de moins en moins rasssurant avec se… https://t.co/qJsEUSJRPx",
    "Dates": "2014-01-11",
    "Longitude": 24.760453076480918,
    "Latitude": 12.71536302441324,
    "Sentiment": "neutral"
  },
  {
    "": 454,
    "Unnamed: 0": 454,
    "Tweets": "Courtesy of @davehodgesCSS “Mixed in with people who nothing more than to come to America for a better life, more i… https://t.co/ZEpp4lzpnA",
    "Dates": "2014-01-11",
    "Longitude": 15.507454711103463,
    "Latitude": 6.444082455660759,
    "Sentiment": "neutral"
  },
  {
    "": 455,
    "Unnamed: 0": 455,
    "Tweets": "This month's #EthicsTalk invites Dr Christy Rentmeester to explain what clinicians should know about #colonialism t… https://t.co/DghcdBAbRp",
    "Dates": "2014-01-11",
    "Longitude": 19.086244861941406,
    "Latitude": 5.349797470600148,
    "Sentiment": "neutral"
  },
  {
    "": 456,
    "Unnamed: 0": 456,
    "Tweets": "@JennRollins1002 Peace must come to the ancient land of #Syria.\n\nThis is not a suggestion to various \"leaders\". It'… https://t.co/wvU8PQgnWT",
    "Dates": "2014-01-11",
    "Longitude": 26.884314550601868,
    "Latitude": 2.7643814051187237,
    "Sentiment": "positive"
  },
  {
    "": 457,
    "Unnamed: 0": 457,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/IarleidAdM",
    "Dates": "2014-01-11",
    "Longitude": 25.745317646891795,
    "Latitude": 2.1125740527218184,
    "Sentiment": "neutral"
  },
  {
    "": 458,
    "Unnamed: 0": 458,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 10 janvier 2014 https://t.co/2b5TVb0b5R",
    "Dates": "2014-01-11",
    "Longitude": 22.73049559793047,
    "Latitude": 12.378679286372066,
    "Sentiment": "neutral"
  },
  {
    "": 459,
    "Unnamed: 0": 459,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 11 janvier 2014 https://t.co/63SJjsXxqR",
    "Dates": "2014-01-11",
    "Longitude": 20.05688745495561,
    "Latitude": 7.6962372129431635,
    "Sentiment": "neutral"
  },
  {
    "": 460,
    "Unnamed: 0": 460,
    "Tweets": "#billgates #ebola #vaccines what could possibly go wrong 😖😳😞#population control https://t.co/OcSb83AxvD",
    "Dates": "2014-01-11",
    "Longitude": 17.41916743136443,
    "Latitude": 8.550952833932794,
    "Sentiment": "neutral"
  },
  {
    "": 461,
    "Unnamed: 0": 461,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/HwmC1PYX0K… https://t.co/AdsRofaLMW",
    "Dates": "2014-01-11",
    "Longitude": 21.417375772394934,
    "Latitude": 3.969292182304951,
    "Sentiment": "neutral"
  },
  {
    "": 462,
    "Unnamed: 0": 462,
    "Tweets": "@POTUS There is no #vaccine for #EBOLA or #HIV. Straight from the #military.\n@IvankaTrump @FLOTUS @EricTrump… https://t.co/WaT5Em5Jgz",
    "Dates": "2014-01-11",
    "Longitude": 23.474235873789322,
    "Latitude": 2.23549238866912,
    "Sentiment": "neutral"
  },
  {
    "": 463,
    "Unnamed: 0": 463,
    "Tweets": "I am a nurse working for @RESCUEorg in Uganda and I’m on the frontline making sure the country is ready and able t… https://t.co/BwMh4tSlCN",
    "Dates": "2014-01-11",
    "Longitude": 19.99038100501105,
    "Latitude": 0.910068540312059,
    "Sentiment": "neutral"
  },
  {
    "": 464,
    "Unnamed: 0": 464,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 11 jan; données datées du 10 jan 2014. ▪︎Aucun nouv… https://t.co/c4ivKRyUtG",
    "Dates": "2014-01-11",
    "Longitude": 8.083710004432964,
    "Latitude": 2.1397608288366743,
    "Sentiment": "positive"
  },
  {
    "": 465,
    "Unnamed: 0": 465,
    "Tweets": "💊 Vamos a trabajar para asegurar que los nuevos medicamentos y vacunas, desarrollados con la contribución de tantos… https://t.co/vwSZei57il",
    "Dates": "2014-01-11",
    "Longitude": 23.143118373011188,
    "Latitude": 4.6318660589792175,
    "Sentiment": "negative"
  },
  {
    "": 466,
    "Unnamed: 0": 466,
    "Tweets": "#EBOLA #AIRBORNE\nhttps://t.co/2x85OmXQpm",
    "Dates": "2014-01-11",
    "Longitude": 19.314938345194633,
    "Latitude": 3.957335031089651,
    "Sentiment": "negative"
  },
  {
    "": 467,
    "Unnamed: 0": 467,
    "Tweets": "@DevilArtemisX I'll look into it. Muchísimas gracias compadre. You have shown me da wey. #Ebola",
    "Dates": "2014-01-11",
    "Longitude": 19.16272517102135,
    "Latitude": 6.348164748891806,
    "Sentiment": "negative"
  },
  {
    "": 468,
    "Unnamed: 0": 468,
    "Tweets": "Zij #Ebola - wij ook Ebola!\n\nLeve #diversiteit. Leve #Links. Leve #Globalisme *NOT*\n\n#Trump: \"the future belongs no… https://t.co/sOYJTWhFSg",
    "Dates": "2014-01-11",
    "Longitude": 25.64752201951956,
    "Latitude": 7.337498427786956,
    "Sentiment": "neutral"
  },
  {
    "": 469,
    "Unnamed: 0": 469,
    "Tweets": "#Duitsland - de #links'e Heiko Maas v Sociaal-Democraten doet er alles aan om West-Europa nog dichter bij de afgron… https://t.co/IUayzb737B",
    "Dates": "2014-01-11",
    "Longitude": 20.324692930059324,
    "Latitude": 8.353303216632305,
    "Sentiment": "positive"
  },
  {
    "": 470,
    "Unnamed: 0": 470,
    "Tweets": "I was traveling yesterday; posting the Jan. 10 #Ebola update belatedly.\nThere were 0 cases, 0 deaths reported on Th… https://t.co/LVwnssYYaj",
    "Dates": "2014-01-11",
    "Longitude": 29.800794626756456,
    "Latitude": 10.101780451252752,
    "Sentiment": "positive"
  },
  {
    "": 471,
    "Unnamed: 0": 471,
    "Tweets": "@GreyTonka #Ebola #denge oh the possibilities are endless",
    "Dates": "2014-01-11",
    "Longitude": 27.93691403716101,
    "Latitude": 6.339399880869685,
    "Sentiment": "neutral"
  },
  {
    "": 472,
    "Unnamed: 0": 472,
    "Tweets": "DR Congo Ebola death toll 2,231 to date -- monitoring agency https://t.co/KGZKXW3SwF #ebola #disease #DRCongo https://t.co/x5pHT8JaD3",
    "Dates": "2014-01-11",
    "Longitude": 28.55426821163121,
    "Latitude": 9.063264086441318,
    "Sentiment": "neutral"
  },
  {
    "": 473,
    "Unnamed: 0": 473,
    "Tweets": "#Ebola, cas suspect au Sud-Soudan, analyses en cours. \nhttps://t.co/gXGnbEZzi3",
    "Dates": "2014-01-11",
    "Longitude": 23.135763352045384,
    "Latitude": 5.386719450670233,
    "Sentiment": "neutral"
  },
  {
    "": 474,
    "Unnamed: 0": 474,
    "Tweets": "#Ebola #DRC. 3392 confirmed and probable cases, reported as of 7 January 2014, including 3274 confirmed and 118 pro… https://t.co/8blpU8odMB",
    "Dates": "2014-01-11",
    "Longitude": 24.273387745747726,
    "Latitude": -0.16876023613707414,
    "Sentiment": "neutral"
  },
  {
    "": 475,
    "Unnamed: 0": 475,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 11 janvier 2014 \nhttps://t.co/9x65LsutVQ",
    "Dates": "2014-01-11",
    "Longitude": 27.780171475680362,
    "Latitude": 3.376139170578229,
    "Sentiment": "neutral"
  },
  {
    "": 476,
    "Unnamed: 0": 476,
    "Tweets": "Suivi de l'#épidémie d' #Ebola en #RDC au 11 janvier 2014 https://t.co/O9qbu7l4np",
    "Dates": "2014-01-11",
    "Longitude": 23.01266335221956,
    "Latitude": 0.5289863025318899,
    "Sentiment": "neutral"
  },
  {
    "": 477,
    "Unnamed: 0": 477,
    "Tweets": "#Congo #Ebola crisis: to fight disease, an anthropologist heals distrust https://t.co/K2tnRBbD0b via… https://t.co/JLeTNdV0ft",
    "Dates": "2014-01-11",
    "Longitude": 14.557678138690763,
    "Latitude": 8.96065932951409,
    "Sentiment": "neutral"
  },
  {
    "": 478,
    "Unnamed: 0": 478,
    "Tweets": "DRC #Ebola: CMRE update, January 10 https://t.co/gIwSs9aHDq",
    "Dates": "2014-01-11",
    "Longitude": 17.711481195864565,
    "Latitude": 4.077567973494297,
    "Sentiment": "neutral"
  },
  {
    "": 479,
    "Unnamed: 0": 479,
    "Tweets": "Good news! The FDA approves the first #Ebola #vaccine for adults. (In the U.S., Ebola infections are rare).… https://t.co/abM11Pp4Ar",
    "Dates": "2014-01-11",
    "Longitude": 20.740718514968055,
    "Latitude": 3.737738889242217,
    "Sentiment": "neutral"
  },
  {
    "": 480,
    "Unnamed: 0": 480,
    "Tweets": "#Ebola #FDA #CDC #CORRUPTION #BigPharma #DrainTheSwamp @realDonaldTrump https://t.co/LbIMwr1D5o",
    "Dates": "2014-01-11",
    "Longitude": 29.614546526252102,
    "Latitude": 2.9644305710166865,
    "Sentiment": "positive"
  },
  {
    "": 481,
    "Unnamed: 0": 481,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 11 Janvier 2014 avec les données collectées jusqu'au 10.01.2014 👇🏾\n\n➡… https://t.co/vohw7swb6m",
    "Dates": "2014-01-11",
    "Longitude": 19.990159896692376,
    "Latitude": -3.6023495634683753,
    "Sentiment": "neutral"
  },
  {
    "": 482,
    "Unnamed: 0": 482,
    "Tweets": "Scientists across three continents produced an #Ebola vaccine via https://t.co/YnLIo3OMaq https://t.co/Lj5EdpvWGb",
    "Dates": "2014-01-11",
    "Longitude": 24.383093861321388,
    "Latitude": 7.100577496634111,
    "Sentiment": "neutral"
  },
  {
    "": 483,
    "Unnamed: 0": 483,
    "Tweets": "FDA has approved #Ervebo manufactured by Merck, it's the 1st vaccine for prevention of #Ebola Virus Disease (EVD)\n#DRCongo",
    "Dates": "2014-01-11",
    "Longitude": 21.5531649055526,
    "Latitude": 8.941237648002046,
    "Sentiment": "positive"
  },
  {
    "": 484,
    "Unnamed: 0": 484,
    "Tweets": "What were the biggest #outbreaks of 2019? From #Ebola to #dengue, we review the outbreaks of 2019 and the impacts t… https://t.co/afzjDLOZOk",
    "Dates": "2014-01-11",
    "Longitude": 18.46118997667983,
    "Latitude": 6.5246373992189355,
    "Sentiment": "positive"
  },
  {
    "": 485,
    "Unnamed: 0": 485,
    "Tweets": "@bazoobond Let another one out on #DAY_RELEASE ??? #SCARE_IN_THE_COMMUNITY....#FBPE is more debilitating than… https://t.co/A2ElzeEQWK",
    "Dates": "2014-01-11",
    "Longitude": 19.11200695018109,
    "Latitude": 4.3973951411024,
    "Sentiment": "positive"
  },
  {
    "": 486,
    "Unnamed: 0": 486,
    "Tweets": "New #Ebola preprint: Potential Test-Negative Case-Control Study Bias in Outbreak Settings: Application to Ebola vac… https://t.co/aypsLhPeT9",
    "Dates": "2014-01-11",
    "Longitude": 20.91940039503131,
    "Latitude": 6.067909975387473,
    "Sentiment": "neutral"
  },
  {
    "": 487,
    "Unnamed: 0": 487,
    "Tweets": "Jan 10, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,393: 3,275 confirmed 118 probable.… https://t.co/UJNqx82M8m",
    "Dates": "2014-01-11",
    "Longitude": 26.682076061970808,
    "Latitude": 0.18710133098120174,
    "Sentiment": "positive"
  },
  {
    "": 488,
    "Unnamed: 0": 488,
    "Tweets": "I encourage you to read this story about the vital role of logisticians in the #Ebola response in #DRC. I thank all… https://t.co/Vel8DuXFde",
    "Dates": "2014-01-11",
    "Longitude": 25.454232763567322,
    "Latitude": 0.9980765400885763,
    "Sentiment": "positive"
  },
  {
    "": 489,
    "Unnamed: 0": 489,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 480 suspected/3393 total confirmed &amp; probable cases (118 probable/3275 confirmed… https://t.co/Kpmx3nop1C",
    "Dates": "2014-01-11",
    "Longitude": 19.736910168332862,
    "Latitude": 7.296547756965179,
    "Sentiment": "neutral"
  },
  {
    "": 490,
    "Unnamed: 0": 490,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 10 janvier 2014 \nhttps://t.co/8edn9Iebcz",
    "Dates": "2014-01-11",
    "Longitude": 18.893327326170397,
    "Latitude": 1.986832201079288,
    "Sentiment": "neutral"
  },
  {
    "": 491,
    "Unnamed: 0": 491,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 10 janvier 2014 https://t.co/NxTucAxPGU",
    "Dates": "2014-01-11",
    "Longitude": 23.93512476383226,
    "Latitude": 8.493614636172385,
    "Sentiment": "negative"
  },
  {
    "": 492,
    "Unnamed: 0": 492,
    "Tweets": "While the world is focused on #Ebola due to its threat for the western world, three times as many number of people… https://t.co/c6L7MQWwk4",
    "Dates": "2014-01-11",
    "Longitude": 23.826198661576566,
    "Latitude": 10.113656813426605,
    "Sentiment": "negative"
  },
  {
    "": 493,
    "Unnamed: 0": 493,
    "Tweets": "The Virgin Fake Omari Vs The Chad Me\n#BattleMemesByOmari #FAX #SDBH #Oxygen #Nigga #DragonBall #Swag #Virgin #Chad… https://t.co/fLvJ4Uv2At",
    "Dates": "2014-01-11",
    "Longitude": 24.034406438124087,
    "Latitude": 1.144833745532908,
    "Sentiment": "neutral"
  },
  {
    "": 494,
    "Unnamed: 0": 494,
    "Tweets": "This week, there were two new #Ebola cases in #Beni,  #DRC. It had been 29 days since the last confirmed case in th… https://t.co/LThwKX58Gf",
    "Dates": "2014-01-11",
    "Longitude": 24.909041563814633,
    "Latitude": 4.249441459385762,
    "Sentiment": "neutral"
  },
  {
    "": 495,
    "Unnamed: 0": 495,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 10 Janvier 2014 avec les données collectées jusqu'au 09.01.2014 👇🏾\n\n➡… https://t.co/urrs0otGoL",
    "Dates": "2014-01-11",
    "Longitude": 14.93621263317895,
    "Latitude": 5.102986907614044,
    "Sentiment": "neutral"
  },
  {
    "": 496,
    "Unnamed: 0": 496,
    "Tweets": "Un equipo de operaciones y logística de la OMS compuesto por 40 personas trabaja \"casi sin parar\" en la entrega dia… https://t.co/bxKNJqvtvr",
    "Dates": "2014-01-11",
    "Longitude": 23.667304944173804,
    "Latitude": -0.8892886976653891,
    "Sentiment": "neutral"
  },
  {
    "": 497,
    "Unnamed: 0": 497,
    "Tweets": "El relato de todos los eventos, algunos fortuitos, que condujeron al desarrollo de la #vacuna frente al #Ebola.  https://t.co/oaLZYBisnM",
    "Dates": "2014-01-11",
    "Longitude": 15.409987003716463,
    "Latitude": 6.078222551958857,
    "Sentiment": "neutral"
  },
  {
    "": 498,
    "Unnamed: 0": 498,
    "Tweets": "Medscape: Newly updated #Ebola clinical tool. https://t.co/euXPP6mtgq https://t.co/dk8dev7p7r https://t.co/Whx6bSQ2zT",
    "Dates": "2014-01-11",
    "Longitude": 17.8483382451308,
    "Latitude": 1.775174155342361,
    "Sentiment": "positive"
  },
  {
    "": 499,
    "Unnamed: 0": 499,
    "Tweets": "Stanno facendo di tutto per fare arrivare l'#ebola. https://t.co/ASq9Sa5wKj",
    "Dates": "2014-01-11",
    "Longitude": 19.2244055809089,
    "Latitude": 9.28484112250203,
    "Sentiment": "positive"
  },
  {
    "": 500,
    "Unnamed: 0": 500,
    "Tweets": "United States - Confirmed #Ebola Patient Dies Today - https://t.co/bgqXpocA7D via @NewsAlternative",
    "Dates": "2014-01-11",
    "Longitude": 20.239012597713412,
    "Latitude": -3.0655834181787345,
    "Sentiment": "neutral"
  },
  {
    "": 501,
    "Unnamed: 0": 501,
    "Tweets": "Dear @WHO: Call a Pub Hlth Emergency of Intl Concern meeting #WuhanSARS\n✓Novel respiratory pathogen\n✓ A dead person… https://t.co/UBeKBzp0Wp",
    "Dates": "2014-01-11",
    "Longitude": 17.13387821236983,
    "Latitude": 1.3120845348163708,
    "Sentiment": "neutral"
  },
  {
    "": 502,
    "Unnamed: 0": 502,
    "Tweets": "🖋En République démocratique du #Congo le virus #Ebola a fait 2000 morts en décembre 2019.\nEntre l'#Ébola et la roug… https://t.co/vIe4eA4JuO",
    "Dates": "2014-01-11",
    "Longitude": 19.025202832140426,
    "Latitude": 8.191298073700139,
    "Sentiment": "positive"
  },
  {
    "": 503,
    "Unnamed: 0": 503,
    "Tweets": "#BattleMemesByOmari #DragonBall #CellsNightmare #Gohan #GohanIsEvil #DragonBallTwitter #ComingSoon… https://t.co/u1ki5C2dga",
    "Dates": "2014-01-11",
    "Longitude": 29.571536232243705,
    "Latitude": 7.6017028869951755,
    "Sentiment": "negative"
  },
  {
    "": 504,
    "Unnamed: 0": 504,
    "Tweets": "Together, we are making a difference in the fight against #Ebola in the #DRC. \n\nSince the beginning of the outbreak… https://t.co/oBt5SvgiRF",
    "Dates": "2014-01-11",
    "Longitude": 19.0106725622489,
    "Latitude": -5.49910087194403,
    "Sentiment": "positive"
  },
  {
    "": 505,
    "Unnamed: 0": 505,
    "Tweets": "@Murky__Meg #Ebola",
    "Dates": "2014-01-11",
    "Longitude": 26.569135041529893,
    "Latitude": 7.0860180184230765,
    "Sentiment": "neutral"
  },
  {
    "": 506,
    "Unnamed: 0": 506,
    "Tweets": "Because the #Ebola outbreak wasn't enough for the people in #DRC. \n\nThank goodness for #vaccines to help prevent th… https://t.co/6vlECUOp2K",
    "Dates": "2014-01-11",
    "Longitude": 19.23536367799733,
    "Latitude": -0.17866388024940782,
    "Sentiment": "neutral"
  },
  {
    "": 507,
    "Unnamed: 0": 507,
    "Tweets": "#RDC: Epidémie #Ebola, le cumul des cas est de 3.393, dont 3.275 confirmés et 118 probables. Au total, il y a eu 2.… https://t.co/BOttrwZK3K",
    "Dates": "2014-01-11",
    "Longitude": 19.12261566943618,
    "Latitude": 0.29224862114065253,
    "Sentiment": "neutral"
  },
  {
    "": 508,
    "Unnamed: 0": 508,
    "Tweets": "Health leader in #ebola fight discusses what's being done to stamp out the virus https://t.co/74Mnx79QcD",
    "Dates": "2014-01-11",
    "Longitude": 27.051690436980284,
    "Latitude": 2.3488334309411165,
    "Sentiment": "neutral"
  },
  {
    "": 509,
    "Unnamed: 0": 509,
    "Tweets": "ISOLATED! https://t.co/EuPzOgfEFf #ebola",
    "Dates": "2014-01-11",
    "Longitude": 12.55924294429997,
    "Latitude": 7.09194804069836,
    "Sentiment": "neutral"
  },
  {
    "": 510,
    "Unnamed: 0": 510,
    "Tweets": "Against all odds’: The inside story of how scientists across three continents produced an #Ebola #vaccine… https://t.co/RQU6SZ7NmW",
    "Dates": "2014-01-11",
    "Longitude": 24.438517970051265,
    "Latitude": -4.473185408668304,
    "Sentiment": "neutral"
  },
  {
    "": 511,
    "Unnamed: 0": 511,
    "Tweets": "When the flying frugivores are unsettled by human activities leading to #deforestation, their habitats expand, inc… https://t.co/VaN0cu0wvf",
    "Dates": "2014-01-11",
    "Longitude": 20.49401797511596,
    "Latitude": 5.076367127672477,
    "Sentiment": "positive"
  },
  {
    "": 512,
    "Unnamed: 0": 512,
    "Tweets": "#Ebola was discovered in 1976 when simultaneous outbreaks occurred in the former Zaire and Sudan. Later determined… https://t.co/OSaRsh75RF",
    "Dates": "2014-01-11",
    "Longitude": 21.70918137010265,
    "Latitude": 1.858616870553278,
    "Sentiment": "positive"
  },
  {
    "": 513,
    "Unnamed: 0": 513,
    "Tweets": "What Ebola has taught us about human cooperation https://t.co/cqFXzLEO3B #ebola",
    "Dates": "2014-01-11",
    "Longitude": 28.37581812427377,
    "Latitude": 7.142535649049043,
    "Sentiment": "neutral"
  },
  {
    "": 514,
    "Unnamed: 0": 514,
    "Tweets": "#phep #globalhealth #Ebola #Vaccine https://t.co/MGg1dlg2iw",
    "Dates": "2014-01-10",
    "Longitude": 20.226036844581113,
    "Latitude": 5.91659033185868,
    "Sentiment": "neutral"
  },
  {
    "": 515,
    "Unnamed: 0": 515,
    "Tweets": "These are some of the key people who worked on the #Ebola vaccine. https://t.co/IyKgiyNNhI",
    "Dates": "2014-01-10",
    "Longitude": 21.536718904260148,
    "Latitude": 5.500248449602017,
    "Sentiment": "neutral"
  },
  {
    "": 516,
    "Unnamed: 0": 516,
    "Tweets": "#Béni. Things promised, things due. Tents &amp; matress brought to community Leaders and the Chief. @jimmykighoma @WHO… https://t.co/jdXEp9Jkp3",
    "Dates": "2014-01-10",
    "Longitude": 22.696545127596796,
    "Latitude": 9.25752816773344,
    "Sentiment": "neutral"
  },
  {
    "": 517,
    "Unnamed: 0": 517,
    "Tweets": "#Wegaanzehalen \n\n#Ebola is goed voor de omvolking! De #EU boten zijn weer onderweg om via de vertrouwde mensen-smok… https://t.co/85Mcn8f0Wk",
    "Dates": "2014-01-10",
    "Longitude": 28.25514304064827,
    "Latitude": -0.8946787035275516,
    "Sentiment": "neutral"
  },
  {
    "": 518,
    "Unnamed: 0": 518,
    "Tweets": "Just watched the #93DAYS #NetFlix movie about the #Ebola outbreak in Nigeria which included Dr Ameyo Adadevoh's… https://t.co/nUOX65qfug",
    "Dates": "2014-01-10",
    "Longitude": 24.434020531038332,
    "Latitude": 13.26312268896879,
    "Sentiment": "neutral"
  },
  {
    "": 519,
    "Unnamed: 0": 519,
    "Tweets": "Sad to say goodbye to Dr Jordana who was with us for her PhD and first PRDA. Did great work on #ebola proteins and… https://t.co/LUliA95Kdj",
    "Dates": "2014-01-10",
    "Longitude": 12.746776565946636,
    "Latitude": 6.017027362461458,
    "Sentiment": "neutral"
  },
  {
    "": 520,
    "Unnamed: 0": 520,
    "Tweets": "NEWS SCAN: #Ebola case in DRC; #MERS illness, antiviral treatment; #Polio in 3 countries; Gaza #measles outbreak https://t.co/5WAWMvKVgh",
    "Dates": "2014-01-10",
    "Longitude": 28.17089904160514,
    "Latitude": 7.6571121456942155,
    "Sentiment": "positive"
  },
  {
    "": 521,
    "Unnamed: 0": 521,
    "Tweets": "A long but fascinating read on Merck's Ebola vaccine. #ebolavaccine #Ebola\n#globalhealth \n‘Against all odds’: The i… https://t.co/C1Ej3o0hgb",
    "Dates": "2014-01-10",
    "Longitude": 33.95787790679122,
    "Latitude": 7.137742112166416,
    "Sentiment": "positive"
  },
  {
    "": 522,
    "Unnamed: 0": 522,
    "Tweets": "What #Ebola has taught us about #HumanCooperation https://t.co/VDbrlBarwz via @wef  A new vaccine against Ebola is… https://t.co/kFBAGt94PJ",
    "Dates": "2014-01-10",
    "Longitude": 22.266576875559235,
    "Latitude": 5.751752011518564,
    "Sentiment": "neutral"
  },
  {
    "": 523,
    "Unnamed: 0": 523,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/LYrP1VIMii",
    "Dates": "2014-01-10",
    "Longitude": 18.403263694091727,
    "Latitude": 4.1148597093501085,
    "Sentiment": "neutral"
  },
  {
    "": 524,
    "Unnamed: 0": 524,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 9 janvier 2014 https://t.co/lQOPPbxTXR",
    "Dates": "2014-01-10",
    "Longitude": 20.32636569219671,
    "Latitude": 10.052158594361206,
    "Sentiment": "neutral"
  },
  {
    "": 525,
    "Unnamed: 0": 525,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 10 janvier 2014 https://t.co/IPgWBihcX0",
    "Dates": "2014-01-10",
    "Longitude": 28.68931981070862,
    "Latitude": 10.274235806380199,
    "Sentiment": "neutral"
  },
  {
    "": 526,
    "Unnamed: 0": 526,
    "Tweets": "“This vaccine … from the beginning to the end — it should have never happened. On so many levels … against all odds… https://t.co/4eDd7JPaTl",
    "Dates": "2014-01-10",
    "Longitude": 24.214455791044678,
    "Latitude": 2.0122620520930874,
    "Sentiment": "positive"
  },
  {
    "": 527,
    "Unnamed: 0": 527,
    "Tweets": "https://t.co/DNB1WfT5be: A Link Between the #Ebola Outbreak and a US Bioweapons Lab? https://t.co/k33ybK8ew8",
    "Dates": "2014-01-10",
    "Longitude": 23.892345919181906,
    "Latitude": 2.1535431050038696,
    "Sentiment": "positive"
  },
  {
    "": 528,
    "Unnamed: 0": 528,
    "Tweets": "Petition · We Demand a Stop to the #Ebola Bio-terrorism and #Genocide in West #Africa · https://t.co/mVEkoUvfqt https://t.co/t4BtGGPWqW",
    "Dates": "2014-01-10",
    "Longitude": 23.243617513834998,
    "Latitude": 6.631262006701471,
    "Sentiment": "negative"
  },
  {
    "": 529,
    "Unnamed: 0": 529,
    "Tweets": "#Ebola \n\n✅La actual epidemia en el Congo inició en agosto de 2018\n✅Para noviembre, la OMS catalogaba oficialmente a… https://t.co/yLUAElbWNP",
    "Dates": "2014-01-10",
    "Longitude": 27.70558798521793,
    "Latitude": 0.6034794453953229,
    "Sentiment": "positive"
  },
  {
    "": 530,
    "Unnamed: 0": 530,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 10 jan; données datées du 09 jan 2014. Un nouveau c… https://t.co/HMjn1fELJb",
    "Dates": "2014-01-10",
    "Longitude": 21.914068124476756,
    "Latitude": 4.108115024499113,
    "Sentiment": "positive"
  },
  {
    "": 531,
    "Unnamed: 0": 531,
    "Tweets": "@CDCFlu explain how this is even something to be worried about in America? Funny, how the #Ebola #Vaccine just got… https://t.co/mcg2cEC4B7",
    "Dates": "2014-01-10",
    "Longitude": 20.891357123861088,
    "Latitude": 6.925360009858046,
    "Sentiment": "neutral"
  },
  {
    "": 532,
    "Unnamed: 0": 532,
    "Tweets": "@mazzenilsson Gates and Soros #Ebola",
    "Dates": "2014-01-10",
    "Longitude": 23.389534801348642,
    "Latitude": 5.6609089865842,
    "Sentiment": "neutral"
  },
  {
    "": 533,
    "Unnamed: 0": 533,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/dvs44fa85L… https://t.co/hE5BwPVrfY",
    "Dates": "2014-01-10",
    "Longitude": 29.604363445704138,
    "Latitude": 7.741162438753285,
    "Sentiment": "positive"
  },
  {
    "": 534,
    "Unnamed: 0": 534,
    "Tweets": "What will it take to finally end Congo's #ebola outbreak in 2014? Variety in expert responses reflects the complexi… https://t.co/ezWgl6Mvlu",
    "Dates": "2014-01-10",
    "Longitude": 25.091072095362858,
    "Latitude": -0.26099155477962377,
    "Sentiment": "positive"
  },
  {
    "": 535,
    "Unnamed: 0": 535,
    "Tweets": "Highlight this week: Ebola Session @CENDUCBerkeley symposium today\n\nGreat overview by Dr. Heinz Feldmann of Ebolavi… https://t.co/1dxs3mJNVb",
    "Dates": "2014-01-10",
    "Longitude": 21.856805012930266,
    "Latitude": 2.707383369399021,
    "Sentiment": "neutral"
  },
  {
    "": 536,
    "Unnamed: 0": 536,
    "Tweets": "Intriguing thread by @amymaxmen adding questions about privilege to @EmmanuelFreuden's interesting reporting on iss… https://t.co/ijFyq8uCmM",
    "Dates": "2014-01-10",
    "Longitude": 26.687492687683296,
    "Latitude": 7.594507362639464,
    "Sentiment": "positive"
  },
  {
    "": 537,
    "Unnamed: 0": 537,
    "Tweets": "We're so glad an #Ebola vaccine is moving forward! Great news from the Food and Drug Administration last week.… https://t.co/wUADrOA2Lo",
    "Dates": "2014-01-10",
    "Longitude": 19.128213114620053,
    "Latitude": 4.006399073929408,
    "Sentiment": "neutral"
  },
  {
    "": 538,
    "Unnamed: 0": 538,
    "Tweets": "@ECDC_EU CDTR, 5-11 January 2014, week 2 https://t.co/CmSWjUnFIp #Ebola #MERS #measles #flu #polio #WuhanPneumonia",
    "Dates": "2014-01-10",
    "Longitude": 19.34983796376526,
    "Latitude": 2.9377173739249747,
    "Sentiment": "negative"
  },
  {
    "": 539,
    "Unnamed: 0": 539,
    "Tweets": "GRACE makes the cover of Gorilla Journal for December 2019! Read all about our #perseverance despite the… https://t.co/PJwRvaALIJ",
    "Dates": "2014-01-10",
    "Longitude": 24.261815792005837,
    "Latitude": 5.735596314396452,
    "Sentiment": "positive"
  },
  {
    "": 540,
    "Unnamed: 0": 540,
    "Tweets": "MMWR: Cross-border movement during the DRC #Ebola outbreak https://t.co/U6BybEM0DL",
    "Dates": "2014-01-10",
    "Longitude": 17.216470894014265,
    "Latitude": 0.5665660588228434,
    "Sentiment": "neutral"
  },
  {
    "": 541,
    "Unnamed: 0": 541,
    "Tweets": "The remarkable story of how #scientists produced an #Ebola vaccine is a must-read article for everyone involved in… https://t.co/QGii9j3iY1",
    "Dates": "2014-01-10",
    "Longitude": 24.54414941524172,
    "Latitude": 3.3115350193150332,
    "Sentiment": "neutral"
  },
  {
    "": 542,
    "Unnamed: 0": 542,
    "Tweets": "How can #aidworkers who had contact with #Ebola patients in #Africa be brought back to #Germany safely? The German… https://t.co/5bBha4mnwQ",
    "Dates": "2014-01-10",
    "Longitude": 21.126636926993847,
    "Latitude": 0.5251614334656871,
    "Sentiment": "positive"
  },
  {
    "": 543,
    "Unnamed: 0": 543,
    "Tweets": "ARE YOU KIDDING ME?! Step 1: Drug Approval. (Dec 2019) Step 2: Incite hysteria. (See image) Step 3: Push new LIVE V… https://t.co/NpysdaRAAO",
    "Dates": "2014-01-10",
    "Longitude": 25.291615233151667,
    "Latitude": -0.013140541449182308,
    "Sentiment": "neutral"
  },
  {
    "": 544,
    "Unnamed: 0": 544,
    "Tweets": "At a talk on the Ervebo #Ebola vaccine by Heinz Feldmann. He says, \"Maybe we can dilute it ten times, maybe one hundred times.\" 🤷‍♂️",
    "Dates": "2014-01-10",
    "Longitude": 21.868262900420493,
    "Latitude": 2.2696076819187594,
    "Sentiment": "positive"
  },
  {
    "": 545,
    "Unnamed: 0": 545,
    "Tweets": "An #Ebola patient treated in the U.S. chose to remain anonymous. Now he’s telling his story. https://t.co/emX8uYiGxj via @washingtonpost",
    "Dates": "2014-01-10",
    "Longitude": 21.74230753950043,
    "Latitude": 1.3644077591667836,
    "Sentiment": "neutral"
  },
  {
    "": 546,
    "Unnamed: 0": 546,
    "Tweets": "On parle beaucoup plus d'#EBOLA mais l'épidémie de la #Rougeole qui sévit actuellement en #RDC est de loin plus meu… https://t.co/ureAoPfulu",
    "Dates": "2014-01-10",
    "Longitude": 21.314829777053554,
    "Latitude": 2.552068420587479,
    "Sentiment": "neutral"
  },
  {
    "": 547,
    "Unnamed: 0": 547,
    "Tweets": "#TagMeinstead #WhyThatFaker #PlzSomeoneBeMyFanCuzImLonely #FakeOmariSucks #Nigga #BOI #FanDumb… https://t.co/E234AIkwZs",
    "Dates": "2014-01-10",
    "Longitude": 15.718693317254349,
    "Latitude": 2.164760704239701,
    "Sentiment": "neutral"
  },
  {
    "": 548,
    "Unnamed: 0": 548,
    "Tweets": "If #Ebola had not crossed into Europe &amp; USA in 2014-16 outbreak, would wealthy countries care as much about control… https://t.co/Q0nY78eG10",
    "Dates": "2014-01-10",
    "Longitude": 21.722828609019,
    "Latitude": 2.6756938178541017,
    "Sentiment": "neutral"
  },
  {
    "": 549,
    "Unnamed: 0": 549,
    "Tweets": "Cas suspects d'#Ebola en #RDC                           https://t.co/iQcMcdqkSN",
    "Dates": "2014-01-10",
    "Longitude": 23.019016470974208,
    "Latitude": 5.378421507132607,
    "Sentiment": "positive"
  },
  {
    "": 550,
    "Unnamed: 0": 550,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/7FIVoeSYzV… https://t.co/ZLy5H2dNIo",
    "Dates": "2014-01-10",
    "Longitude": 17.52858429189153,
    "Latitude": 2.1023066855917287,
    "Sentiment": "neutral"
  },
  {
    "": 551,
    "Unnamed: 0": 551,
    "Tweets": "#Research #Vaccine- How Animal research models contributed to the discovery and development of vaccine to fight and… https://t.co/zbBi4XqDuN",
    "Dates": "2014-01-10",
    "Longitude": 21.032123249291516,
    "Latitude": -4.465796882783172,
    "Sentiment": "negative"
  },
  {
    "": 552,
    "Unnamed: 0": 552,
    "Tweets": "Interesting dispatch @EmmanuelFreuden, where he gets the #Ebola vax, which should be reserved for people who qualif… https://t.co/UEA5eRqoL5",
    "Dates": "2014-01-10",
    "Longitude": 21.903211738950066,
    "Latitude": 6.65473382986986,
    "Sentiment": "neutral"
  },
  {
    "": 553,
    "Unnamed: 0": 553,
    "Tweets": "DRC #Ebola: CMRE update, January 9 https://t.co/GSFlwGygGO",
    "Dates": "2014-01-10",
    "Longitude": 26.916388784727218,
    "Latitude": -0.989274645011406,
    "Sentiment": "positive"
  },
  {
    "": 554,
    "Unnamed: 0": 554,
    "Tweets": "'Against all odds’: The inside story of how scientists across three continents produced an #Ebola vaccine.… https://t.co/VIikUUWVpJ",
    "Dates": "2014-01-10",
    "Longitude": 17.791509949964784,
    "Latitude": 8.75096955754941,
    "Sentiment": "neutral"
  },
  {
    "": 555,
    "Unnamed: 0": 555,
    "Tweets": "What Will It Take To Finally End Congo's Ebola Outbreak In 2014? https://t.co/oac5ih7RF1 '..an outbreak that has pr… https://t.co/b7bQ3GttW3",
    "Dates": "2014-01-10",
    "Longitude": 20.804599396884292,
    "Latitude": 5.59260559507994,
    "Sentiment": "neutral"
  },
  {
    "": 556,
    "Unnamed: 0": 556,
    "Tweets": "This is an incredible article. Poor health often is a social issue #poverty #inequality #gender #education #access… https://t.co/YSxK4ZplMH",
    "Dates": "2014-01-10",
    "Longitude": 25.266051593905175,
    "Latitude": 5.74929869843502,
    "Sentiment": "positive"
  },
  {
    "": 557,
    "Unnamed: 0": 557,
    "Tweets": "WHO: #Ebola virus disease – Democratic Republic of the Congo https://t.co/Sr1XlHHqFJ",
    "Dates": "2014-01-10",
    "Longitude": 23.815697094883692,
    "Latitude": 4.865173856263246,
    "Sentiment": "neutral"
  },
  {
    "": 558,
    "Unnamed: 0": 558,
    "Tweets": "A concern for the global healthcare community. #Ebola #globalhealth #infectioncontrol\n\nhttps://t.co/8RoENYaead",
    "Dates": "2014-01-10",
    "Longitude": 22.013759943111673,
    "Latitude": 3.555567431673043,
    "Sentiment": "neutral"
  },
  {
    "": 559,
    "Unnamed: 0": 559,
    "Tweets": "Android 17 (DBS) Meets Up With Vegeta (GT) for the first time \n\n#BattleMemesByOmari #Niggadick #Bruh #StepSister… https://t.co/Lk3DkbCsYY",
    "Dates": "2014-01-10",
    "Longitude": 25.711639569330117,
    "Latitude": 2.365712334918558,
    "Sentiment": "neutral"
  },
  {
    "": 560,
    "Unnamed: 0": 560,
    "Tweets": "Incredible piece from @HelenBranswell of @statnews on the improbable journey of @Merck's #Ebola #vaccine from Canad… https://t.co/Bkmz0V2EdZ",
    "Dates": "2014-01-10",
    "Longitude": 13.175347249857477,
    "Latitude": -0.5991913993228017,
    "Sentiment": "neutral"
  },
  {
    "": 561,
    "Unnamed: 0": 561,
    "Tweets": "Experts Disagree About Need For More Armed Guards To Help End #DRCongo’s #Ebola Outbreak - not more vs. less; it's… https://t.co/srNyQjMW0s",
    "Dates": "2014-01-10",
    "Longitude": 15.59919616176711,
    "Latitude": 9.049238908752674,
    "Sentiment": "positive"
  },
  {
    "": 562,
    "Unnamed: 0": 562,
    "Tweets": "The January Global Health Bulletin from @Collinson is out now and well worth a read. #globalhealth #travel… https://t.co/X8Fwun6x5O",
    "Dates": "2014-01-10",
    "Longitude": 24.838453732486503,
    "Latitude": 8.157513997631026,
    "Sentiment": "positive"
  },
  {
    "": 563,
    "Unnamed: 0": 563,
    "Tweets": "The complex logistics of #Ebola response  https://t.co/mRzaad7W60",
    "Dates": "2014-01-10",
    "Longitude": 30.44042382800428,
    "Latitude": 3.034078485740811,
    "Sentiment": "positive"
  },
  {
    "": 564,
    "Unnamed: 0": 564,
    "Tweets": "‘Never let a crisis go to waste’: post-Ebola agenda-setting for health system strengthening in Guinea, research in… https://t.co/KlOxickw81",
    "Dates": "2014-01-10",
    "Longitude": 19.234575002606935,
    "Latitude": -1.3482129389985307,
    "Sentiment": "negative"
  },
  {
    "": 565,
    "Unnamed: 0": 565,
    "Tweets": "Here we go! Ebola “outbreak” 2014 the vaccine is now available Main stream will be fear mongering everyone into get… https://t.co/8ErSZSwrCe",
    "Dates": "2014-01-10",
    "Longitude": 18.10443423241833,
    "Latitude": 7.983755740352922,
    "Sentiment": "neutral"
  },
  {
    "": 566,
    "Unnamed: 0": 566,
    "Tweets": "Anthropologist Julienne Anoko has gone to great lengths to improve relationships between communities affected by… https://t.co/QA94o1z5sH",
    "Dates": "2014-01-10",
    "Longitude": 18.580166014053507,
    "Latitude": 7.27887654289464,
    "Sentiment": "neutral"
  },
  {
    "": 567,
    "Unnamed: 0": 567,
    "Tweets": "Entre las actuaciones llevadas a cabo en @GVAsalualicante en respuesta al brote de #ébola de 2014-15, el S.º de… https://t.co/FJkhGc0yuO",
    "Dates": "2014-01-10",
    "Longitude": 23.93557583584688,
    "Latitude": 3.0090786360797894,
    "Sentiment": "neutral"
  },
  {
    "": 568,
    "Unnamed: 0": 568,
    "Tweets": "A U.K.-based vaccines company has raised $11 million from Singapore-based venture capital group to work on preventi… https://t.co/u7MgBAswH8",
    "Dates": "2014-01-10",
    "Longitude": 27.999054968392976,
    "Latitude": 1.0622525399427847,
    "Sentiment": "neutral"
  },
  {
    "": 569,
    "Unnamed: 0": 569,
    "Tweets": "In case you still think measles is not a deadly disease...\n\n6,000 Dead From #Measles Outbreak In Congo via @WHO \n\nM… https://t.co/hmWxafQ499",
    "Dates": "2014-01-10",
    "Longitude": 26.304905452929944,
    "Latitude": 2.744578282982091,
    "Sentiment": "neutral"
  },
  {
    "": 570,
    "Unnamed: 0": 570,
    "Tweets": "As @AfricaCDC we’ve made a significant contribution to controlling the #Ebola outbreak in #DRC. More needs to be do… https://t.co/PiSmQ6Gi5F",
    "Dates": "2014-01-10",
    "Longitude": 19.565013916772934,
    "Latitude": 0.3748377214337122,
    "Sentiment": "neutral"
  },
  {
    "": 571,
    "Unnamed: 0": 571,
    "Tweets": "Can Big Data help to fight #Ebola? https://t.co/VdB8orOyHL",
    "Dates": "2014-01-10",
    "Longitude": 27.60789210958055,
    "Latitude": 4.807856524492158,
    "Sentiment": "neutral"
  },
  {
    "": 572,
    "Unnamed: 0": 572,
    "Tweets": "It looks like the last day with zero reported new #Ebola cases in #DRCongo was the 13 December 2019 report on cases… https://t.co/iguDvvWj2P",
    "Dates": "2014-01-10",
    "Longitude": 22.990376474844883,
    "Latitude": 2.4654879083439782,
    "Sentiment": "neutral"
  },
  {
    "": 573,
    "Unnamed: 0": 573,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/S9ciiedsCs… https://t.co/pR05CrTFKD",
    "Dates": "2014-01-10",
    "Longitude": 20.806322926562373,
    "Latitude": 8.71133809266913,
    "Sentiment": "neutral"
  },
  {
    "": 574,
    "Unnamed: 0": 574,
    "Tweets": "#Ebola: Virus whose very name strikes fear in every nation on earth:  https://t.co/5KaD5Pvvwk",
    "Dates": "2014-01-10",
    "Longitude": 28.847423533230177,
    "Latitude": -0.11370065103552385,
    "Sentiment": "positive"
  },
  {
    "": 575,
    "Unnamed: 0": 575,
    "Tweets": "Council also received a briefing on efforts being deployed by the Africa Centres for Disease Control and Prevention… https://t.co/LrJpGCXKyf",
    "Dates": "2014-01-10",
    "Longitude": 20.180521389321978,
    "Latitude": 7.065528609855212,
    "Sentiment": "neutral"
  },
  {
    "": 576,
    "Unnamed: 0": 576,
    "Tweets": "#IntheNews: @US_FDA  announces that an #Ebolaprevention #vaccine has been approved for the first time in the U.S. P… https://t.co/cX8gpASxWp",
    "Dates": "2014-01-10",
    "Longitude": 18.308639533759987,
    "Latitude": 2.565992001656375,
    "Sentiment": "neutral"
  },
  {
    "": 577,
    "Unnamed: 0": 577,
    "Tweets": "Great blog for anyone interested in #rstats in the field. What an interesting experience @aminata_fadl and a wonder… https://t.co/LoHM19KXd0",
    "Dates": "2014-01-10",
    "Longitude": 18.19689403093516,
    "Latitude": 7.471648216419477,
    "Sentiment": "neutral"
  },
  {
    "": 578,
    "Unnamed: 0": 578,
    "Tweets": "DBS #Gogeta Don’t Need Transformation to Stop SS4 Gogeta \nHe can Easily Whoop His Ass in Base it’s #BIGFAX… https://t.co/t2lnglj5NW",
    "Dates": "2014-01-10",
    "Longitude": 24.448355729533525,
    "Latitude": 3.6377530305647987,
    "Sentiment": "neutral"
  },
  {
    "": 579,
    "Unnamed: 0": 579,
    "Tweets": "ECDC_Outbreaks: Click here https://t.co/xFOi7WAiKc and find this week’s issue of our bulletin for #Epidemiologists… https://t.co/yMAx4XdpAg",
    "Dates": "2014-01-10",
    "Longitude": 22.25969260595006,
    "Latitude": 3.8665621506011285,
    "Sentiment": "neutral"
  },
  {
    "": 580,
    "Unnamed: 0": 580,
    "Tweets": "Feelings of fear, #abandonment, &amp; #stigma are affecting #children who are either victims or witnesses to #Ebola epi… https://t.co/i3yF5P5fVA",
    "Dates": "2014-01-10",
    "Longitude": 28.490844419866896,
    "Latitude": 7.231710306289658,
    "Sentiment": "neutral"
  },
  {
    "": 581,
    "Unnamed: 0": 581,
    "Tweets": "Had @WHO's @DrTedros ordered the existing #Ebola #vaccination to be used widely when the #DRC Ebola outbreak starte… https://t.co/8u8GNvh48m",
    "Dates": "2014-01-10",
    "Longitude": 20.069618560754346,
    "Latitude": 6.346766718189366,
    "Sentiment": "neutral"
  },
  {
    "": 582,
    "Unnamed: 0": 582,
    "Tweets": "Click here https://t.co/eXI8frdh7d and find this week’s issue of our bulletin for #Epidemiologists and… https://t.co/XdPbaIDjRz",
    "Dates": "2014-01-10",
    "Longitude": 21.433954467298534,
    "Latitude": 9.02860704257998,
    "Sentiment": "negative"
  },
  {
    "": 583,
    "Unnamed: 0": 583,
    "Tweets": "#Epidémie #Ebola : un nouveau cas enregistré à Beni après 29 jours d'accalmie https://t.co/iB2wz4R103\n#ONG #humanitaire #santé",
    "Dates": "2014-01-10",
    "Longitude": 26.06305393490814,
    "Latitude": 6.682171044427303,
    "Sentiment": "neutral"
  },
  {
    "": 584,
    "Unnamed: 0": 584,
    "Tweets": "L'agenzia americana offre immunità legale ai produttori di vaccini contro #Ebola. \nIl nuovo vaccino #ERVEBO è un va… https://t.co/YF6j299Mtv",
    "Dates": "2014-01-10",
    "Longitude": 27.680318287711152,
    "Latitude": 5.486997526461952,
    "Sentiment": "positive"
  },
  {
    "": 585,
    "Unnamed: 0": 585,
    "Tweets": "Here comes #Ebola.\nThey will push #vaccines with live virus, and those people will create the outbreak. Say NO!!! https://t.co/6nglIYgJhV",
    "Dates": "2014-01-10",
    "Longitude": 22.563848466889763,
    "Latitude": 4.2367227212451315,
    "Sentiment": "neutral"
  },
  {
    "": 586,
    "Unnamed: 0": 586,
    "Tweets": "What Will It Take To Finally End Congo's #Ebola Outbreak In 2014? by @aizenglobe https://t.co/1lu9Z5rSY5 via… https://t.co/dAGgjDWeKi",
    "Dates": "2014-01-10",
    "Longitude": 20.484271518512525,
    "Latitude": 2.1544183779628945,
    "Sentiment": "neutral"
  },
  {
    "": 587,
    "Unnamed: 0": 587,
    "Tweets": "Mundama, of #DRCongo’s health ministry, says one misstep early on in the outbreak was to set up the #Ebola response… https://t.co/K99N6v0DoY",
    "Dates": "2014-01-10",
    "Longitude": 23.269485373035224,
    "Latitude": 3.9187993546721227,
    "Sentiment": "neutral"
  },
  {
    "": 588,
    "Unnamed: 0": 588,
    "Tweets": "is it possible to finally end this outbreak in 2014? And if so, what will it take?\n@NPR put that question to five p… https://t.co/Quwc83gOzn",
    "Dates": "2014-01-10",
    "Longitude": 23.133706262843678,
    "Latitude": 2.219194619649498,
    "Sentiment": "neutral"
  },
  {
    "": 589,
    "Unnamed: 0": 589,
    "Tweets": "👏 Diesen Wunsch teilen wir. #2014werdenwir uns deshalb weiterhin gemeinsam dafür stark machen, dass diese Medikamen… https://t.co/FWt6IGGhCR",
    "Dates": "2014-01-10",
    "Longitude": 22.360381383521176,
    "Latitude": 3.927793612540823,
    "Sentiment": "neutral"
  },
  {
    "": 590,
    "Unnamed: 0": 590,
    "Tweets": "This is a long read on a work day. But if you're looking for weekend reads, how about this? I dove into the backsto… https://t.co/fdJRIOBoSs",
    "Dates": "2014-01-10",
    "Longitude": 22.76018574509652,
    "Latitude": 10.421810170686392,
    "Sentiment": "neutral"
  },
  {
    "": 591,
    "Unnamed: 0": 591,
    "Tweets": "@ResolveTSL @NCDCgov @Chikwe_I @InfectiousDz @EpidAlert @DrTomFrieden @drasatrust @WHONigeria @OoasWaho @ekemma… https://t.co/aykBEjmafL",
    "Dates": "2014-01-10",
    "Longitude": 22.191556996108964,
    "Latitude": 3.1848315826093034,
    "Sentiment": "positive"
  },
  {
    "": 592,
    "Unnamed: 0": 592,
    "Tweets": "Ebola #Virus disease – Democratic Republic of the Congo @WHO #Health #Ebola #Africa https://t.co/c73Wmaza2Z",
    "Dates": "2014-01-10",
    "Longitude": 23.74896961014775,
    "Latitude": 3.3381650174925714,
    "Sentiment": "neutral"
  },
  {
    "": 593,
    "Unnamed: 0": 593,
    "Tweets": "#Ebola can be transmitted through #sperm for up to TWO years after #infection. Always use #protection! https://t.co/Glfchu04KM",
    "Dates": "2014-01-10",
    "Longitude": 29.057575242405353,
    "Latitude": 4.516269623179159,
    "Sentiment": "neutral"
  },
  {
    "": 0,
    "Unnamed: 0": 0,
    "Tweets": "It was great to host our colleagues from @EC_StockholmRep today at our premises.\n\nTalked about our mission and poss… https://t.co/sPfc9ekcMQ",
    "Dates": "2014-01-16",
    "Longitude": 4.334393695822375,
    "Latitude": 11.970804207111229,
    "Sentiment": "neutral"
  },
  {
    "": 1,
    "Unnamed: 0": 1,
    "Tweets": "#phep #globalhealth #Ebola #smem https://t.co/M3yjsPeR46",
    "Dates": "2014-01-16",
    "Longitude": -7.828623949656961,
    "Latitude": 10.650561153425981,
    "Sentiment": "positive"
  },
  {
    "": 2,
    "Unnamed: 0": 2,
    "Tweets": "#Ebola in #DRC . Cases traced to Mabalako still fueling DRC Ebola outbreak https://t.co/R1TTcNymSf",
    "Dates": "2014-01-16",
    "Longitude": 5.680832261090046,
    "Latitude": 8.634894460674948,
    "Sentiment": "neutral"
  },
  {
    "": 3,
    "Unnamed: 0": 3,
    "Tweets": "My first opinion piece for 2014 is for Project Syndicate @ProSyn : 👉👉 Why an #Ebola Vaccine Is Not Enough.\nhttps://t.co/4SHKubijCc",
    "Dates": "2014-01-16",
    "Longitude": 0.23400009488819862,
    "Latitude": 11.930437828334703,
    "Sentiment": "neutral"
  },
  {
    "": 4,
    "Unnamed: 0": 4,
    "Tweets": "Ease of movement in #DRC allows people to put food on the table, keep children in school, sell goods &amp; seek refuge… https://t.co/OiM6QYl4Ej",
    "Dates": "2014-01-16",
    "Longitude": -0.00461998016986076,
    "Latitude": 9.648309811326582,
    "Sentiment": "neutral"
  },
  {
    "": 5,
    "Unnamed: 0": 5,
    "Tweets": "Advanced #Diagnostics for Infectious Disease's final program is now online! Our opening session features… https://t.co/RzUX36vOm4",
    "Dates": "2014-01-16",
    "Longitude": 4.209812320532083,
    "Latitude": 11.265907738138013,
    "Sentiment": "neutral"
  },
  {
    "": 6,
    "Unnamed: 0": 6,
    "Tweets": "Great to see strong interest in excellent learning shared through #GettingtoZero @gatesfoundation #Ebola https://t.co/MPJCLmt9M0",
    "Dates": "2014-01-16",
    "Longitude": 4.385977071430318,
    "Latitude": 10.981494335989098,
    "Sentiment": "positive"
  },
  {
    "": 7,
    "Unnamed: 0": 7,
    "Tweets": "Human transmission of #WuhanPneumonia may be occuring as #Japan @NHKWorld_News confirms first case of #coronavirus… https://t.co/e544cklLu9",
    "Dates": "2014-01-16",
    "Longitude": -1.5294792064854708,
    "Latitude": 9.21668032811717,
    "Sentiment": "neutral"
  },
  {
    "": 8,
    "Unnamed: 0": 8,
    "Tweets": "Cases traced to Mabalako still fueling DRC #Ebola outbreak https://t.co/RQq7RWpKEG",
    "Dates": "2014-01-16",
    "Longitude": 5.146827375824015,
    "Latitude": 9.24340514402659,
    "Sentiment": "neutral"
  },
  {
    "": 9,
    "Unnamed: 0": 9,
    "Tweets": "La enfermedad X podría matar a millones - advertencia de Bill Gates\nLa guerra NUCLEAR no es la mayor https://t.co/66T3BG0NTH #ebola",
    "Dates": "2014-01-16",
    "Longitude": 6.196371480742035,
    "Latitude": 10.969950482046379,
    "Sentiment": "neutral"
  },
  {
    "": 10,
    "Unnamed: 0": 10,
    "Tweets": "This is about trust, no social media strategy is going to fix broken trust. Its much deeper. How #war and… https://t.co/URenIo3Y8x",
    "Dates": "2014-01-16",
    "Longitude": 2.407814146024977,
    "Latitude": 10.586014314916953,
    "Sentiment": "positive"
  },
  {
    "": 11,
    "Unnamed: 0": 11,
    "Tweets": "30 nuevos medicamentos aprobados en 2019 por la @EMA_News:\n\n🔸 1/3 corresponden a las áreas de #hematología y… https://t.co/2MS92eERGI",
    "Dates": "2014-01-16",
    "Longitude": 11.402084923962143,
    "Latitude": 11.11839484376196,
    "Sentiment": "positive"
  },
  {
    "": 12,
    "Unnamed: 0": 12,
    "Tweets": "As global focus shifts to #WuhanSARS, good time to remember @WHO @MSF\n@WHOGOARN partners and multiple responders st… https://t.co/4EYrvuHvTG",
    "Dates": "2014-01-16",
    "Longitude": 1.3710095188787879,
    "Latitude": 10.376512167176546,
    "Sentiment": "neutral"
  },
  {
    "": 13,
    "Unnamed: 0": 13,
    "Tweets": "”During a Public Health Emergency like the #Ebola virus the media has to be very careful on how they report it, dur… https://t.co/aCZIGlDwqX",
    "Dates": "2014-01-16",
    "Longitude": 2.4591690621441114,
    "Latitude": 11.726417077538748,
    "Sentiment": "neutral"
  },
  {
    "": 14,
    "Unnamed: 0": 14,
    "Tweets": "Three new confirmed #Ebola cases @WHO @MinSanteRDC https://t.co/pQ4yDtndkJ",
    "Dates": "2014-01-16",
    "Longitude": 1.862182594428024,
    "Latitude": 10.187422404387306,
    "Sentiment": "neutral"
  },
  {
    "": 15,
    "Unnamed: 0": 15,
    "Tweets": "@ombaggio Thank you for the conversation! What is specific to Eastern Congo that warrants a different approach, whi… https://t.co/MTisAtuC38",
    "Dates": "2014-01-16",
    "Longitude": 5.826517638804692,
    "Latitude": 10.689325210812042,
    "Sentiment": "negative"
  },
  {
    "": 16,
    "Unnamed: 0": 16,
    "Tweets": "Human Transmission Of New Coronavirus May Be Occuring; Ebola Outbreak Stabilizes https://t.co/Ti4FmO91AV… https://t.co/J1UpXXu67n",
    "Dates": "2014-01-16",
    "Longitude": 8.144164726564274,
    "Latitude": 8.59412221234502,
    "Sentiment": "neutral"
  },
  {
    "": 17,
    "Unnamed: 0": 17,
    "Tweets": "#Ebola en #RDC        https://t.co/XOq82C1HMd",
    "Dates": "2014-01-16",
    "Longitude": 8.972216663373082,
    "Latitude": 9.193005951869225,
    "Sentiment": "neutral"
  },
  {
    "": 18,
    "Unnamed: 0": 18,
    "Tweets": "This update includes news on the #Ebola vaccine, #infectious disease in China, #dengue in SEA, #tobacco control,… https://t.co/vxDmJCAlvr",
    "Dates": "2014-01-16",
    "Longitude": 4.072398340932636,
    "Latitude": 7.959346421851814,
    "Sentiment": "positive"
  },
  {
    "": 19,
    "Unnamed: 0": 19,
    "Tweets": "Amahugurwa y’abanyamakuru kuri Ebola: Abanyamakuru bakwiye kuba nyambere mu gutanga amakuru yizewe, kugenzura neza… https://t.co/atS2SZRu2G",
    "Dates": "2014-01-16",
    "Longitude": 2.1456096416489756,
    "Latitude": 8.85640373553935,
    "Sentiment": "neutral"
  },
  {
    "": 20,
    "Unnamed: 0": 20,
    "Tweets": "La Enfermedad X necesita investigación urgente como el Ébola 2019\nLas enfermedades virales son una de las https://t.co/S0cEP9nWUK #ebola",
    "Dates": "2014-01-16",
    "Longitude": 2.007730580876458,
    "Latitude": 9.34865609414102,
    "Sentiment": "negative"
  },
  {
    "": 21,
    "Unnamed: 0": 21,
    "Tweets": "Journalists from different media houses are being  enlightened on how to report public health emergencies… https://t.co/TqTwAl71mi",
    "Dates": "2014-01-16",
    "Longitude": 1.1009404097393278,
    "Latitude": 11.255347436037656,
    "Sentiment": "positive"
  },
  {
    "": 22,
    "Unnamed: 0": 22,
    "Tweets": "Journalists from different media houses are being  enlightened on how to report public health emergencies… https://t.co/jRTGecIuOX",
    "Dates": "2014-01-16",
    "Longitude": 6.010678101912202,
    "Latitude": 9.655113259869013,
    "Sentiment": "neutral"
  },
  {
    "": 23,
    "Unnamed: 0": 23,
    "Tweets": "El #Ebola mata dos veces\".\nArtículo de @Hache_Hache \nhttps://t.co/ueSFTopdb1",
    "Dates": "2014-01-16",
    "Longitude": 3.5401926801080066,
    "Latitude": 11.456483115468247,
    "Sentiment": "positive"
  },
  {
    "": 24,
    "Unnamed: 0": 24,
    "Tweets": "“Media will internationalize a Public Health crisis and this will help in tackling it... “ -Rajat Madhok \n\n#Ebola… https://t.co/WEyWl1Odap",
    "Dates": "2014-01-16",
    "Longitude": 11.524986277087667,
    "Latitude": 11.522646277453296,
    "Sentiment": "neutral"
  },
  {
    "": 25,
    "Unnamed: 0": 25,
    "Tweets": "@VincentCrypt46 @Jordan_Sather_ Virus?  #Ebola\nVaccine by J&amp;J approved JUST LAST WEEK \n\nhttps://t.co/b7u0452GaA\n\nAn… https://t.co/JJ6N75CgEk",
    "Dates": "2014-01-16",
    "Longitude": 8.93839624179581,
    "Latitude": 8.437263769433038,
    "Sentiment": "neutral"
  },
  {
    "": 26,
    "Unnamed: 0": 26,
    "Tweets": "“In early 80s and 90s American Journalists massively informed the world about HIV,  never underestimate the role of… https://t.co/5eB5urnWxX",
    "Dates": "2014-01-16",
    "Longitude": 10.592534692191098,
    "Latitude": 9.224611811613647,
    "Sentiment": "neutral"
  },
  {
    "": 27,
    "Unnamed: 0": 27,
    "Tweets": "@RajatMadhok : the media helps set the agenda, monitors appropriateness of response to the emergency and helps to '… https://t.co/ZH81Scgz6d",
    "Dates": "2014-01-16",
    "Longitude": 4.340062330096652,
    "Latitude": 10.295411315883761,
    "Sentiment": "neutral"
  },
  {
    "": 28,
    "Unnamed: 0": 28,
    "Tweets": "@unicefrw communication Expert shared his experience on the role of Mass Media in informing the public about the pr… https://t.co/buaXW3Teu9",
    "Dates": "2014-01-16",
    "Longitude": 4.52400105042347,
    "Latitude": 10.681225146698909,
    "Sentiment": "neutral"
  },
  {
    "": 29,
    "Unnamed: 0": 29,
    "Tweets": "#Ebola-Ausbruch: Tod aus dem Regenwald https://t.co/7iwbl2Fo3n https://t.co/2jb5OZTCiw",
    "Dates": "2014-01-16",
    "Longitude": 1.6434555397440138,
    "Latitude": 10.08243229952366,
    "Sentiment": "neutral"
  },
  {
    "": 30,
    "Unnamed: 0": 30,
    "Tweets": "“The Mobile Journalism is and will be key in informing communities about a certain Public Health Emergence like… https://t.co/o4Gw3Tw5gE",
    "Dates": "2014-01-16",
    "Longitude": 7.966307960036392,
    "Latitude": 12.880148415796086,
    "Sentiment": "neutral"
  },
  {
    "": 31,
    "Unnamed: 0": 31,
    "Tweets": "With @RBCRwanda and @arjrwanda, we're training journalists from across Rwanda on #Ebola. \n\n#TwirindeEbola https://t.co/LsCz7sSdFl",
    "Dates": "2014-01-16",
    "Longitude": 8.106040301682583,
    "Latitude": 10.422762993845957,
    "Sentiment": "neutral"
  },
  {
    "": 32,
    "Unnamed: 0": 32,
    "Tweets": "Zones de santé les plus affectées par le #virus #Ebola en #RDC et nombre de #vaccinations effectuées https://t.co/2IyVqjaegm",
    "Dates": "2014-01-16",
    "Longitude": 0.48509420541784287,
    "Latitude": 8.961525171230319,
    "Sentiment": "neutral"
  },
  {
    "": 33,
    "Unnamed: 0": 33,
    "Tweets": "Local and international journalists being empowered with knowledge on how to better report public health emergencie… https://t.co/k1MyXlz0n6",
    "Dates": "2014-01-16",
    "Longitude": 6.0752163454948915,
    "Latitude": 10.476689440779229,
    "Sentiment": "neutral"
  },
  {
    "": 34,
    "Unnamed: 0": 34,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 14 janvier 2014 https://t.co/3pgeVkkJOH",
    "Dates": "2014-01-16",
    "Longitude": -3.0747255604363177,
    "Latitude": 9.113582222997472,
    "Sentiment": "neutral"
  },
  {
    "": 35,
    "Unnamed: 0": 35,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 15 janvier 2014 https://t.co/hVbgL0SE3Q",
    "Dates": "2014-01-16",
    "Longitude": 5.392125388242475,
    "Latitude": 9.437913315007446,
    "Sentiment": "neutral"
  },
  {
    "": 36,
    "Unnamed: 0": 36,
    "Tweets": "Mr @AldoHavugimana chairman of @arjrwanda officiated a 3 days training of Journalists on Ebola prevention. He insis… https://t.co/CarV6BzXdD",
    "Dates": "2014-01-16",
    "Longitude": 6.981142898598263,
    "Latitude": 9.420812138197158,
    "Sentiment": "neutral"
  },
  {
    "": 37,
    "Unnamed: 0": 37,
    "Tweets": "@RwandaHealth spokesman Kayumba: Media is a core partner in preventing and preparedness for epidemics. #Ebola #Rwanda @unicefrw @arjrwanda",
    "Dates": "2014-01-16",
    "Longitude": 0.4115713508811485,
    "Latitude": 11.201844694173058,
    "Sentiment": "neutral"
  },
  {
    "": 38,
    "Unnamed: 0": 38,
    "Tweets": "“You will never report or write on Public Health Threat like #Ebola when you don’t even understand the Virus, Commu… https://t.co/PEBwm4Amdl",
    "Dates": "2014-01-16",
    "Longitude": 5.297167026650616,
    "Latitude": 12.081865175295187,
    "Sentiment": "neutral"
  },
  {
    "": 39,
    "Unnamed: 0": 39,
    "Tweets": "In his Welcome remark Mr @AldoHavugimana a journalist and the President of @arjrwanda focused on the role of the me… https://t.co/rjDjOAEIEQ",
    "Dates": "2014-01-16",
    "Longitude": 0.6272898882573887,
    "Latitude": 9.238469102307304,
    "Sentiment": "neutral"
  },
  {
    "": 40,
    "Unnamed: 0": 40,
    "Tweets": "Happening now at Hilltop Hotel is the training on Public Health Emergencies reporting and writing focusing on… https://t.co/1Zp6q3MECq",
    "Dates": "2014-01-16",
    "Longitude": 6.708930449438812,
    "Latitude": 8.407481153348575,
    "Sentiment": "positive"
  },
  {
    "": 41,
    "Unnamed: 0": 41,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 15 jan; données du 14 jan 2014. Trois (3) nouveaux… https://t.co/2efw7HzUpT",
    "Dates": "2014-01-16",
    "Longitude": 9.36538695501596,
    "Latitude": 10.38666477296155,
    "Sentiment": "neutral"
  },
  {
    "": 42,
    "Unnamed: 0": 42,
    "Tweets": "Learn more about what @Cardno's @P4_Project and partners are doing to improve public health outcomes across the glo… https://t.co/VCVMGSmZp2",
    "Dates": "2014-01-16",
    "Longitude": 13.08470477856146,
    "Latitude": 9.187069954942196,
    "Sentiment": "neutral"
  },
  {
    "": 43,
    "Unnamed: 0": 43,
    "Tweets": "@HassanRouhani The story about the #Congo #Ebola crisis truly broke my heart. Nothing gets past me. Killing Medical… https://t.co/w57QCITfEd",
    "Dates": "2014-01-16",
    "Longitude": -2.11405299185129,
    "Latitude": 9.992546298261201,
    "Sentiment": "neutral"
  },
  {
    "": 44,
    "Unnamed: 0": 44,
    "Tweets": "It is amazing how the Red Cross volunteers have been supporting the response to #Ebola in #DRCongo, and how efforts… https://t.co/dc10yZFuwv",
    "Dates": "2014-01-16",
    "Longitude": 6.473585428255332,
    "Latitude": 10.951168955379964,
    "Sentiment": "positive"
  },
  {
    "": 45,
    "Unnamed: 0": 45,
    "Tweets": "In #DRCongo, misinformation about #Ebola persists even as cases slow. \n\nSharing information with at-risk communitie… https://t.co/hFxTtZ1lwv",
    "Dates": "2014-01-16",
    "Longitude": 5.866652199664826,
    "Latitude": 8.722318906989441,
    "Sentiment": "neutral"
  },
  {
    "": 46,
    "Unnamed: 0": 46,
    "Tweets": "Heridos graves dos voluntarios de @CruzRojaEsp  por un ataque en el entierro de un enfermo de #ébola en RDC https://t.co/DzBe6ZN1Uj",
    "Dates": "2014-01-16",
    "Longitude": 1.9222217465446882,
    "Latitude": 9.554231106410171,
    "Sentiment": "neutral"
  },
  {
    "": 47,
    "Unnamed: 0": 47,
    "Tweets": "Protective clothing limits the interaction doctors in DRC can have with #Ebola patients. Frustrated by this, a Cong… https://t.co/Mr9A4RxDBZ",
    "Dates": "2014-01-16",
    "Longitude": 3.023698756045847,
    "Latitude": 9.198151377362072,
    "Sentiment": "neutral"
  },
  {
    "": 48,
    "Unnamed: 0": 48,
    "Tweets": "BBC Newsday interviews @CIFOR scientist on deforestation, bats and Ebola study: Suspected Ebola carriers often thri… https://t.co/qCS8rzbZf8",
    "Dates": "2014-01-16",
    "Longitude": 2.9819007284703978,
    "Latitude": 10.892397984683623,
    "Sentiment": "positive"
  },
  {
    "": 49,
    "Unnamed: 0": 49,
    "Tweets": "A short and clear read about why it is important to involve communities and negotiate a compromise between… https://t.co/csy2AQHt2W",
    "Dates": "2014-01-16",
    "Longitude": 3.656726137312929,
    "Latitude": 10.63531718479676,
    "Sentiment": "neutral"
  },
  {
    "": 50,
    "Unnamed: 0": 50,
    "Tweets": "#Rougeole et #Ebola en #RDC  https://t.co/IUvaLwRmj5",
    "Dates": "2014-01-16",
    "Longitude": -4.062006649310428,
    "Latitude": 10.54623640343072,
    "Sentiment": "neutral"
  },
  {
    "": 51,
    "Unnamed: 0": 51,
    "Tweets": "@MSF: DRC #Ebola outbreak crisis update, January 2014 https://t.co/CxQf89yvpT via @msf",
    "Dates": "2014-01-16",
    "Longitude": -1.0891714224336866,
    "Latitude": 9.950543747657212,
    "Sentiment": "neutral"
  },
  {
    "": 52,
    "Unnamed: 0": 52,
    "Tweets": "@NicolasJSimard @karinagould @LongondoEteni Le focus sur le système de santé est primordial car il n’y a pas qu’… https://t.co/zkT6rZP9Wh",
    "Dates": "2014-01-16",
    "Longitude": 9.769442301312726,
    "Latitude": 12.021757355908111,
    "Sentiment": "neutral"
  },
  {
    "": 53,
    "Unnamed: 0": 53,
    "Tweets": "@OmariMemes MEGA #BIGFAX\n\n#BattleMemesByOmari #HeyGuysItsOmariPlzBeMyFanCuzImLonely #Oxygen #DragonBallMeme… https://t.co/7zap3kIz4m",
    "Dates": "2014-01-16",
    "Longitude": -4.188360203569086,
    "Latitude": 11.149013521189016,
    "Sentiment": "neutral"
  },
  {
    "": 54,
    "Unnamed: 0": 54,
    "Tweets": "MEGA #BIGFAX\n\n#BattleMemesByOmari #HeyGuysItsOmariPlzBeMyFanCuzImLonely #Oxygen #DragonBallMeme #DragonBallSuper… https://t.co/mgPvmrAnN4",
    "Dates": "2014-01-16",
    "Longitude": 5.624429738538675,
    "Latitude": 8.561731897125853,
    "Sentiment": "positive"
  },
  {
    "": 55,
    "Unnamed: 0": 55,
    "Tweets": "Nope. Can't hold it in any longer. Just curling up remembering every person I've ever met affected by a disaster in… https://t.co/qXV3ZGJhPI",
    "Dates": "2014-01-16",
    "Longitude": 4.649004406962007,
    "Latitude": 9.646888383445143,
    "Sentiment": "neutral"
  },
  {
    "": 56,
    "Unnamed: 0": 56,
    "Tweets": "US approves @Merck ’s #Ebola vaccine https://t.co/tWia0RwL0E",
    "Dates": "2014-01-16",
    "Longitude": -1.2831815135914981,
    "Latitude": 11.940983982313266,
    "Sentiment": "neutral"
  },
  {
    "": 57,
    "Unnamed: 0": 57,
    "Tweets": "Can you believe #Ebola still lingers in #DRC? Compound crises of disease, violence, refugees &amp; distrust. Even with… https://t.co/BQjeueB4hu",
    "Dates": "2014-01-16",
    "Longitude": -8.978799556080576,
    "Latitude": 9.302645831330803,
    "Sentiment": "positive"
  },
  {
    "": 58,
    "Unnamed: 0": 58,
    "Tweets": "This was a huge issue in 2018. Here is update on the human crisis #ebola in a war zone. Africa.\n\nhttps://t.co/Q24jr94Vkd",
    "Dates": "2014-01-16",
    "Longitude": 9.009023217706414,
    "Latitude": 10.578233951648514,
    "Sentiment": "negative"
  },
  {
    "": 59,
    "Unnamed: 0": 59,
    "Tweets": "#HeikoMaas will für #Ebola-Massen-Infektion in #Deutschland sorgen https://t.co/j8rpBChI8T #anonymousnews via @anoynews",
    "Dates": "2014-01-16",
    "Longitude": 1.3725375766889938,
    "Latitude": 9.732210909130613,
    "Sentiment": "positive"
  },
  {
    "": 60,
    "Unnamed: 0": 60,
    "Tweets": "@UNICEFDRC Bravo et merci pour l’excellent travail.   On ne parle pas assez de tous ces héros dans l’ombre si impor… https://t.co/nrnYqrA1py",
    "Dates": "2014-01-16",
    "Longitude": 7.076794114410384,
    "Latitude": 8.15872460908242,
    "Sentiment": "negative"
  },
  {
    "": 61,
    "Unnamed: 0": 61,
    "Tweets": ".@NewsHour video  PBS Newshour: How war and misinformation are complicating the #DRCongo #DRC's #Ebola battle https://t.co/mi2KVCkJ8q",
    "Dates": "2014-01-16",
    "Longitude": 3.3277748138050693,
    "Latitude": 12.438838022221468,
    "Sentiment": "neutral"
  },
  {
    "": 62,
    "Unnamed: 0": 62,
    "Tweets": "@dahboo7 🚨🇺🇸🤯😶🤔🤔\nWHAT'S UP\n#Kentucky??! #Cyber #attacks #SecurityThreats-\nALERTS!! #Law Makers whisked away by #DHS… https://t.co/7v7ttP3sdJ",
    "Dates": "2014-01-16",
    "Longitude": 4.512713126422791,
    "Latitude": 11.076927578786737,
    "Sentiment": "neutral"
  },
  {
    "": 63,
    "Unnamed: 0": 63,
    "Tweets": "Cases traced to Mabalako still fueling DRC Ebola outbreak https://t.co/DP4hpoEgEv  @CEPI #Profectus #Ebola",
    "Dates": "2014-01-16",
    "Longitude": 10.265570942170672,
    "Latitude": 10.185848619916685,
    "Sentiment": "negative"
  },
  {
    "": 64,
    "Unnamed: 0": 64,
    "Tweets": "fighting the #Ebola virus in a war zone; when attacks are being made on medical teams: special correspondent… https://t.co/TYzEOB0UGS",
    "Dates": "2014-01-15",
    "Longitude": -5.136016946434875,
    "Latitude": 9.029170014730788,
    "Sentiment": "neutral"
  },
  {
    "": 65,
    "Unnamed: 0": 65,
    "Tweets": "Today Rwandan Journalists start a training workshop on Communicating in Public Health Emergencies. @arjrwanda,… https://t.co/QQHH4Zfxkh",
    "Dates": "2014-01-15",
    "Longitude": -1.1012961151095544,
    "Latitude": 9.745290721034735,
    "Sentiment": "positive"
  },
  {
    "": 66,
    "Unnamed: 0": 66,
    "Tweets": "Hey!\nThe nightly news is actually talking about #Ebola in the #Congo",
    "Dates": "2014-01-15",
    "Longitude": 7.575505759563406,
    "Latitude": 9.659359738993064,
    "Sentiment": "neutral"
  },
  {
    "": 67,
    "Unnamed: 0": 67,
    "Tweets": "Las otras formas de matar que tiene el ébola: https://t.co/2rvpi34LQm #Ébola",
    "Dates": "2014-01-15",
    "Longitude": -1.0806085474363991,
    "Latitude": 10.264869064124976,
    "Sentiment": "neutral"
  },
  {
    "": 68,
    "Unnamed: 0": 68,
    "Tweets": "#Butembo: lancement d’une campagne de vaccination anti-#Ebola\n\n#RDC\n https://t.co/L85MIO20VQ via @ElectionNet",
    "Dates": "2014-01-15",
    "Longitude": 3.399709334192811,
    "Latitude": 10.554705764524874,
    "Sentiment": "neutral"
  },
  {
    "": 69,
    "Unnamed: 0": 69,
    "Tweets": "@Presidence_RDC Qui va payer  ça apres? #Ebola n'existes pas",
    "Dates": "2014-01-15",
    "Longitude": 2.77862438095082,
    "Latitude": 10.01821347156865,
    "Sentiment": "neutral"
  },
  {
    "": 70,
    "Unnamed: 0": 70,
    "Tweets": "Tonite @NewsHour - Phase one #ChinaTradeDeal signed. What's in it, what's not, what now? @nickschifrin reports,… https://t.co/rInssawWd4",
    "Dates": "2014-01-15",
    "Longitude": 7.848963005069574,
    "Latitude": 10.992729886594622,
    "Sentiment": "neutral"
  },
  {
    "": 71,
    "Unnamed: 0": 71,
    "Tweets": "Report Signs immediately #Ebola https://t.co/JmdOtY5lqM",
    "Dates": "2014-01-15",
    "Longitude": 5.615485998335169,
    "Latitude": 10.651806581003854,
    "Sentiment": "neutral"
  },
  {
    "": 72,
    "Unnamed: 0": 72,
    "Tweets": "@CIDRAP: Cases traced to Mabalako still fueling DRC #Ebola outbreak https://t.co/kRaPN31v8k",
    "Dates": "2014-01-15",
    "Longitude": 11.20436921278218,
    "Latitude": 11.353217115833601,
    "Sentiment": "neutral"
  },
  {
    "": 73,
    "Unnamed: 0": 73,
    "Tweets": "Cases traced to Mabalako still fueling #DRCongo #Ebola outbreak https://t.co/icjsKiIPMd https://t.co/E5nOh2n3LW",
    "Dates": "2014-01-15",
    "Longitude": 0.36668550374548214,
    "Latitude": 8.902730643041028,
    "Sentiment": "neutral"
  },
  {
    "": 74,
    "Unnamed: 0": 74,
    "Tweets": "The @US_FDA has approved the #Ebola vaccine Ervebo. \n\nIt's given through a single injection 10 days ahead of potent… https://t.co/5g1n1HW90V",
    "Dates": "2014-01-15",
    "Longitude": 4.598618250359,
    "Latitude": 8.379278578995695,
    "Sentiment": "neutral"
  },
  {
    "": 75,
    "Unnamed: 0": 75,
    "Tweets": "[Film] « #Ebola, c'est pareil au massacre à la machette ». #RDC \nhttps://t.co/8FadfifZiv",
    "Dates": "2014-01-15",
    "Longitude": 13.644472072524858,
    "Latitude": 9.21513829177466,
    "Sentiment": "neutral"
  },
  {
    "": 76,
    "Unnamed: 0": 76,
    "Tweets": "Jan 14, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,403: 3,285 confirmed 118 probable. t… https://t.co/z3bqdqgjwi",
    "Dates": "2014-01-15",
    "Longitude": 4.575235408231696,
    "Latitude": 10.296829743563398,
    "Sentiment": "positive"
  },
  {
    "": 77,
    "Unnamed: 0": 77,
    "Tweets": "@WHOAFRO 2. The North Kivu-Ituri #Ebola outbreak shows little sign of letting up — though it looked like it might b… https://t.co/rwjXWW3la9",
    "Dates": "2014-01-15",
    "Longitude": 15.253693544709735,
    "Latitude": 8.940880410268665,
    "Sentiment": "neutral"
  },
  {
    "": 78,
    "Unnamed: 0": 78,
    "Tweets": "Encore un jour triste pour la #RDC. Une equipe de la Croix-Rouge @crrdc1 et @ifrc attaquée avec deux volontaires bl… https://t.co/QmgNYbZFRK",
    "Dates": "2014-01-15",
    "Longitude": 4.104274161464634,
    "Latitude": 10.748776386683936,
    "Sentiment": "neutral"
  },
  {
    "": 79,
    "Unnamed: 0": 79,
    "Tweets": "DRC reports a health care worker has contracted #Ebola. The person, who was vaccinated (no indication how long ago)… https://t.co/38fNMNEHBE",
    "Dates": "2014-01-15",
    "Longitude": 8.867001093869082,
    "Latitude": 10.10956494476997,
    "Sentiment": "positive"
  },
  {
    "": 80,
    "Unnamed: 0": 80,
    "Tweets": "The apparent #assassination of #AmbassadorYovanovitch is barelymaking a blip on most major news networks!\nWhat the… https://t.co/ssLrULmB2P",
    "Dates": "2014-01-15",
    "Longitude": 6.937951405490514,
    "Latitude": 8.428510526956968,
    "Sentiment": "neutral"
  },
  {
    "": 81,
    "Unnamed: 0": 81,
    "Tweets": ".@newhumanitarian  --In Congo’s #Ebola zone, misinformation persists even as cases slow  #DRC #DRCongo  by… https://t.co/klRv5FXtpL",
    "Dates": "2014-01-15",
    "Longitude": 8.816841976715509,
    "Latitude": 8.53956787699889,
    "Sentiment": "neutral"
  },
  {
    "": 82,
    "Unnamed: 0": 82,
    "Tweets": "@CongopresseN @juantedbelkas @kabund_jmkkrock @auguyka70 Ce support est vraiment le bienvenu pour faire face àa cet… https://t.co/Yh9u0kgmrA",
    "Dates": "2014-01-15",
    "Longitude": 3.4628581920508665,
    "Latitude": 9.87769037413926,
    "Sentiment": "neutral"
  },
  {
    "": 83,
    "Unnamed: 0": 83,
    "Tweets": "NIH Video Replay: Demystifying Medicine - #Ebola: Then, Now and the NIH/ Daniel Chertow, MD, MPH, CC, NIH and Nancy… https://t.co/PblELOvGb8",
    "Dates": "2014-01-15",
    "Longitude": 5.322477356687331,
    "Latitude": 10.961741934162529,
    "Sentiment": "neutral"
  },
  {
    "": 84,
    "Unnamed: 0": 84,
    "Tweets": "With #Ebola comes stigma because of misinformation&amp;misrepresentation.\n\nOur programs aim to counter the disease, ref… https://t.co/yfiW5RhebX",
    "Dates": "2014-01-15",
    "Longitude": 9.8127089904253,
    "Latitude": 9.206804490965546,
    "Sentiment": "neutral"
  },
  {
    "": 85,
    "Unnamed: 0": 85,
    "Tweets": "@ombaggio Since when are communities unable to bury their own people with the necessary care to avoid Ebola transmission?  #ebola",
    "Dates": "2014-01-15",
    "Longitude": 4.251673674487282,
    "Latitude": 10.122938568341388,
    "Sentiment": "neutral"
  },
  {
    "": 86,
    "Unnamed: 0": 86,
    "Tweets": "Proud to be part of the RAPIDE-TKM trial team #ebola #research https://t.co/k2tqPkBjxY https://t.co/tzB10q8vgN",
    "Dates": "2014-01-15",
    "Longitude": 12.205848227096887,
    "Latitude": 10.16999827814652,
    "Sentiment": "positive"
  },
  {
    "": 87,
    "Unnamed: 0": 87,
    "Tweets": "For #WednesdayWisdom - what will it take to end Congo's #Ebola outbreak for good in 2014? Five practical suggestion… https://t.co/rdYLdxC0NO",
    "Dates": "2014-01-15",
    "Longitude": -0.7860793018515917,
    "Latitude": 8.80716760685473,
    "Sentiment": "neutral"
  },
  {
    "": 88,
    "Unnamed: 0": 88,
    "Tweets": "Make time to read this, it captivating! @HelenBranswell dives into how all the right elements came together leading… https://t.co/wgdMUK9v60",
    "Dates": "2014-01-15",
    "Longitude": 5.222735920398503,
    "Latitude": 7.848522918474598,
    "Sentiment": "neutral"
  },
  {
    "": 89,
    "Unnamed: 0": 89,
    "Tweets": "#RDC #Nord-Kivu  NZANZU KASIVITA CARLY appeler aux actions intenses pour éradiquer la maladie à Virus #Ebola qui a… https://t.co/fVb0tdVhrz",
    "Dates": "2014-01-15",
    "Longitude": 5.771118197189062,
    "Latitude": 11.16685827718963,
    "Sentiment": "neutral"
  },
  {
    "": 90,
    "Unnamed: 0": 90,
    "Tweets": "#RDC #Nord-Kivu Une grande délégation de l'inter agences des @ONU_fr venue de New York a été reçu par le gouverneur… https://t.co/Myrd3MMHNW",
    "Dates": "2014-01-15",
    "Longitude": 5.938941682977319,
    "Latitude": 11.610979400296452,
    "Sentiment": "neutral"
  },
  {
    "": 91,
    "Unnamed: 0": 91,
    "Tweets": "#Mambasa Survivor speech once discharged : \"I'm happy, really happy. Just want to thank God who helps me to survive… https://t.co/h6rfZQAvw5",
    "Dates": "2014-01-15",
    "Longitude": -2.131416656055741,
    "Latitude": 9.574880217284909,
    "Sentiment": "neutral"
  },
  {
    "": 92,
    "Unnamed: 0": 92,
    "Tweets": "Un #Vaccin contre #Ebola approuvé pour l'usage aux USA        https://t.co/E3laY1onCj",
    "Dates": "2014-01-15",
    "Longitude": 14.701301016024717,
    "Latitude": 9.164282729243812,
    "Sentiment": "neutral"
  },
  {
    "": 93,
    "Unnamed: 0": 93,
    "Tweets": "In Congo’s #Ebola zone, misinformation persists even as cases slow: https://t.co/MsE7CsQfJn via @newhumanitarian… https://t.co/5XilpnvuD5",
    "Dates": "2014-01-15",
    "Longitude": 8.23446395922908,
    "Latitude": 9.215518976773955,
    "Sentiment": "neutral"
  },
  {
    "": 94,
    "Unnamed: 0": 94,
    "Tweets": "#Mambasa Health zone. Great event! #Ebola Survivor discharged from Treatment Unit. Important ceremony full of hope… https://t.co/jZbNBdxb5P",
    "Dates": "2014-01-15",
    "Longitude": -1.5780488128081158,
    "Latitude": 10.291360504492726,
    "Sentiment": "neutral"
  },
  {
    "": 95,
    "Unnamed: 0": 95,
    "Tweets": "Les habitants de #Ndindi, une cellule de #Beni réclament une meilleure surveillance des personnes contacts d’#Ebola… https://t.co/K5JcIl1dxu",
    "Dates": "2014-01-15",
    "Longitude": 1.2154540791418955,
    "Latitude": 8.816685868910051,
    "Sentiment": "neutral"
  },
  {
    "": 96,
    "Unnamed: 0": 96,
    "Tweets": "Les habitants de #Ndindi, une cellule de #Beni réclament une meilleure surveillance des personnes contacts d’#Ebola… https://t.co/U8KtYNER0Q",
    "Dates": "2014-01-15",
    "Longitude": 6.919000407215737,
    "Latitude": 10.241820401048932,
    "Sentiment": "neutral"
  },
  {
    "": 97,
    "Unnamed: 0": 97,
    "Tweets": "Les habitants de #Ndindi, une cellule de #Beni réclament une meilleure surveillance des personnes contacts d’#Ebola… https://t.co/Dq6HbBEppK",
    "Dates": "2014-01-15",
    "Longitude": 6.983608964001126,
    "Latitude": 10.594811418016445,
    "Sentiment": "neutral"
  },
  {
    "": 98,
    "Unnamed: 0": 98,
    "Tweets": "Great article on problems associated with the #ebola outbreak in #Beni and #NKivu. Explains why local people are so… https://t.co/YQUmqAUFwJ",
    "Dates": "2014-01-15",
    "Longitude": 1.8005919342345806,
    "Latitude": 9.341365684379493,
    "Sentiment": "neutral"
  },
  {
    "": 99,
    "Unnamed: 0": 99,
    "Tweets": "https://t.co/506KgDL2Lx – learn the TRUTH  Great resource 🎯to learn from &amp; disseminate🎤🌎🗣 #ebolawebsite #Ebola… https://t.co/F1AI6hoVVc",
    "Dates": "2014-01-15",
    "Longitude": -5.303197305705128,
    "Latitude": 8.737721093003417,
    "Sentiment": "neutral"
  },
  {
    "": 100,
    "Unnamed: 0": 100,
    "Tweets": "@WarChildCan @worldvisioncan @CBelieveCA @mmm_org @genevacall @Prog2030Can @Fondation_PGL @SaveChildrenCan… https://t.co/yPamGJVI69",
    "Dates": "2014-01-15",
    "Longitude": 4.976130383868404,
    "Latitude": 10.801174976604315,
    "Sentiment": "positive"
  },
  {
    "": 101,
    "Unnamed: 0": 101,
    "Tweets": "Here are ten big moments that will stick with us—and could continue to shape #TheFutureOf health for us all &gt;&gt;… https://t.co/q8LvoCRz43",
    "Dates": "2014-01-15",
    "Longitude": -1.5019556816101538,
    "Latitude": 7.9290241461779445,
    "Sentiment": "neutral"
  },
  {
    "": 102,
    "Unnamed: 0": 102,
    "Tweets": "@WarChildCan @worldvisioncan @CBelieveCA @mmm_org @genevacall @Can2030Agenda @Fondation_PGL @SaveChildrenCan… https://t.co/7GDkbACDyK",
    "Dates": "2014-01-15",
    "Longitude": -0.275223194838107,
    "Latitude": 10.103534724936448,
    "Sentiment": "neutral"
  },
  {
    "": 103,
    "Unnamed: 0": 103,
    "Tweets": "I’m walking around this beautiful museum and found #kentbrantly  pic, proud to be part of #emory #Ebola https://t.co/2h9CfnsGYR",
    "Dates": "2014-01-15",
    "Longitude": -8.777753602260594,
    "Latitude": 8.66956261201051,
    "Sentiment": "neutral"
  },
  {
    "": 104,
    "Unnamed: 0": 104,
    "Tweets": "Canada va allouer 56 millions de dollars dans le cadre d’appui dans le domaine de la santé en #RDC. C’est une répon… https://t.co/SbUgWTCZh1",
    "Dates": "2014-01-15",
    "Longitude": 3.6750422481544076,
    "Latitude": 8.220661497271097,
    "Sentiment": "positive"
  },
  {
    "": 105,
    "Unnamed: 0": 105,
    "Tweets": "Red Cross volunteers attacked during #Ebola burial in #DRCongo👉 https://t.co/7paxzbYB2N\n\n📷: @IFRC https://t.co/pDmviJu1Q6",
    "Dates": "2014-01-15",
    "Longitude": 2.922386662246919,
    "Latitude": 9.716680457519686,
    "Sentiment": "negative"
  },
  {
    "": 106,
    "Unnamed: 0": 106,
    "Tweets": "@GrumFromNorwich @HighWireTalk So you only listen to scientists with conflicts of interest? Gotcha.  Good to know l… https://t.co/eSNKVNnTH8",
    "Dates": "2014-01-15",
    "Longitude": 1.0930080726834648,
    "Latitude": 8.118500679396467,
    "Sentiment": "neutral"
  },
  {
    "": 107,
    "Unnamed: 0": 107,
    "Tweets": "DRC #Ebola: CMRE update, January 14 https://t.co/VegSUwl0rr",
    "Dates": "2014-01-15",
    "Longitude": 11.897896592434147,
    "Latitude": 8.698732051048342,
    "Sentiment": "negative"
  },
  {
    "": 108,
    "Unnamed: 0": 108,
    "Tweets": "Pharmacokinetics of TKM-130803 in #SierraLeone patients with #Ebola virus disease @EBioMedicine. A huge logistical… https://t.co/0Pr33ZUM9f",
    "Dates": "2014-01-15",
    "Longitude": 12.047730062391038,
    "Latitude": 9.892183196932695,
    "Sentiment": "positive"
  },
  {
    "": 109,
    "Unnamed: 0": 109,
    "Tweets": "Important article on #Ebola #EbolaVirus #EbolaVaccine #EbolaEpidemic #MaternalDeath #FetalDeath and the exclusion o… https://t.co/X6m0E2KUTJ",
    "Dates": "2014-01-15",
    "Longitude": 3.743986947311204,
    "Latitude": 8.807406514485285,
    "Sentiment": "neutral"
  },
  {
    "": 110,
    "Unnamed: 0": 110,
    "Tweets": "DR Congo: Red Cross volunteers attacked during #Ebola burial https://t.co/dA1YOQSst4",
    "Dates": "2014-01-15",
    "Longitude": -4.8429735646456,
    "Latitude": 11.194259873073829,
    "Sentiment": "negative"
  },
  {
    "": 111,
    "Unnamed: 0": 111,
    "Tweets": "Research in @TropMed_IntHlth: https://t.co/Y5M3keU1oj #Ebola",
    "Dates": "2014-01-15",
    "Longitude": 0.23162195672681563,
    "Latitude": 9.193838893230355,
    "Sentiment": "neutral"
  },
  {
    "": 112,
    "Unnamed: 0": 112,
    "Tweets": "Enfermedad por el virus del Ébola • Brote de ébola en Guinea • Brote epidémico • República https://t.co/BV2LnWdDw6 #ebola",
    "Dates": "2014-01-15",
    "Longitude": -0.4410516597617935,
    "Latitude": 8.892463575851709,
    "Sentiment": "neutral"
  },
  {
    "": 113,
    "Unnamed: 0": 113,
    "Tweets": "🎧 Ce matin sur @RFI nous faisions le point sur les deux épidémies qui ravagent actuellement la République Démocrati… https://t.co/klkioPjWsY",
    "Dates": "2014-01-15",
    "Longitude": -8.89827694299002,
    "Latitude": 11.219826344026034,
    "Sentiment": "neutral"
  },
  {
    "": 114,
    "Unnamed: 0": 114,
    "Tweets": "A un paso de hallar la #cura del Ébola 🎯 #TodoEnUnSóloLugar https://t.co/fYT7U4A3Er #ebola #enfermedades",
    "Dates": "2014-01-15",
    "Longitude": 6.272787737232291,
    "Latitude": 10.058751912229354,
    "Sentiment": "neutral"
  },
  {
    "": 115,
    "Unnamed: 0": 115,
    "Tweets": "@rodrah1 Très possible. C'est la Croix-Rouge et le service de Protection Civile de la RDC qui enterre désormais tou… https://t.co/Ya0YPGFZzv",
    "Dates": "2014-01-15",
    "Longitude": 11.0638368185284,
    "Latitude": 9.106042671429686,
    "Sentiment": "positive"
  },
  {
    "": 116,
    "Unnamed: 0": 116,
    "Tweets": "What we're reading, in @statnews by @HelenBranswell: ‘Against all odds’: The inside story of how scientists across… https://t.co/pQQxhMdIgZ",
    "Dates": "2014-01-15",
    "Longitude": 5.160048473816616,
    "Latitude": 10.659245306735318,
    "Sentiment": "neutral"
  },
  {
    "": 117,
    "Unnamed: 0": 117,
    "Tweets": "Interesting read, relevant questions \n#DRC #Ebola #HumanitarianAction \nWhat Will It Take To Finally End Congo's Ebo… https://t.co/XREjaLs3Qg",
    "Dates": "2014-01-15",
    "Longitude": 0.7124184352597136,
    "Latitude": 10.246319412749418,
    "Sentiment": "positive"
  },
  {
    "": 118,
    "Unnamed: 0": 118,
    "Tweets": "Dit zou niet mogen gebeuren. Twee hulpverleners van het Rode Kruis zijn aangevallen tijdens een begrafenis van een… https://t.co/DNq9OrkUnP",
    "Dates": "2014-01-15",
    "Longitude": 4.2830612948783955,
    "Latitude": 9.01092326197643,
    "Sentiment": "positive"
  },
  {
    "": 119,
    "Unnamed: 0": 119,
    "Tweets": "On a front line, our volunteers are taking these hits while making THE difference in the #Ebola fight. The job of p… https://t.co/ZyHu982mAX",
    "Dates": "2014-01-15",
    "Longitude": 5.180833059122023,
    "Latitude": 10.578310522867302,
    "Sentiment": "neutral"
  },
  {
    "": 120,
    "Unnamed: 0": 120,
    "Tweets": "Here we are in the middle of #ClimateCrisis #WWIll #Flu #Ebola and #BedBugs then all of a sudden #BillieEilish",
    "Dates": "2014-01-15",
    "Longitude": 0.6094463025756309,
    "Latitude": 9.690592055034529,
    "Sentiment": "positive"
  },
  {
    "": 121,
    "Unnamed: 0": 121,
    "Tweets": "First FDA-approved treatment for preventing #Ebola virus @AmerNurse2Day | #ECM https://t.co/sr90VGdv2G",
    "Dates": "2014-01-15",
    "Longitude": 10.353746206192334,
    "Latitude": 9.936357958936258,
    "Sentiment": "positive"
  },
  {
    "": 122,
    "Unnamed: 0": 122,
    "Tweets": "#RDC: Des volontaires de la Croix-Rouge attaqués lors de l'enterrement d'#Ebola dans le territoire de #Mambasa. Deu… https://t.co/DuyT7xUWy5",
    "Dates": "2014-01-15",
    "Longitude": 0.948954913330212,
    "Latitude": 10.82979138208758,
    "Sentiment": "neutral"
  },
  {
    "": 123,
    "Unnamed: 0": 123,
    "Tweets": "This is Judie Alimonti; one of the lab technicians who worked quietly for years on the #Ebola #vaccine.  Without he… https://t.co/qIPTVFPqhw",
    "Dates": "2014-01-15",
    "Longitude": 1.4770368529978022,
    "Latitude": 9.822507727378827,
    "Sentiment": "negative"
  },
  {
    "": 124,
    "Unnamed: 0": 124,
    "Tweets": "#Biakato Mine, #Mandima Health zone. A Soldier convinced by @BarakaHumudi and @WHO #RCCE colleagues is now seated a… https://t.co/enCNmz6cQy",
    "Dates": "2014-01-15",
    "Longitude": 3.2373450695637125,
    "Latitude": 9.0298688021799,
    "Sentiment": "positive"
  },
  {
    "": 125,
    "Unnamed: 0": 125,
    "Tweets": "#EBOLA #RDCongo « Nous avons besoin que les personnes qui seraient contaminées se sentent en confiance. C’est indis… https://t.co/GSIl0eNVLC",
    "Dates": "2014-01-15",
    "Longitude": 5.4079920609327985,
    "Latitude": 8.422302340139039,
    "Sentiment": "neutral"
  },
  {
    "": 126,
    "Unnamed: 0": 126,
    "Tweets": "Very excited our review on research exploring post-infection #vaccine use to treat dangerous #pathogens like #Ebola… https://t.co/GAC9s15Blo",
    "Dates": "2014-01-15",
    "Longitude": -3.816365335597391,
    "Latitude": 11.538763753007778,
    "Sentiment": "neutral"
  },
  {
    "": 127,
    "Unnamed: 0": 127,
    "Tweets": "I dag ble to frivillige #ebola-arbeidere fra Røde Kors skadet i et angrep under en begravelse i #DRCongo. De får nå… https://t.co/vpDcrvRzuN",
    "Dates": "2014-01-15",
    "Longitude": -0.926122826438327,
    "Latitude": 10.796948319281299,
    "Sentiment": "neutral"
  },
  {
    "": 128,
    "Unnamed: 0": 128,
    "Tweets": "Dr. Amit Uppal of NYC Health + Hospitals @BellevueHosp #inManhattan is known as a driving force for safety. He shel… https://t.co/eM5xr1twpl",
    "Dates": "2014-01-15",
    "Longitude": -0.25723775207402877,
    "Latitude": 11.074764717268216,
    "Sentiment": "neutral"
  },
  {
    "": 129,
    "Unnamed: 0": 129,
    "Tweets": "Specialist technique used to study drugs completed for first time during #Ebola outbreak https://t.co/WDw8XUS6Y7",
    "Dates": "2014-01-15",
    "Longitude": 2.8727139207631627,
    "Latitude": 8.787538233670848,
    "Sentiment": "positive"
  },
  {
    "": 130,
    "Unnamed: 0": 130,
    "Tweets": "#EBOLA #Suisse Si des progrés ont été réalisés sur la #vaccination, les traitements et la prévention de la maladie,… https://t.co/WFvXCqcNbp",
    "Dates": "2014-01-15",
    "Longitude": 10.52873900537822,
    "Latitude": 9.634614708865797,
    "Sentiment": "neutral"
  },
  {
    "": 131,
    "Unnamed: 0": 131,
    "Tweets": "New UofG research by Dr Janet Scott in @EBioMedicine\nreveals a specialist technique used to study drugs has been co… https://t.co/F0EfisT6Sk",
    "Dates": "2014-01-15",
    "Longitude": 7.681903818277576,
    "Latitude": 11.92712094852384,
    "Sentiment": "neutral"
  },
  {
    "": 132,
    "Unnamed: 0": 132,
    "Tweets": "Glad to share our paper:\nPharmacokinetics of TKM-130803 in #SierraLeone patients with #Ebola virus disease… https://t.co/at5psDS2Rr",
    "Dates": "2014-01-15",
    "Longitude": 3.5181833237347386,
    "Latitude": 9.879423851997858,
    "Sentiment": "neutral"
  },
  {
    "": 133,
    "Unnamed: 0": 133,
    "Tweets": "I often feel very lucky to know @ryanlenorabrown &amp; particularly so when she writes stories as compellingly &amp; sensit… https://t.co/8ziUaY7VXr",
    "Dates": "2014-01-15",
    "Longitude": 7.9703821011174245,
    "Latitude": 9.96755198603423,
    "Sentiment": "positive"
  },
  {
    "": 134,
    "Unnamed: 0": 134,
    "Tweets": "Im Osten der Dem. Rep. #Kongo toben bewaffnete Konflikte, die Menschen leiden unter #Ebola und Hunger. Die Welthung… https://t.co/rMsBNS4NaP",
    "Dates": "2014-01-15",
    "Longitude": -6.48879049744181,
    "Latitude": 9.183628616398595,
    "Sentiment": "neutral"
  },
  {
    "": 135,
    "Unnamed: 0": 135,
    "Tweets": "#FredNatLab’s Clinical Monitoring Research Program Directorate provides high-quality research support services to a… https://t.co/Wg4l8eI2qO",
    "Dates": "2014-01-15",
    "Longitude": 0.2568364831129166,
    "Latitude": 11.298381827090992,
    "Sentiment": "neutral"
  },
  {
    "": 136,
    "Unnamed: 0": 136,
    "Tweets": "Stepping up to the challenge: studying drug dosage during an #Ebola outbreak - joint study of @UofGlasgow,… https://t.co/lnO3sCm3aN",
    "Dates": "2014-01-15",
    "Longitude": 11.282065566438762,
    "Latitude": 10.509264971119515,
    "Sentiment": "neutral"
  },
  {
    "": 137,
    "Unnamed: 0": 137,
    "Tweets": "🩺2.89 metric tons of medical and non-medical supplies and equipment delivered to hubs in Beni and Butembo daily \n\nP… https://t.co/CyGXXFL8P4",
    "Dates": "2014-01-15",
    "Longitude": 9.40981741193567,
    "Latitude": 10.687069771809572,
    "Sentiment": "positive"
  },
  {
    "": 138,
    "Unnamed: 0": 138,
    "Tweets": "Röda Korsets lokala volontärer har genomfört enastående 20 000 säkra begravningar sedan #Ebola bröt ut i Kongo förra sommaren.",
    "Dates": "2014-01-15",
    "Longitude": 16.101191921853967,
    "Latitude": 9.700349400783082,
    "Sentiment": "neutral"
  },
  {
    "": 139,
    "Unnamed: 0": 139,
    "Tweets": "Två Röda Kors-volontärer attackerades och skadades i samband med en säker begravning av en person som dött av… https://t.co/8sgqfJfWJ4",
    "Dates": "2014-01-15",
    "Longitude": -6.923879076967252,
    "Latitude": 10.82389995301749,
    "Sentiment": "positive"
  },
  {
    "": 140,
    "Unnamed: 0": 140,
    "Tweets": "The science stories that shaped 2019: first image of a #blackhole, progress in fight against #Ebola, and promise an… https://t.co/86uuejQOwl",
    "Dates": "2014-01-15",
    "Longitude": 15.98164876699917,
    "Latitude": 10.181899145710723,
    "Sentiment": "neutral"
  },
  {
    "": 141,
    "Unnamed: 0": 141,
    "Tweets": "#DYK that #Ebola in Sierra Leone was initially seen as “a god-sent disease?\n\n\"Deaths, especially the ones connected… https://t.co/BCZ5JUPFWs",
    "Dates": "2014-01-15",
    "Longitude": 5.238579327866082,
    "Latitude": 10.351079342804226,
    "Sentiment": "neutral"
  },
  {
    "": 142,
    "Unnamed: 0": 142,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 503 suspected/3403 total confirmed &amp; probable cases (118 probable/3285 confirmed… https://t.co/btU9Dw7GoG",
    "Dates": "2014-01-15",
    "Longitude": -3.5092989165095805,
    "Latitude": 10.630366039994582,
    "Sentiment": "neutral"
  },
  {
    "": 143,
    "Unnamed: 0": 143,
    "Tweets": "#Ebola response and community engagement: how to build a bridge? Correspondence in @TheLancet: https://t.co/S5DRQub3dS",
    "Dates": "2014-01-15",
    "Longitude": 5.333782481287357,
    "Latitude": 10.547736508061364,
    "Sentiment": "neutral"
  },
  {
    "": 144,
    "Unnamed: 0": 144,
    "Tweets": "Julienne Anokon tehtävä on mennä kaukaisiin maaseudun paikkoihin, istua ja kuunnella kun ihmiset huutavat. Lue lisä… https://t.co/1u8Jejjydg",
    "Dates": "2014-01-15",
    "Longitude": 1.6091673682363528,
    "Latitude": 10.407484637448633,
    "Sentiment": "neutral"
  },
  {
    "": 145,
    "Unnamed: 0": 145,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 14 janvier 2014 https://t.co/YXSt8WD5jG",
    "Dates": "2014-01-15",
    "Longitude": 4.230497403074954,
    "Latitude": 10.4892648267306,
    "Sentiment": "neutral"
  },
  {
    "": 146,
    "Unnamed: 0": 146,
    "Tweets": "Zones de santé les plus affectées par l'#épidémie d '#Ebola en #RDC et nombre de #vaccinations  effectuées. https://t.co/6nAkC7lMSH",
    "Dates": "2014-01-15",
    "Longitude": 1.4724384316204997,
    "Latitude": 9.344935367705276,
    "Sentiment": "neutral"
  },
  {
    "": 147,
    "Unnamed: 0": 147,
    "Tweets": "Great example of looking for innovative ways to engage communities - different solutions for different contexts… https://t.co/TZzRQfpATN",
    "Dates": "2014-01-15",
    "Longitude": 1.9382617916136087,
    "Latitude": 10.314804059601027,
    "Sentiment": "neutral"
  },
  {
    "": 148,
    "Unnamed: 0": 148,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 14 Janvier 2014 avec les données collectées jusqu'au 13.01.2014 👇🏾\n\n➡… https://t.co/Zi1gCZpbHV",
    "Dates": "2014-01-15",
    "Longitude": 8.215895219736536,
    "Latitude": 11.561732840433745,
    "Sentiment": "positive"
  },
  {
    "": 149,
    "Unnamed: 0": 149,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 13 janvier 2014 https://t.co/IL1PGM38UV",
    "Dates": "2014-01-15",
    "Longitude": 2.0926567767474187,
    "Latitude": 10.880113839861759,
    "Sentiment": "neutral"
  },
  {
    "": 150,
    "Unnamed: 0": 150,
    "Tweets": "Suivi de l '#épidémie d'#Ebola en #RDC au 14 janvier 2014 https://t.co/bHaeaDTUgT",
    "Dates": "2014-01-15",
    "Longitude": 1.9269408968047994,
    "Latitude": 9.703397532652195,
    "Sentiment": "neutral"
  },
  {
    "": 151,
    "Unnamed: 0": 151,
    "Tweets": "Human activities link fruit bat presence to #Ebola outbreaks. #Deforestation alter natural circulation of viruses a… https://t.co/sGK2Vouzf3",
    "Dates": "2014-01-15",
    "Longitude": 7.4190818610605085,
    "Latitude": 10.231047506099516,
    "Sentiment": "neutral"
  },
  {
    "": 152,
    "Unnamed: 0": 152,
    "Tweets": "@PaolaSacchi3 @panorama_it @MaleEdizioni @stefaniacraxi si parla di visione politica in grande. non dei microbi che… https://t.co/OuJ9ugoahW",
    "Dates": "2014-01-15",
    "Longitude": 1.8706059241036463,
    "Latitude": 10.772457177244377,
    "Sentiment": "neutral"
  },
  {
    "": 153,
    "Unnamed: 0": 153,
    "Tweets": "Bwanasura Health zone in #Komanda. @fabrice_kano @WHO #RCCE in discussion with #Ebola Survivors. There are lot of n… https://t.co/UvMeqxDO5p",
    "Dates": "2014-01-15",
    "Longitude": 6.118321663539092,
    "Latitude": 11.40302017672082,
    "Sentiment": "neutral"
  },
  {
    "": 154,
    "Unnamed: 0": 154,
    "Tweets": "Sono 66 i #farmaci autorizzati Ema 2019, 30 nuovi principi attivi | 7 farmaci per #MalattieRare, 5 #biosimilari, 1… https://t.co/UzXhb1IQDa",
    "Dates": "2014-01-15",
    "Longitude": -3.3202367582360957,
    "Latitude": 8.832291291790552,
    "Sentiment": "positive"
  },
  {
    "": 155,
    "Unnamed: 0": 155,
    "Tweets": "ifrc: Meet the moto-taxi drivers 🏍️ who are critical responders to the #Ebola outbreak in #DRCongo. https://t.co/fo4w3B38qv",
    "Dates": "2014-01-15",
    "Longitude": 1.6466785995691238,
    "Latitude": 10.200751394919564,
    "Sentiment": "neutral"
  },
  {
    "": 156,
    "Unnamed: 0": 156,
    "Tweets": "All my solidarity and thoughts to our brave #RedCross @crrdc1 volunteers injured in #DRCongo. Community engagement… https://t.co/jS2V7jgMmI",
    "Dates": "2014-01-15",
    "Longitude": 1.7499540610985918,
    "Latitude": 9.550665297574657,
    "Sentiment": "positive"
  },
  {
    "": 157,
    "Unnamed: 0": 157,
    "Tweets": "5 new conformed #Ebola cases in DRC yesterday. Highest we have had in the new year https://t.co/BWbDq3HA4G",
    "Dates": "2014-01-15",
    "Longitude": 4.244178344716661,
    "Latitude": 10.213708669863607,
    "Sentiment": "positive"
  },
  {
    "": 158,
    "Unnamed: 0": 158,
    "Tweets": "Trust is something that we need to nurture everyday and it takes time in communities that have lost trust in the hu… https://t.co/0vS3JSrZi3",
    "Dates": "2014-01-15",
    "Longitude": -5.825142690151555,
    "Latitude": 11.403779722738808,
    "Sentiment": "negative"
  },
  {
    "": 159,
    "Unnamed: 0": 159,
    "Tweets": "[#SEANCE #video] Paradigme et paradoxe de la coopération en « #santémondiale » : de la #pandémie de #sida à l’… https://t.co/SefkLkFw7I",
    "Dates": "2014-01-15",
    "Longitude": 4.212907398977171,
    "Latitude": 9.960032083682297,
    "Sentiment": "neutral"
  },
  {
    "": 160,
    "Unnamed: 0": 160,
    "Tweets": "There were 5 #Ebola cases reported on Monday &amp; 1 death. The outbreak totals are now 3403 cases &amp; 2236 deaths. https://t.co/DDZTzcrh61",
    "Dates": "2014-01-15",
    "Longitude": -0.8934613731407062,
    "Latitude": 12.027163086699161,
    "Sentiment": "neutral"
  },
  {
    "": 161,
    "Unnamed: 0": 161,
    "Tweets": "Jophet a survécu à #Ebola, mais a perdu son fils, sa femme et sa mère à cause de la maladie. Il s'occupe maintenant… https://t.co/xMj27L7Dcv",
    "Dates": "2014-01-15",
    "Longitude": 9.72965801480494,
    "Latitude": 11.658903070797155,
    "Sentiment": "neutral"
  },
  {
    "": 162,
    "Unnamed: 0": 162,
    "Tweets": "Les enseignants sont également mis à contribution pour renforcer les messages clés liés aux bonnes pratiques face a… https://t.co/38PElSMM2O",
    "Dates": "2014-01-15",
    "Longitude": 4.086343652172367,
    "Latitude": 10.829311419158492,
    "Sentiment": "neutral"
  },
  {
    "": 163,
    "Unnamed: 0": 163,
    "Tweets": "Ratisser large dans les rues &amp; quartiers pour ne pas laisser les enfants abandonnés derrière. A Ngongolio, un quart… https://t.co/z5K9fbnT3A",
    "Dates": "2014-01-15",
    "Longitude": 3.1464416284963646,
    "Latitude": 10.818737251049923,
    "Sentiment": "positive"
  },
  {
    "": 164,
    "Unnamed: 0": 164,
    "Tweets": "Every single burial carries risks of #Ebola infection &amp; attacks. But our volunteers stay the course. They have done… https://t.co/uckhjNSCgj",
    "Dates": "2014-01-15",
    "Longitude": 18.059497183486364,
    "Latitude": 10.59645778592929,
    "Sentiment": "negative"
  },
  {
    "": 165,
    "Unnamed: 0": 165,
    "Tweets": "‘Against all odds’: The inside story of how scientists across three continents produced an #Ebola #vaccine… https://t.co/d4E24r5x0U",
    "Dates": "2014-01-15",
    "Longitude": -1.955804677876877,
    "Latitude": 10.548042527122012,
    "Sentiment": "neutral"
  },
  {
    "": 166,
    "Unnamed: 0": 166,
    "Tweets": "In a recent article @Sulaima27235281 tells us about his experiences during the Sierra Leone #Ebola outbreak and how… https://t.co/f3SfRL6DIt",
    "Dates": "2014-01-15",
    "Longitude": 9.517777583044396,
    "Latitude": 9.568990451391082,
    "Sentiment": "neutral"
  },
  {
    "": 167,
    "Unnamed: 0": 167,
    "Tweets": "Plus linked Comment: Safety and immunogenicity of vesicular stomatitis virus-based vaccines for #Ebola virus disease https://t.co/K4WQYebdD1",
    "Dates": "2014-01-15",
    "Longitude": 5.465988083618725,
    "Latitude": 9.849628456450763,
    "Sentiment": "neutral"
  },
  {
    "": 168,
    "Unnamed: 0": 168,
    "Tweets": "New online: Safety and immunogenicity of a highly attenuated rVSVN4CT1-EBOVGP1 #Ebola virus vaccine: a randomised,… https://t.co/qq18wqHDUZ",
    "Dates": "2014-01-15",
    "Longitude": -0.7579230286143632,
    "Latitude": 9.71721161640137,
    "Sentiment": "positive"
  },
  {
    "": 169,
    "Unnamed: 0": 169,
    "Tweets": "Two Red Cross volunteers were injured following an attack while conducting a burial outside of Mambasa, #DRCongo.… https://t.co/jARo3ldo3D",
    "Dates": "2014-01-15",
    "Longitude": 11.963041207288235,
    "Latitude": 8.73536685928396,
    "Sentiment": "neutral"
  },
  {
    "": 170,
    "Unnamed: 0": 170,
    "Tweets": "@karinagould you're welcome in #DRC but I wish you take your time to meet with another crew working in the response… https://t.co/aEl6ls5sTW",
    "Dates": "2014-01-15",
    "Longitude": 0.3538429255268074,
    "Latitude": 7.657395486733092,
    "Sentiment": "positive"
  },
  {
    "": 171,
    "Unnamed: 0": 171,
    "Tweets": "La enfermedad X podría matar a millones - advertencia de Bill Gates\nLa guerra NUCLEAR no es la mayor https://t.co/66T3BG0NTH #ebola",
    "Dates": "2014-01-15",
    "Longitude": 2.9208848706263746,
    "Latitude": 10.178366095478458,
    "Sentiment": "neutral"
  },
  {
    "": 172,
    "Unnamed: 0": 172,
    "Tweets": "A 9h10 TU sur @RFI nous parlons des 2 #épidémies qui sévissent actuellement en #RDC : #rougeole et #Ebola. RDV sur… https://t.co/0xwohrtLly",
    "Dates": "2014-01-15",
    "Longitude": 4.326603963765183,
    "Latitude": 10.657245514575225,
    "Sentiment": "neutral"
  },
  {
    "": 173,
    "Unnamed: 0": 173,
    "Tweets": "#8forces #vaccine #ebola ‘Against all odds’: The inside story of how scientists across three continents produced an… https://t.co/UajhXxb3Zy",
    "Dates": "2014-01-15",
    "Longitude": 4.357411457702004,
    "Latitude": 10.23232576992468,
    "Sentiment": "neutral"
  },
  {
    "": 174,
    "Unnamed: 0": 174,
    "Tweets": "#RDC #Ebola https://t.co/wyFvD516RD",
    "Dates": "2014-01-15",
    "Longitude": 6.7030445690572655,
    "Latitude": 11.533884712816379,
    "Sentiment": "neutral"
  },
  {
    "": 175,
    "Unnamed: 0": 175,
    "Tweets": "Read about the latest events in sub-Saharan Africa:\n\nhttps://t.co/7wHXNzvPOA\n\n#Museveni #Gnassingbé #ECOWAS #Orange… https://t.co/ovqwmvJRTu",
    "Dates": "2014-01-15",
    "Longitude": 9.20591665279817,
    "Latitude": 9.835085467592034,
    "Sentiment": "neutral"
  },
  {
    "": 176,
    "Unnamed: 0": 176,
    "Tweets": "#ebola  tu nunca va hacer feliz , son maricones , #np field my own let me Li's",
    "Dates": "2014-01-15",
    "Longitude": 8.40241523264528,
    "Latitude": 9.968433518294585,
    "Sentiment": "positive"
  },
  {
    "": 177,
    "Unnamed: 0": 177,
    "Tweets": "Day 8: PPE day! Our participants went through a little simulation at Naguru Hospital, about dealing with suspected… https://t.co/ZJSnNenuN7",
    "Dates": "2014-01-15",
    "Longitude": 0.6975170266875628,
    "Latitude": 8.887826756858583,
    "Sentiment": "neutral"
  },
  {
    "": 178,
    "Unnamed: 0": 178,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 14 janvier; données du 13 jan 2014. Cinq (5) nouvea… https://t.co/hpgF5gdIqn",
    "Dates": "2014-01-15",
    "Longitude": 7.2821181751155635,
    "Latitude": 9.47491517004051,
    "Sentiment": "neutral"
  },
  {
    "": 179,
    "Unnamed: 0": 179,
    "Tweets": "@JeanClaudekat2 C qui inquiète c lorsque c verbiages sortent de quelqu’un qui s’appelle défenseur d droits d l’homm… https://t.co/Lu3oKNpx8d",
    "Dates": "2014-01-15",
    "Longitude": 15.966956287586552,
    "Latitude": 7.664763321947968,
    "Sentiment": "positive"
  },
  {
    "": 180,
    "Unnamed: 0": 180,
    "Tweets": "La Enfermedad X necesita investigación urgente como el Ébola 2019\nLas enfermedades virales son una de las https://t.co/S0cEP9nWUK #ebola",
    "Dates": "2014-01-15",
    "Longitude": 1.2515383243193274,
    "Latitude": 9.434916035979915,
    "Sentiment": "negative"
  },
  {
    "": 181,
    "Unnamed: 0": 181,
    "Tweets": "Terrific discussion on #GettingtoZeroBook @gatesfoundation in beautiful (snowy!) Seattle yesterday. Big thanks to… https://t.co/SpFuY0wMxb",
    "Dates": "2014-01-15",
    "Longitude": 9.39777715342639,
    "Latitude": 11.064961252937676,
    "Sentiment": "neutral"
  },
  {
    "": 182,
    "Unnamed: 0": 182,
    "Tweets": "BIG JUCIY #FAX\n\n#BattleMemesByOmari #HeyItsOmariPlzBeMyFanCuzImLonely #Kamehameha #Fusions #Gods #Oxygen #Niggadick… https://t.co/fLHvGm3h27",
    "Dates": "2014-01-15",
    "Longitude": 6.629397180761716,
    "Latitude": 10.091585657990317,
    "Sentiment": "neutral"
  },
  {
    "": 183,
    "Unnamed: 0": 183,
    "Tweets": ".@EBioMedicine Pharmacokinetics of TKM-130803 in #SierraLeone  patients with #Ebola virus disease:  plasma concentr… https://t.co/29BoLCN3hY",
    "Dates": "2014-01-15",
    "Longitude": 11.553061825026663,
    "Latitude": 9.375260931323718,
    "Sentiment": "neutral"
  },
  {
    "": 184,
    "Unnamed: 0": 184,
    "Tweets": ".@WHOAFRO  Democratic Republic of Congo: #Ebola Virus Disease - External Situation Report 75  #DRC… https://t.co/ki3nchWeqc",
    "Dates": "2014-01-15",
    "Longitude": 12.746909116661188,
    "Latitude": 11.086475463110656,
    "Sentiment": "neutral"
  },
  {
    "": 185,
    "Unnamed: 0": 185,
    "Tweets": ".@TheLancetInfDis Lancet Infect Dis: Safety and immunogenicity of a highly attenuated rVSVN4CT1-EBOVGP1 #Ebola viru… https://t.co/z8lg50yHZW",
    "Dates": "2014-01-15",
    "Longitude": 4.075905046573127,
    "Latitude": 11.944982283645032,
    "Sentiment": "positive"
  },
  {
    "": 186,
    "Unnamed: 0": 186,
    "Tweets": "🇨🇩 Together, we are making a difference in the fight against #Ebola in the #DRC. \n\nSince the beginning of the outbr… https://t.co/Fq2Hw1dp5G",
    "Dates": "2014-01-15",
    "Longitude": 5.565886579363716,
    "Latitude": 10.488612594970029,
    "Sentiment": "neutral"
  },
  {
    "": 187,
    "Unnamed: 0": 187,
    "Tweets": "@amymaxmen Some parallels to the #Ebola response? People/communities lacking information and feeling powerless in t… https://t.co/JfiYVBI3fV",
    "Dates": "2014-01-15",
    "Longitude": 3.709968460885821,
    "Latitude": 10.421905804391537,
    "Sentiment": "neutral"
  },
  {
    "": 188,
    "Unnamed: 0": 188,
    "Tweets": "Book - Lest We Forget: A Doctor’s Experience with Life and Death During the #Ebola Outbreak https://t.co/8NpbDu8GCu HT @KwanKew",
    "Dates": "2014-01-15",
    "Longitude": 8.488262119995557,
    "Latitude": 10.525666601558088,
    "Sentiment": "neutral"
  },
  {
    "": 189,
    "Unnamed: 0": 189,
    "Tweets": "Pour l'équipe d'intervention, la crise concernait Ebola, tandis que pour la population, elle concernait la tombe v… https://t.co/GBXfBWyJ18",
    "Dates": "2014-01-15",
    "Longitude": 2.9997036491531075,
    "Latitude": 9.873005105924886,
    "Sentiment": "neutral"
  },
  {
    "": 190,
    "Unnamed: 0": 190,
    "Tweets": "For the response team, the crisis was about Ebola, but for village members it was about the empty grave.\"\n\nWhy it… https://t.co/vxWWcdEptn",
    "Dates": "2014-01-15",
    "Longitude": -0.9845852711573846,
    "Latitude": 10.60515124961918,
    "Sentiment": "positive"
  },
  {
    "": 191,
    "Unnamed: 0": 191,
    "Tweets": "An #Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/wTjpDHiux2 via @rtdnews",
    "Dates": "2014-01-15",
    "Longitude": 0.47241686053323306,
    "Latitude": 11.888380620806203,
    "Sentiment": "neutral"
  },
  {
    "": 192,
    "Unnamed: 0": 192,
    "Tweets": "SO I COULD SEE #BILLGATES THE #JEFFYEPSTIENS SUPPORTER BEING CHUMMY W CROUPT #ADAMSHCIFF BUT BILL IS AINT… https://t.co/Nya1YILlkz",
    "Dates": "2014-01-15",
    "Longitude": 1.5116144102254365,
    "Latitude": 10.548520574725018,
    "Sentiment": "neutral"
  },
  {
    "": 193,
    "Unnamed: 0": 193,
    "Tweets": "Poster 55 from 4:15-5:15 on Tuesday 28Jan. Happy to talk about #ebola #virus #replication and minigenomes",
    "Dates": "2014-01-15",
    "Longitude": 12.171317828683444,
    "Latitude": 10.047261289792774,
    "Sentiment": "negative"
  },
  {
    "": 194,
    "Unnamed: 0": 194,
    "Tweets": "Jan 13, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,398: 3,280 confirmed 118 probable.… https://t.co/co4UKhJ8Ig",
    "Dates": "2014-01-14",
    "Longitude": -1.0937152226365168,
    "Latitude": 9.063523131919032,
    "Sentiment": "neutral"
  },
  {
    "": 195,
    "Unnamed: 0": 195,
    "Tweets": "@amazon prime expands to #ebola! https://t.co/777Qm1W0RB",
    "Dates": "2014-01-14",
    "Longitude": -0.5149100639795767,
    "Latitude": 9.711203899339473,
    "Sentiment": "neutral"
  },
  {
    "": 196,
    "Unnamed: 0": 196,
    "Tweets": "The work of @WHO teams won’t stop until #Ebola epidemic ends. Teams are out every day calling on households in the… https://t.co/pXan98EosU",
    "Dates": "2014-01-14",
    "Longitude": 3.738215331564967,
    "Latitude": 9.28666874327277,
    "Sentiment": "negative"
  },
  {
    "": 197,
    "Unnamed: 0": 197,
    "Tweets": "2. There were 3 cases reported on Sunday, no deaths. I see from the @WHOAFRO #Ebola dashboard that there were 5 cas… https://t.co/7QNMY8IBAq",
    "Dates": "2014-01-14",
    "Longitude": 3.6811242785865677,
    "Latitude": 11.4010808380548,
    "Sentiment": "neutral"
  },
  {
    "": 198,
    "Unnamed: 0": 198,
    "Tweets": "1. #Ebola update: \nResponse workers were attacked yesterday at Bandibwame, which I take it is in Lolwa health zone… https://t.co/Z8vq074zOy",
    "Dates": "2014-01-14",
    "Longitude": 3.359428282830779,
    "Latitude": 9.779156947541946,
    "Sentiment": "neutral"
  },
  {
    "": 199,
    "Unnamed: 0": 199,
    "Tweets": "Mike Elgan Thanks for following me. My fb: https://t.co/uS667xjdMz. Visit and \"Like\" if you like. #civilwar #ebola #history",
    "Dates": "2014-01-14",
    "Longitude": -1.3699715816911588,
    "Latitude": 8.423884222290631,
    "Sentiment": "neutral"
  },
  {
    "": 200,
    "Unnamed: 0": 200,
    "Tweets": "So this is where I've been for the last few weeks!Privileged to be part of the #JnJ #Ebola vaccine trial in #Goma.H… https://t.co/xY20RVxE3S",
    "Dates": "2014-01-14",
    "Longitude": -1.2906055313407814,
    "Latitude": 9.931120868596153,
    "Sentiment": "positive"
  },
  {
    "": 201,
    "Unnamed: 0": 201,
    "Tweets": "#SocialMedia and disaster management: Case of the north and south Kivu regions in the Democratic Republic of the Co… https://t.co/oVxXOs9t0F",
    "Dates": "2014-01-14",
    "Longitude": 1.2586242819939568,
    "Latitude": 10.688169160845517,
    "Sentiment": "neutral"
  },
  {
    "": 202,
    "Unnamed: 0": 202,
    "Tweets": "NEWS SCAN: More #Ebola in DRC; #H3N2 #flu susceptibility https://t.co/XnFCNsAq19 #influenza",
    "Dates": "2014-01-14",
    "Longitude": 1.8150797524925695,
    "Latitude": 11.276012511328567,
    "Sentiment": "positive"
  },
  {
    "": 203,
    "Unnamed: 0": 203,
    "Tweets": "Dans les communautés locales de #Beni #RDC, la vigilance citoyenne, le suivi quotidien des contacts à risque d'… https://t.co/qLPsC1GH7b",
    "Dates": "2014-01-14",
    "Longitude": 4.214797762992617,
    "Latitude": 9.961517734242147,
    "Sentiment": "neutral"
  },
  {
    "": 204,
    "Unnamed: 0": 204,
    "Tweets": "Ebola drugs trial raises prospect of cure for deadly disease\nFinancial Times - 13 AUG 2019\n\nIn a trial conducted si… https://t.co/ZpY0Zm7bU7",
    "Dates": "2014-01-14",
    "Longitude": 9.055752876195825,
    "Latitude": 10.138307060565658,
    "Sentiment": "neutral"
  },
  {
    "": 205,
    "Unnamed: 0": 205,
    "Tweets": "OMG. #DRC #Ebola https://t.co/6aklvV7bzE",
    "Dates": "2014-01-14",
    "Longitude": -0.30064547564428246,
    "Latitude": 7.808346748811623,
    "Sentiment": "neutral"
  },
  {
    "": 206,
    "Unnamed: 0": 206,
    "Tweets": "@CDCgov @WYMT we are hearing people say that there are confirmed cases of #Ebola being reported in #BarbourvilleKY… https://t.co/MzYonIzTkc",
    "Dates": "2014-01-14",
    "Longitude": -2.5212803754465964,
    "Latitude": 8.635927666254487,
    "Sentiment": "neutral"
  },
  {
    "": 207,
    "Unnamed: 0": 207,
    "Tweets": "Dr. Ian Crozier survived #Ebola virus disease &amp; now works with #FredNatLab connecting patient bedside &amp; laboratory… https://t.co/CzGjasmP0v",
    "Dates": "2014-01-14",
    "Longitude": 5.189417309320682,
    "Latitude": 8.93754361906138,
    "Sentiment": "neutral"
  },
  {
    "": 208,
    "Unnamed: 0": 208,
    "Tweets": "An #Ebola #vaccine used to be a pipe dream — until the tireless work of scientists around the world made it a reali… https://t.co/H3jrgfIieS",
    "Dates": "2014-01-14",
    "Longitude": 8.91090601488786,
    "Latitude": 10.442372842161298,
    "Sentiment": "positive"
  },
  {
    "": 209,
    "Unnamed: 0": 209,
    "Tweets": "#AFROWeekly Health Emergencies Bulletin Week 2/2014 is out. @WHOAFRO monitored 68 health emergency events in… https://t.co/GU5olUM997",
    "Dates": "2014-01-14",
    "Longitude": 6.9643261435428245,
    "Latitude": 10.987991288695515,
    "Sentiment": "negative"
  },
  {
    "": 210,
    "Unnamed: 0": 210,
    "Tweets": "In Congo zijn ondertussen *6000* peuters overleden aan de Mazelen, dat is bijna 3x zo veel als het totaal aantal EB… https://t.co/kX4A8MEGIF",
    "Dates": "2014-01-14",
    "Longitude": 7.459856018287933,
    "Latitude": 10.287782574538328,
    "Sentiment": "neutral"
  },
  {
    "": 211,
    "Unnamed: 0": 211,
    "Tweets": "Happy New Year! First #podcast of the year is up now. We talk about the big #science stories of 2019 and look ahead… https://t.co/DAxt8j2Xt4",
    "Dates": "2014-01-14",
    "Longitude": -1.9596070855835466,
    "Latitude": 10.463556856626644,
    "Sentiment": "positive"
  },
  {
    "": 212,
    "Unnamed: 0": 212,
    "Tweets": "Don't forget your #FDA approved #Ebola vaccine with your next flu shot. Because science is settled and vaccines are… https://t.co/APJjZU5R2K",
    "Dates": "2014-01-14",
    "Longitude": 4.18373571719693,
    "Latitude": 9.282340341156331,
    "Sentiment": "neutral"
  },
  {
    "": 213,
    "Unnamed: 0": 213,
    "Tweets": "Ebola vaccine approved by FDA, 100% effective in preventing Ebola.\n\n#science #FDA #ebola #virus #virology… https://t.co/LvXSTkz7XU",
    "Dates": "2014-01-14",
    "Longitude": 6.801287183641333,
    "Latitude": 9.161584181923898,
    "Sentiment": "negative"
  },
  {
    "": 214,
    "Unnamed: 0": 214,
    "Tweets": "Well this is an interesting development. #Ebola #WUT 😳😳😳😷🚑🚨🦠💉❌🆘📢",
    "Dates": "2014-01-14",
    "Longitude": 7.27947884017506,
    "Latitude": 9.598929338291306,
    "Sentiment": "neutral"
  },
  {
    "": 215,
    "Unnamed: 0": 215,
    "Tweets": "PREVAC-UP: The Partnership for Research on Ebola Vaccination extends follow-up https://t.co/hQW20PDPTg via… https://t.co/0afEqJfeg8",
    "Dates": "2014-01-14",
    "Longitude": 3.045213493300924,
    "Latitude": 10.063529813641503,
    "Sentiment": "neutral"
  },
  {
    "": 216,
    "Unnamed: 0": 216,
    "Tweets": "DRC #Ebola: 5 new cases on January 13, 3,403 total https://t.co/BOKFW1OCuo",
    "Dates": "2014-01-14",
    "Longitude": 5.504487809073382,
    "Latitude": 9.857684653098126,
    "Sentiment": "neutral"
  },
  {
    "": 217,
    "Unnamed: 0": 217,
    "Tweets": "Dans les communautés locales de #Beni #RDC, la vigilance citoyenne, le suivi quotidien des contacts à risque d'… https://t.co/UqQjucwD9z",
    "Dates": "2014-01-14",
    "Longitude": 4.6040657539544645,
    "Latitude": 11.041910676234723,
    "Sentiment": "positive"
  },
  {
    "": 218,
    "Unnamed: 0": 218,
    "Tweets": "New Free Associations #podcast #episode: Matt, Chris, and Jen examine a study on new treatments for #Ebola, they di… https://t.co/4hBB3txKjK",
    "Dates": "2014-01-14",
    "Longitude": 8.40220149881527,
    "Latitude": 9.392865023896077,
    "Sentiment": "neutral"
  },
  {
    "": 219,
    "Unnamed: 0": 219,
    "Tweets": "Les Forces Alliées Démocratiques groupe #islamiste ougandais ont attaqué sans succès un poste #MINUSCO dans l’… https://t.co/VZt09BtSlT",
    "Dates": "2014-01-14",
    "Longitude": 6.417707993456637,
    "Latitude": 9.997377258489676,
    "Sentiment": "neutral"
  },
  {
    "": 220,
    "Unnamed: 0": 220,
    "Tweets": "#AFROWeekly Health Emergencies Bulletin Week 2/2014 is out. @WHOAfro monitored 68 health #emergency events in… https://t.co/pLShkjGyw1",
    "Dates": "2014-01-14",
    "Longitude": 5.265175334582001,
    "Latitude": 10.716250356532592,
    "Sentiment": "neutral"
  },
  {
    "": 221,
    "Unnamed: 0": 221,
    "Tweets": "DRC #Ebola: CMRE update, January 13 https://t.co/71DjG8JfQj",
    "Dates": "2014-01-14",
    "Longitude": 9.201653764763151,
    "Latitude": 10.300441067804154,
    "Sentiment": "neutral"
  },
  {
    "": 222,
    "Unnamed: 0": 222,
    "Tweets": "Kahindo is the director of Komanda Primary School in #DRCongo where 3000 students begin their day with lessons on h… https://t.co/0rrh94pjEo",
    "Dates": "2014-01-14",
    "Longitude": 1.0702525769622797,
    "Latitude": 9.486545994471287,
    "Sentiment": "positive"
  },
  {
    "": 223,
    "Unnamed: 0": 223,
    "Tweets": "#Ebola vaccine trail ongoing in #DRC. Great collaborative effort. https://t.co/jtkOZ5JBpe",
    "Dates": "2014-01-14",
    "Longitude": 6.279961825503467,
    "Latitude": 11.736309950153236,
    "Sentiment": "neutral"
  },
  {
    "": 224,
    "Unnamed: 0": 224,
    "Tweets": "PREVAC-UP: The Partnership for Research on Ebola Vaccination extends follow-up and builds research capacity against… https://t.co/CVoqZRTKzC",
    "Dates": "2014-01-14",
    "Longitude": 6.406279058471473,
    "Latitude": 9.477795082544949,
    "Sentiment": "positive"
  },
  {
    "": 225,
    "Unnamed: 0": 225,
    "Tweets": "The CUBE makes it possible for health workers to safely provide more intensive care to #Ebola patients. Watch Dr. K… https://t.co/HzT1TxRTZ9",
    "Dates": "2014-01-14",
    "Longitude": 1.9844382368320623,
    "Latitude": 9.44286513948241,
    "Sentiment": "neutral"
  },
  {
    "": 226,
    "Unnamed: 0": 226,
    "Tweets": "Min Gould toured @WHO’s Africa Regional Office today. The Centre helps to promote health &amp; coordinate responses to… https://t.co/lko2fZQ3yU",
    "Dates": "2014-01-14",
    "Longitude": 9.665584910730988,
    "Latitude": 11.196636889375094,
    "Sentiment": "positive"
  },
  {
    "": 227,
    "Unnamed: 0": 227,
    "Tweets": "Opened Special Issue \"Vaccines for Ebola Virus and Related Diseases\" by Guest Editor Prof. David A. Schwartz. Recei… https://t.co/WZFzJi11AM",
    "Dates": "2014-01-14",
    "Longitude": 8.51707844140439,
    "Latitude": 12.063478830392611,
    "Sentiment": "neutral"
  },
  {
    "": 228,
    "Unnamed: 0": 228,
    "Tweets": "Aujourd'hui, la min. Gould a visité le bureau africain de l'@OMS, qui promeut la santé et coordonne les réponses au… https://t.co/1xZgx6Xbs0",
    "Dates": "2014-01-14",
    "Longitude": 1.3806278558926284,
    "Latitude": 10.35463222318811,
    "Sentiment": "positive"
  },
  {
    "": 229,
    "Unnamed: 0": 229,
    "Tweets": "Check out Prof Lokesh Joshi's article for @rte discussing how @nuigalway based start-up Aquila Bioscience hope to h… https://t.co/mVUrhpVYY8",
    "Dates": "2014-01-14",
    "Longitude": 6.931812125078704,
    "Latitude": 9.7764791819603,
    "Sentiment": "neutral"
  },
  {
    "": 230,
    "Unnamed: 0": 230,
    "Tweets": "#Ituri : 4 blessés dans une attaque des équipes de la riposte contre #Ebola par « la communauté » à #Bandibwame… https://t.co/1J2D11w0VZ",
    "Dates": "2014-01-14",
    "Longitude": 2.323770700952668,
    "Latitude": 9.741520854086918,
    "Sentiment": "positive"
  },
  {
    "": 231,
    "Unnamed: 0": 231,
    "Tweets": "#Pandemic Threats and Health #Emergencies \nNews Pouch 14 January 2014 \nHighlights latest research and policy articl… https://t.co/sFyroAwbn2",
    "Dates": "2014-01-14",
    "Longitude": -2.3609764851935546,
    "Latitude": 9.957679783386814,
    "Sentiment": "neutral"
  },
  {
    "": 232,
    "Unnamed: 0": 232,
    "Tweets": "Latest figures show DRC Ebola outbreak is second biggest on record\nhttps://t.co/jnilZxcz2n\n#DRC #Ebola https://t.co/X9Y4oZAgiH",
    "Dates": "2014-01-14",
    "Longitude": 11.271586502598652,
    "Latitude": 11.788843876339145,
    "Sentiment": "neutral"
  },
  {
    "": 233,
    "Unnamed: 0": 233,
    "Tweets": "The #Democratic Republic of Congo (DRC) is grappling with the world’s second biggest #Ebola outbreak on record, the… https://t.co/AoT7JTcW0A",
    "Dates": "2014-01-14",
    "Longitude": 9.487749940942038,
    "Latitude": 10.205076745552226,
    "Sentiment": "neutral"
  },
  {
    "": 234,
    "Unnamed: 0": 234,
    "Tweets": "‘Against all odds’: The inside story of how scientists across three continents produced an #Ebola #vaccine. https://t.co/wxaooqbwls",
    "Dates": "2014-01-14",
    "Longitude": 9.847830316280263,
    "Latitude": 9.531685389480414,
    "Sentiment": "positive"
  },
  {
    "": 235,
    "Unnamed: 0": 235,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/Biq6MnCRye $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/Wbf7J822y4",
    "Dates": "2014-01-14",
    "Longitude": 0.4043336339097663,
    "Latitude": 10.164850882467466,
    "Sentiment": "positive"
  },
  {
    "": 236,
    "Unnamed: 0": 236,
    "Tweets": "Lutte contre la maladie à #virus #Ebola           https://t.co/QEUJuB4Xrz",
    "Dates": "2014-01-14",
    "Longitude": -6.292896782397115,
    "Latitude": 9.526721210859073,
    "Sentiment": "neutral"
  },
  {
    "": 237,
    "Unnamed: 0": 237,
    "Tweets": "@cstambul @Validamentre Cristo si è fermato CON l'#ebola!",
    "Dates": "2014-01-14",
    "Longitude": 7.6053322839288,
    "Latitude": 10.645119541585736,
    "Sentiment": "positive"
  },
  {
    "": 238,
    "Unnamed: 0": 238,
    "Tweets": "Im @dlfkultur: Historiker Hubertus Büschel zur Geschichte der #Entwicklungszusammenarbeit. +++ Budget für @BNITM_de… https://t.co/GitOp8jTuJ",
    "Dates": "2014-01-14",
    "Longitude": 1.2541132140257814,
    "Latitude": 9.662539726763514,
    "Sentiment": "neutral"
  },
  {
    "": 239,
    "Unnamed: 0": 239,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/8e2VrdBDCM",
    "Dates": "2014-01-14",
    "Longitude": -9.896313052131296,
    "Latitude": 9.654873563098771,
    "Sentiment": "positive"
  },
  {
    "": 240,
    "Unnamed: 0": 240,
    "Tweets": "@sono_farmaci @Validamentre E poi... “Cristo si è fermato a #Ebola”",
    "Dates": "2014-01-14",
    "Longitude": -2.3127312617249016,
    "Latitude": 9.040897733274246,
    "Sentiment": "neutral"
  },
  {
    "": 241,
    "Unnamed: 0": 241,
    "Tweets": "#Houston #Health #Museum eye-opening conversation on the harrowing accounts of the #Ebola outbreak in African… https://t.co/IMpGYLNEg4",
    "Dates": "2014-01-14",
    "Longitude": 10.044529755138583,
    "Latitude": 10.255175755031082,
    "Sentiment": "neutral"
  },
  {
    "": 242,
    "Unnamed: 0": 242,
    "Tweets": "#RDC #ITURI Quatre blessés dont deux graves bilan d'une attaqué  des hommes armés non identifiés contre une équipe… https://t.co/HztWEZxdJu",
    "Dates": "2014-01-14",
    "Longitude": 9.688363971163902,
    "Latitude": 9.007218435093543,
    "Sentiment": "neutral"
  },
  {
    "": 243,
    "Unnamed: 0": 243,
    "Tweets": "ongoing crisis highlights urgent need to develop safe, effective #vaccines against #Ebola. goal has been priority f… https://t.co/9wghu8eFW0",
    "Dates": "2014-01-14",
    "Longitude": 13.451991247691383,
    "Latitude": 9.786799731740322,
    "Sentiment": "neutral"
  },
  {
    "": 244,
    "Unnamed: 0": 244,
    "Tweets": "Here are ten big moments that will stick with us—and could continue to shape #TheFutureOf health for us all &gt;&gt;… https://t.co/CrDh0MsM5j",
    "Dates": "2014-01-14",
    "Longitude": 9.355291494600886,
    "Latitude": 11.026643695775979,
    "Sentiment": "neutral"
  },
  {
    "": 245,
    "Unnamed: 0": 245,
    "Tweets": "“I explain that people are often [#Ebola] vaccinated without consent...[WHO press officer] replies that they must h… https://t.co/VvLJ1Iustw",
    "Dates": "2014-01-14",
    "Longitude": 10.758320985180365,
    "Latitude": 9.660424690272201,
    "Sentiment": "positive"
  },
  {
    "": 246,
    "Unnamed: 0": 246,
    "Tweets": "L'@IOMBurundi en collaboration avec le @mspls_bdi avec le soutien de @DFID_UK\n @JapanGov\n &amp; @UEauBurundi\na organisé… https://t.co/z0GQuvc01i",
    "Dates": "2014-01-14",
    "Longitude": 6.055113485550421,
    "Latitude": 10.269020340525982,
    "Sentiment": "positive"
  },
  {
    "": 247,
    "Unnamed: 0": 247,
    "Tweets": "Buried alive: lessons from #Haitiearthquake ⁦@baltimoresun⁩ #disasterresponse #Ebola #malaria #Haiti  https://t.co/szjw4jaXCi",
    "Dates": "2014-01-14",
    "Longitude": -0.45507433366551897,
    "Latitude": 10.336665960739747,
    "Sentiment": "neutral"
  },
  {
    "": 248,
    "Unnamed: 0": 248,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 410 suspected/3398 total confirmed &amp; probable cases (118 probable/3280 confirmed… https://t.co/7ssLaeVvuS",
    "Dates": "2014-01-14",
    "Longitude": 6.062312506666466,
    "Latitude": 8.99773273568037,
    "Sentiment": "neutral"
  },
  {
    "": 249,
    "Unnamed: 0": 249,
    "Tweets": "L'épidémie de la maladie à virus #Ebola n'est pas encore terminée. Nos équipes travaillent chaq jr &amp; visitent les m… https://t.co/DaJW1G0paC",
    "Dates": "2014-01-14",
    "Longitude": 9.456020647512496,
    "Latitude": 9.437446832183264,
    "Sentiment": "neutral"
  },
  {
    "": 250,
    "Unnamed: 0": 250,
    "Tweets": "#Burundi @MuyingaProvince  au point d'entrée de suveillance #Ebola en commune #butihinda, frontière #Kobero, les in… https://t.co/4GhC5RTXc6",
    "Dates": "2014-01-14",
    "Longitude": 7.727553462897572,
    "Latitude": 9.424856658302172,
    "Sentiment": "neutral"
  },
  {
    "": 251,
    "Unnamed: 0": 251,
    "Tweets": "Great to host Hon Karina Gould, Canada’s Minister for International Development in the SHOC room, our emergencies n… https://t.co/2izqAnGAXP",
    "Dates": "2014-01-14",
    "Longitude": 6.4899212816560805,
    "Latitude": 10.43613917777709,
    "Sentiment": "positive"
  },
  {
    "": 252,
    "Unnamed: 0": 252,
    "Tweets": "@HelenBranswell: At start of the 2018 #DRC outbreak we had #Ebola #vaccine. Why didn't @WHO role it out en masse? W… https://t.co/Mv37VzE1Cz",
    "Dates": "2014-01-14",
    "Longitude": 12.454255033101262,
    "Latitude": 10.253866404623158,
    "Sentiment": "neutral"
  },
  {
    "": 253,
    "Unnamed: 0": 253,
    "Tweets": "#Ebola « Pourquoi ça ne finit pas ? » : l’inquiétude monte après la réapparition du virus dans des localités de l’e… https://t.co/QqEm3IPLG9",
    "Dates": "2014-01-14",
    "Longitude": -0.7591588492204426,
    "Latitude": 11.262286559852702,
    "Sentiment": "neutral"
  },
  {
    "": 254,
    "Unnamed: 0": 254,
    "Tweets": "Looking at total health ODA spend in Sierra Leone only tiny fraction in health workforce development and this has d… https://t.co/koAn4TqUca",
    "Dates": "2014-01-14",
    "Longitude": 1.2680648071509908,
    "Latitude": 10.125440366798948,
    "Sentiment": "neutral"
  },
  {
    "": 255,
    "Unnamed: 0": 255,
    "Tweets": "#RDC #Canada La ministre Gould, sera en #RC et en #RDCongo cette semaine pour travailler avec les partenaires du Ca… https://t.co/ffctWpc53W",
    "Dates": "2014-01-14",
    "Longitude": 6.184915785947377,
    "Latitude": 9.999547083072772,
    "Sentiment": "negative"
  },
  {
    "": 256,
    "Unnamed: 0": 256,
    "Tweets": "Pour ceux qui ont aimé #Chernobyl, le drama scientifico-catastrophe #TheHotZone est très fort aussi, et bien trop s… https://t.co/0FF80y2pBy",
    "Dates": "2014-01-14",
    "Longitude": -2.208172525356355,
    "Latitude": 8.92399022998317,
    "Sentiment": "neutral"
  },
  {
    "": 257,
    "Unnamed: 0": 257,
    "Tweets": "@ShPublicHealth Answering your own question: Many #Africans continue to die from preventable diseases (#Ebola,… https://t.co/g9PxgSryoH",
    "Dates": "2014-01-14",
    "Longitude": 11.852062322481327,
    "Latitude": 10.742762572773522,
    "Sentiment": "neutral"
  },
  {
    "": 258,
    "Unnamed: 0": 258,
    "Tweets": "#ebola , How do you make a corner move ? Antarctic continent",
    "Dates": "2014-01-14",
    "Longitude": 2.617412675404056,
    "Latitude": 9.038323969622779,
    "Sentiment": "neutral"
  },
  {
    "": 259,
    "Unnamed: 0": 259,
    "Tweets": "Medical professionals need to find a way to counter the anti-vaccine media empire by mounting a vigorous pro-vacci… https://t.co/8O4gikx6A0",
    "Dates": "2014-01-14",
    "Longitude": 1.9705789446961535,
    "Latitude": 8.856348654801604,
    "Sentiment": "positive"
  },
  {
    "": 260,
    "Unnamed: 0": 260,
    "Tweets": "Check out the @Cardno  @P4_Project's video gallery. It highlights activities leading to better public health outcom… https://t.co/kwJtmfpY4P",
    "Dates": "2014-01-14",
    "Longitude": 0.4854592041026988,
    "Latitude": 9.527188569437135,
    "Sentiment": "neutral"
  },
  {
    "": 261,
    "Unnamed: 0": 261,
    "Tweets": "Best written summary of the #Ebola #DRC outbreak I have read. Zero hubris. Add in the additional missteps by the go… https://t.co/chJyUmEYtJ",
    "Dates": "2014-01-14",
    "Longitude": 12.102166175063807,
    "Latitude": 11.01247427106367,
    "Sentiment": "neutral"
  },
  {
    "": 262,
    "Unnamed: 0": 262,
    "Tweets": "Grâce au soutien de @DFID_UK @JapanGov &amp; @UEauBurundi, la semaine dernière l'OIM a collaboré avec @mspls_bdi pour m… https://t.co/cXjE5ZJhR9",
    "Dates": "2014-01-14",
    "Longitude": 9.648716298802169,
    "Latitude": 9.531046622991513,
    "Sentiment": "neutral"
  },
  {
    "": 263,
    "Unnamed: 0": 263,
    "Tweets": "Bien que #Ebola fait des morts, croire à son existence n'est pas facile pour certains habitants. @OMSRDCONGO… https://t.co/Zs9TJPgQSE",
    "Dates": "2014-01-14",
    "Longitude": 2.8753726283425562,
    "Latitude": 9.046303605035892,
    "Sentiment": "neutral"
  },
  {
    "": 264,
    "Unnamed: 0": 264,
    "Tweets": "En 2014, 16 meses después del inicio del brote de #ebola en el #Congo , el virus sigue muy presente. Ya van 2.232 m… https://t.co/vHgdmE8DpI",
    "Dates": "2014-01-14",
    "Longitude": 6.358699476024846,
    "Latitude": 11.161400241093498,
    "Sentiment": "neutral"
  },
  {
    "": 265,
    "Unnamed: 0": 265,
    "Tweets": "🇨🇩 | El #ébola sigue muy presente en la República Democrática del Congo.\n\n👤 @Evissx\n\nhttps://t.co/3JjEbCKODH https://t.co/NWGewSlcQi",
    "Dates": "2014-01-14",
    "Longitude": -0.7495281161398468,
    "Latitude": 12.123180625728061,
    "Sentiment": "neutral"
  },
  {
    "": 266,
    "Unnamed: 0": 266,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 13 janvier 2014 \nhttps://t.co/NLTCOK8uQg",
    "Dates": "2014-01-14",
    "Longitude": -5.74995289181839,
    "Latitude": 8.43159392000832,
    "Sentiment": "positive"
  },
  {
    "": 267,
    "Unnamed: 0": 267,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 13 janvier 2014 https://t.co/eqDqub57q1",
    "Dates": "2014-01-14",
    "Longitude": 3.4547152345955583,
    "Latitude": 8.907709605553672,
    "Sentiment": "positive"
  },
  {
    "": 268,
    "Unnamed: 0": 268,
    "Tweets": "So utterly #humlbed to support this incredible human being @MandewaCole and his team @TheLNP A true inspiration - w… https://t.co/wNQxB5MLpB",
    "Dates": "2014-01-14",
    "Longitude": 3.1767323603146167,
    "Latitude": 12.24715102252195,
    "Sentiment": "neutral"
  },
  {
    "": 269,
    "Unnamed: 0": 269,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/2L0R7NaVAG",
    "Dates": "2014-01-14",
    "Longitude": -0.027362912915585014,
    "Latitude": 8.937425314092396,
    "Sentiment": "neutral"
  },
  {
    "": 270,
    "Unnamed: 0": 270,
    "Tweets": "Zones de santé les plus affectées par l'#épidémie d'#Ebola en #RDC https://t.co/ecoFE79rVg",
    "Dates": "2014-01-14",
    "Longitude": 1.2030845557733167,
    "Latitude": 9.272209525629405,
    "Sentiment": "positive"
  },
  {
    "": 271,
    "Unnamed: 0": 271,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 13 janvier 2014 https://t.co/TntGK9Bxxv",
    "Dates": "2014-01-14",
    "Longitude": 4.129046116608573,
    "Latitude": 10.918005281212888,
    "Sentiment": "neutral"
  },
  {
    "": 272,
    "Unnamed: 0": 272,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 13 Janvier 2014 avec les données collectées jusqu'au 12.01.2014 👇🏾\n\n➡… https://t.co/MuCcPdKlsL",
    "Dates": "2014-01-14",
    "Longitude": 10.478875560661114,
    "Latitude": 9.414509725601611,
    "Sentiment": "neutral"
  },
  {
    "": 273,
    "Unnamed: 0": 273,
    "Tweets": "Can We Reach 75 Followers for this Account Please\n#BattleMemesByOmari #HeyGuysItsOmariPlzBeMyFanCuzImLonely… https://t.co/3THCZV95Yo",
    "Dates": "2014-01-14",
    "Longitude": -0.9855797954983183,
    "Latitude": 9.82310898371244,
    "Sentiment": "neutral"
  },
  {
    "": 274,
    "Unnamed: 0": 274,
    "Tweets": "14/01/2019 The fight against #Ebola virus  continues , the staff of @KinihiraProvin1 were reminded about how to to… https://t.co/wdQY5NmQnA",
    "Dates": "2014-01-14",
    "Longitude": 2.8337609997854023,
    "Latitude": 11.401241936356447,
    "Sentiment": "neutral"
  },
  {
    "": 275,
    "Unnamed: 0": 275,
    "Tweets": "#RDCongo #Ebola : 3 nouveaux cas enregistrés à Beni après une période d’un mois sans cas positif\nhttps://t.co/LHpB6g9FAC",
    "Dates": "2014-01-14",
    "Longitude": -4.236165680171112,
    "Latitude": 8.535247529622808,
    "Sentiment": "neutral"
  },
  {
    "": 276,
    "Unnamed: 0": 276,
    "Tweets": "#Ebola #DRC #youthinvolvement https://t.co/R0CcYKCdA7",
    "Dates": "2014-01-14",
    "Longitude": -5.201169868631888,
    "Latitude": 9.883627938362435,
    "Sentiment": "positive"
  },
  {
    "": 277,
    "Unnamed: 0": 277,
    "Tweets": "Tout de même, aucune nouvelle province ni zone de santé n’a rapporté un nouveau cas confirmé ou probable d'#Ebola.… https://t.co/6FryzRfvVk",
    "Dates": "2014-01-14",
    "Longitude": 1.4118521090988483,
    "Latitude": 9.474792878102182,
    "Sentiment": "neutral"
  },
  {
    "": 278,
    "Unnamed: 0": 278,
    "Tweets": "Une nouvelle aire de santé (AS) a rapporté un cas confirmé de la maladie à virus #Ebola dans la zone de santé de Mu… https://t.co/wFMJz2YflR",
    "Dates": "2014-01-14",
    "Longitude": -10.814256880752826,
    "Latitude": 11.10650325893718,
    "Sentiment": "neutral"
  },
  {
    "": 279,
    "Unnamed: 0": 279,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 13 jan; données du 12 jan 2014 incluant le récapitu… https://t.co/NF7cX8JXTw",
    "Dates": "2014-01-14",
    "Longitude": 6.121470091322013,
    "Latitude": 10.232142914968202,
    "Sentiment": "positive"
  },
  {
    "": 280,
    "Unnamed: 0": 280,
    "Tweets": "Thanks to the DRC army for rescuing some of our team members who were attacked in Badibwame #DRCongo while supporti… https://t.co/OSkpstr80x",
    "Dates": "2014-01-14",
    "Longitude": 5.5222960051766625,
    "Latitude": 8.561915586106497,
    "Sentiment": "neutral"
  },
  {
    "": 281,
    "Unnamed: 0": 281,
    "Tweets": "Sensitizing young people in Butembo #DRCongo on the importance of vaccination as prevention against #Ebola virus in… https://t.co/lXvpNe8upW",
    "Dates": "2014-01-14",
    "Longitude": -1.071484837081953,
    "Latitude": 11.385814186112349,
    "Sentiment": "neutral"
  },
  {
    "": 282,
    "Unnamed: 0": 282,
    "Tweets": "Sensitizing young people in Butembo #DRCongo on the importance of vaccination as prevention against #Ebola virus in… https://t.co/ADPdMlChx8",
    "Dates": "2014-01-14",
    "Longitude": 5.241946825635616,
    "Latitude": 11.393274684021396,
    "Sentiment": "neutral"
  },
  {
    "": 283,
    "Unnamed: 0": 283,
    "Tweets": "Ten days after being in contact with an #Ebola patient, the 22-year old man was intercepted at an #Ebola  checkpoin… https://t.co/K6nLQduJqf",
    "Dates": "2014-01-14",
    "Longitude": -2.2825119487976284,
    "Latitude": 10.362436766224343,
    "Sentiment": "neutral"
  },
  {
    "": 284,
    "Unnamed: 0": 284,
    "Tweets": "Ten days after being in contact with an #Ebola patient, the 22-year old man was intercepted at an #Ebola  checkpoin… https://t.co/m0jwOsOs45",
    "Dates": "2014-01-14",
    "Longitude": -1.113037864849086,
    "Latitude": 9.947368248872554,
    "Sentiment": "positive"
  },
  {
    "": 285,
    "Unnamed: 0": 285,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/jt375rftbh $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/fzngl5w4LG",
    "Dates": "2014-01-14",
    "Longitude": 8.131992574997522,
    "Latitude": 8.63931707533173,
    "Sentiment": "neutral"
  },
  {
    "": 286,
    "Unnamed: 0": 286,
    "Tweets": "News Scan for Jan 13, 2014 https://t.co/mRF5lpes3r  #Ebola",
    "Dates": "2014-01-14",
    "Longitude": 4.291760627212208,
    "Latitude": 8.893100707058124,
    "Sentiment": "negative"
  },
  {
    "": 287,
    "Unnamed: 0": 287,
    "Tweets": "PREVAC-UP : L’étude évaluera également l’effet des co-infections, comme la malaria et les helminthes, sur la répons… https://t.co/axdtVLu2zu",
    "Dates": "2014-01-14",
    "Longitude": 6.451643259539022,
    "Latitude": 10.253165720980222,
    "Sentiment": "neutral"
  },
  {
    "": 288,
    "Unnamed: 0": 288,
    "Tweets": "#Ethics case: How should Dr R reconcile the cultural importance of honoring local burial rituals with his obligatio… https://t.co/hd21qXezjd",
    "Dates": "2014-01-14",
    "Longitude": 13.947757492950846,
    "Latitude": 9.056693079083741,
    "Sentiment": "neutral"
  },
  {
    "": 289,
    "Unnamed: 0": 289,
    "Tweets": "Please follow @sl_child to hear about the work with #ebola #orphans in #tombo #SierraLeone @idriselba https://t.co/68YOy9Dag6",
    "Dates": "2014-01-13",
    "Longitude": 12.831847702320466,
    "Latitude": 11.411682998524661,
    "Sentiment": "negative"
  },
  {
    "": 290,
    "Unnamed: 0": 290,
    "Tweets": "@CIDRAP News Scan for January 13 https://t.co/7k2ayZ4R87 #Ebola #CWD #vaccination #avianflu",
    "Dates": "2014-01-13",
    "Longitude": 1.9915253117709013,
    "Latitude": 10.018816898241306,
    "Sentiment": "positive"
  },
  {
    "": 291,
    "Unnamed: 0": 291,
    "Tweets": "Couldn't agree more–effective engagement at all levels has been critical to scaling up access to effective #Ebola i… https://t.co/D6JzLWsWz7",
    "Dates": "2014-01-13",
    "Longitude": 3.13825004028603,
    "Latitude": 9.640827303886308,
    "Sentiment": "neutral"
  },
  {
    "": 292,
    "Unnamed: 0": 292,
    "Tweets": "NEWS SCAN: New DRC #Ebola cases; More #CWD in Minnesota; Mandatory vaccination in Europe; #Avianflu in 3 nations… https://t.co/KlMR2aIUkF",
    "Dates": "2014-01-13",
    "Longitude": -5.209707260732149,
    "Latitude": 10.734704161405897,
    "Sentiment": "neutral"
  },
  {
    "": 293,
    "Unnamed: 0": 293,
    "Tweets": "Great piece on the distrust that permeates the #Congo #Ebola response, and how an anthropologist is trying to turn… https://t.co/v5P9MKkLTG",
    "Dates": "2014-01-13",
    "Longitude": -2.613342936623332,
    "Latitude": 10.08210360353768,
    "Sentiment": "neutral"
  },
  {
    "": 294,
    "Unnamed: 0": 294,
    "Tweets": "13ene2014 #NacionalDSN R.D.#Congo - Seguridad frente a pandemias y epidemias #Ébola https://t.co/XaAUr6CPpd @WHO➡️… https://t.co/QKq6md5d6K",
    "Dates": "2014-01-13",
    "Longitude": 3.160241894125325,
    "Latitude": 7.973713281477534,
    "Sentiment": "neutral"
  },
  {
    "": 295,
    "Unnamed: 0": 295,
    "Tweets": "#Ebola au Nord-Kivu: 3 nouveaux cas confirmés  dans la zone de santé de #Beni\n\n#RDC\n https://t.co/XnNgtWEGEr via @ElectionNet",
    "Dates": "2014-01-13",
    "Longitude": -2.570659437829807,
    "Latitude": 9.79859348463592,
    "Sentiment": "positive"
  },
  {
    "": 296,
    "Unnamed: 0": 296,
    "Tweets": "Sometimes guidelines can have major impact.  These have helped change the management options available for dealing… https://t.co/5Mzmi4NCmu",
    "Dates": "2014-01-13",
    "Longitude": 3.7866158636374503,
    "Latitude": 9.381487908989547,
    "Sentiment": "negative"
  },
  {
    "": 297,
    "Unnamed: 0": 297,
    "Tweets": "Jophet survived #Ebola, but lost his son, wife &amp; mother to the disease. He now cares for children at a @UNICEF-supp… https://t.co/R7zsLyBOSD",
    "Dates": "2014-01-13",
    "Longitude": 9.243084194273303,
    "Latitude": 10.519865983613972,
    "Sentiment": "neutral"
  },
  {
    "": 298,
    "Unnamed: 0": 298,
    "Tweets": "#Ébola: la preocupación aumenta después de que el virus reaparece en localidades del este de la RDC https://t.co/tIXi1HyTzD",
    "Dates": "2014-01-13",
    "Longitude": 2.383720685352768,
    "Latitude": 8.623593971954241,
    "Sentiment": "negative"
  },
  {
    "": 299,
    "Unnamed: 0": 299,
    "Tweets": "“In less than half a decade, #Ebola has gone from being nearly a death sentence to a #vaccine-preventable disease.”… https://t.co/BNIWsG1d5s",
    "Dates": "2014-01-13",
    "Longitude": 3.313725893132301,
    "Latitude": 8.974065508264598,
    "Sentiment": "neutral"
  },
  {
    "": 300,
    "Unnamed: 0": 300,
    "Tweets": "when I go to Africa for vacation\nWatch for Ebola \n#memes\n#africa\n#rassism \n#Ebola https://t.co/yOA0rq3tKq",
    "Dates": "2014-01-13",
    "Longitude": 5.269607484207788,
    "Latitude": 10.703437940211545,
    "Sentiment": "neutral"
  },
  {
    "": 301,
    "Unnamed: 0": 301,
    "Tweets": "Once #ERVEBO induced immunity wears off, an #Ebola infection can be expected to be even more severe due to an aller… https://t.co/3e8xh4BLJn",
    "Dates": "2014-01-13",
    "Longitude": -1.6803781208838764,
    "Latitude": 8.376901098027586,
    "Sentiment": "positive"
  },
  {
    "": 302,
    "Unnamed: 0": 302,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/0AanN4Y0A3 $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/PLBbvIEJoQ",
    "Dates": "2014-01-13",
    "Longitude": 9.082262428151584,
    "Latitude": 9.431875621385977,
    "Sentiment": "neutral"
  },
  {
    "": 303,
    "Unnamed: 0": 303,
    "Tweets": "Regardez comment les acteurs de la riposte contre la maladie à virus #EBOLA sont menacés à la machette à l'est du p… https://t.co/D5eOJD6sad",
    "Dates": "2014-01-13",
    "Longitude": 7.002920970498616,
    "Latitude": 11.149784050188238,
    "Sentiment": "positive"
  },
  {
    "": 304,
    "Unnamed: 0": 304,
    "Tweets": "Heureuse d'avoir participé en réalisant #illustration de couverture et ornements de texte.\n\"LES SURVIVANTES, Parole… https://t.co/n22kxH4yFi",
    "Dates": "2014-01-13",
    "Longitude": 7.962478107827649,
    "Latitude": 12.919318458937058,
    "Sentiment": "neutral"
  },
  {
    "": 305,
    "Unnamed: 0": 305,
    "Tweets": "Écouter Bulletin Koma Ebola Du 13 Janvvier 2014 Kinande. A #Butembo, une campagne de vaccination contre le virus… https://t.co/r6ECQPCbWR",
    "Dates": "2014-01-13",
    "Longitude": 9.55115624682384,
    "Latitude": 9.578225247469238,
    "Sentiment": "neutral"
  },
  {
    "": 306,
    "Unnamed: 0": 306,
    "Tweets": "Écouter Bulletin Koma Ebola Du 13 Janvier 2014 Swahili. A #Butembo, une campagne de vaccination contre le virus… https://t.co/GQu8PVwhSR",
    "Dates": "2014-01-13",
    "Longitude": 5.974717597471917,
    "Latitude": 9.916297284466857,
    "Sentiment": "neutral"
  },
  {
    "": 307,
    "Unnamed: 0": 307,
    "Tweets": "Écouter Bulletin Koma Ebola Du 13 Janvier 2014 Français. A #Butembo, une campagne de vaccination contre le virus… https://t.co/ryb5exYZCO",
    "Dates": "2014-01-13",
    "Longitude": 6.996502480088309,
    "Latitude": 9.404699157042922,
    "Sentiment": "positive"
  },
  {
    "": 308,
    "Unnamed: 0": 308,
    "Tweets": "In #DRC, the #DiseaseDetectives of CDC’s Epidemic Intelligence Service are proving their worth as they work to stop… https://t.co/dCsXqCJZF4",
    "Dates": "2014-01-13",
    "Longitude": 0.8497747064051282,
    "Latitude": 9.472977281619725,
    "Sentiment": "positive"
  },
  {
    "": 309,
    "Unnamed: 0": 309,
    "Tweets": "Five years after Emory chose care over fear, #Ebola patients Kent Brantly and Nancy Writebol returned to mark the m… https://t.co/9Z1jvExItW",
    "Dates": "2014-01-13",
    "Longitude": 5.478500133661811,
    "Latitude": 11.059221800520657,
    "Sentiment": "neutral"
  },
  {
    "": 310,
    "Unnamed: 0": 310,
    "Tweets": "Always fascinating to hear the story of the discovery of #Ebola.  An incredible team effort that included the… https://t.co/vQYSmiIAO7",
    "Dates": "2014-01-13",
    "Longitude": 8.913464478699215,
    "Latitude": 9.158236465274449,
    "Sentiment": "neutral"
  },
  {
    "": 311,
    "Unnamed: 0": 311,
    "Tweets": "The story of the #Ebola vaccine began, as scientific advances often do, with a good idea and a lucky break.\"\n\nThe… https://t.co/rhzvwvfuw0",
    "Dates": "2014-01-13",
    "Longitude": 12.412679031894996,
    "Latitude": 10.860929924080475,
    "Sentiment": "positive"
  },
  {
    "": 312,
    "Unnamed: 0": 312,
    "Tweets": "@DrKynast @EUDataNewsHub @MarieWolfrom @AFP #DRC had several outbreaks of #EBOLA since the mid-70s, and is one of t… https://t.co/mOesIT03Wy",
    "Dates": "2014-01-13",
    "Longitude": 8.949509323686934,
    "Latitude": 8.863723650695079,
    "Sentiment": "negative"
  },
  {
    "": 313,
    "Unnamed: 0": 313,
    "Tweets": "Results from #GSUPublicHealth's Dr. Gerardo Chowell and PhD candidate Amna Tariq's recent paper, published in… https://t.co/vu7Wne4HBU",
    "Dates": "2014-01-13",
    "Longitude": 0.5915836626573401,
    "Latitude": 10.014887199605997,
    "Sentiment": "neutral"
  },
  {
    "": 314,
    "Unnamed: 0": 314,
    "Tweets": "The U.S. Food and Drug Administration announced the approval of #Ervebo, the first FDA-approved vaccine for the pre… https://t.co/XCwDMY2WxR",
    "Dates": "2014-01-13",
    "Longitude": 3.993309341703556,
    "Latitude": 10.187392820406377,
    "Sentiment": "neutral"
  },
  {
    "": 315,
    "Unnamed: 0": 315,
    "Tweets": "Don't miss the #NIH Demystifying Medicine Lectures Series\n\"Ebola: Then, Now &amp; the NIH\"\nJan. 14, 4pm ET,\nfeaturing s… https://t.co/65mi4EpoDQ",
    "Dates": "2014-01-13",
    "Longitude": 0.16067117926960783,
    "Latitude": 8.84934293151938,
    "Sentiment": "neutral"
  },
  {
    "": 316,
    "Unnamed: 0": 316,
    "Tweets": "DTRA contributes historic #ebola  effort Read the full story here https://t.co/YFTEHQc0Fl",
    "Dates": "2014-01-13",
    "Longitude": 2.8667298159994234,
    "Latitude": 9.14245630148706,
    "Sentiment": "neutral"
  },
  {
    "": 317,
    "Unnamed: 0": 317,
    "Tweets": "Never knew that #Ebola is named after a river 😱 https://t.co/LTpVGTyLlk",
    "Dates": "2014-01-13",
    "Longitude": 9.454233929938422,
    "Latitude": 9.578543568986497,
    "Sentiment": "neutral"
  },
  {
    "": 318,
    "Unnamed: 0": 318,
    "Tweets": "@fabricemvondo_ @EUDataNewsHub @MarieWolfrom @AFP Under #Belgium rule the Infrastructure was much better. Now it's… https://t.co/lF7DsLzlt9",
    "Dates": "2014-01-13",
    "Longitude": 4.820983655771101,
    "Latitude": 9.533796806695843,
    "Sentiment": "positive"
  },
  {
    "": 319,
    "Unnamed: 0": 319,
    "Tweets": "Here are ten big moments that will stick with us—and could continue to shape #TheFutureOf health for us all &gt;&gt;… https://t.co/0LQJdcBEkx",
    "Dates": "2014-01-13",
    "Longitude": 11.100548816711166,
    "Latitude": 11.486181778991458,
    "Sentiment": "neutral"
  },
  {
    "": 320,
    "Unnamed: 0": 320,
    "Tweets": "ONGs | Los niños de República Democrática del #Congo frente al #ébola \n\nhttps://t.co/OnhmbY4UgV",
    "Dates": "2014-01-13",
    "Longitude": 8.032102833558884,
    "Latitude": 11.02722944690168,
    "Sentiment": "neutral"
  },
  {
    "": 321,
    "Unnamed: 0": 321,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/ADKGbsUnoO",
    "Dates": "2014-01-13",
    "Longitude": 6.914982072718491,
    "Latitude": 9.629060492978965,
    "Sentiment": "neutral"
  },
  {
    "": 322,
    "Unnamed: 0": 322,
    "Tweets": "EBOLA NEWS: NIAID-supported Partnership for Research on Ebola Vaccination extends study of three #Ebola #vaccine re… https://t.co/wIKVAijxeg",
    "Dates": "2014-01-13",
    "Longitude": 5.4224454150708254,
    "Latitude": 10.022326400874594,
    "Sentiment": "neutral"
  },
  {
    "": 323,
    "Unnamed: 0": 323,
    "Tweets": "@InsermTransfert Transfert est ravi d’accompagner le projet européen #PREVAC-UP visant à étendre le suivi et renfor… https://t.co/GW5KTJvDJA",
    "Dates": "2014-01-13",
    "Longitude": 5.7239845830205525,
    "Latitude": 11.284528613086183,
    "Sentiment": "positive"
  },
  {
    "": 324,
    "Unnamed: 0": 324,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/xGbN6ZYrQ1",
    "Dates": "2014-01-13",
    "Longitude": -7.367977954896229,
    "Latitude": 10.613690265094185,
    "Sentiment": "positive"
  },
  {
    "": 325,
    "Unnamed: 0": 325,
    "Tweets": "I've been following the #Ebola outbreak in #DRC for nearly 18 months now, and while we need to end it fast, this… https://t.co/SQQO3i4qoD",
    "Dates": "2014-01-13",
    "Longitude": 4.615847881824609,
    "Latitude": 9.823338631897135,
    "Sentiment": "neutral"
  },
  {
    "": 326,
    "Unnamed: 0": 326,
    "Tweets": "@SciTania #Ebola : comment tout a commencé en 1976\nhttps://t.co/wUCSo0RrHD\n#virologie #histmed https://t.co/ddow0vQgFg",
    "Dates": "2014-01-13",
    "Longitude": 11.103197306822619,
    "Latitude": 10.753724068080942,
    "Sentiment": "neutral"
  },
  {
    "": 327,
    "Unnamed: 0": 327,
    "Tweets": "#STUDY: Vitamin A Supplementation Was Associated with Reduced Mortality in Patients with #Ebola Virus Disease durin… https://t.co/UC1cmSgR9L",
    "Dates": "2014-01-13",
    "Longitude": 2.3091764112847084,
    "Latitude": 8.345293771624515,
    "Sentiment": "neutral"
  },
  {
    "": 328,
    "Unnamed: 0": 328,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/QHVeznSQlV $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/rc5mCktF3N",
    "Dates": "2014-01-13",
    "Longitude": -1.1732265099797363,
    "Latitude": 11.217002556318446,
    "Sentiment": "positive"
  },
  {
    "": 329,
    "Unnamed: 0": 329,
    "Tweets": "Health workers leading the fight against #Ebola are our everyday motivation! \n\nSince the beginning of the outbreak,… https://t.co/b359w198zO",
    "Dates": "2014-01-13",
    "Longitude": 6.019039722000975,
    "Latitude": 10.7954726484269,
    "Sentiment": "neutral"
  },
  {
    "": 330,
    "Unnamed: 0": 330,
    "Tweets": "#Prevac Etudier la sécurité à long terme des vaccins contre #Ebola et la durabilité de la réponse immunitaire. C'es… https://t.co/RIYa7sOHw8",
    "Dates": "2014-01-13",
    "Longitude": 1.155069796693681,
    "Latitude": 9.963514279391847,
    "Sentiment": "positive"
  },
  {
    "": 331,
    "Unnamed: 0": 331,
    "Tweets": "@septemberrbloom Damn..I will ensure you’re eulogy is well written..#Ebola",
    "Dates": "2014-01-13",
    "Longitude": 10.35295000295028,
    "Latitude": 10.611205730221373,
    "Sentiment": "neutral"
  },
  {
    "": 332,
    "Unnamed: 0": 332,
    "Tweets": "INSERM: PREVAC-UP: The Partnership for Research on #Ebola Vaccination extends follow-up and builds research capacit… https://t.co/VIsNhucLub",
    "Dates": "2014-01-13",
    "Longitude": 4.492228987781832,
    "Latitude": 9.909772618634484,
    "Sentiment": "neutral"
  },
  {
    "": 333,
    "Unnamed: 0": 333,
    "Tweets": "Worried by new cases of #Ebola in Mambasa, #AfricaCDC #MinSanteRDC and other partners set up new #vaccination rings… https://t.co/lWwy0wTH83",
    "Dates": "2014-01-13",
    "Longitude": 6.61585463644603,
    "Latitude": 12.312046854546416,
    "Sentiment": "positive"
  },
  {
    "": 334,
    "Unnamed: 0": 334,
    "Tweets": "#Ebola : l’inquiétude monte après la réapparition du virus dans des localités de l’est de la RDC https://t.co/vErYryIYux",
    "Dates": "2014-01-13",
    "Longitude": 11.59836432641423,
    "Latitude": 9.291265474700104,
    "Sentiment": "neutral"
  },
  {
    "": 335,
    "Unnamed: 0": 335,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/dtsYEAjtyP $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/lCJXy4Uq3a",
    "Dates": "2014-01-13",
    "Longitude": 11.988182614827664,
    "Latitude": 10.832491280960822,
    "Sentiment": "neutral"
  },
  {
    "": 336,
    "Unnamed: 0": 336,
    "Tweets": "#phep #Ebola #Zika https://t.co/HBd6JBrjYO",
    "Dates": "2014-01-13",
    "Longitude": -0.8496272670219787,
    "Latitude": 8.646619898379868,
    "Sentiment": "neutral"
  },
  {
    "": 337,
    "Unnamed: 0": 337,
    "Tweets": "La ministre Gould, sera en #RC et en #RDCongo cette semaine pour travailler avec les partenaires du Canada en… https://t.co/zkSitwd6Pr",
    "Dates": "2014-01-13",
    "Longitude": 13.649461966144996,
    "Latitude": 10.287977301404062,
    "Sentiment": "neutral"
  },
  {
    "": 338,
    "Unnamed: 0": 338,
    "Tweets": "Minister Gould will be in #RC and #DRCongo this week, working with Canada’s #African partners on #climatechange,… https://t.co/V8zlb0nQ5P",
    "Dates": "2014-01-13",
    "Longitude": 1.5389646675266349,
    "Latitude": 10.240777029225109,
    "Sentiment": "positive"
  },
  {
    "": 339,
    "Unnamed: 0": 339,
    "Tweets": "Containing the deadly #Ebola outbreak amid active conflict in the #DRC 🇨🇩  continues to present many challenges. Bu… https://t.co/hOD6tdjNn2",
    "Dates": "2014-01-13",
    "Longitude": -6.147223865878713,
    "Latitude": 10.386861340770611,
    "Sentiment": "positive"
  },
  {
    "": 340,
    "Unnamed: 0": 340,
    "Tweets": "9.EMM publishes research that is immediately relevant to society, like this paper addressing the origin of the… https://t.co/MLBLtvD4lg",
    "Dates": "2014-01-13",
    "Longitude": 7.8431490505553265,
    "Latitude": 10.891955878085723,
    "Sentiment": "positive"
  },
  {
    "": 341,
    "Unnamed: 0": 341,
    "Tweets": "Kasese calls for restoration of #Ebola screening centers via @pmldaily https://t.co/IlaiVWYgZD",
    "Dates": "2014-01-13",
    "Longitude": 1.3703055208787118,
    "Latitude": 10.481942501818164,
    "Sentiment": "positive"
  },
  {
    "": 342,
    "Unnamed: 0": 342,
    "Tweets": "A scientific triumph came out of #Ebola outbreaks of the last decade, UK's Public Health Rapid Support Team Directo… https://t.co/kTQJJdz4I6",
    "Dates": "2014-01-13",
    "Longitude": 7.95944298393148,
    "Latitude": 10.489170778076922,
    "Sentiment": "negative"
  },
  {
    "": 343,
    "Unnamed: 0": 343,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/Lss72chtNK $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/9embhqTVK1",
    "Dates": "2014-01-13",
    "Longitude": 2.168787551612853,
    "Latitude": 8.722838660321607,
    "Sentiment": "neutral"
  },
  {
    "": 344,
    "Unnamed: 0": 344,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/ovO9qglDpx",
    "Dates": "2014-01-13",
    "Longitude": 8.148892704458014,
    "Latitude": 10.183767826462576,
    "Sentiment": "neutral"
  },
  {
    "": 345,
    "Unnamed: 0": 345,
    "Tweets": "A scientific triumph came out of #Ebola outbreaks of the last decade, UK's Public Health Rapid Support Team Directo… https://t.co/JNqC7wklSt",
    "Dates": "2014-01-13",
    "Longitude": 9.799602134027957,
    "Latitude": 10.633078084880674,
    "Sentiment": "negative"
  },
  {
    "": 346,
    "Unnamed: 0": 346,
    "Tweets": "#Ervebo was approved in #Europe (Nov 2019) &amp; in the #US (Dec 2019). This is the story of how #scientists across 10… https://t.co/tLqC5l3Hcv",
    "Dates": "2014-01-13",
    "Longitude": 2.974810903756508,
    "Latitude": 9.322964915109484,
    "Sentiment": "positive"
  },
  {
    "": 347,
    "Unnamed: 0": 347,
    "Tweets": "The 'rule of 6' influences the transcription initiation of #Ebola  \nvirus. Find our recent publication by Simone Ba… https://t.co/fJJ62rBcrw",
    "Dates": "2014-01-13",
    "Longitude": -2.72029695186146,
    "Latitude": 8.602010160630936,
    "Sentiment": "positive"
  },
  {
    "": 348,
    "Unnamed: 0": 348,
    "Tweets": "La historia de la primera #vacuna contra el #Ebola. Esfuerzo de la cooperación científica. #VaccineWork… https://t.co/gCQOK1HWbn",
    "Dates": "2014-01-13",
    "Longitude": 3.880015807274034,
    "Latitude": 11.580556663731599,
    "Sentiment": "positive"
  },
  {
    "": 349,
    "Unnamed: 0": 349,
    "Tweets": "WHO: #measles has killed more than 6,000 people in #DRCongo.\n@WHO called on international partners and agencies to… https://t.co/Pjy1FI1ed5",
    "Dates": "2014-01-13",
    "Longitude": 0.7092245441424074,
    "Latitude": 8.635823913112196,
    "Sentiment": "negative"
  },
  {
    "": 350,
    "Unnamed: 0": 350,
    "Tweets": "Situation Update on #Ebola Virus Disease #Preparedness - #SouthSudan Update 16 - 31 Dec 2019\nTwo alerts reported fr… https://t.co/s3zqCBtyHo",
    "Dates": "2014-01-13",
    "Longitude": 9.709583830306237,
    "Latitude": 9.043839462769698,
    "Sentiment": "positive"
  },
  {
    "": 351,
    "Unnamed: 0": 351,
    "Tweets": "#Ebola Virus Disease (EVD) Points of Entry (PoE) #Uganda preparedness dashboards for Kanungu District was covered f… https://t.co/J9M0fNeO35",
    "Dates": "2014-01-13",
    "Longitude": -0.8051873246660914,
    "Latitude": 9.019827868523764,
    "Sentiment": "positive"
  },
  {
    "": 352,
    "Unnamed: 0": 352,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/KWQwztzdit $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/tcpiQ4yzXQ",
    "Dates": "2014-01-13",
    "Longitude": -4.538360315587525,
    "Latitude": 10.342779210259238,
    "Sentiment": "positive"
  },
  {
    "": 353,
    "Unnamed: 0": 353,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/5Xl8shn1kW $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/MOAfKdm5dX",
    "Dates": "2014-01-13",
    "Longitude": -3.373753230318039,
    "Latitude": 12.44733773622255,
    "Sentiment": "positive"
  },
  {
    "": 354,
    "Unnamed: 0": 354,
    "Tweets": "@institutpasteur AEE will work on #Ebola #preparedness in #RépubliqueCentrafricaine w/@I_P_Bangui &amp; Université de B… https://t.co/Z9b51pRO8I",
    "Dates": "2014-01-13",
    "Longitude": 5.643188068031908,
    "Latitude": 9.214808014592291,
    "Sentiment": "negative"
  },
  {
    "": 355,
    "Unnamed: 0": 355,
    "Tweets": "#RDC  3 nouveaux cas confirmés  d'#Ebola  dans la zone de santé de\n #Beni https://t.co/csINmP5Vbk via @ElectionNet",
    "Dates": "2014-01-13",
    "Longitude": -3.7086175156501096,
    "Latitude": 10.650562008963183,
    "Sentiment": "positive"
  },
  {
    "": 356,
    "Unnamed: 0": 356,
    "Tweets": "Case Definitions Used During the First 6 Months of the 10th #Ebola Outbreak in #DRC \nCase definitions are critical… https://t.co/gPWyIT2Tab",
    "Dates": "2014-01-13",
    "Longitude": 7.090934889308675,
    "Latitude": 9.258806442626074,
    "Sentiment": "neutral"
  },
  {
    "": 357,
    "Unnamed: 0": 357,
    "Tweets": "The story of the #ebola #vaccine, spanning many continents, brilliant minds, and stumbling blocks... told beautiful… https://t.co/cxo8DHg3vB",
    "Dates": "2014-01-13",
    "Longitude": 6.264376151664378,
    "Latitude": 9.491909628202183,
    "Sentiment": "positive"
  },
  {
    "": 358,
    "Unnamed: 0": 358,
    "Tweets": "Je n'insisterai jamais assez sur le besoin de rester vigilant face à #Ebola, même après des mois sans cas. Nous l'a… https://t.co/4HrrskF4Po",
    "Dates": "2014-01-13",
    "Longitude": 8.66501195452366,
    "Latitude": 11.021823530057498,
    "Sentiment": "positive"
  },
  {
    "": 359,
    "Unnamed: 0": 359,
    "Tweets": "Health workers leading the fight against #Ebola are our #MondayMotivation! Since the beginning of the outbreak, our… https://t.co/Ua16ZB6yb8",
    "Dates": "2014-01-13",
    "Longitude": 5.3623341825867215,
    "Latitude": 11.664491511688505,
    "Sentiment": "negative"
  },
  {
    "": 360,
    "Unnamed: 0": 360,
    "Tweets": "How long did developing a #vaccine for #ebola take? With how many #researchers, in how many countries? How quick on… https://t.co/nbWArelilT",
    "Dates": "2014-01-13",
    "Longitude": 0.09998187663978264,
    "Latitude": 9.722950699099147,
    "Sentiment": "negative"
  },
  {
    "": 361,
    "Unnamed: 0": 361,
    "Tweets": "Un equipo de 40 personas de la OMS @who trabaja \"casi sin parar\" para garantizar los suministros contra el #ébola e… https://t.co/xBdJYOUZ9h",
    "Dates": "2014-01-13",
    "Longitude": -1.9338704230219275,
    "Latitude": 10.726956372243842,
    "Sentiment": "negative"
  },
  {
    "": 362,
    "Unnamed: 0": 362,
    "Tweets": "Mobilization of 428 members of the #Butembo youth association for the strategy \"1000 vaccines against #Ebola per da… https://t.co/pHwQBPvjjl",
    "Dates": "2014-01-13",
    "Longitude": -5.347418155699037,
    "Latitude": 9.760165857566646,
    "Sentiment": "negative"
  },
  {
    "": 363,
    "Unnamed: 0": 363,
    "Tweets": "#IPCC #Arctic #Science #ClimateChange #Ebola #Blackhole #Physics “The world awoke to the need to combat global heat… https://t.co/gdrnHUBDVo",
    "Dates": "2014-01-13",
    "Longitude": 6.005463813488419,
    "Latitude": 11.083084962535425,
    "Sentiment": "negative"
  },
  {
    "": 364,
    "Unnamed: 0": 364,
    "Tweets": "Vaccines can't stop #Ebola in a war zone.\n\"We found that ring #vaccination is effective until the levels of inacces… https://t.co/bNZnSB9z5p",
    "Dates": "2014-01-13",
    "Longitude": 1.47765407714467,
    "Latitude": 11.198357183963694,
    "Sentiment": "negative"
  },
  {
    "": 365,
    "Unnamed: 0": 365,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/jt375rftbh $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/aOvu1jeFBQ",
    "Dates": "2014-01-13",
    "Longitude": -7.612392426160913,
    "Latitude": 10.748957538772132,
    "Sentiment": "negative"
  },
  {
    "": 366,
    "Unnamed: 0": 366,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/kMshlwYwFj $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/q7IIqh95cC",
    "Dates": "2014-01-13",
    "Longitude": 0.31907605070882106,
    "Latitude": 9.060734811166055,
    "Sentiment": "negative"
  },
  {
    "": 367,
    "Unnamed: 0": 367,
    "Tweets": "I guess these top vaccine experts openly raising questions about vaccine safety at a @WHO conference are anti vaxxe… https://t.co/MzqJRLTl4o",
    "Dates": "2014-01-13",
    "Longitude": 11.039257824700774,
    "Latitude": 9.60776585845509,
    "Sentiment": "neutral"
  },
  {
    "": 368,
    "Unnamed: 0": 368,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/wDvPZ6c2eR",
    "Dates": "2014-01-13",
    "Longitude": 4.821834799806778,
    "Latitude": 11.14972025231072,
    "Sentiment": "positive"
  },
  {
    "": 369,
    "Unnamed: 0": 369,
    "Tweets": "Speaking of N95, ito ay uri ng \"particulate respirator\" dahil nafifilter nito ang mga air particles. Ginagamit din… https://t.co/60aNtAnIE3",
    "Dates": "2014-01-13",
    "Longitude": -2.751827701424931,
    "Latitude": 11.011003107636183,
    "Sentiment": "negative"
  },
  {
    "": 370,
    "Unnamed: 0": 370,
    "Tweets": "#ebola https://t.co/zMaAhEbndQ",
    "Dates": "2014-01-13",
    "Longitude": 3.248297275329578,
    "Latitude": 9.588542668244981,
    "Sentiment": "neutral"
  },
  {
    "": 371,
    "Unnamed: 0": 371,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/ncLPL1qDkV",
    "Dates": "2014-01-13",
    "Longitude": 10.632762573847273,
    "Latitude": 11.00068080700217,
    "Sentiment": "neutral"
  },
  {
    "": 372,
    "Unnamed: 0": 372,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 460 suspected/3395 total confirmed &amp; probable cases (118 probable/3277 confirmed… https://t.co/wNp0M9aOLI",
    "Dates": "2014-01-13",
    "Longitude": 11.690397301185254,
    "Latitude": 9.672943899476167,
    "Sentiment": "neutral"
  },
  {
    "": 373,
    "Unnamed: 0": 373,
    "Tweets": "In the newswrap, we talk about the CFA, #Ebola in DRC, security in the Sahel, and more. We have shoutouts to… https://t.co/TS3e1gak6x",
    "Dates": "2014-01-13",
    "Longitude": 4.0099880224499085,
    "Latitude": 11.339541052351112,
    "Sentiment": "positive"
  },
  {
    "": 374,
    "Unnamed: 0": 374,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/D48w76YGxC $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/SBiNDao4oa",
    "Dates": "2014-01-13",
    "Longitude": 13.480824974133387,
    "Latitude": 10.86630821139417,
    "Sentiment": "neutral"
  },
  {
    "": 375,
    "Unnamed: 0": 375,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/elRPy49u4i",
    "Dates": "2014-01-13",
    "Longitude": 5.382034667205138,
    "Latitude": 11.874598318021366,
    "Sentiment": "neutral"
  },
  {
    "": 376,
    "Unnamed: 0": 376,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/KnanFIAiqg $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/degzKdJ09V",
    "Dates": "2014-01-13",
    "Longitude": -3.318338274301177,
    "Latitude": 10.86012687426886,
    "Sentiment": "neutral"
  },
  {
    "": 377,
    "Unnamed: 0": 377,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/iDZ6PF0ciB $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/O8zhF8xi39",
    "Dates": "2014-01-13",
    "Longitude": 3.1226759499468573,
    "Latitude": 9.248933960343798,
    "Sentiment": "neutral"
  },
  {
    "": 378,
    "Unnamed: 0": 378,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/1Msg10FcuP $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/Xv4DdYKbB6",
    "Dates": "2014-01-13",
    "Longitude": -5.266894393119173,
    "Latitude": 9.062844374261154,
    "Sentiment": "neutral"
  },
  {
    "": 379,
    "Unnamed: 0": 379,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/KWQwztzdit $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/OmQvIUA2Z7",
    "Dates": "2014-01-13",
    "Longitude": 14.254921447222653,
    "Latitude": 8.851933634413093,
    "Sentiment": "neutral"
  },
  {
    "": 380,
    "Unnamed: 0": 380,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/6Wlo8X0LDu",
    "Dates": "2014-01-13",
    "Longitude": 7.471571710680137,
    "Latitude": 10.791957598231386,
    "Sentiment": "neutral"
  },
  {
    "": 381,
    "Unnamed: 0": 381,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/ukQUUHLDHW $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/rSuQh80C8b",
    "Dates": "2014-01-13",
    "Longitude": 3.8952461838847294,
    "Latitude": 9.862132904348481,
    "Sentiment": "neutral"
  },
  {
    "": 382,
    "Unnamed: 0": 382,
    "Tweets": "DRC #Ebola: CMRE update, January 12 https://t.co/nG1tkvjPA7",
    "Dates": "2014-01-12",
    "Longitude": 10.128563586741205,
    "Latitude": 11.209013779826318,
    "Sentiment": "neutral"
  },
  {
    "": 383,
    "Unnamed: 0": 383,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/lNHGoyaK6k $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/FQMja1BRuo",
    "Dates": "2014-01-12",
    "Longitude": 14.761534669995669,
    "Latitude": 10.5244125872739,
    "Sentiment": "neutral"
  },
  {
    "": 384,
    "Unnamed: 0": 384,
    "Tweets": "Moving Conversations and Relationships into Action!  https://t.co/JRRb5ajlDo $GOVX #HIV #lassa #ebola #malaria #IO… https://t.co/WdDnKtfi7L",
    "Dates": "2014-01-12",
    "Longitude": 6.423380735420237,
    "Latitude": 9.898237675164138,
    "Sentiment": "positive"
  },
  {
    "": 385,
    "Unnamed: 0": 385,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/1ggGlZp0uI",
    "Dates": "2014-01-12",
    "Longitude": -0.08911082786325153,
    "Latitude": 11.156906015506014,
    "Sentiment": "negative"
  },
  {
    "": 386,
    "Unnamed: 0": 386,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/8eXrnAPYXl",
    "Dates": "2014-01-12",
    "Longitude": 10.189767804875181,
    "Latitude": 10.20704201548234,
    "Sentiment": "positive"
  },
  {
    "": 387,
    "Unnamed: 0": 387,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/BiLyVdirRw",
    "Dates": "2014-01-12",
    "Longitude": 8.461092882424685,
    "Latitude": 8.26510261999883,
    "Sentiment": "neutral"
  },
  {
    "": 388,
    "Unnamed: 0": 388,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/VdKpZ3CcNI",
    "Dates": "2014-01-12",
    "Longitude": 6.209725076787208,
    "Latitude": 10.164450062085683,
    "Sentiment": "neutral"
  },
  {
    "": 389,
    "Unnamed: 0": 389,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/LM8AHvXwyJ",
    "Dates": "2014-01-12",
    "Longitude": 10.436496239748703,
    "Latitude": 10.981767074982235,
    "Sentiment": "positive"
  },
  {
    "": 390,
    "Unnamed: 0": 390,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/0DXYHlLdX3",
    "Dates": "2014-01-12",
    "Longitude": 7.80414040740364,
    "Latitude": 8.537464154304358,
    "Sentiment": "negative"
  },
  {
    "": 391,
    "Unnamed: 0": 391,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/t1FCdMA61k",
    "Dates": "2014-01-12",
    "Longitude": -1.1513544802983189,
    "Latitude": 10.940694381753927,
    "Sentiment": "neutral"
  },
  {
    "": 392,
    "Unnamed: 0": 392,
    "Tweets": "GeoVax is seeking collaborations for the next steps with HIV and other infectious disease vaccine candidates.… https://t.co/SrC2McPg3V",
    "Dates": "2014-01-12",
    "Longitude": 11.696245880035274,
    "Latitude": 9.179508859497336,
    "Sentiment": "positive"
  },
  {
    "": 393,
    "Unnamed: 0": 393,
    "Tweets": "Jan12, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,395: 3,277 confirmed 118 probable.  t… https://t.co/vGUCu1uGYW",
    "Dates": "2014-01-12",
    "Longitude": 8.134586054616125,
    "Latitude": 9.424268178268642,
    "Sentiment": "neutral"
  },
  {
    "": 394,
    "Unnamed: 0": 394,
    "Tweets": "The complex logistics of #Ebola response #DRC #RDC @MinSanteRDC @OMSRDCONGO @EteniLongondo  https://t.co/Jevd2sVPOM via @reliefweb",
    "Dates": "2014-01-12",
    "Longitude": 7.945876641188069,
    "Latitude": 10.589363410828868,
    "Sentiment": "neutral"
  },
  {
    "": 395,
    "Unnamed: 0": 395,
    "Tweets": "La famine est moins mediatisée que l'ebola car c'est un probleme que les riches n'auront pas\" #ebola",
    "Dates": "2014-01-12",
    "Longitude": 4.354761101017584,
    "Latitude": 11.516568974797094,
    "Sentiment": "neutral"
  },
  {
    "": 396,
    "Unnamed: 0": 396,
    "Tweets": "Molt trista la dada però, per donar context, crec que el 45% de la poblacio té menys de 18 anys i per tant no estan… https://t.co/A0BM8UAfNt",
    "Dates": "2014-01-12",
    "Longitude": -5.895098789922653,
    "Latitude": 11.047707606441636,
    "Sentiment": "positive"
  },
  {
    "": 397,
    "Unnamed: 0": 397,
    "Tweets": "#Ebola ha assolit un nivell de resistència, dsd fa 3 mesos, continua circulant i es resisteix a apagar-se. En mig a… https://t.co/xOEG2RBCgz",
    "Dates": "2014-01-12",
    "Longitude": 4.8128413336372775,
    "Latitude": 10.551480156618467,
    "Sentiment": "neutral"
  },
  {
    "": 398,
    "Unnamed: 0": 398,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 460 suspected/3395 total confirmed &amp; probable cases (118 probable/3275 confirmed… https://t.co/l744CNKS7G",
    "Dates": "2014-01-12",
    "Longitude": 6.475225345737355,
    "Latitude": 8.15018597247651,
    "Sentiment": "neutral"
  },
  {
    "": 399,
    "Unnamed: 0": 399,
    "Tweets": "Dans un silence assourdissant, la zone de santé de #Beni a reçu jeudi un nouveau cas confirmé de #Ebola après 29 jo… https://t.co/9lbP9r7w5b",
    "Dates": "2014-01-12",
    "Longitude": 10.224518636391629,
    "Latitude": 9.999891900844196,
    "Sentiment": "neutral"
  },
  {
    "": 400,
    "Unnamed: 0": 400,
    "Tweets": "@ShooguhLipz I always think of anti-vaxxers when I hear anything about #Ebola. Wonder if it were a circulating Nort… https://t.co/cpu4O0Uc5q",
    "Dates": "2014-01-12",
    "Longitude": 5.634896304153402,
    "Latitude": 9.8850723956823,
    "Sentiment": "neutral"
  },
  {
    "": 401,
    "Unnamed: 0": 401,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 12 Janvier 2014 avec les données collectées jusqu'au 11.01.20 👇\n\n➡️… https://t.co/3Ja81CZPCO",
    "Dates": "2014-01-12",
    "Longitude": -4.246123053027635,
    "Latitude": 8.684135990874662,
    "Sentiment": "neutral"
  },
  {
    "": 402,
    "Unnamed: 0": 402,
    "Tweets": "#Ebola update https://t.co/B8B6pSxIPb",
    "Dates": "2014-01-12",
    "Longitude": 6.239147896420517,
    "Latitude": 9.331808972579266,
    "Sentiment": "neutral"
  },
  {
    "": 403,
    "Unnamed: 0": 403,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/izd3IlXrNM",
    "Dates": "2014-01-12",
    "Longitude": 3.9816409113851448,
    "Latitude": 8.799814270707003,
    "Sentiment": "negative"
  },
  {
    "": 404,
    "Unnamed: 0": 404,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 11 janvier 2014 https://t.co/UxCqmdFuT7",
    "Dates": "2014-01-12",
    "Longitude": 2.418060147348424,
    "Latitude": 11.046168946319,
    "Sentiment": "neutral"
  },
  {
    "": 405,
    "Unnamed: 0": 405,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 12 janvier 2014 https://t.co/gUjz6d9f8w",
    "Dates": "2014-01-12",
    "Longitude": 11.84839878326084,
    "Latitude": 8.544455538554008,
    "Sentiment": "neutral"
  },
  {
    "": 406,
    "Unnamed: 0": 406,
    "Tweets": "@bama9455 @jay2kQ17 https://t.co/4nj1MX4fpX #WakeUpAmerica #FactsMatter #CORRUPTION #Censorship… https://t.co/ufNEG7OU6x",
    "Dates": "2014-01-12",
    "Longitude": 6.341891746841253,
    "Latitude": 8.881904499701065,
    "Sentiment": "positive"
  },
  {
    "": 407,
    "Unnamed: 0": 407,
    "Tweets": "‘Against all odds’: The inside story of how scientists across three continents produced an Ebola vaccine by… https://t.co/Q1J0JKTle6",
    "Dates": "2014-01-12",
    "Longitude": 1.610261082962734,
    "Latitude": 9.99392919594046,
    "Sentiment": "positive"
  },
  {
    "": 408,
    "Unnamed: 0": 408,
    "Tweets": "Everything you need to know about the first FDA-approved #Ebola vaccine.  https://t.co/qnJWsRQKkz",
    "Dates": "2014-01-12",
    "Longitude": 12.288608572139216,
    "Latitude": 9.780361401934623,
    "Sentiment": "neutral"
  },
  {
    "": 409,
    "Unnamed: 0": 409,
    "Tweets": "Superstar Canadian journalist @HelenBranswell breaks down recent updates  on and analysis of #Ebola. https://t.co/5bnIOmkhW9",
    "Dates": "2014-01-12",
    "Longitude": 14.00932046159321,
    "Latitude": 8.39581195708171,
    "Sentiment": "neutral"
  },
  {
    "": 410,
    "Unnamed: 0": 410,
    "Tweets": "What the Government is Really Saying https://t.co/kmOjIGBMG9 #ebola #family #governement #responsibility #retirement #selfreliance #skills",
    "Dates": "2014-01-12",
    "Longitude": 5.144403659612346,
    "Latitude": 10.295782588601798,
    "Sentiment": "neutral"
  },
  {
    "": 411,
    "Unnamed: 0": 411,
    "Tweets": "@realDonaldTrump #LeakedVideo! Head #UN #Scientist Admits #Vaccines Are Killing People https://t.co/BiLrBemLC3… https://t.co/16HodU2M0t",
    "Dates": "2014-01-12",
    "Longitude": -0.19692592945309695,
    "Latitude": 10.067857143540664,
    "Sentiment": "neutral"
  },
  {
    "": 412,
    "Unnamed: 0": 412,
    "Tweets": "@CBLevineMS ¯\\_(ツ)_/¯\nPeople in this part of DRC move around a lot, for a number of reasons — not least of which is… https://t.co/4eKlyBxSfC",
    "Dates": "2014-01-12",
    "Longitude": -0.589153695703402,
    "Latitude": 10.426176681301417,
    "Sentiment": "neutral"
  },
  {
    "": 413,
    "Unnamed: 0": 413,
    "Tweets": "SHOULD WE BE MAD AT SAWYER? https://t.co/irXisYhbta #ebola",
    "Dates": "2014-01-12",
    "Longitude": 5.644011721248819,
    "Latitude": 9.642996933488645,
    "Sentiment": "positive"
  },
  {
    "": 414,
    "Unnamed: 0": 414,
    "Tweets": "No comments necessary. #Ebola https://t.co/z6dzLLQMVT",
    "Dates": "2014-01-12",
    "Longitude": 6.72949318966797,
    "Latitude": 9.201708207912295,
    "Sentiment": "neutral"
  },
  {
    "": 415,
    "Unnamed: 0": 415,
    "Tweets": "@HelenBranswell Hard to accept but is it possible some kind of subterranian circulation of the virus? It seems the… https://t.co/hygSyGEiqx",
    "Dates": "2014-01-12",
    "Longitude": 9.667009990822454,
    "Latitude": 10.79601024088324,
    "Sentiment": "neutral"
  },
  {
    "": 416,
    "Unnamed: 0": 416,
    "Tweets": "punts de transmissió o reactivacio. La infecció hi és encara q no la veiem. I les zones és passen infectats de… https://t.co/6YsZOdKDEB",
    "Dates": "2014-01-12",
    "Longitude": -1.1454267975443146,
    "Latitude": 8.572480565346533,
    "Sentiment": "neutral"
  },
  {
    "": 417,
    "Unnamed: 0": 417,
    "Tweets": "Estem davant d' una nova \"cosa\", i dic \"cosa\" pq no se ben bé com qualificar-la. #Ebola ha corregut molt camp, ha i… https://t.co/9o0m0tjNta",
    "Dates": "2014-01-12",
    "Longitude": 7.055901578502757,
    "Latitude": 9.588671593025373,
    "Sentiment": "neutral"
  },
  {
    "": 418,
    "Unnamed: 0": 418,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 12 jan; données datées du 11 jan 2014. ▪︎Deux nouve… https://t.co/YbOIz5QXsg",
    "Dates": "2014-01-12",
    "Longitude": 10.128350958894075,
    "Latitude": 10.113415137771394,
    "Sentiment": "neutral"
  },
  {
    "": 419,
    "Unnamed: 0": 419,
    "Tweets": "Great detailed story on Canadian and German scientists who developed #Ebola vaccine, starting in #Winnipeg at Natio… https://t.co/kumjzY4Zm9",
    "Dates": "2014-01-12",
    "Longitude": -0.11703098620941343,
    "Latitude": 9.261321679781192,
    "Sentiment": "neutral"
  },
  {
    "": 420,
    "Unnamed: 0": 420,
    "Tweets": "@AfricaCDC Epidemiologist and Head of Emergency Preparedness and Response Division, @MerawiA visited facilities and… https://t.co/ej8SY5iXyr",
    "Dates": "2014-01-12",
    "Longitude": 8.390102215756327,
    "Latitude": 9.75021247318705,
    "Sentiment": "neutral"
  },
  {
    "": 421,
    "Unnamed: 0": 421,
    "Tweets": "#deutschland nimmt auf Vorschlag von Herrn #Maas (#spd) #ebola Patienten auf.\n#Migration \n#migranten\n#Asylantrag… https://t.co/qPtbbzhcZS",
    "Dates": "2014-01-12",
    "Longitude": 2.5501484447796106,
    "Latitude": 9.469002146328187,
    "Sentiment": "negative"
  },
  {
    "": 422,
    "Unnamed: 0": 422,
    "Tweets": "2. The second #Ebola case reported Saturday was at Beni, another place that has repeatedly stopped transmission onl… https://t.co/zIa7jCgrdh",
    "Dates": "2014-01-12",
    "Longitude": 1.3304726208941253,
    "Latitude": 10.743569774190751,
    "Sentiment": "positive"
  },
  {
    "": 423,
    "Unnamed: 0": 423,
    "Tweets": "1. More bad news in DRC's #Ebola outbreak. There was a case reported Saturday at Musienene.\nMusienene had gone 131… https://t.co/5zfLCBfkTA",
    "Dates": "2014-01-12",
    "Longitude": -4.432467126149387,
    "Latitude": 7.964076303688188,
    "Sentiment": "neutral"
  },
  {
    "": 424,
    "Unnamed: 0": 424,
    "Tweets": "To improve reporting and analysis of key indicators, @AfricaCDC facilitates training in the use of #SPSS for epidem… https://t.co/sjmlcvczzW",
    "Dates": "2014-01-12",
    "Longitude": 2.8129284258783622,
    "Latitude": 11.326879695580644,
    "Sentiment": "neutral"
  },
  {
    "": 425,
    "Unnamed: 0": 425,
    "Tweets": "Worried by new cases of #Ebola in Mambasa, @AfricaCDC @MinSanteRDC and other partners set up new vaccination rings… https://t.co/HijSpX8LyC",
    "Dates": "2014-01-12",
    "Longitude": -7.246691942154797,
    "Latitude": 10.513691455769255,
    "Sentiment": "positive"
  },
  {
    "": 426,
    "Unnamed: 0": 426,
    "Tweets": "Video: Bringing religions together to prevent #Ebola | @UNICEF #Rwanda https://t.co/RGw2GgDqj6",
    "Dates": "2014-01-12",
    "Longitude": 2.636787051462893,
    "Latitude": 10.755019624708373,
    "Sentiment": "neutral"
  },
  {
    "": 427,
    "Unnamed: 0": 427,
    "Tweets": "Facebook memory... #Ebola #SierraLeone I will never get tired of sharing this. First, it was, is the highlight of m… https://t.co/PLbKJQzAby",
    "Dates": "2014-01-12",
    "Longitude": -0.041815080327219256,
    "Latitude": 10.124462248733927,
    "Sentiment": "neutral"
  },
  {
    "": 428,
    "Unnamed: 0": 428,
    "Tweets": "Quand elle a attaqué @MTamfum sur #Ebola #RDC ,mes doutes sur @luchaRDC étaient tombés\nUne mutation qui a touché à… https://t.co/n9jKQolzBs",
    "Dates": "2014-01-12",
    "Longitude": 5.533303897723233,
    "Latitude": 10.904810933956576,
    "Sentiment": "positive"
  },
  {
    "": 429,
    "Unnamed: 0": 429,
    "Tweets": "The current #Ebola outbreak is the 10th in the DRC. It has killed far fewer people than the decades-long rebel warf… https://t.co/JhpowQ2xHk",
    "Dates": "2014-01-12",
    "Longitude": -7.8196367086528795,
    "Latitude": 11.26106929724355,
    "Sentiment": "positive"
  },
  {
    "": 430,
    "Unnamed: 0": 430,
    "Tweets": "Newly updated #Ebola clinical reference. https://t.co/xo8Iaf7e1x https://t.co/fVutk42FUD",
    "Dates": "2014-01-12",
    "Longitude": 13.018951494455417,
    "Latitude": 10.835040880575775,
    "Sentiment": "negative"
  },
  {
    "": 431,
    "Unnamed: 0": 431,
    "Tweets": "South Sudan: Patient with #Ebola-like symptoms quarantined in Mapel https://t.co/0ZX0j6ASLW",
    "Dates": "2014-01-12",
    "Longitude": 15.240177495669679,
    "Latitude": 9.730379687244232,
    "Sentiment": "neutral"
  },
  {
    "": 432,
    "Unnamed: 0": 432,
    "Tweets": "DRC #Ebola: 2 new cases on January 11, 5 this week, 3,395 total https://t.co/6UzvfWK3he",
    "Dates": "2014-01-12",
    "Longitude": 0.34880911274856974,
    "Latitude": 10.232828289975664,
    "Sentiment": "neutral"
  },
  {
    "": 433,
    "Unnamed: 0": 433,
    "Tweets": "First #Ebola #vaccine approved\nhttps://t.co/4tX9hNcTIK",
    "Dates": "2014-01-12",
    "Longitude": -1.0340810471594644,
    "Latitude": 9.035811564667235,
    "Sentiment": "neutral"
  },
  {
    "": 434,
    "Unnamed: 0": 434,
    "Tweets": "The inside story of how scientists across three continents produced an #Ebola vaccine. https://t.co/2LmJPICSlB",
    "Dates": "2014-01-12",
    "Longitude": 3.5394023902890908,
    "Latitude": 10.330154034764513,
    "Sentiment": "neutral"
  },
  {
    "": 435,
    "Unnamed: 0": 435,
    "Tweets": "#BENI #EBOLA: Après plusieurs semaines sans nouveau cas, 3cas confirmés de la maladie à virus #Ebola enregistrés. P… https://t.co/MPOPu4133p",
    "Dates": "2014-01-12",
    "Longitude": 7.712744360734631,
    "Latitude": 10.216174277284775,
    "Sentiment": "neutral"
  },
  {
    "": 436,
    "Unnamed: 0": 436,
    "Tweets": "#Ebola Trois nouveaux cas confirmés à #Beni. Bibiche Matadi, chargée de surveillance au sein de la riposte appelle… https://t.co/U393y7Yzi8",
    "Dates": "2014-01-12",
    "Longitude": 4.239427765863272,
    "Latitude": 9.43526156703681,
    "Sentiment": "neutral"
  },
  {
    "": 437,
    "Unnamed: 0": 437,
    "Tweets": "Patient with #Ebola-like symptoms quarantined in #Mapel\nhttps://t.co/pS2JT2Fh1A",
    "Dates": "2014-01-12",
    "Longitude": -3.7217230396267027,
    "Latitude": 10.454976595256058,
    "Sentiment": "neutral"
  },
  {
    "": 438,
    "Unnamed: 0": 438,
    "Tweets": "@DjDaboTrabo #Reggaekuruka #shidamarambekse utawala tuned at large loving the show big up #mochamajames… https://t.co/vA2TV4AHYE",
    "Dates": "2014-01-12",
    "Longitude": 7.503025923959959,
    "Latitude": 10.39872983737846,
    "Sentiment": "neutral"
  },
  {
    "": 439,
    "Unnamed: 0": 439,
    "Tweets": "Toujours impressionné par la bravour &amp; le courage des équipes de la communication de risque, mobilisation sociale &amp;… https://t.co/6l6fXRCxVu",
    "Dates": "2014-01-12",
    "Longitude": 7.309989540884619,
    "Latitude": 7.875137584323776,
    "Sentiment": "negative"
  },
  {
    "": 440,
    "Unnamed: 0": 440,
    "Tweets": "#Uganda Local leaders in #Katwe Landing Site in #Kasese District are appealing to the District Health Department an… https://t.co/3wFduIJ3FL",
    "Dates": "2014-01-12",
    "Longitude": 6.268748866747678,
    "Latitude": 8.482038762605594,
    "Sentiment": "neutral"
  },
  {
    "": 441,
    "Unnamed: 0": 441,
    "Tweets": "Also, while the rVSV-ZEBOV vaccine is a #live #virus #vaccine, it is live (and relatively non-harmful) rVSV, NOT LI… https://t.co/XEI70CldX9",
    "Dates": "2014-01-12",
    "Longitude": 3.4324639217250255,
    "Latitude": 10.536559181327236,
    "Sentiment": "neutral"
  },
  {
    "": 442,
    "Unnamed: 0": 442,
    "Tweets": "⁦Le journaliste @EmmanuelFreuden s’est rendu à #Beni pour essayer de comprendre les causes de la méfiance de la pop… https://t.co/OYpLxnOvXQ",
    "Dates": "2014-01-12",
    "Longitude": 7.140711932353467,
    "Latitude": 9.904091749293455,
    "Sentiment": "neutral"
  },
  {
    "": 443,
    "Unnamed: 0": 443,
    "Tweets": "For the record : #Ebola #vaccines #vaccination is NOT mandatory for ANYONE, even those in current outbreak zones. I… https://t.co/PLTJpIoSZ1",
    "Dates": "2014-01-12",
    "Longitude": 0.1004462294747519,
    "Latitude": 11.686665235445222,
    "Sentiment": "neutral"
  },
  {
    "": 444,
    "Unnamed: 0": 444,
    "Tweets": "Jan 11, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,393, of which 3,275 are confirmed an… https://t.co/aqX9G8XTvT",
    "Dates": "2014-01-12",
    "Longitude": 8.321233393422144,
    "Latitude": 9.98399917299872,
    "Sentiment": "neutral"
  },
  {
    "": 445,
    "Unnamed: 0": 445,
    "Tweets": "Notre gouvernement est l'équivalent d'ebola #Ebola\n\nIl faut maintenant savoir l'eradiquer!\n\n#peursurlelac… https://t.co/lAM2xZgj7J",
    "Dates": "2014-01-12",
    "Longitude": 6.804128611176773,
    "Latitude": 11.594511574475549,
    "Sentiment": "negative"
  },
  {
    "": 446,
    "Unnamed: 0": 446,
    "Tweets": "Dear @Twitter there is currently a #disinformation campaign regarding #Ebola vaccinations from anti-vax accounts. H… https://t.co/CW0rTG2VeI",
    "Dates": "2014-01-12",
    "Longitude": 7.238499971680424,
    "Latitude": 10.07431900227793,
    "Sentiment": "neutral"
  },
  {
    "": 447,
    "Unnamed: 0": 447,
    "Tweets": "Oggi ultimo quarto di finale con una sfida \"medica\".\nL'#Immunoterapia, usata nella lotta contro il #cancro vs… https://t.co/ObJPn0flwh",
    "Dates": "2014-01-12",
    "Longitude": 14.802144409918004,
    "Latitude": 10.688480415192512,
    "Sentiment": "positive"
  },
  {
    "": 448,
    "Unnamed: 0": 448,
    "Tweets": "Au quartier Butsili de #Beni #RDC, beaucoup de gens ont maintenant pris conscience de l'importance de se sensibilis… https://t.co/4iMp966Xfc",
    "Dates": "2014-01-12",
    "Longitude": 5.148839760665869,
    "Latitude": 9.111042711983306,
    "Sentiment": "positive"
  },
  {
    "": 449,
    "Unnamed: 0": 449,
    "Tweets": "He was one of eleven people treated for an Ebola infection in the US during the West Africa outbreak in 2014-2016.… https://t.co/pfNB1Vow4f",
    "Dates": "2014-01-12",
    "Longitude": 2.275996942795637,
    "Latitude": 10.573230484956671,
    "Sentiment": "neutral"
  },
  {
    "": 450,
    "Unnamed: 0": 450,
    "Tweets": "@MagickalG @realDonaldTrump @RobertKennedyJr @delbigtree @BusyDrT @BANNEDdotVIDEO @POTUS @NaturalNewsHR @vaxxed2… https://t.co/qgHE6bIzMu",
    "Dates": "2014-01-12",
    "Longitude": -3.3995115181334326,
    "Latitude": 9.645720371580424,
    "Sentiment": "neutral"
  },
  {
    "": 451,
    "Unnamed: 0": 451,
    "Tweets": "@MackayIM @Matthew31987083 @KrutikaKuppalli @rebelfd @EbolaMapAmerica @HelenBranswell @GeopoliticalJD Keep an eye o… https://t.co/JbE226ynnT",
    "Dates": "2014-01-12",
    "Longitude": 9.179526826245269,
    "Latitude": 10.069721234734516,
    "Sentiment": "neutral"
  },
  {
    "": 452,
    "Unnamed: 0": 452,
    "Tweets": "FDA Approves #Ebola #Vaccine For Use And Distribution In United States 275.000 vials shipped to DRC -they need more… https://t.co/2uwPjde1uL",
    "Dates": "2014-01-12",
    "Longitude": 3.866947044168319,
    "Latitude": 9.709292523179773,
    "Sentiment": "neutral"
  },
  {
    "": 453,
    "Unnamed: 0": 453,
    "Tweets": "Rappel. La fin de l'année est passée. #Ebola est toujours là. Et @fatshi13 est de moins en moins rasssurant avec se… https://t.co/qJsEUSJRPx",
    "Dates": "2014-01-11",
    "Longitude": 8.025303702060418,
    "Latitude": 11.622565557481252,
    "Sentiment": "neutral"
  },
  {
    "": 454,
    "Unnamed: 0": 454,
    "Tweets": "Courtesy of @davehodgesCSS “Mixed in with people who nothing more than to come to America for a better life, more i… https://t.co/ZEpp4lzpnA",
    "Dates": "2014-01-11",
    "Longitude": 8.978127964778533,
    "Latitude": 9.887097146523264,
    "Sentiment": "neutral"
  },
  {
    "": 455,
    "Unnamed: 0": 455,
    "Tweets": "This month's #EthicsTalk invites Dr Christy Rentmeester to explain what clinicians should know about #colonialism t… https://t.co/DghcdBAbRp",
    "Dates": "2014-01-11",
    "Longitude": -3.309449544814246,
    "Latitude": 8.193492056430323,
    "Sentiment": "neutral"
  },
  {
    "": 456,
    "Unnamed: 0": 456,
    "Tweets": "@JennRollins1002 Peace must come to the ancient land of #Syria.\n\nThis is not a suggestion to various \"leaders\". It'… https://t.co/wvU8PQgnWT",
    "Dates": "2014-01-11",
    "Longitude": 0.35634687810171695,
    "Latitude": 10.214482181418065,
    "Sentiment": "positive"
  },
  {
    "": 457,
    "Unnamed: 0": 457,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/IarleidAdM",
    "Dates": "2014-01-11",
    "Longitude": -4.247182536251779,
    "Latitude": 10.160734847689826,
    "Sentiment": "neutral"
  },
  {
    "": 458,
    "Unnamed: 0": 458,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 10 janvier 2014 https://t.co/2b5TVb0b5R",
    "Dates": "2014-01-11",
    "Longitude": -5.535577336539108,
    "Latitude": 9.234510163382327,
    "Sentiment": "neutral"
  },
  {
    "": 459,
    "Unnamed: 0": 459,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 11 janvier 2014 https://t.co/63SJjsXxqR",
    "Dates": "2014-01-11",
    "Longitude": 2.1792151666259745,
    "Latitude": 10.4857486653492,
    "Sentiment": "neutral"
  },
  {
    "": 460,
    "Unnamed: 0": 460,
    "Tweets": "#billgates #ebola #vaccines what could possibly go wrong 😖😳😞#population control https://t.co/OcSb83AxvD",
    "Dates": "2014-01-11",
    "Longitude": 0.19111737101652881,
    "Latitude": 10.486678062063007,
    "Sentiment": "neutral"
  },
  {
    "": 461,
    "Unnamed: 0": 461,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/HwmC1PYX0K… https://t.co/AdsRofaLMW",
    "Dates": "2014-01-11",
    "Longitude": 3.4356827144594657,
    "Latitude": 11.338854585787647,
    "Sentiment": "neutral"
  },
  {
    "": 462,
    "Unnamed: 0": 462,
    "Tweets": "@POTUS There is no #vaccine for #EBOLA or #HIV. Straight from the #military.\n@IvankaTrump @FLOTUS @EricTrump… https://t.co/WaT5Em5Jgz",
    "Dates": "2014-01-11",
    "Longitude": -4.441041434632693,
    "Latitude": 9.504084186552264,
    "Sentiment": "neutral"
  },
  {
    "": 463,
    "Unnamed: 0": 463,
    "Tweets": "I am a nurse working for @RESCUEorg in Uganda and I’m on the frontline making sure the country is ready and able t… https://t.co/BwMh4tSlCN",
    "Dates": "2014-01-11",
    "Longitude": 3.221231766678182,
    "Latitude": 10.536025774889309,
    "Sentiment": "neutral"
  },
  {
    "": 464,
    "Unnamed: 0": 464,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 11 jan; données datées du 10 jan 2014. ▪︎Aucun nouv… https://t.co/c4ivKRyUtG",
    "Dates": "2014-01-11",
    "Longitude": 1.8308736591299497,
    "Latitude": 9.672637484417415,
    "Sentiment": "positive"
  },
  {
    "": 465,
    "Unnamed: 0": 465,
    "Tweets": "💊 Vamos a trabajar para asegurar que los nuevos medicamentos y vacunas, desarrollados con la contribución de tantos… https://t.co/vwSZei57il",
    "Dates": "2014-01-11",
    "Longitude": -3.334630802349298,
    "Latitude": 10.625296214562338,
    "Sentiment": "negative"
  },
  {
    "": 466,
    "Unnamed: 0": 466,
    "Tweets": "#EBOLA #AIRBORNE\nhttps://t.co/2x85OmXQpm",
    "Dates": "2014-01-11",
    "Longitude": 6.081017487158016,
    "Latitude": 10.150127906182634,
    "Sentiment": "negative"
  },
  {
    "": 467,
    "Unnamed: 0": 467,
    "Tweets": "@DevilArtemisX I'll look into it. Muchísimas gracias compadre. You have shown me da wey. #Ebola",
    "Dates": "2014-01-11",
    "Longitude": -2.2853155375876693,
    "Latitude": 9.763363879446953,
    "Sentiment": "negative"
  },
  {
    "": 468,
    "Unnamed: 0": 468,
    "Tweets": "Zij #Ebola - wij ook Ebola!\n\nLeve #diversiteit. Leve #Links. Leve #Globalisme *NOT*\n\n#Trump: \"the future belongs no… https://t.co/sOYJTWhFSg",
    "Dates": "2014-01-11",
    "Longitude": 5.217730318651891,
    "Latitude": 10.792957734159584,
    "Sentiment": "neutral"
  },
  {
    "": 469,
    "Unnamed: 0": 469,
    "Tweets": "#Duitsland - de #links'e Heiko Maas v Sociaal-Democraten doet er alles aan om West-Europa nog dichter bij de afgron… https://t.co/IUayzb737B",
    "Dates": "2014-01-11",
    "Longitude": 4.226034990283663,
    "Latitude": 10.854386308994371,
    "Sentiment": "positive"
  },
  {
    "": 470,
    "Unnamed: 0": 470,
    "Tweets": "I was traveling yesterday; posting the Jan. 10 #Ebola update belatedly.\nThere were 0 cases, 0 deaths reported on Th… https://t.co/LVwnssYYaj",
    "Dates": "2014-01-11",
    "Longitude": 6.69604210276422,
    "Latitude": 9.5669629865944,
    "Sentiment": "positive"
  },
  {
    "": 471,
    "Unnamed: 0": 471,
    "Tweets": "@GreyTonka #Ebola #denge oh the possibilities are endless",
    "Dates": "2014-01-11",
    "Longitude": -0.7890654780343889,
    "Latitude": 10.122844386104717,
    "Sentiment": "neutral"
  },
  {
    "": 472,
    "Unnamed: 0": 472,
    "Tweets": "DR Congo Ebola death toll 2,231 to date -- monitoring agency https://t.co/KGZKXW3SwF #ebola #disease #DRCongo https://t.co/x5pHT8JaD3",
    "Dates": "2014-01-11",
    "Longitude": 2.9636195530796545,
    "Latitude": 9.143536216371698,
    "Sentiment": "neutral"
  },
  {
    "": 473,
    "Unnamed: 0": 473,
    "Tweets": "#Ebola, cas suspect au Sud-Soudan, analyses en cours. \nhttps://t.co/gXGnbEZzi3",
    "Dates": "2014-01-11",
    "Longitude": 3.219605179642164,
    "Latitude": 12.819197576706117,
    "Sentiment": "neutral"
  },
  {
    "": 474,
    "Unnamed: 0": 474,
    "Tweets": "#Ebola #DRC. 3392 confirmed and probable cases, reported as of 7 January 2014, including 3274 confirmed and 118 pro… https://t.co/8blpU8odMB",
    "Dates": "2014-01-11",
    "Longitude": -3.537563455321231,
    "Latitude": 9.1280364403626,
    "Sentiment": "neutral"
  },
  {
    "": 475,
    "Unnamed: 0": 475,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 11 janvier 2014 \nhttps://t.co/9x65LsutVQ",
    "Dates": "2014-01-11",
    "Longitude": 3.5551464298515913,
    "Latitude": 10.158635129217831,
    "Sentiment": "neutral"
  },
  {
    "": 476,
    "Unnamed: 0": 476,
    "Tweets": "Suivi de l'#épidémie d' #Ebola en #RDC au 11 janvier 2014 https://t.co/O9qbu7l4np",
    "Dates": "2014-01-11",
    "Longitude": -1.759424343324505,
    "Latitude": 8.6891800407319,
    "Sentiment": "neutral"
  },
  {
    "": 477,
    "Unnamed: 0": 477,
    "Tweets": "#Congo #Ebola crisis: to fight disease, an anthropologist heals distrust https://t.co/K2tnRBbD0b via… https://t.co/JLeTNdV0ft",
    "Dates": "2014-01-11",
    "Longitude": 9.459544801500266,
    "Latitude": 10.990997572406313,
    "Sentiment": "neutral"
  },
  {
    "": 478,
    "Unnamed: 0": 478,
    "Tweets": "DRC #Ebola: CMRE update, January 10 https://t.co/gIwSs9aHDq",
    "Dates": "2014-01-11",
    "Longitude": 3.9722586980986363,
    "Latitude": 9.23645306260646,
    "Sentiment": "neutral"
  },
  {
    "": 479,
    "Unnamed: 0": 479,
    "Tweets": "Good news! The FDA approves the first #Ebola #vaccine for adults. (In the U.S., Ebola infections are rare).… https://t.co/abM11Pp4Ar",
    "Dates": "2014-01-11",
    "Longitude": 8.326984284727661,
    "Latitude": 9.911294347036367,
    "Sentiment": "neutral"
  },
  {
    "": 480,
    "Unnamed: 0": 480,
    "Tweets": "#Ebola #FDA #CDC #CORRUPTION #BigPharma #DrainTheSwamp @realDonaldTrump https://t.co/LbIMwr1D5o",
    "Dates": "2014-01-11",
    "Longitude": -0.23243864330576613,
    "Latitude": 10.073715646195806,
    "Sentiment": "positive"
  },
  {
    "": 481,
    "Unnamed: 0": 481,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 11 Janvier 2014 avec les données collectées jusqu'au 10.01.2014 👇🏾\n\n➡… https://t.co/vohw7swb6m",
    "Dates": "2014-01-11",
    "Longitude": -0.45837934655572266,
    "Latitude": 10.171886525466274,
    "Sentiment": "neutral"
  },
  {
    "": 482,
    "Unnamed: 0": 482,
    "Tweets": "Scientists across three continents produced an #Ebola vaccine via https://t.co/YnLIo3OMaq https://t.co/Lj5EdpvWGb",
    "Dates": "2014-01-11",
    "Longitude": -6.664691338884486,
    "Latitude": 10.55983716609671,
    "Sentiment": "neutral"
  },
  {
    "": 483,
    "Unnamed: 0": 483,
    "Tweets": "FDA has approved #Ervebo manufactured by Merck, it's the 1st vaccine for prevention of #Ebola Virus Disease (EVD)\n#DRCongo",
    "Dates": "2014-01-11",
    "Longitude": 2.297565854898331,
    "Latitude": 9.011544533933026,
    "Sentiment": "positive"
  },
  {
    "": 484,
    "Unnamed: 0": 484,
    "Tweets": "What were the biggest #outbreaks of 2019? From #Ebola to #dengue, we review the outbreaks of 2019 and the impacts t… https://t.co/afzjDLOZOk",
    "Dates": "2014-01-11",
    "Longitude": 6.174673703524034,
    "Latitude": 8.653735695888567,
    "Sentiment": "positive"
  },
  {
    "": 485,
    "Unnamed: 0": 485,
    "Tweets": "@bazoobond Let another one out on #DAY_RELEASE ??? #SCARE_IN_THE_COMMUNITY....#FBPE is more debilitating than… https://t.co/A2ElzeEQWK",
    "Dates": "2014-01-11",
    "Longitude": 10.09006501096329,
    "Latitude": 10.237601265371357,
    "Sentiment": "positive"
  },
  {
    "": 486,
    "Unnamed: 0": 486,
    "Tweets": "New #Ebola preprint: Potential Test-Negative Case-Control Study Bias in Outbreak Settings: Application to Ebola vac… https://t.co/aypsLhPeT9",
    "Dates": "2014-01-11",
    "Longitude": 7.407339321743659,
    "Latitude": 11.78232726176736,
    "Sentiment": "neutral"
  },
  {
    "": 487,
    "Unnamed: 0": 487,
    "Tweets": "Jan 10, 2014 #Ebola @MinSanteRDC \n•Since start of epidemic, cumulative cases 3,393: 3,275 confirmed 118 probable.… https://t.co/UJNqx82M8m",
    "Dates": "2014-01-11",
    "Longitude": 2.2008806553609435,
    "Latitude": 11.17420370555811,
    "Sentiment": "positive"
  },
  {
    "": 488,
    "Unnamed: 0": 488,
    "Tweets": "I encourage you to read this story about the vital role of logisticians in the #Ebola response in #DRC. I thank all… https://t.co/Vel8DuXFde",
    "Dates": "2014-01-11",
    "Longitude": 0.7328663201873828,
    "Latitude": 9.220962716279347,
    "Sentiment": "positive"
  },
  {
    "": 489,
    "Unnamed: 0": 489,
    "Tweets": "#Ebola #EbolaDRC #EBOV in the DRC: 480 suspected/3393 total confirmed &amp; probable cases (118 probable/3275 confirmed… https://t.co/Kpmx3nop1C",
    "Dates": "2014-01-11",
    "Longitude": 3.5931646668295047,
    "Latitude": 10.656694263077105,
    "Sentiment": "neutral"
  },
  {
    "": 490,
    "Unnamed: 0": 490,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 10 janvier 2014 \nhttps://t.co/8edn9Iebcz",
    "Dates": "2014-01-11",
    "Longitude": -0.009028690589794941,
    "Latitude": 9.501219756151787,
    "Sentiment": "neutral"
  },
  {
    "": 491,
    "Unnamed: 0": 491,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 10 janvier 2014 https://t.co/NxTucAxPGU",
    "Dates": "2014-01-11",
    "Longitude": -0.39342254475026905,
    "Latitude": 9.083928675472313,
    "Sentiment": "negative"
  },
  {
    "": 492,
    "Unnamed: 0": 492,
    "Tweets": "While the world is focused on #Ebola due to its threat for the western world, three times as many number of people… https://t.co/c6L7MQWwk4",
    "Dates": "2014-01-11",
    "Longitude": 1.8909560125420093,
    "Latitude": 9.985517472273486,
    "Sentiment": "negative"
  },
  {
    "": 493,
    "Unnamed: 0": 493,
    "Tweets": "The Virgin Fake Omari Vs The Chad Me\n#BattleMemesByOmari #FAX #SDBH #Oxygen #Nigga #DragonBall #Swag #Virgin #Chad… https://t.co/fLvJ4Uv2At",
    "Dates": "2014-01-11",
    "Longitude": 1.4554672335028167,
    "Latitude": 10.958656138082981,
    "Sentiment": "neutral"
  },
  {
    "": 494,
    "Unnamed: 0": 494,
    "Tweets": "This week, there were two new #Ebola cases in #Beni,  #DRC. It had been 29 days since the last confirmed case in th… https://t.co/LThwKX58Gf",
    "Dates": "2014-01-11",
    "Longitude": 13.39738037679491,
    "Latitude": 8.617071123531696,
    "Sentiment": "neutral"
  },
  {
    "": 495,
    "Unnamed: 0": 495,
    "Tweets": "#Ebola10_RDC Situation épidémiologique du 10 Janvier 2014 avec les données collectées jusqu'au 09.01.2014 👇🏾\n\n➡… https://t.co/urrs0otGoL",
    "Dates": "2014-01-11",
    "Longitude": 8.611092047078298,
    "Latitude": 10.630189066445588,
    "Sentiment": "neutral"
  },
  {
    "": 496,
    "Unnamed: 0": 496,
    "Tweets": "Un equipo de operaciones y logística de la OMS compuesto por 40 personas trabaja \"casi sin parar\" en la entrega dia… https://t.co/bxKNJqvtvr",
    "Dates": "2014-01-11",
    "Longitude": 7.776099914160464,
    "Latitude": 11.109845450252884,
    "Sentiment": "neutral"
  },
  {
    "": 497,
    "Unnamed: 0": 497,
    "Tweets": "El relato de todos los eventos, algunos fortuitos, que condujeron al desarrollo de la #vacuna frente al #Ebola.  https://t.co/oaLZYBisnM",
    "Dates": "2014-01-11",
    "Longitude": 13.360032782486352,
    "Latitude": 10.432497092756066,
    "Sentiment": "neutral"
  },
  {
    "": 498,
    "Unnamed: 0": 498,
    "Tweets": "Medscape: Newly updated #Ebola clinical tool. https://t.co/euXPP6mtgq https://t.co/dk8dev7p7r https://t.co/Whx6bSQ2zT",
    "Dates": "2014-01-11",
    "Longitude": 12.313806822802048,
    "Latitude": 8.70539092667238,
    "Sentiment": "positive"
  },
  {
    "": 499,
    "Unnamed: 0": 499,
    "Tweets": "Stanno facendo di tutto per fare arrivare l'#ebola. https://t.co/ASq9Sa5wKj",
    "Dates": "2014-01-11",
    "Longitude": -1.197106188663951,
    "Latitude": 10.50395371478378,
    "Sentiment": "positive"
  },
  {
    "": 500,
    "Unnamed: 0": 500,
    "Tweets": "United States - Confirmed #Ebola Patient Dies Today - https://t.co/bgqXpocA7D via @NewsAlternative",
    "Dates": "2014-01-11",
    "Longitude": 9.175392322594782,
    "Latitude": 11.559163620717651,
    "Sentiment": "neutral"
  },
  {
    "": 501,
    "Unnamed: 0": 501,
    "Tweets": "Dear @WHO: Call a Pub Hlth Emergency of Intl Concern meeting #WuhanSARS\n✓Novel respiratory pathogen\n✓ A dead person… https://t.co/UBeKBzp0Wp",
    "Dates": "2014-01-11",
    "Longitude": -2.4099920758651328,
    "Latitude": 9.397258481298262,
    "Sentiment": "neutral"
  },
  {
    "": 502,
    "Unnamed: 0": 502,
    "Tweets": "🖋En République démocratique du #Congo le virus #Ebola a fait 2000 morts en décembre 2019.\nEntre l'#Ébola et la roug… https://t.co/vIe4eA4JuO",
    "Dates": "2014-01-11",
    "Longitude": 4.801060553761492,
    "Latitude": 10.802638683624263,
    "Sentiment": "positive"
  },
  {
    "": 503,
    "Unnamed: 0": 503,
    "Tweets": "#BattleMemesByOmari #DragonBall #CellsNightmare #Gohan #GohanIsEvil #DragonBallTwitter #ComingSoon… https://t.co/u1ki5C2dga",
    "Dates": "2014-01-11",
    "Longitude": 16.55867528115767,
    "Latitude": 8.71531930429906,
    "Sentiment": "negative"
  },
  {
    "": 504,
    "Unnamed: 0": 504,
    "Tweets": "Together, we are making a difference in the fight against #Ebola in the #DRC. \n\nSince the beginning of the outbreak… https://t.co/oBt5SvgiRF",
    "Dates": "2014-01-11",
    "Longitude": 5.010196761313262,
    "Latitude": 8.610632692759609,
    "Sentiment": "positive"
  },
  {
    "": 505,
    "Unnamed: 0": 505,
    "Tweets": "@Murky__Meg #Ebola",
    "Dates": "2014-01-11",
    "Longitude": -13.719805808198627,
    "Latitude": 10.210682398181401,
    "Sentiment": "neutral"
  },
  {
    "": 506,
    "Unnamed: 0": 506,
    "Tweets": "Because the #Ebola outbreak wasn't enough for the people in #DRC. \n\nThank goodness for #vaccines to help prevent th… https://t.co/6vlECUOp2K",
    "Dates": "2014-01-11",
    "Longitude": 10.934247758286334,
    "Latitude": 11.465495660940768,
    "Sentiment": "neutral"
  },
  {
    "": 507,
    "Unnamed: 0": 507,
    "Tweets": "#RDC: Epidémie #Ebola, le cumul des cas est de 3.393, dont 3.275 confirmés et 118 probables. Au total, il y a eu 2.… https://t.co/BOttrwZK3K",
    "Dates": "2014-01-11",
    "Longitude": 8.177035772513092,
    "Latitude": 11.268003756380157,
    "Sentiment": "neutral"
  },
  {
    "": 508,
    "Unnamed: 0": 508,
    "Tweets": "Health leader in #ebola fight discusses what's being done to stamp out the virus https://t.co/74Mnx79QcD",
    "Dates": "2014-01-11",
    "Longitude": 0.026909493380492755,
    "Latitude": 11.359795483361387,
    "Sentiment": "neutral"
  },
  {
    "": 509,
    "Unnamed: 0": 509,
    "Tweets": "ISOLATED! https://t.co/EuPzOgfEFf #ebola",
    "Dates": "2014-01-11",
    "Longitude": 1.880412939507194,
    "Latitude": 9.133614391332527,
    "Sentiment": "neutral"
  },
  {
    "": 510,
    "Unnamed: 0": 510,
    "Tweets": "Against all odds’: The inside story of how scientists across three continents produced an #Ebola #vaccine… https://t.co/RQU6SZ7NmW",
    "Dates": "2014-01-11",
    "Longitude": 0.7706948273303555,
    "Latitude": 10.760752834315612,
    "Sentiment": "neutral"
  },
  {
    "": 511,
    "Unnamed: 0": 511,
    "Tweets": "When the flying frugivores are unsettled by human activities leading to #deforestation, their habitats expand, inc… https://t.co/VaN0cu0wvf",
    "Dates": "2014-01-11",
    "Longitude": 6.480442739507765,
    "Latitude": 9.852411237288576,
    "Sentiment": "positive"
  },
  {
    "": 512,
    "Unnamed: 0": 512,
    "Tweets": "#Ebola was discovered in 1976 when simultaneous outbreaks occurred in the former Zaire and Sudan. Later determined… https://t.co/OSaRsh75RF",
    "Dates": "2014-01-11",
    "Longitude": 2.114966481858713,
    "Latitude": 11.823803829287709,
    "Sentiment": "positive"
  },
  {
    "": 513,
    "Unnamed: 0": 513,
    "Tweets": "What Ebola has taught us about human cooperation https://t.co/cqFXzLEO3B #ebola",
    "Dates": "2014-01-11",
    "Longitude": 10.523327382334173,
    "Latitude": 10.617694342587946,
    "Sentiment": "neutral"
  },
  {
    "": 514,
    "Unnamed: 0": 514,
    "Tweets": "#phep #globalhealth #Ebola #Vaccine https://t.co/MGg1dlg2iw",
    "Dates": "2014-01-10",
    "Longitude": 7.171603221728965,
    "Latitude": 10.641683939907818,
    "Sentiment": "neutral"
  },
  {
    "": 515,
    "Unnamed: 0": 515,
    "Tweets": "These are some of the key people who worked on the #Ebola vaccine. https://t.co/IyKgiyNNhI",
    "Dates": "2014-01-10",
    "Longitude": 7.49860529640635,
    "Latitude": 9.31211844484211,
    "Sentiment": "neutral"
  },
  {
    "": 516,
    "Unnamed: 0": 516,
    "Tweets": "#Béni. Things promised, things due. Tents &amp; matress brought to community Leaders and the Chief. @jimmykighoma @WHO… https://t.co/jdXEp9Jkp3",
    "Dates": "2014-01-10",
    "Longitude": 8.812572719830428,
    "Latitude": 11.382338843205595,
    "Sentiment": "neutral"
  },
  {
    "": 517,
    "Unnamed: 0": 517,
    "Tweets": "#Wegaanzehalen \n\n#Ebola is goed voor de omvolking! De #EU boten zijn weer onderweg om via de vertrouwde mensen-smok… https://t.co/85Mcn8f0Wk",
    "Dates": "2014-01-10",
    "Longitude": 3.044770759252318,
    "Latitude": 10.34048320435508,
    "Sentiment": "neutral"
  },
  {
    "": 518,
    "Unnamed: 0": 518,
    "Tweets": "Just watched the #93DAYS #NetFlix movie about the #Ebola outbreak in Nigeria which included Dr Ameyo Adadevoh's… https://t.co/nUOX65qfug",
    "Dates": "2014-01-10",
    "Longitude": 12.385446925812685,
    "Latitude": 10.02728808810158,
    "Sentiment": "neutral"
  },
  {
    "": 519,
    "Unnamed: 0": 519,
    "Tweets": "Sad to say goodbye to Dr Jordana who was with us for her PhD and first PRDA. Did great work on #ebola proteins and… https://t.co/LUliA95Kdj",
    "Dates": "2014-01-10",
    "Longitude": 6.96126200490006,
    "Latitude": 8.96985582490539,
    "Sentiment": "neutral"
  },
  {
    "": 520,
    "Unnamed: 0": 520,
    "Tweets": "NEWS SCAN: #Ebola case in DRC; #MERS illness, antiviral treatment; #Polio in 3 countries; Gaza #measles outbreak https://t.co/5WAWMvKVgh",
    "Dates": "2014-01-10",
    "Longitude": 9.271652518494864,
    "Latitude": 8.314236537700864,
    "Sentiment": "positive"
  },
  {
    "": 521,
    "Unnamed: 0": 521,
    "Tweets": "A long but fascinating read on Merck's Ebola vaccine. #ebolavaccine #Ebola\n#globalhealth \n‘Against all odds’: The i… https://t.co/C1Ej3o0hgb",
    "Dates": "2014-01-10",
    "Longitude": 0.10884745321040423,
    "Latitude": 8.956441831270558,
    "Sentiment": "positive"
  },
  {
    "": 522,
    "Unnamed: 0": 522,
    "Tweets": "What #Ebola has taught us about #HumanCooperation https://t.co/VDbrlBarwz via @wef  A new vaccine against Ebola is… https://t.co/kFBAGt94PJ",
    "Dates": "2014-01-10",
    "Longitude": 3.727757248186551,
    "Latitude": 10.605030077594,
    "Sentiment": "neutral"
  },
  {
    "": 523,
    "Unnamed: 0": 523,
    "Tweets": "#vaccination contre #Ebola en #RDC https://t.co/LYrP1VIMii",
    "Dates": "2014-01-10",
    "Longitude": 6.405322912371814,
    "Latitude": 8.79135888348008,
    "Sentiment": "neutral"
  },
  {
    "": 524,
    "Unnamed: 0": 524,
    "Tweets": "Cumul des cas d '#Ebola en #RDC au 9 janvier 2014 https://t.co/lQOPPbxTXR",
    "Dates": "2014-01-10",
    "Longitude": 1.8644969207863462,
    "Latitude": 9.889875252098316,
    "Sentiment": "neutral"
  },
  {
    "": 525,
    "Unnamed: 0": 525,
    "Tweets": "Suivi de l '#épidémie d' #Ebola en #RDC au 10 janvier 2014 https://t.co/IPgWBihcX0",
    "Dates": "2014-01-10",
    "Longitude": 2.6568797029761635,
    "Latitude": 9.272865129933162,
    "Sentiment": "neutral"
  },
  {
    "": 526,
    "Unnamed: 0": 526,
    "Tweets": "“This vaccine … from the beginning to the end — it should have never happened. On so many levels … against all odds… https://t.co/4eDd7JPaTl",
    "Dates": "2014-01-10",
    "Longitude": 18.877977105350254,
    "Latitude": 9.368016414816616,
    "Sentiment": "positive"
  },
  {
    "": 527,
    "Unnamed: 0": 527,
    "Tweets": "https://t.co/DNB1WfT5be: A Link Between the #Ebola Outbreak and a US Bioweapons Lab? https://t.co/k33ybK8ew8",
    "Dates": "2014-01-10",
    "Longitude": 3.4715393606549743,
    "Latitude": 13.863884837297135,
    "Sentiment": "positive"
  },
  {
    "": 528,
    "Unnamed: 0": 528,
    "Tweets": "Petition · We Demand a Stop to the #Ebola Bio-terrorism and #Genocide in West #Africa · https://t.co/mVEkoUvfqt https://t.co/t4BtGGPWqW",
    "Dates": "2014-01-10",
    "Longitude": -5.326429639424591,
    "Latitude": 10.94233901554478,
    "Sentiment": "negative"
  },
  {
    "": 529,
    "Unnamed: 0": 529,
    "Tweets": "#Ebola \n\n✅La actual epidemia en el Congo inició en agosto de 2018\n✅Para noviembre, la OMS catalogaba oficialmente a… https://t.co/yLUAElbWNP",
    "Dates": "2014-01-10",
    "Longitude": 3.521299793771195,
    "Latitude": 10.207938858561151,
    "Sentiment": "positive"
  },
  {
    "": 530,
    "Unnamed: 0": 530,
    "Tweets": "Mise à jour #Ebola #RDC (provinces d'Ituri, N Kivu &amp; S Kivu) au 10 jan; données datées du 09 jan 2014. Un nouveau c… https://t.co/HMjn1fELJb",
    "Dates": "2014-01-10",
    "Longitude": -4.14852325792846,
    "Latitude": 9.86614467764959,
    "Sentiment": "positive"
  },
  {
    "": 531,
    "Unnamed: 0": 531,
    "Tweets": "@CDCFlu explain how this is even something to be worried about in America? Funny, how the #Ebola #Vaccine just got… https://t.co/mcg2cEC4B7",
    "Dates": "2014-01-10",
    "Longitude": 2.0631560439285406,
    "Latitude": 10.828241582917473,
    "Sentiment": "neutral"
  },
  {
    "": 532,
    "Unnamed: 0": 532,
    "Tweets": "@mazzenilsson Gates and Soros #Ebola",
    "Dates": "2014-01-10",
    "Longitude": 1.7072917561171326,
    "Latitude": 9.926946004823206,
    "Sentiment": "neutral"
  },
  {
    "": 533,
    "Unnamed: 0": 533,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/dvs44fa85L… https://t.co/hE5BwPVrfY",
    "Dates": "2014-01-10",
    "Longitude": 0.49427478198262653,
    "Latitude": 9.94708664650888,
    "Sentiment": "positive"
  },
  {
    "": 534,
    "Unnamed: 0": 534,
    "Tweets": "What will it take to finally end Congo's #ebola outbreak in 2014? Variety in expert responses reflects the complexi… https://t.co/ezWgl6Mvlu",
    "Dates": "2014-01-10",
    "Longitude": 8.072492585374388,
    "Latitude": 9.7914685661808,
    "Sentiment": "positive"
  },
  {
    "": 535,
    "Unnamed: 0": 535,
    "Tweets": "Highlight this week: Ebola Session @CENDUCBerkeley symposium today\n\nGreat overview by Dr. Heinz Feldmann of Ebolavi… https://t.co/1dxs3mJNVb",
    "Dates": "2014-01-10",
    "Longitude": -0.37110757934340555,
    "Latitude": 10.608986235054914,
    "Sentiment": "neutral"
  },
  {
    "": 536,
    "Unnamed: 0": 536,
    "Tweets": "Intriguing thread by @amymaxmen adding questions about privilege to @EmmanuelFreuden's interesting reporting on iss… https://t.co/ijFyq8uCmM",
    "Dates": "2014-01-10",
    "Longitude": 6.450543899750798,
    "Latitude": 8.522531140157069,
    "Sentiment": "positive"
  },
  {
    "": 537,
    "Unnamed: 0": 537,
    "Tweets": "We're so glad an #Ebola vaccine is moving forward! Great news from the Food and Drug Administration last week.… https://t.co/wUADrOA2Lo",
    "Dates": "2014-01-10",
    "Longitude": 12.561414011975321,
    "Latitude": 9.703312099386222,
    "Sentiment": "neutral"
  },
  {
    "": 538,
    "Unnamed: 0": 538,
    "Tweets": "@ECDC_EU CDTR, 5-11 January 2014, week 2 https://t.co/CmSWjUnFIp #Ebola #MERS #measles #flu #polio #WuhanPneumonia",
    "Dates": "2014-01-10",
    "Longitude": -5.568272416547858,
    "Latitude": 8.353241607771766,
    "Sentiment": "negative"
  },
  {
    "": 539,
    "Unnamed: 0": 539,
    "Tweets": "GRACE makes the cover of Gorilla Journal for December 2019! Read all about our #perseverance despite the… https://t.co/PJwRvaALIJ",
    "Dates": "2014-01-10",
    "Longitude": 2.20616149054911,
    "Latitude": 9.297503817668558,
    "Sentiment": "positive"
  },
  {
    "": 540,
    "Unnamed: 0": 540,
    "Tweets": "MMWR: Cross-border movement during the DRC #Ebola outbreak https://t.co/U6BybEM0DL",
    "Dates": "2014-01-10",
    "Longitude": 11.312572081152279,
    "Latitude": 10.085970399353089,
    "Sentiment": "neutral"
  },
  {
    "": 541,
    "Unnamed: 0": 541,
    "Tweets": "The remarkable story of how #scientists produced an #Ebola vaccine is a must-read article for everyone involved in… https://t.co/QGii9j3iY1",
    "Dates": "2014-01-10",
    "Longitude": 10.594919773960385,
    "Latitude": 10.6805076847117,
    "Sentiment": "neutral"
  },
  {
    "": 542,
    "Unnamed: 0": 542,
    "Tweets": "How can #aidworkers who had contact with #Ebola patients in #Africa be brought back to #Germany safely? The German… https://t.co/5bBha4mnwQ",
    "Dates": "2014-01-10",
    "Longitude": 5.103330955815926,
    "Latitude": 9.166297784752341,
    "Sentiment": "positive"
  },
  {
    "": 543,
    "Unnamed: 0": 543,
    "Tweets": "ARE YOU KIDDING ME?! Step 1: Drug Approval. (Dec 2019) Step 2: Incite hysteria. (See image) Step 3: Push new LIVE V… https://t.co/NpysdaRAAO",
    "Dates": "2014-01-10",
    "Longitude": -4.88297710346936,
    "Latitude": 8.204785571675252,
    "Sentiment": "neutral"
  },
  {
    "": 544,
    "Unnamed: 0": 544,
    "Tweets": "At a talk on the Ervebo #Ebola vaccine by Heinz Feldmann. He says, \"Maybe we can dilute it ten times, maybe one hundred times.\" 🤷‍♂️",
    "Dates": "2014-01-10",
    "Longitude": -1.4010462983159861,
    "Latitude": 9.360081466228534,
    "Sentiment": "positive"
  },
  {
    "": 545,
    "Unnamed: 0": 545,
    "Tweets": "An #Ebola patient treated in the U.S. chose to remain anonymous. Now he’s telling his story. https://t.co/emX8uYiGxj via @washingtonpost",
    "Dates": "2014-01-10",
    "Longitude": 0.8844830047131067,
    "Latitude": 10.423475677754091,
    "Sentiment": "neutral"
  },
  {
    "": 546,
    "Unnamed: 0": 546,
    "Tweets": "On parle beaucoup plus d'#EBOLA mais l'épidémie de la #Rougeole qui sévit actuellement en #RDC est de loin plus meu… https://t.co/ureAoPfulu",
    "Dates": "2014-01-10",
    "Longitude": 1.6814106198190886,
    "Latitude": 11.531100752078096,
    "Sentiment": "neutral"
  },
  {
    "": 547,
    "Unnamed: 0": 547,
    "Tweets": "#TagMeinstead #WhyThatFaker #PlzSomeoneBeMyFanCuzImLonely #FakeOmariSucks #Nigga #BOI #FanDumb… https://t.co/E234AIkwZs",
    "Dates": "2014-01-10",
    "Longitude": 13.532622422744806,
    "Latitude": 10.079484404397284,
    "Sentiment": "neutral"
  },
  {
    "": 548,
    "Unnamed: 0": 548,
    "Tweets": "If #Ebola had not crossed into Europe &amp; USA in 2014-16 outbreak, would wealthy countries care as much about control… https://t.co/Q0nY78eG10",
    "Dates": "2014-01-10",
    "Longitude": 0.5427667368868545,
    "Latitude": 10.2021750803244,
    "Sentiment": "neutral"
  },
  {
    "": 549,
    "Unnamed: 0": 549,
    "Tweets": "Cas suspects d'#Ebola en #RDC                           https://t.co/iQcMcdqkSN",
    "Dates": "2014-01-10",
    "Longitude": 5.4499302659859605,
    "Latitude": 10.520706301813073,
    "Sentiment": "positive"
  },
  {
    "": 550,
    "Unnamed: 0": 550,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/7FIVoeSYzV… https://t.co/ZLy5H2dNIo",
    "Dates": "2014-01-10",
    "Longitude": 2.31873978032862,
    "Latitude": 10.329382835773993,
    "Sentiment": "neutral"
  },
  {
    "": 551,
    "Unnamed: 0": 551,
    "Tweets": "#Research #Vaccine- How Animal research models contributed to the discovery and development of vaccine to fight and… https://t.co/zbBi4XqDuN",
    "Dates": "2014-01-10",
    "Longitude": 12.987194943435961,
    "Latitude": 10.880543781931125,
    "Sentiment": "negative"
  },
  {
    "": 552,
    "Unnamed: 0": 552,
    "Tweets": "Interesting dispatch @EmmanuelFreuden, where he gets the #Ebola vax, which should be reserved for people who qualif… https://t.co/UEA5eRqoL5",
    "Dates": "2014-01-10",
    "Longitude": 8.711612208362197,
    "Latitude": 10.51752940130627,
    "Sentiment": "neutral"
  },
  {
    "": 553,
    "Unnamed: 0": 553,
    "Tweets": "DRC #Ebola: CMRE update, January 9 https://t.co/GSFlwGygGO",
    "Dates": "2014-01-10",
    "Longitude": 6.257107649755596,
    "Latitude": 8.783828626175918,
    "Sentiment": "positive"
  },
  {
    "": 554,
    "Unnamed: 0": 554,
    "Tweets": "'Against all odds’: The inside story of how scientists across three continents produced an #Ebola vaccine.… https://t.co/VIikUUWVpJ",
    "Dates": "2014-01-10",
    "Longitude": 0.7734216934094551,
    "Latitude": 9.657628157472892,
    "Sentiment": "neutral"
  },
  {
    "": 555,
    "Unnamed: 0": 555,
    "Tweets": "What Will It Take To Finally End Congo's Ebola Outbreak In 2014? https://t.co/oac5ih7RF1 '..an outbreak that has pr… https://t.co/b7bQ3GttW3",
    "Dates": "2014-01-10",
    "Longitude": -2.051523628469597,
    "Latitude": 8.964439532496797,
    "Sentiment": "neutral"
  },
  {
    "": 556,
    "Unnamed: 0": 556,
    "Tweets": "This is an incredible article. Poor health often is a social issue #poverty #inequality #gender #education #access… https://t.co/YSxK4ZplMH",
    "Dates": "2014-01-10",
    "Longitude": -8.632641452985307,
    "Latitude": 9.403030045689519,
    "Sentiment": "positive"
  },
  {
    "": 557,
    "Unnamed: 0": 557,
    "Tweets": "WHO: #Ebola virus disease – Democratic Republic of the Congo https://t.co/Sr1XlHHqFJ",
    "Dates": "2014-01-10",
    "Longitude": 2.657587185824763,
    "Latitude": 9.753835366537151,
    "Sentiment": "neutral"
  },
  {
    "": 558,
    "Unnamed: 0": 558,
    "Tweets": "A concern for the global healthcare community. #Ebola #globalhealth #infectioncontrol\n\nhttps://t.co/8RoENYaead",
    "Dates": "2014-01-10",
    "Longitude": 8.780557701546588,
    "Latitude": 10.781001695793373,
    "Sentiment": "neutral"
  },
  {
    "": 559,
    "Unnamed: 0": 559,
    "Tweets": "Android 17 (DBS) Meets Up With Vegeta (GT) for the first time \n\n#BattleMemesByOmari #Niggadick #Bruh #StepSister… https://t.co/Lk3DkbCsYY",
    "Dates": "2014-01-10",
    "Longitude": 1.3665841658957167,
    "Latitude": 10.149804889716336,
    "Sentiment": "neutral"
  },
  {
    "": 560,
    "Unnamed: 0": 560,
    "Tweets": "Incredible piece from @HelenBranswell of @statnews on the improbable journey of @Merck's #Ebola #vaccine from Canad… https://t.co/Bkmz0V2EdZ",
    "Dates": "2014-01-10",
    "Longitude": -0.42342713666420373,
    "Latitude": 9.11083123386512,
    "Sentiment": "neutral"
  },
  {
    "": 561,
    "Unnamed: 0": 561,
    "Tweets": "Experts Disagree About Need For More Armed Guards To Help End #DRCongo’s #Ebola Outbreak - not more vs. less; it's… https://t.co/srNyQjMW0s",
    "Dates": "2014-01-10",
    "Longitude": 1.555024015155397,
    "Latitude": 9.839179648872914,
    "Sentiment": "positive"
  },
  {
    "": 562,
    "Unnamed: 0": 562,
    "Tweets": "The January Global Health Bulletin from @Collinson is out now and well worth a read. #globalhealth #travel… https://t.co/X8Fwun6x5O",
    "Dates": "2014-01-10",
    "Longitude": 0.9395929437544903,
    "Latitude": 9.764927273734042,
    "Sentiment": "positive"
  },
  {
    "": 563,
    "Unnamed: 0": 563,
    "Tweets": "The complex logistics of #Ebola response  https://t.co/mRzaad7W60",
    "Dates": "2014-01-10",
    "Longitude": -2.660239725808786,
    "Latitude": 9.475023554618561,
    "Sentiment": "positive"
  },
  {
    "": 564,
    "Unnamed: 0": 564,
    "Tweets": "‘Never let a crisis go to waste’: post-Ebola agenda-setting for health system strengthening in Guinea, research in… https://t.co/KlOxickw81",
    "Dates": "2014-01-10",
    "Longitude": -1.4778448208333188,
    "Latitude": 8.816696960003465,
    "Sentiment": "negative"
  },
  {
    "": 565,
    "Unnamed: 0": 565,
    "Tweets": "Here we go! Ebola “outbreak” 2014 the vaccine is now available Main stream will be fear mongering everyone into get… https://t.co/8ErSZSwrCe",
    "Dates": "2014-01-10",
    "Longitude": 9.77058703790428,
    "Latitude": 9.267948519815109,
    "Sentiment": "neutral"
  },
  {
    "": 566,
    "Unnamed: 0": 566,
    "Tweets": "Anthropologist Julienne Anoko has gone to great lengths to improve relationships between communities affected by… https://t.co/QA94o1z5sH",
    "Dates": "2014-01-10",
    "Longitude": 9.614704494246444,
    "Latitude": 10.65626670868091,
    "Sentiment": "neutral"
  },
  {
    "": 567,
    "Unnamed: 0": 567,
    "Tweets": "Entre las actuaciones llevadas a cabo en @GVAsalualicante en respuesta al brote de #ébola de 2014-15, el S.º de… https://t.co/FJkhGc0yuO",
    "Dates": "2014-01-10",
    "Longitude": 8.533316942833679,
    "Latitude": 10.29821561341361,
    "Sentiment": "neutral"
  },
  {
    "": 568,
    "Unnamed: 0": 568,
    "Tweets": "A U.K.-based vaccines company has raised $11 million from Singapore-based venture capital group to work on preventi… https://t.co/u7MgBAswH8",
    "Dates": "2014-01-10",
    "Longitude": 0.3287682259555851,
    "Latitude": 9.98839845717092,
    "Sentiment": "neutral"
  },
  {
    "": 569,
    "Unnamed: 0": 569,
    "Tweets": "In case you still think measles is not a deadly disease...\n\n6,000 Dead From #Measles Outbreak In Congo via @WHO \n\nM… https://t.co/hmWxafQ499",
    "Dates": "2014-01-10",
    "Longitude": 2.363041235430945,
    "Latitude": 11.01073868597852,
    "Sentiment": "neutral"
  },
  {
    "": 570,
    "Unnamed: 0": 570,
    "Tweets": "As @AfricaCDC we’ve made a significant contribution to controlling the #Ebola outbreak in #DRC. More needs to be do… https://t.co/PiSmQ6Gi5F",
    "Dates": "2014-01-10",
    "Longitude": 1.5735874943758033,
    "Latitude": 8.637761543898115,
    "Sentiment": "neutral"
  },
  {
    "": 571,
    "Unnamed: 0": 571,
    "Tweets": "Can Big Data help to fight #Ebola? https://t.co/VdB8orOyHL",
    "Dates": "2014-01-10",
    "Longitude": 12.161575544184359,
    "Latitude": 8.600911202473226,
    "Sentiment": "neutral"
  },
  {
    "": 572,
    "Unnamed: 0": 572,
    "Tweets": "It looks like the last day with zero reported new #Ebola cases in #DRCongo was the 13 December 2019 report on cases… https://t.co/iguDvvWj2P",
    "Dates": "2014-01-10",
    "Longitude": 8.3879194941786,
    "Latitude": 11.450815175234853,
    "Sentiment": "neutral"
  },
  {
    "": 573,
    "Unnamed: 0": 573,
    "Tweets": "An Ebola patient treated in the U.S. chose to remain anonymous. Now he's telling his story. https://t.co/S9ciiedsCs… https://t.co/pR05CrTFKD",
    "Dates": "2014-01-10",
    "Longitude": -0.3499768592546646,
    "Latitude": 9.530723711138272,
    "Sentiment": "neutral"
  },
  {
    "": 574,
    "Unnamed: 0": 574,
    "Tweets": "#Ebola: Virus whose very name strikes fear in every nation on earth:  https://t.co/5KaD5Pvvwk",
    "Dates": "2014-01-10",
    "Longitude": 3.017104682853639,
    "Latitude": 11.657825824160275,
    "Sentiment": "positive"
  },
  {
    "": 575,
    "Unnamed: 0": 575,
    "Tweets": "Council also received a briefing on efforts being deployed by the Africa Centres for Disease Control and Prevention… https://t.co/LrJpGCXKyf",
    "Dates": "2014-01-10",
    "Longitude": 5.409141278020712,
    "Latitude": 10.35975684496309,
    "Sentiment": "neutral"
  },
  {
    "": 576,
    "Unnamed: 0": 576,
    "Tweets": "#IntheNews: @US_FDA  announces that an #Ebolaprevention #vaccine has been approved for the first time in the U.S. P… https://t.co/cX8gpASxWp",
    "Dates": "2014-01-10",
    "Longitude": 0.2555557924377707,
    "Latitude": 11.08782376908182,
    "Sentiment": "neutral"
  },
  {
    "": 577,
    "Unnamed: 0": 577,
    "Tweets": "Great blog for anyone interested in #rstats in the field. What an interesting experience @aminata_fadl and a wonder… https://t.co/LoHM19KXd0",
    "Dates": "2014-01-10",
    "Longitude": 5.760381911953931,
    "Latitude": 10.518007389849751,
    "Sentiment": "neutral"
  },
  {
    "": 578,
    "Unnamed: 0": 578,
    "Tweets": "DBS #Gogeta Don’t Need Transformation to Stop SS4 Gogeta \nHe can Easily Whoop His Ass in Base it’s #BIGFAX… https://t.co/t2lnglj5NW",
    "Dates": "2014-01-10",
    "Longitude": 10.324393752908971,
    "Latitude": 9.93892596139894,
    "Sentiment": "neutral"
  },
  {
    "": 579,
    "Unnamed: 0": 579,
    "Tweets": "ECDC_Outbreaks: Click here https://t.co/xFOi7WAiKc and find this week’s issue of our bulletin for #Epidemiologists… https://t.co/yMAx4XdpAg",
    "Dates": "2014-01-10",
    "Longitude": 3.3528123040556435,
    "Latitude": 8.523640363905887,
    "Sentiment": "neutral"
  },
  {
    "": 580,
    "Unnamed: 0": 580,
    "Tweets": "Feelings of fear, #abandonment, &amp; #stigma are affecting #children who are either victims or witnesses to #Ebola epi… https://t.co/i3yF5P5fVA",
    "Dates": "2014-01-10",
    "Longitude": 3.086238213704683,
    "Latitude": 9.846304999093029,
    "Sentiment": "neutral"
  },
  {
    "": 581,
    "Unnamed: 0": 581,
    "Tweets": "Had @WHO's @DrTedros ordered the existing #Ebola #vaccination to be used widely when the #DRC Ebola outbreak starte… https://t.co/8u8GNvh48m",
    "Dates": "2014-01-10",
    "Longitude": 5.301911221311339,
    "Latitude": 11.377031395005947,
    "Sentiment": "neutral"
  },
  {
    "": 582,
    "Unnamed: 0": 582,
    "Tweets": "Click here https://t.co/eXI8frdh7d and find this week’s issue of our bulletin for #Epidemiologists and… https://t.co/XdPbaIDjRz",
    "Dates": "2014-01-10",
    "Longitude": -3.013839698225082,
    "Latitude": 11.272760364469942,
    "Sentiment": "negative"
  },
  {
    "": 583,
    "Unnamed: 0": 583,
    "Tweets": "#Epidémie #Ebola : un nouveau cas enregistré à Beni après 29 jours d'accalmie https://t.co/iB2wz4R103\n#ONG #humanitaire #santé",
    "Dates": "2014-01-10",
    "Longitude": 4.571780896593363,
    "Latitude": 12.69390199431853,
    "Sentiment": "neutral"
  },
  {
    "": 584,
    "Unnamed: 0": 584,
    "Tweets": "L'agenzia americana offre immunità legale ai produttori di vaccini contro #Ebola. \nIl nuovo vaccino #ERVEBO è un va… https://t.co/YF6j299Mtv",
    "Dates": "2014-01-10",
    "Longitude": 6.628600949954262,
    "Latitude": 10.767596064914613,
    "Sentiment": "positive"
  },
  {
    "": 585,
    "Unnamed: 0": 585,
    "Tweets": "Here comes #Ebola.\nThey will push #vaccines with live virus, and those people will create the outbreak. Say NO!!! https://t.co/6nglIYgJhV",
    "Dates": "2014-01-10",
    "Longitude": 0.0906776837615233,
    "Latitude": 9.492177897464254,
    "Sentiment": "neutral"
  },
  {
    "": 586,
    "Unnamed: 0": 586,
    "Tweets": "What Will It Take To Finally End Congo's #Ebola Outbreak In 2014? by @aizenglobe https://t.co/1lu9Z5rSY5 via… https://t.co/dAGgjDWeKi",
    "Dates": "2014-01-10",
    "Longitude": 13.095873922966296,
    "Latitude": 10.784546419771614,
    "Sentiment": "neutral"
  },
  {
    "": 587,
    "Unnamed: 0": 587,
    "Tweets": "Mundama, of #DRCongo’s health ministry, says one misstep early on in the outbreak was to set up the #Ebola response… https://t.co/K99N6v0DoY",
    "Dates": "2014-01-10",
    "Longitude": 4.3933772848158865,
    "Latitude": 7.725000085546313,
    "Sentiment": "neutral"
  },
  {
    "": 588,
    "Unnamed: 0": 588,
    "Tweets": "is it possible to finally end this outbreak in 2014? And if so, what will it take?\n@NPR put that question to five p… https://t.co/Quwc83gOzn",
    "Dates": "2014-01-10",
    "Longitude": 10.367732292713711,
    "Latitude": 11.54589692017003,
    "Sentiment": "neutral"
  },
  {
    "": 589,
    "Unnamed: 0": 589,
    "Tweets": "👏 Diesen Wunsch teilen wir. #2014werdenwir uns deshalb weiterhin gemeinsam dafür stark machen, dass diese Medikamen… https://t.co/FWt6IGGhCR",
    "Dates": "2014-01-10",
    "Longitude": 12.002011460472382,
    "Latitude": 10.702643227316472,
    "Sentiment": "neutral"
  },
  {
    "": 590,
    "Unnamed: 0": 590,
    "Tweets": "This is a long read on a work day. But if you're looking for weekend reads, how about this? I dove into the backsto… https://t.co/fdJRIOBoSs",
    "Dates": "2014-01-10",
    "Longitude": 1.0561887675534267,
    "Latitude": 11.130956137566233,
    "Sentiment": "neutral"
  },
  {
    "": 591,
    "Unnamed: 0": 591,
    "Tweets": "@ResolveTSL @NCDCgov @Chikwe_I @InfectiousDz @EpidAlert @DrTomFrieden @drasatrust @WHONigeria @OoasWaho @ekemma… https://t.co/aykBEjmafL",
    "Dates": "2014-01-10",
    "Longitude": 5.902537905200461,
    "Latitude": 10.070611306308086,
    "Sentiment": "positive"
  },
  {
    "": 592,
    "Unnamed: 0": 592,
    "Tweets": "Ebola #Virus disease – Democratic Republic of the Congo @WHO #Health #Ebola #Africa https://t.co/c73Wmaza2Z",
    "Dates": "2014-01-10",
    "Longitude": 8.843979153850654,
    "Latitude": 11.498054553928696,
    "Sentiment": "neutral"
  },
  {
    "": 593,
    "Unnamed: 0": 593,
    "Tweets": "#Ebola can be transmitted through #sperm for up to TWO years after #infection. Always use #protection! https://t.co/Glfchu04KM",
    "Dates": "2014-01-10",
    "Longitude": 7.482978235414272,
    "Latitude": 10.509384618787433,
    "Sentiment": "neutral"
  }
]
var newmarkers = [];

// SET UP a map marker
function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function myMap() {

	// SET UP a location and a map 
	var myCenter = new google.maps.LatLng(4.0383, 21.7587);

	var mapProp= {
			center: myCenter,
			zoom:3,
			minZoom: 2
		};

	map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	// SET UP a new marker
	marker = new google.maps.Marker({
		position:myCenter
	});
	marker.setMap(map);

	displayData();

    google.maps.event.addListener(map, 'click', function (event) { 
        placeMarker(event.latLng);
    });
}

function displayData(){

	for (var i = 0; i < json.length; i++) {

		if (json[i]['Sentiment']) {

			if (json[i]['Sentiment'] === "negative" ) {

				newmarkers.push(new google.maps.Marker({
					position: new google.maps.LatLng(json[i]["Latitude"] , json[i]["Longitude"] ),
					icon:'./assets/red3.png'
				}));
				newmarkers[i].setMap(map);

			}
			else if (json[i]['Sentiment'] === "positive" ) {

				newmarkers.push(new google.maps.Marker({
					position: new google.maps.LatLng(json[i]["Latitude"] , json[i]["Longitude"] ),
					icon:'./assets/green3.png'
				}));
				newmarkers[i].setMap(map);
			}
			else{ 
				newmarkers.push(new google.maps.Marker({
					position: new google.maps.LatLng(json[i]["Latitude"] , json[i]["Longitude"] ),
					icon:'./assets/grey3.png'
				}));
				newmarkers[i].setMap(map);
			}
		}
		else{
			newmarkers.push("");
		}
	}
}

function checkSpread(date){

	console.log("spread");
	checkSpreadCounter = 0;

	// clear the map first
	for (var i = 0; i < newmarkers.length; i++) {
		newmarkers[i].setMap(null);
	}

	// draw
	for (var i = 0; i < json.length; i++) {

		if (json[i]["Dates"] < date) {

			console.log("show");

			newmarkers.push(new google.maps.Marker({
				position: new google.maps.LatLng(json[i]["Latitude"], json[i]["Longitude"]),
				icon:'./assets/red3.png'
			}));
      
			checkSpreadCounter += 1;
			newmarkers[checkSpreadCounter].setMap(map);

		}
	}
}




