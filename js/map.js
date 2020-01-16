
var map;
var marker;
var json = [
  {
    "": 0,
    "title": "Administration makes case for emergency Ebola funds #ebola http://t.co/O95M0zN3Xl or http://t.co/y4XQ8SnNrU",
    "pubdate": "11/13/2014 23:15:37",
    "Latitude": 14.436739051913012,
    "Longitude": -1.191508680045405
  },
  {
    "": 1,
    "title": "RT @UmaruFofana: #SierraLeone confirms 94 new #Ebola cases today with 53 in Freetown &amp; environs. It brings to 295 new cases in last 3 days.",
    "pubdate": "11/14/2014 23:15:36",
    "Latitude": 16.015864831532216,
    "Longitude": -1.9345196564539515
  },
  {
    "": 2,
    "title": "Who will pay to stop Ebola?   http://t.co/hOeAMv3cZS  #americanpublic #ebola",
    "pubdate": "11/15/2014 23:15:32",
    "Latitude": 11.454607236827407,
    "Longitude": -8.762842476536196
  },
  {
    "": 3,
    "title": "Administration makes case for emergency Ebola funds #ebola http://t.co/ubM12j56KP",
    "pubdate": "11/16/2014 23:15:24",
    "Latitude": 13.412619710999966,
    "Longitude": -3.6446983693656567
  },
  {
    "": 4,
    "title": "RT @UmaruFofana: #SierraLeone confirms 94 new #Ebola cases today with 53 in Freetown &amp; environs. It brings to 295 new cases in last 3 days.",
    "pubdate": "11/16/2014 23:15:23",
    "Latitude": 13.073565184930924,
    "Longitude": -6.091555737536835
  },
  {
    "": 5,
    "title": "NOW LISTEN TO .@PoliticalJones tkg #Ebola &amp; #PublicHealth w/ .@docgriggs: http://t.co/mWLo4Vg446  http://t.co/43p3fkgWNS",
    "pubdate": "11/12/2014 23:15:21",
    "Latitude": 16.91006149788229,
    "Longitude": -5.576178659147082
  },
  {
    "": 6,
    "title": "#Ebola death toll passes 5,000-mark: WHO",
    "pubdate": "11/12/2014 23:15:20",
    "Latitude": 17.630685391224773,
    "Longitude": -3.2019330136898447
  },
  {
    "": 7,
    "title": "African football latest victim of #Ebola after Morocco expelled from Cup of Nations tournament http://t.co/UahOe1lscZ http://t.co/IuHzjq6DFJ",
    "pubdate": "11/12/2014 23:15:13",
    "Latitude": 16.977850516437126,
    "Longitude": -2.3274970756757796
  },
  {
    "": 8,
    "title": "Kim Kardashian Distracting us from what\\'s really going on... #ebola",
    "pubdate": "11/16/2014 23:15:10",
    "Latitude": 11.61533141737789,
    "Longitude": -4.911453046552091
  },
  {
    "": 9,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/16/2014 23:15:02",
    "Latitude": 17.32166700446746,
    "Longitude": -4.168127736785337
  },
  {
    "": 10,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 23:15:01",
    "Latitude": 18.872068033257026,
    "Longitude": -5.228779544500049
  },
  {
    "": 11,
    "title": "In Wake of #Ebola, Dentist Aims to Keep the Well... Well | #HIPAA #cloud http://t.co/BYHrFZNGNV",
    "pubdate": "11/16/2014 23:14:02",
    "Latitude": 14.770876642541165,
    "Longitude": -4.234968225876553
  },
  {
    "": 12,
    "title": "Mali battles Ebola outbreak as African death toll passes 5,000 #mali #ebola. http://t.co/39ORXIj7KQ",
    "pubdate": "11/16/2014 23:13:50",
    "Latitude": 16.131562573242956,
    "Longitude": -3.418437050309172
  },
  {
    "": 13,
    "title": "RT @Crof: #Ebola in Liberia: New cases in Grand Bassa county http://t.co/v5eSoTxZ09",
    "pubdate": "11/12/2014 23:13:36",
    "Latitude": 16.131643744036385,
    "Longitude": -7.341697943103191
  },
  {
    "": 14,
    "title": "#Ebola outbreak deaths pass 5000 - BBC News http://t.co/u6KfswK3D7",
    "pubdate": "11/12/2014 23:13:31",
    "Latitude": 15.71948955972411,
    "Longitude": -4.346318603262907
  },
  {
    "": 15,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/16/2014 23:13:24",
    "Latitude": 14.818797220288324,
    "Longitude": -1.9256024000338874
  },
  {
    "": 16,
    "title": "#CDC Covers Up #Ebola Information: http://t.co/LzBPwxSgUV via @YouTube",
    "pubdate": "11/12/2014 23:13:17",
    "Latitude": 14.033782000661287,
    "Longitude": -4.591347202658118
  },
  {
    "": 17,
    "title": "RT @FollowEbola: #Ebola crisis: Mali confirms second death. http://t.co/Z3nUvvefli",
    "pubdate": "11/12/2014 23:13:12",
    "Latitude": 15.286956143732025,
    "Longitude": -3.340082624157026
  },
  {
    "": 18,
    "title": "Who plays a vital role in the care of patients with #Ebola? #Nurses do. http://t.co/nPJQT5OlcD via @rwjf",
    "pubdate": "11/12/2014 23:13:08",
    "Latitude": 15.63093362893715,
    "Longitude": -4.078170874895704
  },
  {
    "": 19,
    "title": "RT @FollowEbola: Bats Link to #Ebola Finally Solved. http://t.co/NsVsBM0486",
    "pubdate": "11/16/2014 23:13:04",
    "Latitude": 16.063516912841784,
    "Longitude": -6.479525162512384
  },
  {
    "": 20,
    "title": "RT @makoto_au_japon: #WHO strives to enhance int\\'l clinics readiness to prevent #Ebola spread - expert http://t.co/DlTVEBMTNj #GCC #Gulf",
    "pubdate": "11/12/2014 23:12:51",
    "Latitude": 15.868879600367038,
    "Longitude": -2.686291360255959
  },
  {
    "": 21,
    "title": "RT @makoto_au_japon: #MSF moves #Ebola preparedness training #online http://t.co/mLMy03Icyi #Africa",
    "pubdate": "11/12/2014 23:12:45",
    "Latitude": 16.65138197834645,
    "Longitude": -4.3909290237148815
  },
  {
    "": 22,
    "title": "RT @makoto_au_japon: The Fight Against #Ebola Could Lead to Surge in #Measles and #Malaria http://t.co/iYXhw6qyP7 #Africa via @vivwalt",
    "pubdate": "11/16/2014 23:12:39",
    "Latitude": 18.77365877712641,
    "Longitude": -3.334155190924209
  },
  {
    "": 23,
    "title": "RT @CHRISTMAS_EVIL: #CometLandingPeople on the moon = hoax.Washing machine on comet = same gag. Spend the money looking for #MH370 an…",
    "pubdate": "11/12/2014 23:12:28",
    "Latitude": 17.608951001763966,
    "Longitude": -4.250642480414916
  },
  {
    "": 24,
    "title": "RT @dulaney_l: Did the U.S. Just Secretly Fly in an #African #Ebola Patient? http://t.co/P3ZdDbp8xp via @po_st  #obama #georgia",
    "pubdate": "11/12/2014 23:12:26",
    "Latitude": 13.125128938420314,
    "Longitude": -4.922536091743579
  },
  {
    "": 25,
    "title": "RT @makoto_au_japon: #Rwanda:Bayingana blasts teams for snubbing #Tour du Rwanda over #Ebola fears http://t.co/ywLflGJtSG #Africa #Cycling …",
    "pubdate": "11/12/2014 23:12:24",
    "Latitude": 17.73571893336022,
    "Longitude": -4.306979589128096
  },
  {
    "": 26,
    "title": "RT @drmannyonFOX: I\\'ll be on #TheKellyFile tonight at 9PM ET talking about why I think @DrFriedenCDC should step down. #EBOLA",
    "pubdate": "11/12/2014 23:12:19",
    "Latitude": 16.16621978949526,
    "Longitude": -4.591506536571305
  },
  {
    "": 27,
    "title": "RT @makoto_au_japon: #Japan Donates #Ebola Preventive Kit To #Ghana http://t.co/deHXMFwGLB #Africa #donation http://t.co/tJHDuMOdS2",
    "pubdate": "11/12/2014 23:12:14",
    "Latitude": 14.264284565829747,
    "Longitude": -3.5553172321284454
  },
  {
    "": 28,
    "title": "RT @makoto_au_japon: #Japan: #Tokyo Govt Conducts #Ebola Response #Drill http://t.co/5tc8kINGKl #hospital",
    "pubdate": "11/12/2014 23:12:08",
    "Latitude": 16.4893642017748,
    "Longitude": -2.4119637735585897
  },
  {
    "": 29,
    "title": "RT @makoto_au_japon: #Japan: #Tokyo conducts #Ebola #drill http://t.co/265CMMfF1r #hospital",
    "pubdate": "11/12/2014 23:12:03",
    "Latitude": 16.732194066219638,
    "Longitude": -3.8631304893701217
  },
  {
    "": 30,
    "title": "RT @Liberationtech: Deploying Technology in the Fight Against #Ebola http://t.co/DYuOrgI7hk by @drjohnbates",
    "pubdate": "11/12/2014 23:11:59",
    "Latitude": 15.750234470501821,
    "Longitude": -6.128435731282776
  },
  {
    "": 31,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 23:11:59",
    "Latitude": 12.506637801910108,
    "Longitude": -4.278735193959403
  },
  {
    "": 32,
    "title": "RT @makoto_au_japon: #Samoa to stop incoming flights to prevent #Ebola http://t.co/yeD234Of65 #Africa #travel #guideline",
    "pubdate": "11/12/2014 23:11:57",
    "Latitude": 12.79270868348798,
    "Longitude": -4.347555043536568
  },
  {
    "": 33,
    "title": "RT @makoto_au_japon: #US: #Georgia health officials refuse to name #Ebola hospitals http://t.co/tRZhgBc7RR #hospital",
    "pubdate": "11/12/2014 23:11:50",
    "Latitude": 16.65316885331982,
    "Longitude": -6.741014150299373
  },
  {
    "": 34,
    "title": "#Ebola Lawmakers question Obama&amp;#039;s $6-billion request for Ebola funding   http://t.co/yxN1WGkCYn http://t.co/yg2fQkuHg6",
    "pubdate": "11/12/2014 23:11:45",
    "Latitude": 12.596890764309714,
    "Longitude": -4.699360289983468
  },
  {
    "": 35,
    "title": "RT @makoto_au_japon: #Trinidad &amp; #Tobago: #Ebola treatment centre ready http://t.co/aVZtt79dsY #TT #Caribbean",
    "pubdate": "11/12/2014 23:11:40",
    "Latitude": 18.387864712340544,
    "Longitude": -5.892907610910574
  },
  {
    "": 36,
    "title": "@UNDP providing important fail safe in fight against #Ebola. http://t.co/a0D7Q7QZ8x @UNMEER @DougUNDP @HelenClarkUNDP",
    "pubdate": "11/12/2014 23:11:31",
    "Latitude": 16.75527953764257,
    "Longitude": -3.5992670717272692
  },
  {
    "": 37,
    "title": "RT @makoto_au_japon: #Israel: Watch: Israel sending #Ebola field hospital and staff to #Africa (Video) http://t.co/UqNdcDO8x1",
    "pubdate": "11/12/2014 23:11:29",
    "Latitude": 17.864058884607566,
    "Longitude": -6.9863424557592495
  },
  {
    "": 38,
    "title": "RT @InfoEbola: “Your Blood Tested Positive for #Ebola. I Am Sorry.”Read Dr. Ada Ignohoh\\'s story. Posted online by Bill Gates... http://t.…",
    "pubdate": "11/12/2014 23:11:25",
    "Latitude": 18.272431349028555,
    "Longitude": -4.162624503265081
  },
  {
    "": 39,
    "title": "A Poem: On the Arrival of Ebola in New York   http://t.co/lg5zqqrEtd  #ebola #funny #humor via @humortimes",
    "pubdate": "11/12/2014 23:11:19",
    "Latitude": 12.998853265186993,
    "Longitude": -6.5427528285586405
  },
  {
    "": 40,
    "title": "RT @makoto_au_japon: #Kazakhstan: No Kazakhstanis contracted #Ebola #virus in #Africa, MFA http://t.co/JxzKkKAA9K #Kazakh",
    "pubdate": "11/12/2014 23:11:17",
    "Latitude": 16.165209358182707,
    "Longitude": -6.587284771166623
  },
  {
    "": 41,
    "title": "RT @seanparnell: British PM makes #ebola a #G20 priority. Aust PM last week said \\\"I don\\'t think at this stage we want to over-estimate the …",
    "pubdate": "11/12/2014 23:11:13",
    "Latitude": 19.91343505867812,
    "Longitude": -2.513469420826679
  },
  {
    "": 42,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 23:11:13",
    "Latitude": 13.559968023447865,
    "Longitude": -7.852336458633423
  },
  {
    "": 43,
    "title": "RT @makoto_au_japon: #Russia to begin testing its #Ebola drugs http://t.co/mi5rIu4IMC #Africa #drug",
    "pubdate": "11/12/2014 23:11:11",
    "Latitude": 14.542952417412462,
    "Longitude": -6.938334298048627
  },
  {
    "": 44,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 23:11:11",
    "Latitude": 15.040039760923765,
    "Longitude": -5.567630222982357
  },
  {
    "": 45,
    "title": "RT @makoto_au_japon: #APEC leaders determined to jointly fight #Ebola: Xi http://t.co/cJD6HVIAWi #China",
    "pubdate": "11/12/2014 23:10:51",
    "Latitude": 14.850382211393265,
    "Longitude": -5.232879213768379
  },
  {
    "": 46,
    "title": "Good to hear Joe Hockey confirm #Ebola is on the agenda at #G20 - plus this from David Cameron earlier http://t.co/LJCUwU3Air",
    "pubdate": "11/12/2014 23:10:41",
    "Latitude": 21.364769522574825,
    "Longitude": -3.538856295042688
  },
  {
    "": 47,
    "title": "Fran just told me she loved me and she doesn\\'t want anything 😟 #EBOLA???",
    "pubdate": "11/12/2014 23:10:25",
    "Latitude": 18.404940922840904,
    "Longitude": -6.510585055785111
  },
  {
    "": 48,
    "title": "RT @kasujja: Africa, the land of simba, Cleopatra...oh and #Ebola! According to @TMZ.  Really? Humour? Ignorance? Indifference? http://t.co…",
    "pubdate": "11/12/2014 23:10:17",
    "Latitude": 15.029965151946273,
    "Longitude": -4.9642678454531675
  },
  {
    "": 49,
    "title": "Deploying Technology in the Fight Against #Ebola http://t.co/DYuOrgI7hk by @drjohnbates",
    "pubdate": "11/12/2014 23:10:13",
    "Latitude": 15.218348582336308,
    "Longitude": -1.5976806894252036
  },
  {
    "": 50,
    "title": "Clinical Care of Two Patients with #Ebola Virus Disease in the United States http://t.co/300NOKkpiy",
    "pubdate": "11/12/2014 23:10:11",
    "Latitude": 15.420012400766128,
    "Longitude": -6.902780459114201
  },
  {
    "": 51,
    "title": "RT @NewsonEbola: #Ebola #EbolaOutbreak Thomas Eric Duncan\\'s Family Reaches \\'Resolution\\' With Dallas Hospital In Ebola Case http://t.co/DIcW…",
    "pubdate": "11/12/2014 23:10:06",
    "Latitude": 15.121995680900728,
    "Longitude": -5.328940042251789
  },
  {
    "": 52,
    "title": "RT @RainaMacIntyre: #Ebola and why it matters - 10 min summary &amp; what you can do @UNSW Alliance against Ebola. http://t.co/SfbP7taVSH  @Joe…",
    "pubdate": "11/12/2014 23:10:00",
    "Latitude": 17.83983650638348,
    "Longitude": -7.3877364425494285
  },
  {
    "": 53,
    "title": "RT @dulaney_l: As If #Ebola Weren\\'t Bad Enough, Here\\'s Another Deadly #Disease Invading America Across The #Border http://t.co/SDvDIy4rzv v…",
    "pubdate": "11/12/2014 23:09:49",
    "Latitude": 14.672894250944903,
    "Longitude": -6.542742058910382
  },
  {
    "": 54,
    "title": "#Ebola season 3 ep13 http://t.co/zwrYpoElgq",
    "pubdate": "11/12/2014 23:09:41",
    "Latitude": 15.652128536699465,
    "Longitude": -5.070170943276503
  },
  {
    "": 55,
    "title": "RT seanparnell: British PM makes #ebola a #G20 priority. Aust PM last week said \\\"I don\\'t think at this stage we want to over-estimate the...",
    "pubdate": "11/12/2014 23:09:39",
    "Latitude": 11.811305190294588,
    "Longitude": -3.4640922761275164
  },
  {
    "": 56,
    "title": "RT @WBUR: As health workers fight to control the #Ebola outbreak, are there lessons from the Boston 1721 smallpox epidemic? http://t.co/hyM…",
    "pubdate": "11/12/2014 23:09:37",
    "Latitude": 16.005666252004698,
    "Longitude": -7.097537362132989
  },
  {
    "": 57,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 23:09:34",
    "Latitude": 15.67067002144808,
    "Longitude": -5.369256470713021
  },
  {
    "": 58,
    "title": "http://t.co/C92r11cNG8 Rhode Island, US: 15 Being Monitored for #Ebola #Ebola Alerts",
    "pubdate": "11/12/2014 23:09:32",
    "Latitude": 15.369168072720619,
    "Longitude": -2.2017369131321205
  },
  {
    "": 59,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 23:09:29",
    "Latitude": 14.22578727964093,
    "Longitude": -0.9230997023490612
  },
  {
    "": 60,
    "title": "#Ebola outbreak: deaths exceed 5000, WHO says - CBC.ca http://t.co/x1xemg2kar",
    "pubdate": "11/12/2014 23:09:28",
    "Latitude": 16.66538439752738,
    "Longitude": -3.56169409092504
  },
  {
    "": 61,
    "title": "Family of #ThomasDuncan settles with Dallas hospital #Ebola http://t.co/sU8sUVFwHo http://t.co/SZaOHQxxDH",
    "pubdate": "11/12/2014 23:09:21",
    "Latitude": 16.80701458280625,
    "Longitude": -0.968227962925345
  },
  {
    "": 62,
    "title": "“@UCSF: Clinician @DanKelly_MD returning from Sierra Leone \\\"more hopeful than ever\\\" that #Ebola will be eradicated http://t.co/0rxdHyOz7H”",
    "pubdate": "11/12/2014 23:09:16",
    "Latitude": 14.010582874301026,
    "Longitude": -3.765736600272703
  },
  {
    "": 63,
    "title": "RT @NewsonEbola: #Ebola #EbolaOutbreak Thomas Eric Duncan\\'s Family Reaches \\'Resolution\\' With Dallas Hospital In Ebola Case http://t.co/DIcW…",
    "pubdate": "11/12/2014 23:09:16",
    "Latitude": 20.673256415784426,
    "Longitude": -6.546396434538506
  },
  {
    "": 64,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 23:09:10",
    "Latitude": 14.645600483881534,
    "Longitude": -2.615448096625342
  },
  {
    "": 65,
    "title": "British PM makes #ebola a #G20 priority. Aust PM last week said \\\"I don\\'t think at this stage we want to over-estimate the impact of ebola..\\\",\"British PM makes #ebola a #G20 priority. Aust PM last week said \\\"I don\\'t think at this stage we want to over-estimate the impact of ebola..\\\",\"Twitter for iPad",
    "pubdate": "11/12/2014 23:09:03",
    "Latitude": 19.86025812955785,
    "Longitude": -2.634009981926653
  },
  {
    "": 66,
    "title": "RT @UNMEER: .@UNBanbury tells @UN_Radio: international community must \\\"get ahead\\\" of #Ebola outbreak - http://t.co/dm7RqErtPf http://t.co/F…",
    "pubdate": "11/12/2014 23:08:50",
    "Latitude": 15.199303568680593,
    "Longitude": -5.051320809730482
  },
  {
    "": 67,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 23:08:38",
    "Latitude": 15.803680224125833,
    "Longitude": -3.2367492924873744
  },
  {
    "": 68,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 23:08:37",
    "Latitude": 17.614614103638406,
    "Longitude": -2.3627887583929454
  },
  {
    "": 69,
    "title": "RT @FollowEbola: Children Are More Likely To Survive #Ebola, And Now Scientists May Know Why. http://t.co/g2kgNbjg4N",
    "pubdate": "11/12/2014 23:08:37",
    "Latitude": 18.552846230702784,
    "Longitude": -4.929070085036922
  },
  {
    "": 70,
    "title": "Via @nprnews: #Ebola In 3-D: A Video #Game To Guide Health Care Workers Through A Ward http://t.co/pmxaIKHH8a #sims",
    "pubdate": "11/12/2014 23:08:36",
    "Latitude": 17.912121490562114,
    "Longitude": -4.278557727128913
  },
  {
    "": 71,
    "title": "Whoop whoop haha #ebola http://t.co/C6LU9CoJLe",
    "pubdate": "11/12/2014 23:08:23",
    "Latitude": 17.88026098597178,
    "Longitude": -2.6325415859269388
  },
  {
    "": 72,
    "title": "How can you help turn the world around &amp; stop our economic collapse? http://t.co/NXOwlbLDeI #GoldOutofHiding#EBOLA #EBOLAANSWERS #ebolaar",
    "pubdate": "11/12/2014 23:08:19",
    "Latitude": 15.400494276115445,
    "Longitude": -4.548971857207114
  },
  {
    "": 73,
    "title": "RT @amaausmed: .@amapresident has urged Govt to consider deploying AUSMAT teams to join fight against #Ebola in west Africa https://t.co/bU…",
    "pubdate": "11/12/2014 23:08:10",
    "Latitude": 16.682580812501744,
    "Longitude": -7.341555187713402
  },
  {
    "": 74,
    "title": "RT @GerardBest: #Ebola death toll tops 5,000--WHO http://t.co/TepwFpmnX2 http://t.co/fqdQfNOUyu",
    "pubdate": "11/12/2014 23:07:51",
    "Latitude": 15.081544187405639,
    "Longitude": -7.264925483346724
  },
  {
    "": 75,
    "title": "RT @kakape: And in other #Ebolanoia news: Morocco is expelled from soccer tournament for refusing to host it due to #Ebola fears http://t.c…",
    "pubdate": "11/12/2014 23:07:51",
    "Latitude": 15.822149901775255,
    "Longitude": -6.101125872981886
  },
  {
    "": 76,
    "title": "RT @Campaign4Action: .@CDCgov issues new #ebola guidelines for emergency departments http://t.co/POIH4G3IDs",
    "pubdate": "11/12/2014 23:07:48",
    "Latitude": 18.903242112224152,
    "Longitude": -3.362080835019138
  },
  {
    "": 77,
    "title": "#Ebola World View: Who Has It and Where #TexasHealthPresbyterian #WhereDuncan http://t.co/Lyx42f3DcI http://t.co/NVgHGynguW",
    "pubdate": "11/12/2014 23:07:38",
    "Latitude": 13.982834890612867,
    "Longitude": -4.383156568166678
  },
  {
    "": 78,
    "title": "RT @PHammondMP: Good to meet @presidentkoroma Impressed at his commitment to keep fighting #Ebola http://t.co/XImMIu9Nt4",
    "pubdate": "11/12/2014 23:07:34",
    "Latitude": 14.97688999876958,
    "Longitude": -3.741607947190125
  },
  {
    "": 79,
    "title": "RT @lajouetreine: #US nurses strike over insufficient #Ebola protections http://t.co/vEwkK2U8p6 http://t.co/UPygTXwkbp",
    "pubdate": "11/12/2014 23:07:30",
    "Latitude": 14.02587617858144,
    "Longitude": -4.724028730107366
  },
  {
    "": 80,
    "title": "Remember #Ebola? It\\'s Still A Huge Problem - Health Care Edge. http://t.co/yeb4borm5a",
    "pubdate": "11/12/2014 23:07:28",
    "Latitude": 12.362546939587538,
    "Longitude": -4.701257772746697
  },
  {
    "": 81,
    "title": "Rage Against the #Ebola Crematorium. http://t.co/RhvUJIIzZ8",
    "pubdate": "11/12/2014 23:07:27",
    "Latitude": 15.081866958913066,
    "Longitude": -5.436139901493909
  },
  {
    "": 82,
    "title": "RT @GeneticLiteracy: Who decides who gets treatments in #Ebola #drug trials? via @Nature http://t.co/O73byneXM2",
    "pubdate": "11/12/2014 23:07:17",
    "Latitude": 15.278790480045425,
    "Longitude": -1.8517807376606608
  },
  {
    "": 83,
    "title": "RT @FluTrackers: #Mali - Reported #ebola case who died was a nurse, 1 other possible health care worker being tested http://t.co/zsU7asO7cm…",
    "pubdate": "11/12/2014 23:07:12",
    "Latitude": 13.319430429027921,
    "Longitude": -0.4996689034111017
  },
  {
    "": 84,
    "title": "RT @SenateApprops Read witness testimony including @SHEA_Epi &amp; other info from today\\'s #Ebola hearing: http://t.co/17QKCKnd1U",
    "pubdate": "11/12/2014 23:07:11",
    "Latitude": 14.880300132766884,
    "Longitude": -5.021536919464715
  },
  {
    "": 85,
    "title": "Yo Everybody Is Getting Sick Dawg 😳 Thats That #Ebola Creeping up 😕 jk.. I hope 😭 https://t.co/NkEDB0yrIz",
    "pubdate": "11/12/2014 23:07:05",
    "Latitude": 16.286741778059618,
    "Longitude": -6.097910259047211
  },
  {
    "": 86,
    "title": "#KatieHopkins : if #Ebola had a face.",
    "pubdate": "11/12/2014 23:07:03",
    "Latitude": 16.294870665822256,
    "Longitude": -3.8118831585685653
  },
  {
    "": 87,
    "title": "RT @UNICEF: 2014 could be the year progress to end #measles and #malaria slides back. And it’s because of #Ebola http://t.co/6SgN1ZxQAK via…",
    "pubdate": "11/12/2014 23:07:00",
    "Latitude": 16.666733830656693,
    "Longitude": -4.137902018123355
  },
  {
    "": 88,
    "title": "Remember #Ebola? It\\'s Still A Huge Problem - Health Care Edge. http://t.co/xXHHIeaR6j",
    "pubdate": "11/12/2014 23:07:00",
    "Latitude": 18.10134574097414,
    "Longitude": -3.8681263618670636
  },
  {
    "": 89,
    "title": "Rage Against the #Ebola Crematorium. http://t.co/nai944hpUA",
    "pubdate": "11/12/2014 23:07:00",
    "Latitude": 14.101242890852879,
    "Longitude": -7.033469769011038
  },
  {
    "": 90,
    "title": "#US nurses strike over insufficient #Ebola protections http://t.co/BGsg1jWb2M http://t.co/b16AZiIHrt",
    "pubdate": "11/12/2014 23:06:53",
    "Latitude": 15.509023688754661,
    "Longitude": -2.904118651947077
  },
  {
    "": 91,
    "title": "First @facebook and now @google are asking me for money for #Ebola. What about more relevant diseases?",
    "pubdate": "11/12/2014 23:06:47",
    "Latitude": 19.997687043355306,
    "Longitude": -8.448777661495942
  },
  {
    "": 92,
    "title": "RT @picardonhealth: First Outbreak Quashed, #Ebola Reappears in #Mali  http://t.co/PfzAmGS78Z via @nytimes",
    "pubdate": "11/12/2014 23:06:45",
    "Latitude": 14.689805900885224,
    "Longitude": -2.2147661883580576
  },
  {
    "": 93,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 23:06:37",
    "Latitude": 14.646293117723651,
    "Longitude": -3.0184036325387997
  },
  {
    "": 94,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 23:06:24",
    "Latitude": 13.586675348677677,
    "Longitude": -5.112771247239318
  },
  {
    "": 95,
    "title": "#Thomas #Eric Duncans Family Receives Settlementl Over #Ebola #Death - Nov 12 @ 10:06 PM ET http://t.co/WDS21FiQcv",
    "pubdate": "11/12/2014 23:06:18",
    "Latitude": 13.62550809173639,
    "Longitude": -3.9449153949700992
  },
  {
    "": 96,
    "title": "RT @EndTimeHeadline: No district has gone untouched in #SierraLeone, where #Ebola has now been detected in every single area of the... http…",
    "pubdate": "11/12/2014 23:06:15",
    "Latitude": 15.901475999796702,
    "Longitude": -7.46807390330632
  },
  {
    "": 97,
    "title": "RT @MSF_USA: The #MSF team at #Khost maternity hospital in #Afghanistan supports colleagues fighting #Ebola in West Africa: http://t.co/Fxu…",
    "pubdate": "11/12/2014 23:06:14",
    "Latitude": 15.679259632421038,
    "Longitude": -4.447966365540016
  },
  {
    "": 98,
    "title": "Experimental device Hemopurifier from @Aethlon_Medical was used to help treat an #Ebola patient who survived http://t.co/CmjQ8ZzL9l",
    "pubdate": "11/12/2014 23:06:01",
    "Latitude": 15.721825709147243,
    "Longitude": -3.6880671897275796
  },
  {
    "": 99,
    "title": "Good perspective on how to think about treatment:Out of Africa — Caring for Patients with #Ebola http://t.co/ClDzhnEM7q",
    "pubdate": "11/12/2014 23:05:34",
    "Latitude": 18.718202821133662,
    "Longitude": -5.33459223226084
  },
  {
    "": 100,
    "title": "RT @NHPRExchange: Tmrw: NH #Ebola protocol w/ @JoseTMontero. Also, @emerrens, @BrighamWomens Dr. Baden, @pattywight. http://t.co/ozhWXc74XA…",
    "pubdate": "11/12/2014 23:05:19",
    "Latitude": 15.019830860490849,
    "Longitude": -4.6227441087436905
  },
  {
    "": 101,
    "title": "Programming &amp; Web Solutions http://t.co/RRAH0RqsaD #ebola http://t.co/hNun1EAbub",
    "pubdate": "11/12/2014 23:05:18",
    "Latitude": 15.301123678565869,
    "Longitude": -2.8381600427478597
  },
  {
    "": 102,
    "title": "Nice report on Partners in Health doctor fighting #Ebola in Sierra Leone on .@NBCNightlyNews. Great org. that could use your #support .@PIH",
    "pubdate": "11/12/2014 23:05:17",
    "Latitude": 16.5415963515266,
    "Longitude": -4.087381028198734
  },
  {
    "": 103,
    "title": "RT @usatodayhealth: Hospital will pay Duncan\\'s medical bills, set up charity http://t.co/4lfQ2Z3Wv2 via @USATODAY #ebola",
    "pubdate": "11/12/2014 23:05:15",
    "Latitude": 16.76137860188921,
    "Longitude": -3.345492400901731
  },
  {
    "": 104,
    "title": "WHO reports 3 more #Ebola cases in #Mali http://t.co/a0rDhlW2Vo",
    "pubdate": "11/12/2014 23:05:08",
    "Latitude": 17.15152518057722,
    "Longitude": -8.100777736683332
  },
  {
    "": 105,
    "title": "RT @amaausmed: .@amapresident has urged Govt to consider deploying AUSMAT teams to join fight against #Ebola in west Africa https://t.co/bU…",
    "pubdate": "11/12/2014 23:04:44",
    "Latitude": 15.151235113657044,
    "Longitude": -3.549861403332265
  },
  {
    "": 106,
    "title": "RT @WhySharksMatter: Hey everyone who was reading #OutbreakChat tweets? You now have #ebola . SURPRISE!",
    "pubdate": "11/12/2014 23:04:40",
    "Latitude": 14.588194524399919,
    "Longitude": -2.3473516916979857
  },
  {
    "": 107,
    "title": "RT @DavidQuammen: @sethmnookin @stevesilberman Thanks, Seth, Steve. Glad to report Ivory Coast calm, sane, so far #Ebola-free. But a story …",
    "pubdate": "11/12/2014 23:04:38",
    "Latitude": 14.153181177551987,
    "Longitude": -3.2385207722513263
  },
  {
    "": 108,
    "title": "RT @ConservativeGi3: \\\"@SunNewsNetwork: Injectionless #Ebola vaccine successful in monkeys http://t.co/ZhvG5PhRSL\\\",\"RT @ConservativeGi3: \\\"@SunNewsNetwork: Injectionless #Ebola vaccine successful in monkeys http://t.co/ZhvG5PhRSL\\\",\"Twitter for Android",
    "pubdate": "11/12/2014 23:04:13",
    "Latitude": 15.691645625826512,
    "Longitude": -4.975722064272588
  },
  {
    "": 109,
    "title": "#Ebola #EbolaOutbreak Thomas Eric Duncan\\'s Family Reaches \\'Resolution\\' With Dallas Hospital In Ebola Case http://t.co/DIcWjWOUBf",
    "pubdate": "11/12/2014 23:03:54",
    "Latitude": 14.054385464485076,
    "Longitude": -7.792172469497513
  },
  {
    "": 110,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 23:03:51",
    "Latitude": 14.009249382490344,
    "Longitude": -3.8191179492686778
  },
  {
    "": 111,
    "title": "UK is building six #ebola facilities in Sierra Leone. First run by Save the Children, second by Aspen Medical with up to $20m Aust funding.",
    "pubdate": "11/12/2014 23:03:45",
    "Latitude": 15.24955163416084,
    "Longitude": -3.4645858308678084
  },
  {
    "": 112,
    "title": "Texas: Ebola Victim’s Family to Be Paid by Hospital, via @nytimes .it can\\'t being back #ThomasEricDuncan back. #Ebola http://t.co/YBBQAUu5Et",
    "pubdate": "11/12/2014 23:03:33",
    "Latitude": 14.935256737987018,
    "Longitude": -3.3479268778773443
  },
  {
    "": 113,
    "title": "RT @EmergencyMgtMag: 5 lessons in crisis communications from the #Ebola response: http://t.co/FgmYLo0BTt",
    "pubdate": "11/12/2014 23:03:32",
    "Latitude": 14.291617338847379,
    "Longitude": -0.7766146110488754
  },
  {
    "": 114,
    "title": "RT @WhySharksMatter: Hey everyone who was reading #OutbreakChat tweets? You now have #ebola . SURPRISE!",
    "pubdate": "11/12/2014 23:03:31",
    "Latitude": 13.933443983062375,
    "Longitude": -4.217621979874432
  },
  {
    "": 115,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 23:03:28",
    "Latitude": 12.512377787059927,
    "Longitude": -3.5572915471806317
  },
  {
    "": 116,
    "title": "RT @CIDRAP: Senate committee probes proposed US #Ebola funding http://t.co/0kKkX2Nrri",
    "pubdate": "11/12/2014 23:03:11",
    "Latitude": 17.059183265726777,
    "Longitude": -1.1980407070472956
  },
  {
    "": 117,
    "title": "TX #Ebola Victim’s Family Cashes In After Hospital Settlement. You LIE! Portray urself a Victim Get Paid BHOs America http://t.co/EnuHYVFD7E",
    "pubdate": "11/12/2014 23:03:06",
    "Latitude": 14.902237100931293,
    "Longitude": -4.119899871472809
  },
  {
    "": 118,
    "title": "RT @MarkMobius: #Ebola hasn’t affected our decision-making process when it comes to investing in Africa or elsewhere. http://t.co/RndtBuBETH",
    "pubdate": "11/12/2014 23:02:46",
    "Latitude": 14.178002462183663,
    "Longitude": -5.286672995186731
  },
  {
    "": 119,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 23:02:24",
    "Latitude": 13.794658417912249,
    "Longitude": -3.762802866596007
  },
  {
    "": 120,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 23:02:12",
    "Latitude": 14.618203622450938,
    "Longitude": -4.692380338639216
  },
  {
    "": 121,
    "title": "RT @JermaineWatkins: This: See... I knew #Ebola was a bigger worldwide threat than they admitted at jump. http://t.co/rtKgzXzwjk",
    "pubdate": "11/12/2014 23:02:11",
    "Latitude": 14.015853975879212,
    "Longitude": -4.452271013846462
  },
  {
    "": 122,
    "title": "RT @HazMedSolutions: There were fewer new cases of #Ebola in the week ended Nov. 4 than in any week the prior 3 months. #nytimes graphic ht…",
    "pubdate": "11/12/2014 23:02:06",
    "Latitude": 13.54694804167822,
    "Longitude": -6.090011868485854
  },
  {
    "": 123,
    "title": "How Ebola healthcare workers get dressed http://t.co/RuZrVz1gih #ebola #health #tech #workplace #economy",
    "pubdate": "11/12/2014 23:02:04",
    "Latitude": 13.517423390256592,
    "Longitude": -1.9460339376286102
  },
  {
    "": 124,
    "title": "#US nurses strike over insufficient #Ebola protections http://t.co/vEwkK2U8p6 http://t.co/UPygTXwkbp",
    "pubdate": "11/12/2014 23:01:42",
    "Latitude": 14.877985331492408,
    "Longitude": -6.719505538303187
  },
  {
    "": 125,
    "title": "MSNBC On Moderator In NH Getting Facts Wron  http://t.co/A1If3hUpQm   #ebola #ebola-outbreak #health #breaking",
    "pubdate": "11/12/2014 23:01:38",
    "Latitude": 12.596397192383794,
    "Longitude": -3.629154912833097
  },
  {
    "": 126,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 23:01:23",
    "Latitude": 15.972963217674247,
    "Longitude": -5.029909084589864
  },
  {
    "": 127,
    "title": "RT @WhySharksMatter: Interesting, some of the symptoms of #Ebola (bleeding from eyes, passing out, vomit) are also symptoms of watching thi…",
    "pubdate": "11/12/2014 23:01:12",
    "Latitude": 14.923137663994412,
    "Longitude": -3.8050464107029316
  },
  {
    "": 128,
    "title": "CDC Disease Detective Describes Chasing Ambulances as Part of #Ebola Response. #virus http://t.co/mUyjgavCzc",
    "pubdate": "11/12/2014 23:01:06",
    "Latitude": 13.860719029125944,
    "Longitude": -3.9610821309313455
  },
  {
    "": 129,
    "title": "Oil Lamps, Mid Terms, and Tasers! New Episode 49! #Election2014 #NFL #NBCBlacklist #Worldseries#RollTide #ebola  http://t.co/IfJdxcL427",
    "pubdate": "11/12/2014 23:01:02",
    "Latitude": 14.772533590101332,
    "Longitude": -6.551738867649128
  },
  {
    "": 130,
    "title": "YES, YES, YES! \\\"@PIH: #DrPaulFarmer\\'s key principles on the #Ebola response: http://t.co/MJiiJ8k3TD http://t.co/1YtOGHcLGw\\\" @Apollos77",
    "pubdate": "11/12/2014 23:00:55",
    "Latitude": 18.07418104537084,
    "Longitude": -3.263213996854041
  },
  {
    "": 131,
    "title": "Hey everyone who was reading #OutbreakChat tweets? You now have #ebola . SURPRISE!",
    "pubdate": "11/12/2014 23:00:54",
    "Latitude": 15.737341969482166,
    "Longitude": -1.8387721963533368
  },
  {
    "": 132,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 23:00:42",
    "Latitude": 16.72057546874079,
    "Longitude": -3.5801235587169695
  },
  {
    "": 133,
    "title": "RT @WHO: #Mali’s Ministry of Health has confirmed the country’s second #Ebola fatal case in a nurse who worked in Bamako http://t.co/oTsqKS…",
    "pubdate": "11/12/2014 23:00:37",
    "Latitude": 17.95317165966177,
    "Longitude": -2.7553116911672477
  },
  {
    "": 134,
    "title": "RT @MarkMobius: #Ebola hasn’t affected our decision-making process when it comes to investing in Africa or elsewhere. http://t.co/RndtBuBETH",
    "pubdate": "11/12/2014 23:00:25",
    "Latitude": 14.057401721084723,
    "Longitude": -5.452686060234246
  },
  {
    "": 135,
    "title": "RT @Laurie_Garrett: Today @UNDP took over payroll at #Liberia MinHlth. Some got paid for 1st time in 3 mos, but I know 2 #Ebola staff got 1…",
    "pubdate": "11/12/2014 23:00:17",
    "Latitude": 13.949472052510544,
    "Longitude": -5.731790860372975
  },
  {
    "": 136,
    "title": "A company is out of #Ebola-virus stuffed animals after selling \\\"thousands and thousands\\\" of them: http://t.co/bxTXZOWfIh",
    "pubdate": "11/12/2014 23:00:15",
    "Latitude": 15.088816041458491,
    "Longitude": -4.329794595581721
  },
  {
    "": 137,
    "title": "CBS\\' Logan quarantined after Ebola report   http://t.co/rfjFafENJi  #ebola #laralogan #southafrica",
    "pubdate": "11/12/2014 23:00:13",
    "Latitude": 17.673363207569626,
    "Longitude": -2.4845467848929634
  },
  {
    "": 138,
    "title": "Human testing has sparked an ethical debate over how to study unproven medicines amid the #Ebola outbreak. http://t.co/cnHT5R6zxs",
    "pubdate": "11/12/2014 23:00:11",
    "Latitude": 13.342229425428892,
    "Longitude": -5.719672913429719
  },
  {
    "": 139,
    "title": "\\\"@UNICEF: One solution. Meet Aminata, who works at a centre producing chlorine in #Guinea http://t.co/woB3VL2zbq #Ebola\\\" @Apollos77",
    "pubdate": "11/12/2014 23:00:11",
    "Latitude": 16.325000071911937,
    "Longitude": -5.69783347677657
  },
  {
    "": 140,
    "title": "#US doctor released after being cleared of #Ebola   #TNN http://t.co/HBJoF7vMb4",
    "pubdate": "11/12/2014 23:00:04",
    "Latitude": 19.278360768329758,
    "Longitude": -1.1927343069458742
  },
  {
    "": 141,
    "title": ".@amapresident has urged Govt to consider deploying AUSMAT teams to join fight against #Ebola in west Africa https://t.co/bUeKP6cEcd #auspol",
    "pubdate": "11/12/2014 23:00:01",
    "Latitude": 13.618905932517029,
    "Longitude": -0.7759569589839188
  },
  {
    "": 142,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:59:51",
    "Latitude": 14.959117786545303,
    "Longitude": -1.3879557257706314
  },
  {
    "": 143,
    "title": "They ask you to wear mask at the hospital if you have been out of the country in the past 21 days or if you have a bad cough. #ebola",
    "pubdate": "11/12/2014 22:59:44",
    "Latitude": 13.17359895050901,
    "Longitude": -3.8423055415932548
  },
  {
    "": 144,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:59:20",
    "Latitude": 20.66372291865978,
    "Longitude": -4.105993983367399
  },
  {
    "": 145,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:59:12",
    "Latitude": 17.723235511885857,
    "Longitude": -6.223167189408903
  },
  {
    "": 146,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:59:03",
    "Latitude": 12.105136196028312,
    "Longitude": -7.443997422213952
  },
  {
    "": 147,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:58:42",
    "Latitude": 16.222333887319454,
    "Longitude": -4.176493358922138
  },
  {
    "": 148,
    "title": "RT @UNinBrussels: #Ebola: @WHO says experimental vaccine trials in West Africa could begin by January http://t.co/ji5kzOaxr9  #EbolaResponse",
    "pubdate": "11/12/2014 22:58:31",
    "Latitude": 15.09275616732298,
    "Longitude": -2.927461530159383
  },
  {
    "": 149,
    "title": "RT @blacklooks: A history of medical killers in #Africa #Ebola #HIV #poison #sterilisation http://t.co/5YMrdH0j86 cc @ducorwriter V/ @afriq…",
    "pubdate": "11/12/2014 22:58:29",
    "Latitude": 15.877944821425418,
    "Longitude": -5.888803217840348
  },
  {
    "": 150,
    "title": "Clinical Care of Two Patients with #Ebola Virus Disease in the United States http://t.co/IBMRuL8C8z",
    "pubdate": "11/12/2014 22:58:17",
    "Latitude": 15.446051867912942,
    "Longitude": -6.159383416520079
  },
  {
    "": 151,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:57:53",
    "Latitude": 17.5813036863643,
    "Longitude": -0.1315894936366595
  },
  {
    "": 152,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:57:37",
    "Latitude": 17.054851346595044,
    "Longitude": -5.948478082800923
  },
  {
    "": 153,
    "title": "As #Ebola takes lives in #Liberia, it leaves hunger in its wake: Sogbondo Raylo carries a… http://t.co/n6TOJ4ebhQ",
    "pubdate": "11/12/2014 22:57:37",
    "Latitude": 14.878575477317574,
    "Longitude": -6.173445277477262
  },
  {
    "": 154,
    "title": "RT @PHammondMP: Good to meet @presidentkoroma Impressed at his commitment to keep fighting #Ebola http://t.co/XImMIu9Nt4",
    "pubdate": "11/12/2014 22:57:35",
    "Latitude": 16.39763885686026,
    "Longitude": -4.95497537738729
  },
  {
    "": 155,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:57:01",
    "Latitude": 12.941788244697866,
    "Longitude": -2.7021822505008872
  },
  {
    "": 156,
    "title": "US nurses to protest, strike over #Ebola measures | http://t.co/2mlWbxNTWg",
    "pubdate": "11/12/2014 22:57:00",
    "Latitude": 13.718901974858957,
    "Longitude": -1.9660932766536248
  },
  {
    "": 157,
    "title": "RT @jsgaetano: #ImpeachPerry, he won\\'t #SealTheBorders. Plus he let #Ebola into the US! @jhoffman2022",
    "pubdate": "11/12/2014 22:56:51",
    "Latitude": 15.990505300143155,
    "Longitude": -3.6812880364331013
  },
  {
    "": 158,
    "title": "Caught the feelings. #ebola",
    "pubdate": "11/12/2014 22:56:51",
    "Latitude": 19.137491705448394,
    "Longitude": -1.9624494319040893
  },
  {
    "": 159,
    "title": "#Ebola U.S. nurses hold strikes, protests over Ebola measures   http://t.co/EuY2hKT9jP http://t.co/tPIdbSdvDN",
    "pubdate": "11/12/2014 22:56:32",
    "Latitude": 14.11137698846885,
    "Longitude": -2.156901348495982
  },
  {
    "": 160,
    "title": "I\\'m pretty sure it\\'s bad when you cough so hard that you can taste blood. #Ebola  ? 😷",
    "pubdate": "11/12/2014 22:56:29",
    "Latitude": 12.396434671212377,
    "Longitude": -6.755540881605587
  },
  {
    "": 161,
    "title": "RT @BCNewsWire: #Mali races to contain new #Ebola outbreak as deaths worldwide top 5000 #worldpoli - http://t.co/I64Va8OviA",
    "pubdate": "11/12/2014 22:56:19",
    "Latitude": 13.88625655312383,
    "Longitude": -3.81600331564332
  },
  {
    "": 162,
    "title": "RT @Oritavancin: No evidence the Ebola vaccine causes autism!#autism #aspergers #Psychiatry #healthcare #CDCwhistleblower #ebolahttp://…",
    "pubdate": "11/12/2014 22:56:14",
    "Latitude": 13.494610378092734,
    "Longitude": -6.322483158249501
  },
  {
    "": 163,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:56:06",
    "Latitude": 14.524828305275193,
    "Longitude": -2.982880844372846
  },
  {
    "": 164,
    "title": "RT @neva9257: It’s been fun/awful playing at #OutbreakChat, but remember: donate to aid orgs working in #Ebola -affected countries http://t…",
    "pubdate": "11/12/2014 22:56:04",
    "Latitude": 12.580160247529534,
    "Longitude": -5.2532227528371305
  },
  {
    "": 165,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:56:00",
    "Latitude": 13.072088827480242,
    "Longitude": -7.163103993962695
  },
  {
    "": 166,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:55:57",
    "Latitude": 15.836013674109529,
    "Longitude": -4.043135716433767
  },
  {
    "": 167,
    "title": "Fox News says fighting Ebola is a \\'boondoggle\\' - http://t.co/VA4yCH5ll9 #ebola",
    "pubdate": "11/12/2014 22:55:32",
    "Latitude": 15.888011009914829,
    "Longitude": -2.7963924577960793
  },
  {
    "": 168,
    "title": "20000 California Nurses Go On Strike - Ebola Fears - http://t.co/t1onpv0RmZ #ebola",
    "pubdate": "11/12/2014 22:55:31",
    "Latitude": 14.366628332140102,
    "Longitude": -7.305464448996258
  },
  {
    "": 169,
    "title": "RT @Barbi_Twins: Hendry Co defends #monkey breeding lab negligence including #Ebola-Typical&gt;govt protects biz over bodies @JVM @ALDF http:/…",
    "pubdate": "11/12/2014 22:55:21",
    "Latitude": 13.365956638725416,
    "Longitude": -4.446880229920568
  },
  {
    "": 170,
    "title": "RT @blacklooks: A history of medical killers in #Africa #Ebola #HIV #poison #sterilisation http://t.co/5YMrdH0j86 cc @ducorwriter V/ @afriq…",
    "pubdate": "11/12/2014 22:55:16",
    "Latitude": 19.027262021605765,
    "Longitude": -5.111943518726717
  },
  {
    "": 171,
    "title": "Pregnant women in #Liberia at inc. risk of complications and death due to fear of #ebola http://t.co/rhkvzqUUiy",
    "pubdate": "11/12/2014 22:55:09",
    "Latitude": 16.035901084129033,
    "Longitude": -3.641846219424018
  },
  {
    "": 172,
    "title": "RT @Laurie_Garrett: Today @UNDP took over payroll at #Liberia MinHlth. Some got paid for 1st time in 3 mos, but I know 2 #Ebola staff got 1…",
    "pubdate": "11/12/2014 22:54:57",
    "Latitude": 15.610980415069466,
    "Longitude": -7.90393736267155
  },
  {
    "": 173,
    "title": "RT @GSK: ‘The fight against #Ebola needs big pharma on board’ @wellcometrust article in @FT: http://t.co/Nt9n5qB9ZU (subscription req.)",
    "pubdate": "11/12/2014 22:54:41",
    "Latitude": 14.419702435850413,
    "Longitude": -5.989314094344787
  },
  {
    "": 174,
    "title": "We\\'re so bad at assessing real risk😌. #Ebola http://t.co/4smn08BTYw @hp_ems",
    "pubdate": "11/12/2014 22:54:41",
    "Latitude": 15.374911529156652,
    "Longitude": -0.43501421814641583
  },
  {
    "": 175,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:54:40",
    "Latitude": 14.841590677037821,
    "Longitude": -1.9112331287392315
  },
  {
    "": 176,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:54:37",
    "Latitude": 11.976997344847181,
    "Longitude": -9.087743407826704
  },
  {
    "": 177,
    "title": "@bfrist Fmr. Senator Bill Frist makes the case for us to stay on the offensive re: #Ebola #EbolaCrisis #publichealth http://t.co/YSrv0yFU1T",
    "pubdate": "11/12/2014 22:54:35",
    "Latitude": 14.224804742277323,
    "Longitude": -2.472664330366357
  },
  {
    "": 178,
    "title": "brother @RobertBornAgain #Ebola is a lie as well. it’s all a part of bringing #agenda21 to the forefront. the RFID chips will be here TBC",
    "pubdate": "11/12/2014 22:54:34",
    "Latitude": 14.785484780434313,
    "Longitude": -4.437789071969917
  },
  {
    "": 179,
    "title": "Does an #Ebola Outbreak Trump the #HIPAA #Privacy Rule? http://t.co/sRPjLFhusK",
    "pubdate": "11/12/2014 22:54:09",
    "Latitude": 18.638168593615706,
    "Longitude": -3.237027202025859
  },
  {
    "": 180,
    "title": "RT @whittington_amy: #climatechange and #Ebola to be discussed but only part of agenda @JoeHockey @TheSourceNews1",
    "pubdate": "11/12/2014 22:54:05",
    "Latitude": 17.38738039595615,
    "Longitude": -4.376679981622263
  },
  {
    "": 181,
    "title": "RT @wessmith123: The U.S. is now #Ebola Free! Fox must be FREAKING OUT! #UniteBlue #TNTweeters #LibCrib http://t.co/GmjcPnGgid http://t.co/…",
    "pubdate": "11/12/2014 22:54:02",
    "Latitude": 13.162917987673062,
    "Longitude": -2.5828494146395067
  },
  {
    "": 182,
    "title": "RT @neva9257: It’s been fun/awful playing at #OutbreakChat, but remember: donate to aid orgs working in #Ebola -affected countries http://t…",
    "pubdate": "11/12/2014 22:54:00",
    "Latitude": 12.427405910252542,
    "Longitude": -5.785328963742426
  },
  {
    "": 183,
    "title": "#climatechange and #Ebola to be discussed but only part of agenda @JoeHockey @TheSourceNews1",
    "pubdate": "11/12/2014 22:53:48",
    "Latitude": 16.528168996988853,
    "Longitude": -4.5032561163141995
  },
  {
    "": 184,
    "title": "RT @McCarthyism101: #Ebola is our beautiful creation.A Frankenstein we deliberately let loose from our laboratories. Our #Agenda21! Now suc…",
    "pubdate": "11/12/2014 22:53:44",
    "Latitude": 14.056014078488982,
    "Longitude": -4.135682503273378
  },
  {
    "": 185,
    "title": "@dancapper it’s more a comment on the fascination with experimental treatments in the #Ebola outbreak. @WhySharksMatter",
    "pubdate": "11/12/2014 22:53:43",
    "Latitude": 12.191142069187464,
    "Longitude": -5.553840471950222
  },
  {
    "": 186,
    "title": "How #Africa And Africans Are Responding To The #Ebola Crisis #liberia #epidemiology http://t.co/ioKVeFjTYr",
    "pubdate": "11/12/2014 22:53:32",
    "Latitude": 13.364456901175469,
    "Longitude": -5.534413918691062
  },
  {
    "": 187,
    "title": "RT @GlobalGenes: BREAKING NEWS! Twins with rare genetic disorder could hold clue to cure for #Ebola http://t.co/gtxRjG9Ol9 @HempelFamily #N…",
    "pubdate": "11/12/2014 22:53:15",
    "Latitude": 15.270916804080771,
    "Longitude": -5.87274880257337
  },
  {
    "": 188,
    "title": "RT @JohnFarrier: Wow... For every $1 you donate to fight #Ebola, @Google will donate $2: https://t.co/eo4K9xRl5K",
    "pubdate": "11/12/2014 22:53:09",
    "Latitude": 14.77267228600218,
    "Longitude": 0.6132437501195547
  },
  {
    "": 189,
    "title": "RT @neva9257: It’s been fun/awful playing at #OutbreakChat, but remember: donate to aid orgs working in #Ebola -affected countries http://t…",
    "pubdate": "11/12/2014 22:53:03",
    "Latitude": 13.236777799545191,
    "Longitude": -5.0454653708703505
  },
  {
    "": 190,
    "title": "RT @wef: What #economics can teach us about the spread of #Ebola http://t.co/OukaYQJg2R http://t.co/VQ6VQZGQyU",
    "pubdate": "11/12/2014 22:53:02",
    "Latitude": 16.191669990935985,
    "Longitude": -6.5686753827234
  },
  {
    "": 191,
    "title": "@rotary spoke to The Rotary Club of Atlantic City about #Ebola http://t.co/Zj9JiAZ17h",
    "pubdate": "11/12/2014 22:52:56",
    "Latitude": 16.16371887950241,
    "Longitude": -5.001758380926338
  },
  {
    "": 192,
    "title": "RT @archithFox46: Find out what\\'s being done to honor the 1st US patient who died from the #Ebola virus at 10 #charlotte #clt @myfoxdfw htt…",
    "pubdate": "11/12/2014 22:52:55",
    "Latitude": 16.257289477249003,
    "Longitude": -6.0039647687999045
  },
  {
    "": 193,
    "title": "RT @archithFox46: Find out what\\'s being done to honor the 1st US patient who died from the #Ebola virus at 10 #charlotte #clt @myfoxdfw htt…",
    "pubdate": "11/12/2014 22:52:55",
    "Latitude": 16.63811297532745,
    "Longitude": -0.7824569584996461
  },
  {
    "": 194,
    "title": "Online Homeland security: #Guinea - #Ebola #Virus #Disease http://t.co/1vbSeJfFyM",
    "pubdate": "11/12/2014 22:52:53",
    "Latitude": 17.82737955671271,
    "Longitude": -4.245636680286951
  },
  {
    "": 195,
    "title": "RT jsgaetano: #ImpeachPerry, he won\\'t #SealTheBorders. Plus he let #Ebola into the US! jhoffman2022",
    "pubdate": "11/12/2014 22:52:49",
    "Latitude": 13.320841662042607,
    "Longitude": -5.353047141781641
  },
  {
    "": 196,
    "title": "RT @ArdenBarry: Perspective: #Ebola is rampant in west Africa while American scientists are busy discovering the \\\"stupidity\\\" virus: http://…",
    "pubdate": "11/12/2014 22:52:48",
    "Latitude": 16.202762152086493,
    "Longitude": 0.21227010578502803
  },
  {
    "": 197,
    "title": "RT BreLink_12: RT _autumnbree: The real suspect in question is Cady Heron #MeanGirls #Ebola #TwitterJoke https://t.co/Ta7OM7UW0A",
    "pubdate": "11/12/2014 22:52:46",
    "Latitude": 14.751581568445463,
    "Longitude": -6.090311467388865
  },
  {
    "": 198,
    "title": "I\\'m Tumblin\\' to: http://t.co/BzMWRvGVu4#Ebola http://t.co/7pmP7LapI9",
    "pubdate": "11/12/2014 22:52:45",
    "Latitude": 14.68065031671152,
    "Longitude": -0.08014866732666981
  },
  {
    "": 199,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:52:43",
    "Latitude": 16.547533828402265,
    "Longitude": -6.2625066535681455
  },
  {
    "": 200,
    "title": "2014 #Ebola Outbreak in West #Africa @CDCgov http://t.co/3IAHxPjTC1 | Condolences to all those who lost loved ones http://t.co/DcbyKqaDzm",
    "pubdate": "11/12/2014 22:52:42",
    "Latitude": 15.972176291858087,
    "Longitude": -5.918499404815536
  },
  {
    "": 201,
    "title": "http://t.co/CVJbFdXUNu Planning a vacay? The UN highly Recommends these Premier #Ebola Destinations #Other Pandemic News",
    "pubdate": "11/12/2014 22:52:41",
    "Latitude": 15.990850572520698,
    "Longitude": -7.247281397905056
  },
  {
    "": 202,
    "title": "RT @neva9257: It’s been fun/awful playing at #OutbreakChat, but remember: donate to aid orgs working in #Ebola -affected countries http://t…",
    "pubdate": "11/12/2014 22:52:39",
    "Latitude": 13.651925103434722,
    "Longitude": -4.621052109106971
  },
  {
    "": 203,
    "title": "@NealHandel @GRMediaFirm @radar_online Time to stop gawking at the Kardashians and get to work on #Ebola and a #cleansexlife.",
    "pubdate": "11/12/2014 22:52:38",
    "Latitude": 11.357823627820434,
    "Longitude": -3.231687471885923
  },
  {
    "": 204,
    "title": "RT neva9257: It’s been fun/awful playing at #OutbreakChat, but remember: donate to aid orgs working in #Ebola -a... http://t.co/zGetRYEZhv",
    "pubdate": "11/12/2014 22:52:37",
    "Latitude": 15.553831744681474,
    "Longitude": -1.7227687031333208
  },
  {
    "": 205,
    "title": "RT @healthmap: ICYMI! Highlights of most recent @WHO #Ebola SitRep live at: http://t.co/0BC5W86Fv3 - 4 deaths in #Mali, 421 new cases in #S…",
    "pubdate": "11/12/2014 22:52:30",
    "Latitude": 12.344659171890084,
    "Longitude": -4.754184332046291
  },
  {
    "": 206,
    "title": "@CBS\\' #LaraLogan Self-Quarantines Following Trip To #Liberia - http://t.co/O0qTg2s3ut #Ebola",
    "pubdate": "11/12/2014 22:52:25",
    "Latitude": 18.157851281832574,
    "Longitude": -7.989535673589838
  },
  {
    "": 207,
    "title": "RT @picardonhealth: First Outbreak Quashed, #Ebola Reappears in #Mali  http://t.co/PfzAmGS78Z via @nytimes",
    "pubdate": "11/12/2014 22:52:22",
    "Latitude": 18.770735576609887,
    "Longitude": -2.88266645542977
  },
  {
    "": 208,
    "title": "Les Roberts – “Day 39: The plural of anecdote is not data” #Ebola http://t.co/BDLWSDxPQ9 http://t.co/P4qlBYj8bc",
    "pubdate": "11/12/2014 22:52:21",
    "Latitude": 14.193892169332353,
    "Longitude": -2.7619212302287073
  },
  {
    "": 209,
    "title": "#ImpeachPerry, he won\\'t #SealTheBorders. Plus he let #Ebola into the US! @jhoffman2022",
    "pubdate": "11/12/2014 22:52:10",
    "Latitude": 17.02934376079798,
    "Longitude": -0.8164500825669951
  },
  {
    "": 210,
    "title": "RT @_autumnbree: The real suspect in question is Cady Heron #MeanGirls #Ebola #TwitterJoke https://t.co/KYreJqQAuj",
    "pubdate": "11/12/2014 22:52:07",
    "Latitude": 18.495468759420977,
    "Longitude": -3.923091046441012
  },
  {
    "": 211,
    "title": "It’s been fun/awful playing at #OutbreakChat, but remember: donate to aid orgs working in #Ebola -affected countries http://t.co/MpKWDaqegz",
    "pubdate": "11/12/2014 22:51:58",
    "Latitude": 13.658856716926602,
    "Longitude": -2.0902380366118747
  },
  {
    "": 212,
    "title": "RT @tarahaelle: And remember, IRL the actual #Ebola outbreak is no joke. Three more cases in Mali. http://t.co/9BFHt5mV2X #OutbreakChat",
    "pubdate": "11/12/2014 22:51:42",
    "Latitude": 15.842059860729377,
    "Longitude": -6.883549986723834
  },
  {
    "": 213,
    "title": "RT @WHO: #Mali’s Ministry of Health has confirmed the country’s second #Ebola fatal case in a nurse who worked in Bamako http://t.co/oTsqKS…",
    "pubdate": "11/12/2014 22:51:23",
    "Latitude": 13.657655711153819,
    "Longitude": -5.104166922782608
  },
  {
    "": 214,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 22:51:19",
    "Latitude": 15.153340077919031,
    "Longitude": -6.801395664812554
  },
  {
    "": 215,
    "title": "I\\'m Tumblin\\' to: http://t.co/BzMWRvGVu4#ebola",
    "pubdate": "11/12/2014 22:51:16",
    "Latitude": 15.666032050810937,
    "Longitude": -6.2098561049302665
  },
  {
    "": 216,
    "title": "DRC: #Ebola Virus Disease DREF Operation n° MDRCD015 Operations update n° 1 http://t.co/tWW7aPnJXp via @reliefweb #DRC",
    "pubdate": "11/12/2014 22:51:15",
    "Latitude": 16.240761135816395,
    "Longitude": -2.8000882956515056
  },
  {
    "": 217,
    "title": "RT @buissonnierem: “@MSF: Any questions about #Ebola? Sign up for #MSF\\'s new e-learning platform about the virus http://t.co/WD2kxGESBA htt…",
    "pubdate": "11/12/2014 22:51:13",
    "Latitude": 16.486353149114997,
    "Longitude": -1.9616453998008518
  },
  {
    "": 218,
    "title": "RT @theIRC: From the front lines of the #Ebola crisis, a photo essay by @Peter_Biro on @dailybeast: http://t.co/JIpvAMs6Qb http://t.co/4GtE…",
    "pubdate": "11/12/2014 22:51:12",
    "Latitude": 16.096518506089,
    "Longitude": -3.9958271140676453
  },
  {
    "": 219,
    "title": "#HHS #Secretary #asks #agency #to #welcome #back #colleagues #returning #from #Ebola …: Health and Human Services… http://t.co/KveAB5c5u0",
    "pubdate": "11/12/2014 22:51:10",
    "Latitude": 14.68492469224865,
    "Longitude": -6.966858576108356
  },
  {
    "": 220,
    "title": "So it\\'s official, right? #Elections cure #Ebola.",
    "pubdate": "11/12/2014 22:51:08",
    "Latitude": 13.211388756974287,
    "Longitude": -2.4841118366224366
  },
  {
    "": 221,
    "title": "RT @tarahaelle: And remember, IRL the actual #Ebola outbreak is no joke. Three more cases in Mali. http://t.co/9BFHt5mV2X #OutbreakChat",
    "pubdate": "11/12/2014 22:51:06",
    "Latitude": 15.062368822265476,
    "Longitude": -3.8052648823007416
  },
  {
    "": 222,
    "title": "RT @PeterSinger: My latest Project Syndicate column is on #Ebola, our research priorities &amp; the #ethics of developing a new treatment http:…",
    "pubdate": "11/12/2014 22:50:55",
    "Latitude": 14.365423556069452,
    "Longitude": -3.6511195726161203
  },
  {
    "": 223,
    "title": "Online Homeland security: #Guinea - #Ebola #Virus #Disease http://t.co/nD7xXEP1wO",
    "pubdate": "11/12/2014 22:50:45",
    "Latitude": 14.023392430651711,
    "Longitude": -1.3015948305829057
  },
  {
    "": 224,
    "title": "RT @tarahaelle: And remember, IRL the actual #Ebola outbreak is no joke. Three more cases in Mali. http://t.co/9BFHt5mV2X #OutbreakChat",
    "pubdate": "11/12/2014 22:50:44",
    "Latitude": 13.740270347657171,
    "Longitude": -2.6017777171436283
  },
  {
    "": 225,
    "title": "The real suspect in question is Cady Heron #MeanGirls #Ebola #TwitterJoke https://t.co/KYreJqQAuj",
    "pubdate": "11/12/2014 22:50:37",
    "Latitude": 14.984371333353861,
    "Longitude": -3.9679787337831893
  },
  {
    "": 226,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:50:33",
    "Latitude": 16.400642981798985,
    "Longitude": -6.671323408407265
  },
  {
    "": 227,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:50:32",
    "Latitude": 16.136031092630695,
    "Longitude": -1.7793970213928638
  },
  {
    "": 228,
    "title": "And remember, IRL the actual #Ebola outbreak is no joke. Three more cases in Mali. http://t.co/9BFHt5mV2X #OutbreakChat",
    "pubdate": "11/12/2014 22:50:31",
    "Latitude": 11.193922331624496,
    "Longitude": -5.911236692164149
  },
  {
    "": 229,
    "title": "the #Ebola #outbreak only shows how poor the #healthcare system is in #Guinea . Now there\\'s some #motivation for a #publichealth #degree",
    "pubdate": "11/12/2014 22:50:26",
    "Latitude": 19.878058564587686,
    "Longitude": -4.144678157507444
  },
  {
    "": 230,
    "title": "RT @theOFDA: Big issue in #Ebola response is personal protective equip. @USAID launched grand challenge to make PPE safer http://t.co/Q5P4A…",
    "pubdate": "11/12/2014 22:50:25",
    "Latitude": 15.748741390954196,
    "Longitude": -4.033341564329482
  },
  {
    "": 231,
    "title": "Find out what\\'s being done to honor the 1st US patient (Thomas Eric Duncan) who died from the #Ebola virus in 10 mins #charlotte #clt @FOX4",
    "pubdate": "11/12/2014 22:50:22",
    "Latitude": 15.229309205701036,
    "Longitude": -4.12686875856749
  },
  {
    "": 232,
    "title": "@MSNBC\\'s Chris Hayes Rips Media ( @FoxNews @CNN)  For Fearmongering Concerning #Ebola - http://t.co/DWvFyDHkFu #UniteBlue @UniteBlue",
    "pubdate": "11/12/2014 22:50:20",
    "Latitude": 15.81283350842407,
    "Longitude": -1.5584007547384782
  },
  {
    "": 233,
    "title": "Clinician @DanKelly_MD returning from Sierra Leone \\\"more hopeful than ever\\\" that #Ebola will be eradicated http://t.co/LPxCjPJs0G via @UCSF",
    "pubdate": "11/12/2014 22:50:16",
    "Latitude": 14.115279100981276,
    "Longitude": -7.212522643177934
  },
  {
    "": 234,
    "title": "RT @ONEgirlswomen: MUST read: One in 7 women risk dying in childbirth in #Ebola-hit countries http://t.co/i7fSNOFgzG via @ReutersAfrica",
    "pubdate": "11/12/2014 22:50:14",
    "Latitude": 15.495202860795164,
    "Longitude": -4.365684671251323
  },
  {
    "": 235,
    "title": "RT @picardonhealth: First Outbreak Quashed, #Ebola Reappears in #Mali  http://t.co/PfzAmGS78Z via @nytimes",
    "pubdate": "11/12/2014 22:50:10",
    "Latitude": 16.247423337955137,
    "Longitude": -3.8435636912628635
  },
  {
    "": 236,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:50:06",
    "Latitude": 14.394494138758962,
    "Longitude": -0.2518969481926536
  },
  {
    "": 237,
    "title": "\\\"The End of #Racism\\\" http://t.co/50VHEHlS7o  #islam #Africa #Ebola #uk #USA #Christ #Nigeria #bible #jesus",
    "pubdate": "11/12/2014 22:50:05",
    "Latitude": 16.02785563575063,
    "Longitude": -4.593210822685647
  },
  {
    "": 238,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:50:04",
    "Latitude": 13.794663576003419,
    "Longitude": -6.887523553476825
  },
  {
    "": 239,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:50:03",
    "Latitude": 14.533860769166116,
    "Longitude": -6.369917861384723
  },
  {
    "": 240,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:50:02",
    "Latitude": 14.322941352483646,
    "Longitude": -8.730095764970002
  },
  {
    "": 241,
    "title": "Exploring This Season’s Continuity Experiment On #SouthPark http://t.co/mWgj3MSaaw via @UPROXX #Redskins #Ebola #Lorde #Freemium #TVbiz",
    "pubdate": "11/12/2014 22:50:01",
    "Latitude": 13.16849237291612,
    "Longitude": -5.042939896637514
  },
  {
    "": 242,
    "title": "Ask #G20 to stop companies #taxdodging NOW so poor countries can invest in healthcare! #TaxPower http://t.co/CpbX5V6Bzx #Ebola",
    "pubdate": "11/12/2014 22:49:48",
    "Latitude": 15.012901654499204,
    "Longitude": -1.0165801360044298
  },
  {
    "": 243,
    "title": "Top #US Officials ask #Congress 4 help 2 the tune of 6.2B for the fight against #Ebola http://t.co/a7swyPA3xk via @YahooNews",
    "pubdate": "11/12/2014 22:49:41",
    "Latitude": 17.76521010596914,
    "Longitude": 0.5882309776317296
  },
  {
    "": 244,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:49:35",
    "Latitude": 14.79827952919739,
    "Longitude": -2.6949422427319147
  },
  {
    "": 245,
    "title": "RT @nancylindborg: In fight against #Ebola, we MUST stay flexible &amp; agile - As @JeremyKonyndyk says  - we can\\'t take foot off gas pedal. ht…",
    "pubdate": "11/12/2014 22:49:33",
    "Latitude": 14.280974833023876,
    "Longitude": -0.06476824470994647
  },
  {
    "": 246,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:49:31",
    "Latitude": 16.446532455237744,
    "Longitude": -5.796832222505275
  },
  {
    "": 247,
    "title": "RT @CDCgov: #CDCintheField from Jana: Presenting outline of social mobilization activities to increase public awareness on #Ebola http://t.…",
    "pubdate": "11/12/2014 22:49:29",
    "Latitude": 16.287497761288716,
    "Longitude": -4.12853696093207
  },
  {
    "": 248,
    "title": "RT @CDCgov: Unsafe burial practices are a major cause of new #Ebola cases in Sierra Leone. This week\\'s #EbolaBigIdea is SAFE BURIALS SAVE L…",
    "pubdate": "11/12/2014 22:49:22",
    "Latitude": 16.282742228737582,
    "Longitude": -6.206630653465844
  },
  {
    "": 249,
    "title": ".....then, the #KimKardashian photo shoot was released and everyone forgot that they were terrified of #Ebola.",
    "pubdate": "11/12/2014 22:49:16",
    "Latitude": 11.259589924439199,
    "Longitude": -4.126124923364948
  },
  {
    "": 250,
    "title": "RT @picardonhealth: First Outbreak Quashed, #Ebola Reappears in #Mali  http://t.co/PfzAmGS78Z via @nytimes",
    "pubdate": "11/12/2014 22:49:14",
    "Latitude": 17.626343876254385,
    "Longitude": -3.756934861983444
  },
  {
    "": 251,
    "title": "RT @tweetybird2009: @AlverezAmanda I\\'m sure #Obama will try to get some of that 6.2 #billion to his country, just to keep #Ebola out!",
    "pubdate": "11/12/2014 22:49:14",
    "Latitude": 16.033075237635273,
    "Longitude": -2.373181557072606
  },
  {
    "": 252,
    "title": "RT @SavetheChildren: Your #Ebola donation will help now more than ever. @Google will give $2 for each $1 you donate http://t.co/D9lTC93NIy …",
    "pubdate": "11/12/2014 22:49:09",
    "Latitude": 18.704837121832092,
    "Longitude": -6.374657566570223
  },
  {
    "": 253,
    "title": "RT @CDCgov: Sierra Leone is fighting #Ebola and educating its residents one big idea at a time. This week\\'s #EbolaBigIdea is SAFE BURIALS S…",
    "pubdate": "11/12/2014 22:49:07",
    "Latitude": 14.018997853786734,
    "Longitude": -4.560123875344951
  },
  {
    "": 254,
    "title": "Find out what\\'s being done to honor the 1st US patient who died from the #Ebola virus at 10 #charlotte #clt @myfoxdfw http://t.co/yXr7fxK2rL",
    "pubdate": "11/12/2014 22:48:56",
    "Latitude": 14.374692911973405,
    "Longitude": -3.469916595946885
  },
  {
    "": 255,
    "title": "Our #hospital is safer since #Ebola #bonsecours #stfrancis",
    "pubdate": "11/12/2014 22:48:51",
    "Latitude": 14.296191738513084,
    "Longitude": -0.38705453657848565
  },
  {
    "": 256,
    "title": "#Ebola death toll tops 5,000; steep rise in Sierra Leone cases: WHO http://t.co/PgOHIkxHOr via @feedly",
    "pubdate": "11/12/2014 22:48:48",
    "Latitude": 14.827928058941005,
    "Longitude": -3.381006085408316
  },
  {
    "": 257,
    "title": "Interactive #Ebola outbreak timeline http://t.co/TkAhI4oeu6",
    "pubdate": "11/12/2014 22:48:45",
    "Latitude": 18.790546008727013,
    "Longitude": -5.479165523116537
  },
  {
    "": 258,
    "title": "ChuckCJohnson joins me #GOTNEWS #EBOLA #FERGUSON #UPDATES #TCOT LISTEN-&gt; http://t.co/AvEWODyU4R",
    "pubdate": "11/12/2014 22:48:36",
    "Latitude": 14.94886672297409,
    "Longitude": -4.494809865002378
  },
  {
    "": 259,
    "title": "Fun Fact: Bea told me she prefers hanging out with black boys instead of me, her Bestfriend. #ebola #wut",
    "pubdate": "11/12/2014 22:48:31",
    "Latitude": 16.363082328444392,
    "Longitude": -5.452029244802134
  },
  {
    "": 260,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:48:31",
    "Latitude": 14.792193283774708,
    "Longitude": -4.952546374233636
  },
  {
    "": 261,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 22:48:30",
    "Latitude": 12.753717394161173,
    "Longitude": -5.2476494938662706
  },
  {
    "": 262,
    "title": "RT @DavidFisman: @AMREFCanada thanks for an amazing and stimulating evening.  Great discussion on #ebola in context.",
    "pubdate": "11/12/2014 22:48:06",
    "Latitude": 15.950215174876615,
    "Longitude": -3.9164675761369265
  },
  {
    "": 263,
    "title": "RT @ONECampaign: SHOCKING: One in 7 women risk dying in #childbirth in #Ebola-hit countries  http://t.co/nf2gA7CQxC via @Reuters http://t.c…",
    "pubdate": "11/12/2014 22:48:06",
    "Latitude": 17.222107391456277,
    "Longitude": -5.018665558714311
  },
  {
    "": 264,
    "title": "RT @EbolaOutbreakUS: RT Minnesota loses track of people being Monitored for Ebola in #Minnesota ! http://t.co/64BJkQKcRG #Ebola Gander Moun…",
    "pubdate": "11/12/2014 22:47:52",
    "Latitude": 12.400756494713251,
    "Longitude": -3.4807160227760914
  },
  {
    "": 265,
    "title": "“@YouAintBaut_It: @kyledrane  😂😂😂😂😂😂😂” now get out my mentions and get to the doctor. #ebola",
    "pubdate": "11/12/2014 22:47:40",
    "Latitude": 14.83274008065659,
    "Longitude": -4.7036902162752305
  },
  {
    "": 266,
    "title": "First Outbreak Quashed, #Ebola Reappears in #Mali  http://t.co/PfzAmGS78Z via @nytimes",
    "pubdate": "11/12/2014 22:47:35",
    "Latitude": 17.08454875201495,
    "Longitude": -3.025213353453255
  },
  {
    "": 267,
    "title": "RT @Scrivener3: #Ebola Outbreak Deaths Pass 5,000TOTAL DEATHS = 5,160INFECTED = &gt; 14,000http://t.co/TDsJCuMtsG http://t.co/Z4hgwzgnBl",
    "pubdate": "11/12/2014 22:47:29",
    "Latitude": 16.838138005216738,
    "Longitude": -3.1280324395844916
  },
  {
    "": 268,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:47:22",
    "Latitude": 11.399272883117487,
    "Longitude": -5.895502355581755
  },
  {
    "": 269,
    "title": "Review Into £200K Academy Heads\\' Salaries http://t.co/eHZ9CqnZil #skynews #ebola #iphonewallpaper #hdwallpaper",
    "pubdate": "11/12/2014 22:46:56",
    "Latitude": 15.579399707487184,
    "Longitude": -2.952697554896111
  },
  {
    "": 270,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:46:44",
    "Latitude": 14.165349519612207,
    "Longitude": -5.483354968720752
  },
  {
    "": 271,
    "title": "RT @KentPage: Sierra Leone: #Ebola social mob work coordinated by @UNICEFSL has put out 200K posters, 40K factsheets &amp; 1.5M SMS http://t.co…",
    "pubdate": "11/12/2014 22:46:26",
    "Latitude": 16.146671276012945,
    "Longitude": -4.3886666864802155
  },
  {
    "": 272,
    "title": "@andrewwlittle: more important issues facing humanity? #Ebola #SyriaCrisis. If we can\\'t solve those, be thankful we can do #CometLanding",
    "pubdate": "11/12/2014 22:46:25",
    "Latitude": 15.330767907914066,
    "Longitude": -5.969499448858755
  },
  {
    "": 273,
    "title": "unbelievable RT @steve1johnson: This is staggering...Eyewitness to Hell: Life in #Ebola-Ravaged Liberia http://t.co/qvLGRQZIH6",
    "pubdate": "11/12/2014 22:46:16",
    "Latitude": 14.699536904552174,
    "Longitude": -5.9082003229921
  },
  {
    "": 274,
    "title": "RT @loudobbsnews: The #Obama WH needs $6.2B to fight #Ebola, but the @UN is only asking for $1B.  Sen @JohnBoozman explains #LouDobbsTonight",
    "pubdate": "11/12/2014 22:46:13",
    "Latitude": 19.4430908124084,
    "Longitude": -4.660384911439766
  },
  {
    "": 275,
    "title": "RT @PlexusVentures: #Fujifilm says its #flu drug is an #Ebola solution in waiting - @FierceBiotech: http://t.co/Hg81TiIGrc #biotech",
    "pubdate": "11/12/2014 22:46:06",
    "Latitude": 15.007636891613997,
    "Longitude": -4.287701366395319
  },
  {
    "": 276,
    "title": "@AHAhospitals urges Congress to dedicate funding for #hospital #Ebola preparedness http://t.co/y5O4VxKcwj",
    "pubdate": "11/12/2014 22:46:02",
    "Latitude": 14.325026721203871,
    "Longitude": -5.322607000591142
  },
  {
    "": 277,
    "title": "RT @WhySharksMatter: #ProTip Parents, believe your children when they talk about imaginary friends, they may be #ebola carriers. #OutbreakC…",
    "pubdate": "11/12/2014 22:45:46",
    "Latitude": 14.05269291805479,
    "Longitude": -4.664995815668364
  },
  {
    "": 278,
    "title": "Online Homeland security: #Sierra #Leone - #Ebola Virus Disease http://t.co/aqECv6lMu8",
    "pubdate": "11/12/2014 22:45:40",
    "Latitude": 19.040992623018553,
    "Longitude": -2.6098358106468833
  },
  {
    "": 279,
    "title": "RT @girlslovecj_: Hot Nigga Remix😂@Mrsamiamtv #shmoneyremix  #AfricansBeLike #Ebola https://t.co/AKJt61yLTl",
    "pubdate": "11/12/2014 22:45:33",
    "Latitude": 17.279504485970943,
    "Longitude": -0.7483347338567623
  },
  {
    "": 280,
    "title": "RT @blacklooks: A history of medical killers in #Africa #Ebola #HIV #poison #sterilisation http://t.co/5YMrdH0j86 cc @ducorwriter V/ @afriq…",
    "pubdate": "11/12/2014 22:45:30",
    "Latitude": 15.434392034177984,
    "Longitude": -3.8617044062898893
  },
  {
    "": 281,
    "title": "RT @WhySharksMatter: #ProTip Parents, believe your children when they talk about imaginary friends, they may be #ebola carriers. #OutbreakC…",
    "pubdate": "11/12/2014 22:45:28",
    "Latitude": 13.903100251293935,
    "Longitude": -1.7292989026122876
  },
  {
    "": 282,
    "title": "Be careful or you may catch \\'Fearbola\\' http://t.co/QMfz3HvUyg via @HuffPostCaLiv #cdnpoli #cdnhealth #ebola #publichealth #scicomms",
    "pubdate": "11/12/2014 22:45:22",
    "Latitude": 16.9583480960139,
    "Longitude": -5.25890936830117
  },
  {
    "": 283,
    "title": "Ebola Outbreaks Hot Spots💀http://t.co/lwD18ZJko1💀 #Ebola #Africa #RedCross #WHO #UN #USA #UK#Canada #Australia #RT",
    "pubdate": "11/12/2014 22:45:22",
    "Latitude": 11.631191220837529,
    "Longitude": -3.77954010730671
  },
  {
    "": 284,
    "title": "RT @YannMSF: #Ebola: #MSF Online Briefing Now Available to the Public  http://t.co/WqSnY8W8hL http://t.co/Qo9BVL3FrC",
    "pubdate": "11/12/2014 22:45:19",
    "Latitude": 13.3138960614646,
    "Longitude": -2.705257853681451
  },
  {
    "": 285,
    "title": "RT @ONECampaign: SHOCKING: One in 7 women risk dying in #childbirth in #Ebola-hit countries  http://t.co/nf2gA7CQxC via @Reuters http://t.c…",
    "pubdate": "11/12/2014 22:45:16",
    "Latitude": 18.985138650550518,
    "Longitude": -4.62602479314853
  },
  {
    "": 286,
    "title": "#Ebola victim Eric Duncan’s family has settled $$$ with Dallas hospital.TX has a cap on Frivolous lawsuits anyway.  http://t.co/NNcJ1yRC2M",
    "pubdate": "11/12/2014 22:45:09",
    "Latitude": 19.22380724434998,
    "Longitude": -4.569992705848333
  },
  {
    "": 287,
    "title": "RT @mercycorps: Skyrocketing food costs &amp; a decrease in income are part of the economic toll caused by #Ebola. Read more: http://t.co/Zv14Q…",
    "pubdate": "11/12/2014 22:45:06",
    "Latitude": 15.986502226413748,
    "Longitude": -6.436017225948717
  },
  {
    "": 288,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:45:04",
    "Latitude": 16.177380289851435,
    "Longitude": -1.767385794957637
  },
  {
    "": 289,
    "title": "RT @RT_com: #Ebola death toll surpasses 5,000 - WHO http://t.co/vdsIIjJoQE http://t.co/NvufkGGuCm",
    "pubdate": "11/12/2014 22:44:58",
    "Latitude": 12.99122404356795,
    "Longitude": 2.112431691253713
  },
  {
    "": 290,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:44:42",
    "Latitude": 15.603038155814431,
    "Longitude": -4.162807645236914
  },
  {
    "": 291,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:44:36",
    "Latitude": 16.50432949816217,
    "Longitude": -3.09195481448788
  },
  {
    "": 292,
    "title": "Online Homeland security: #Sierra #Leone - #Ebola Virus Disease http://t.co/k6cGqoKXcY",
    "pubdate": "11/12/2014 22:44:24",
    "Latitude": 18.644963054393934,
    "Longitude": -5.644829067201286
  },
  {
    "": 293,
    "title": "RT @CDCgov: #CDCintheField from Jana: Presenting outline of social mobilization activities to increase public awareness on #Ebola http://t.…",
    "pubdate": "11/12/2014 22:44:11",
    "Latitude": 16.999797338926406,
    "Longitude": -6.450437615821075
  },
  {
    "": 294,
    "title": "RT @PolitiFact: Release of NY doctor means there are no known cases of #Ebola in the U.S. Here\\'s our most recent checks on the virus. http:…",
    "pubdate": "11/12/2014 22:44:07",
    "Latitude": 14.60060498718858,
    "Longitude": -5.024884688693989
  },
  {
    "": 295,
    "title": "RT @WhySharksMatter: #ProTip Parents, believe your children when they talk about imaginary friends, they may be #ebola carriers. #OutbreakC…",
    "pubdate": "11/12/2014 22:44:01",
    "Latitude": 11.864783758462274,
    "Longitude": -5.555232577985992
  },
  {
    "": 296,
    "title": "#Ebola death toll passes 5000 - Belfast Telegraph http://t.co/MqicspyMnd",
    "pubdate": "11/12/2014 22:43:47",
    "Latitude": 14.109698631411804,
    "Longitude": -4.217414397819534
  },
  {
    "": 297,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:43:47",
    "Latitude": 15.100433940283434,
    "Longitude": -3.4139420736088795
  },
  {
    "": 298,
    "title": "RT @EbolaPlan: #Ebola Ebola: for-profit disaster capitalists are already out looking to make money f  http://t.co/pJ6a8MhvlO http://t.co/tl…",
    "pubdate": "11/12/2014 22:43:44",
    "Latitude": 16.489284387686556,
    "Longitude": -3.5936176630483487
  },
  {
    "": 299,
    "title": "RT @EI_EcoNewsfeed: .@EcoInternet Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/Zf5xs6ihnK *MORE @EI_Ebola http:/…",
    "pubdate": "11/12/2014 22:43:44",
    "Latitude": 17.174742448640664,
    "Longitude": -6.843252039553462
  },
  {
    "": 300,
    "title": "RT @MelissaTweets: If #Ebola and #Gruber tweet on Twitter and media ignores it, do they exist?",
    "pubdate": "11/12/2014 22:43:43",
    "Latitude": 15.043448559950532,
    "Longitude": -3.467892328841039
  },
  {
    "": 301,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:43:39",
    "Latitude": 12.866858613640472,
    "Longitude": -6.831987808400504
  },
  {
    "": 302,
    "title": "RT Minnesota loses track of people being Monitored for Ebola in #Minnesota ! http://t.co/64BJkQKcRG #Ebola Gander Mountain #mnwild #NYC",
    "pubdate": "11/12/2014 22:43:35",
    "Latitude": 12.99356060023287,
    "Longitude": -3.482969593316697
  },
  {
    "": 303,
    "title": "RT @advtecllc: @GulpClearWater  #technology to #STOP #EBOLA #savetheworldswater and our #Earth is here! http://t.co/bbh0Nbsgp1 WHO CARES? T…",
    "pubdate": "11/12/2014 22:43:21",
    "Latitude": 15.594551446787126,
    "Longitude": -4.020666518370705
  },
  {
    "": 304,
    "title": "RT @WhySharksMatter: #ProTip Parents, believe your children when they talk about imaginary friends, they may be #ebola carriers. #OutbreakC…",
    "pubdate": "11/12/2014 22:43:12",
    "Latitude": 13.450078400958493,
    "Longitude": -6.657288322096573
  },
  {
    "": 305,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:43:11",
    "Latitude": 10.50543464722044,
    "Longitude": -6.755414649615268
  },
  {
    "": 306,
    "title": "#OtherExcusesForDemLosses Libs were afaid #Ebola was in the voting booths",
    "pubdate": "11/12/2014 22:43:06",
    "Latitude": 17.168391347475204,
    "Longitude": -8.925037156281974
  },
  {
    "": 307,
    "title": "RT @gemhq: @BTCAgainstEbola uses #Bitcoin donations hub to reduce #remittance fees &amp; better fund the global fight against #Ebola http://t.c…",
    "pubdate": "11/12/2014 22:42:48",
    "Latitude": 14.465990400057832,
    "Longitude": -5.946542531265178
  },
  {
    "": 308,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:42:47",
    "Latitude": 17.59136348290109,
    "Longitude": -1.656017853848467
  },
  {
    "": 309,
    "title": "RT @CDCgov: Unsafe burial practices are a major cause of new #Ebola cases in Sierra Leone. This week\\'s #EbolaBigIdea is SAFE BURIALS SAVE L…",
    "pubdate": "11/12/2014 22:42:46",
    "Latitude": 17.582377713466677,
    "Longitude": -2.999853581790917
  },
  {
    "": 310,
    "title": "RT @duracelqc: PBO get elected, spike in gun sales, why are\\\"Whites\\\"men afraid? Healthcare heroes treating #Ebola patient, detained. Now #Fe…",
    "pubdate": "11/12/2014 22:42:43",
    "Latitude": 18.95505249374185,
    "Longitude": -10.567417554488781
  },
  {
    "": 311,
    "title": "RT @DrFriedenCDC: Emerging disease threats, incl #Ebola, remind us of the impt of detecting, controlling &amp; reporting diseases early &amp; effic…",
    "pubdate": "11/12/2014 22:42:42",
    "Latitude": 17.545688474495872,
    "Longitude": -0.3857150268786209
  },
  {
    "": 312,
    "title": "RT @RT_com: #Ebola death toll surpasses 5,000 - WHO http://t.co/vdsIIjJoQE http://t.co/NvufkGGuCm",
    "pubdate": "11/12/2014 22:42:37",
    "Latitude": 16.80622670053909,
    "Longitude": -3.1021671097192236
  },
  {
    "": 313,
    "title": "RT @Dr_Ran: #Ebola #NPC1 RT @physorg_com: Researchers find \\'key\\' used by ebola virus to unlock cells and spread deadly infection http://t.c…",
    "pubdate": "11/12/2014 22:42:18",
    "Latitude": 12.71393136924913,
    "Longitude": -3.821371379997768
  },
  {
    "": 314,
    "title": "RT @JermaineWatkins: This: See... I knew #Ebola was a bigger worldwide threat than they admitted at jump. http://t.co/rtKgzXzwjk",
    "pubdate": "11/12/2014 22:42:13",
    "Latitude": 17.320040967801397,
    "Longitude": -6.766555677218097
  },
  {
    "": 315,
    "title": "@NicoleCOP thought you might be interested in new data on private giving to #Ebola v. private giving for other crises http://t.co/adwvaZWGXX",
    "pubdate": "11/12/2014 22:42:08",
    "Latitude": 16.772214584001286,
    "Longitude": -2.3223955249987833
  },
  {
    "": 316,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 22:41:56",
    "Latitude": 16.759569322568055,
    "Longitude": -4.732349627481621
  },
  {
    "": 317,
    "title": "@ReIntonation also, Facebook is asking me for donations for #Ebola while it is clearly a #falseflag. You think I\\'m dum, @facebook?",
    "pubdate": "11/12/2014 22:41:55",
    "Latitude": 15.672498055643747,
    "Longitude": -2.655774095581112
  },
  {
    "": 318,
    "title": "RT @DrFriedenCDC: Sen. Bill Frist, MD: “No time for complacency” in must-read new op-ed on #Ebola response: http://t.co/mp6iNzT9LD @FoxNews",
    "pubdate": "11/12/2014 22:41:53",
    "Latitude": 13.968991834691245,
    "Longitude": -5.700863775270089
  },
  {
    "": 319,
    "title": "RT @MelissaTweets: If #Ebola and #Gruber tweet on Twitter and media ignores it, do they exist?",
    "pubdate": "11/12/2014 22:41:49",
    "Latitude": 16.21919401407756,
    "Longitude": -3.2074652011059124
  },
  {
    "": 320,
    "title": "#Ebola Ebola: for-profit disaster capitalists are already out looking to make money f  http://t.co/pJ6a8MhvlO http://t.co/tlKkcTHqN6",
    "pubdate": "11/12/2014 22:41:44",
    "Latitude": 16.80968220116251,
    "Longitude": -5.839393632173939
  },
  {
    "": 321,
    "title": "RT @Reslizumab: No evidence that the Ebola vaccine causes autism!👪👪👪👪#autism #aspergers #healthcare #CDCwhistleblower #Ebola👪👪👪👪http://…",
    "pubdate": "11/12/2014 22:41:39",
    "Latitude": 18.197294496565746,
    "Longitude": -4.790971928392509
  },
  {
    "": 322,
    "title": "RT @CDCgov: Sierra Leone is fighting #Ebola and educating its residents one big idea at a time. This week\\'s #EbolaBigIdea is SAFE BURIALS S…",
    "pubdate": "11/12/2014 22:41:19",
    "Latitude": 19.86025780416009,
    "Longitude": -5.671454683290476
  },
  {
    "": 323,
    "title": "RT @MoNscience Cld u walkthru #Ebola ward w/o catchng virus? video game could teach u how.http://t.co/uwluXlv8zr @nprGlobalHealth @shiftlabs",
    "pubdate": "11/12/2014 22:41:10",
    "Latitude": 16.134647241214275,
    "Longitude": -2.3643492258734105
  },
  {
    "": 324,
    "title": "RT @MoNscience Cld u walkthru #Ebola ward w/o catchng virus? video game could teach u how.http://t.co/DJNV8crBKv @nprGlobalHealth @shiftlabs",
    "pubdate": "11/12/2014 22:41:10",
    "Latitude": 17.352396366787932,
    "Longitude": -5.5685336431204595
  },
  {
    "": 325,
    "title": "A history of medical killers in #Africa #Ebola #HIV #poison #sterilisation http://t.co/5YMrdH0j86 cc @ducorwriter V/ @afriquiana86",
    "pubdate": "11/12/2014 22:41:06",
    "Latitude": 15.130019471599326,
    "Longitude": -3.937206377645872
  },
  {
    "": 326,
    "title": "#ProTip Parents, believe your children when they talk about imaginary friends, they may be #ebola carriers. #OutbreakChat",
    "pubdate": "11/12/2014 22:41:05",
    "Latitude": 14.374212520914043,
    "Longitude": -6.457149262968462
  },
  {
    "": 327,
    "title": "#Ebola Fears, Start Of #Flu Season Spur Jump In Sales For Clorox Disinfectant Wipes http://t.co/ZShy3KwXgE #data #cbssf #virus #health",
    "pubdate": "11/12/2014 22:40:59",
    "Latitude": 14.205657330655246,
    "Longitude": -3.024054391220596
  },
  {
    "": 328,
    "title": "RT @JermaineWatkins: This: See... I knew #Ebola was a bigger worldwide threat than they admitted at jump. http://t.co/rtKgzXzwjk",
    "pubdate": "11/12/2014 22:40:58",
    "Latitude": 10.255248569337994,
    "Longitude": -3.852551191045779
  },
  {
    "": 329,
    "title": "RT @archietse: After weeks of fewer #Ebola cases in Liberia, @WHO says it appears “trend is real” http://t.co/cHEArMXp33 http://t.co/RRjtnf…",
    "pubdate": "11/12/2014 22:40:57",
    "Latitude": 15.110733757062672,
    "Longitude": -3.113346567677872
  },
  {
    "": 330,
    "title": "Fake \\\"pandemics\\\" are another game of mind control!http://t.co/nN0IdWpmIn #news #fraud #lies #TGDN #pjnet #tcot #ccot #waar #ebola",
    "pubdate": "11/12/2014 22:40:56",
    "Latitude": 13.714159775411103,
    "Longitude": -4.348508050263722
  },
  {
    "": 331,
    "title": "I don\\'t understand the fuss over the #CometLanding. Surely there are infinitely more important issues facing humanity. #Ebola #SyriaCrisis",
    "pubdate": "11/12/2014 22:40:48",
    "Latitude": 16.9483932930687,
    "Longitude": -4.890484391995651
  },
  {
    "": 332,
    "title": "@danieltosh until you cute #ebola I\\'m only watching reruns. I\\'m that cool.",
    "pubdate": "11/12/2014 22:40:42",
    "Latitude": 16.95815172691417,
    "Longitude": -3.325908511323645
  },
  {
    "": 333,
    "title": "Online Homeland security: #Senegal - #Ebola Virus Disease http://t.co/1awbnLEr2k",
    "pubdate": "11/12/2014 22:40:37",
    "Latitude": 16.818087800894222,
    "Longitude": -5.838058940578723
  },
  {
    "": 334,
    "title": "Watching @SouthPark #RandyIsLorde #alexfromtarget #rachelfromwalgreens #hashtag #Ebola",
    "pubdate": "11/12/2014 22:40:35",
    "Latitude": 16.189488611428157,
    "Longitude": -6.1641816924036235
  },
  {
    "": 335,
    "title": "RT @AllergyKidsDoc: Actual discussion:Parent \\\"I want #Ebola vaccine for my child\\\"Doc \\\"There isn\\'t one, but we have #flushot\\\"Parent \\\"We d…",
    "pubdate": "11/12/2014 22:40:23",
    "Latitude": 11.225940315944586,
    "Longitude": -4.32479057391556
  },
  {
    "": 336,
    "title": "@AMREFCanada thanks for an amazing and stimulating evening.  Great discussion on #ebola in context.",
    "pubdate": "11/12/2014 22:40:23",
    "Latitude": 11.81730484054655,
    "Longitude": -4.445428569346407
  },
  {
    "": 337,
    "title": "#Ebola Outbreak Deaths Pass 5,000TOTAL DEATHS = 5,160INFECTED = &gt; 14,000http://t.co/TDsJCuMtsG http://t.co/Z4hgwzgnBl",
    "pubdate": "11/12/2014 22:40:19",
    "Latitude": 13.681280520783996,
    "Longitude": -4.327189526047826
  },
  {
    "": 338,
    "title": "This: See... I knew #Ebola was a bigger worldwide threat than they admitted at jump. http://t.co/rtKgzXzwjk",
    "pubdate": "11/12/2014 22:40:16",
    "Latitude": 16.574286652040918,
    "Longitude": -6.549733765795976
  },
  {
    "": 339,
    "title": "Heat limits time doctors can spend in PPE to treat #ebola patients. @USAID @WhiteHouse challenge: design better suit http://t.co/9pkHzixmWB",
    "pubdate": "11/12/2014 22:40:09",
    "Latitude": 20.462218225042996,
    "Longitude": -5.374537958881148
  },
  {
    "": 340,
    "title": "RT @hp_ems: We\\'re so bad at assessing real risk. #Ebola http://t.co/4x5zPkA8JK via @Cowan4President",
    "pubdate": "11/12/2014 22:40:08",
    "Latitude": 15.85461543719861,
    "Longitude": -5.257607912083593
  },
  {
    "": 341,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:39:54",
    "Latitude": 15.265018307853039,
    "Longitude": -5.470015904878741
  },
  {
    "": 342,
    "title": "Perspective: #Ebola is rampant in west Africa while American scientists are busy discovering the \\\"stupidity\\\" virus: http://t.co/dGyGmB8fGI",
    "pubdate": "11/12/2014 22:39:52",
    "Latitude": 11.486028200265984,
    "Longitude": -2.1307665930473703
  },
  {
    "": 343,
    "title": "RT @Oritavancin: No evidence the Ebola vaccine causes autism!#autism #aspergers #Psychiatry #healthcare #CDCwhistleblower #ebolahttp://…",
    "pubdate": "11/12/2014 22:39:42",
    "Latitude": 12.822467406589471,
    "Longitude": -3.1759786526236593
  },
  {
    "": 344,
    "title": "PBO get elected, spike in gun sales, why are\\\"Whites\\\"men afraid? Healthcare heroes treating #Ebola patient, detained. Now #Ferguson WTH, w/RW",
    "pubdate": "11/12/2014 22:39:37",
    "Latitude": 16.313956695658515,
    "Longitude": -6.968549686026048
  },
  {
    "": 345,
    "title": "RT @KCBSNews: #Ebola fears, start of #flu season spur jump in sales for Clorox disinfectant wipes http://t.co/pFERvhzM1c",
    "pubdate": "11/12/2014 22:39:09",
    "Latitude": 15.413947209179788,
    "Longitude": -3.772858008516435
  },
  {
    "": 346,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:39:07",
    "Latitude": 14.791037098971643,
    "Longitude": -6.436721053920131
  },
  {
    "": 347,
    "title": "RT @AMREFCanada: @DavidFisman giving the #AmrefCoffehouse crowd an overview of Ebola -it\\'s history, how it is spread #Ebola",
    "pubdate": "11/12/2014 22:39:06",
    "Latitude": 15.270100874966504,
    "Longitude": -5.802704961632944
  },
  {
    "": 348,
    "title": "Online Homeland security: #Senegal - #Ebola Virus Disease http://t.co/z3DP2aIsQF",
    "pubdate": "11/12/2014 22:39:05",
    "Latitude": 14.541414266476009,
    "Longitude": -4.251847782883376
  },
  {
    "": 349,
    "title": "RT @AskCheyB: VIDEO: #EbolaLoveStory Can #CraigSpencer #MorganDixon romance survive #Ebola? http://t.co/XgjA2A1opL  @ChasingNJ @FOX29philly…",
    "pubdate": "11/12/2014 22:38:59",
    "Latitude": 17.050335020386616,
    "Longitude": -5.931526539328246
  },
  {
    "": 350,
    "title": "RT @EI_EcoNewsfeed: .@EcoInternet Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/Zf5xs6ihnK *MORE @EI_Ebola http:/…",
    "pubdate": "11/12/2014 22:38:42",
    "Latitude": 16.34781093688198,
    "Longitude": -2.2764228101970003
  },
  {
    "": 351,
    "title": "RT @AllergyKidsDoc: Actual discussion:Parent \\\"I want #Ebola vaccine for my child\\\"Doc \\\"There isn\\'t one, but we have #flushot\\\"Parent \\\"We d…",
    "pubdate": "11/12/2014 22:38:29",
    "Latitude": 14.056738875284513,
    "Longitude": -2.35540281168449
  },
  {
    "": 352,
    "title": "RT @africarenewal: #WestAfrica on brink of major food crisis in wake of #Ebola outbreak, warns UN special rapporteur http://t.co/5MN3mYeGmw…",
    "pubdate": "11/12/2014 22:38:21",
    "Latitude": 12.756342283025104,
    "Longitude": -4.515439509356475
  },
  {
    "": 353,
    "title": "I\\'m not a nurse or MD but would want to help on the ground in west Africa in the #ebola fight. But how @msf ?",
    "pubdate": "11/12/2014 22:38:19",
    "Latitude": 17.323802692755585,
    "Longitude": -2.61354932199506
  },
  {
    "": 354,
    "title": "Swimming, touching, and per diems - stories from the #Ebola response in West Africa. https://t.co/owxFcSe2FC on @aid_leap",
    "pubdate": "11/12/2014 22:38:16",
    "Latitude": 16.647818323467728,
    "Longitude": -1.374788389382275
  },
  {
    "": 355,
    "title": "#pray #hope #Ebola #victims #death #toll #outbreak #rises African - Hope - Devotion riddim [Tribute Song ] http://t.co/uRemrmxPc2",
    "pubdate": "11/12/2014 22:38:09",
    "Latitude": 18.725516261412036,
    "Longitude": -4.939695689866538
  },
  {
    "": 356,
    "title": "UAB nixes university-funded trips Sierra Leone, Guinea, Liberia over #ebola concerns http://t.co/nDj0PwSbVX http://t.co/LWS2osweBt",
    "pubdate": "11/12/2014 22:38:08",
    "Latitude": 15.29770051011062,
    "Longitude": -1.1850389565952
  },
  {
    "": 357,
    "title": "RT @EI_EcoNewsfeed: .@EcoInternet Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/Zf5xs6ihnK *MORE @EI_Ebola http:/…",
    "pubdate": "11/12/2014 22:38:05",
    "Latitude": 14.747142563639942,
    "Longitude": -2.670414217543418
  },
  {
    "": 358,
    "title": "People talking about #EBOLA is getting annoying",
    "pubdate": "11/12/2014 22:38:04",
    "Latitude": 15.446905779701552,
    "Longitude": -4.292445332975718
  },
  {
    "": 359,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:38:03",
    "Latitude": 15.118087056879354,
    "Longitude": -4.537235233403749
  },
  {
    "": 360,
    "title": "This is #BS. Can the USA sue Duncan\\'s estate for bring #Ebola here? How bout the 2 nurses who got sick. #FHim https://t.co/8iT2qE2IN3",
    "pubdate": "11/12/2014 22:38:00",
    "Latitude": 18.07634056193593,
    "Longitude": -2.303656272596119
  },
  {
    "": 361,
    "title": "RT @WhySharksMatter: Interesting, some of the symptoms of #Ebola (bleeding from eyes, passing out, vomit) are also symptoms of watching thi…",
    "pubdate": "11/12/2014 22:37:40",
    "Latitude": 19.1832931775381,
    "Longitude": -3.199000224117687
  },
  {
    "": 362,
    "title": "RT @WhySharksMatter: Interesting, some of the symptoms of #Ebola (bleeding from eyes, passing out, vomit) are also symptoms of watching thi…",
    "pubdate": "11/12/2014 22:37:38",
    "Latitude": 10.002579587922275,
    "Longitude": -1.3367475661316872
  },
  {
    "": 363,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:37:32",
    "Latitude": 15.792843510437157,
    "Longitude": -7.853964277912185
  },
  {
    "": 364,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:37:31",
    "Latitude": 16.27614788309943,
    "Longitude": -3.6391766284084675
  },
  {
    "": 365,
    "title": "Interesting, some of the symptoms of #Ebola (bleeding from eyes, passing out, vomit) are also symptoms of watching this movie #OutbreakChat",
    "pubdate": "11/12/2014 22:37:28",
    "Latitude": 15.05407820903225,
    "Longitude": -4.9999179999968675
  },
  {
    "": 366,
    "title": "RT @hniman: #Ebola nosocomial cluster in Pasteur Clinic in Bamako Mali grows to five #EbolaOutbreak CIDRAP http://t.co/3BtjBU0Cc9",
    "pubdate": "11/12/2014 22:37:25",
    "Latitude": 12.143525642155216,
    "Longitude": -3.6534592993631585
  },
  {
    "": 367,
    "title": "RT @EI_EcoNewsfeed: .@EcoInternet Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/Zf5xs6ihnK *MORE @EI_Ebola http:/…",
    "pubdate": "11/12/2014 22:36:38",
    "Latitude": 14.44888590614796,
    "Longitude": -4.6837021956367755
  },
  {
    "": 368,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:36:38",
    "Latitude": 19.42303237915502,
    "Longitude": -5.9217313898065385
  },
  {
    "": 369,
    "title": "RT @bill_easterly: Bono brings back ‘Do They Know It’s Christmas?’ 4 #Ebola; it wasn\\'t insulting enough the 1st time. http://t.co/xAEMEznZUK",
    "pubdate": "11/12/2014 22:36:35",
    "Latitude": 15.42929790753969,
    "Longitude": -6.3213391492804565
  },
  {
    "": 370,
    "title": "\\\"@RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/fQlbLT0T6u http://t.co/G4XOzXZrpa\\\",\"\\\"@RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/fQlbLT0T6u http://t.co/G4XOzXZrpa\\\",\"Twitter for Android",
    "pubdate": "11/12/2014 22:36:35",
    "Latitude": 17.59033262352489,
    "Longitude": -5.901278576141595
  },
  {
    "": 371,
    "title": "RT @UNFPA: .@UNFPA is recruiting skilled maternal health volunteers to serve in #Ebola affected countries. Interested? http://t.co/MT3mdRna…",
    "pubdate": "11/12/2014 22:36:34",
    "Latitude": 13.250644260777175,
    "Longitude": -6.364752089849697
  },
  {
    "": 372,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:36:31",
    "Latitude": 13.188295096099816,
    "Longitude": -9.35045398967429
  },
  {
    "": 373,
    "title": "@cnnbrk @CNN @FOXTV @msnbc did we fix #Ebola ? We\\'ve been awfully quiet after the elections...hmm",
    "pubdate": "11/12/2014 22:36:28",
    "Latitude": 12.747373744358702,
    "Longitude": -2.9155994640073195
  },
  {
    "": 374,
    "title": "#WeCanLandOnACometButWeCant cure #ebola",
    "pubdate": "11/12/2014 22:36:25",
    "Latitude": 11.720613055590126,
    "Longitude": -3.6735463084365536
  },
  {
    "": 375,
    "title": "RT @jasonwheelertv: Looked thru #Ebola lawsuit. No damage amount was specified. And still no word on the amount of settlement between Dunca…",
    "pubdate": "11/12/2014 22:36:17",
    "Latitude": 13.000231232900322,
    "Longitude": -3.8647567500196
  },
  {
    "": 376,
    "title": "Not ONE case of #Ebola in America presently.\nSurprised? You've been watching TV 'news', then.\nThere's your problem.",
    "pubdate": "11/12/2014 22:36:14",
    "Latitude": 15.34861829517375,
    "Longitude": -1.8373049473039393
  },
  {
    "": 377,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:36:11",
    "Latitude": 18.253941746709877,
    "Longitude": -1.9599312347561724
  },
  {
    "": 378,
    "title": "Sobering re #HIV lessons from @H20Melb 14 die a day in Oct 2014 in west Africa from #ebola but 685 on same day from #HIV/AIDS",
    "pubdate": "11/12/2014 22:36:04",
    "Latitude": 14.157353034537081,
    "Longitude": -4.416371664585019
  },
  {
    "": 379,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:35:59",
    "Latitude": 16.224889805307175,
    "Longitude": -5.631939073589429
  },
  {
    "": 380,
    "title": "\\\"@RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/RqQFhm3uRL http://t.co/9mDrtnOJFK\\\",\"\\\"@RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/RqQFhm3uRL http://t.co/9mDrtnOJFK\\\",\"Twitter for Android",
    "pubdate": "11/12/2014 22:35:57",
    "Latitude": 13.827895585207159,
    "Longitude": -4.135098962678864
  },
  {
    "": 381,
    "title": "Next week should be a lot of fun… #amnesty, #Fergsuon, #ebola, #Benghazi , #irs, #holder",
    "pubdate": "11/12/2014 22:35:54",
    "Latitude": 15.987530077694927,
    "Longitude": -7.710726071123442
  },
  {
    "": 382,
    "title": "RT @mercycorps: Skyrocketing food costs &amp; a decrease in income are part of the economic toll caused by #Ebola. Read more: http://t.co/Zv14Q…",
    "pubdate": "11/12/2014 22:35:39",
    "Latitude": 13.47893494189551,
    "Longitude": -5.6716235414982865
  },
  {
    "": 383,
    "title": "RT @YaThinkN: Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gp…",
    "pubdate": "11/12/2014 22:35:35",
    "Latitude": 16.618387411204765,
    "Longitude": -4.914133296877632
  },
  {
    "": 384,
    "title": "RT @BPForumMag: \\\"The virus is more nimble than the human response to it.\\\" Govts &amp;orgs strive to be as agile as #Ebola http://t.co/FN59LYlKch",
    "pubdate": "11/12/2014 22:35:09",
    "Latitude": 17.535717242629676,
    "Longitude": -4.650111351683106
  },
  {
    "": 385,
    "title": "#Ebola Death Toll More Than 2,900 —WHO... http://t.co/vipFPVodvG #ebolatreatment #ebolavictims",
    "pubdate": "11/12/2014 22:35:07",
    "Latitude": 18.107634531730604,
    "Longitude": -3.840255787238663
  },
  {
    "": 386,
    "title": "#Ebola Could Strike 20,000 In... http://t.co/QR4WRlWHIk #StudyonEbola",
    "pubdate": "11/12/2014 22:35:07",
    "Latitude": 16.515031603138972,
    "Longitude": -3.4774417131714364
  },
  {
    "": 387,
    "title": "#Ebola #Imam : 28 health care workers had contact with the deceased patient at the Clinic in #Bamako are being placed under observation.",
    "pubdate": "11/12/2014 22:35:06",
    "Latitude": 13.167396550992539,
    "Longitude": -4.087108060036761
  },
  {
    "": 388,
    "title": "Online Homeland security: #Nigeria - #Ebola Virus Disease http://t.co/20uQSIhYkh",
    "pubdate": "11/12/2014 22:34:40",
    "Latitude": 13.506476465898606,
    "Longitude": -5.967354117081147
  },
  {
    "": 389,
    "title": "RT @hp_ems: We\\'re so bad at assessing real risk. #Ebola http://t.co/4x5zPkA8JK via @Cowan4President",
    "pubdate": "11/12/2014 22:34:40",
    "Latitude": 11.984573257514429,
    "Longitude": -5.340187339448244
  },
  {
    "": 390,
    "title": "#ebola Ebola: for-profit disaster capitalists are already out looking to make money from misery | Antony Loewenstein http://t.co/x14hDFjfAd",
    "pubdate": "11/12/2014 22:34:39",
    "Latitude": 14.813901640716832,
    "Longitude": -4.210618807649497
  },
  {
    "": 391,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:34:26",
    "Latitude": 14.91359999604415,
    "Longitude": -3.7981597713488884
  },
  {
    "": 392,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:34:26",
    "Latitude": 19.43163064341085,
    "Longitude": -3.7702342446331065
  },
  {
    "": 393,
    "title": "Thank you @antloewenstein about bloody time #Ebola profiteering at expense of qualified NGO was pointed out :( http://t.co/gpuCjNJZyL",
    "pubdate": "11/12/2014 22:34:22",
    "Latitude": 16.08870045695077,
    "Longitude": -7.687094010689856
  },
  {
    "": 394,
    "title": "RT @AJConsiderThis: Was the panic over #Ebola more virulent than the disease? http://t.co/LINv5xsMsm @VUMChealth\\'s Dr. William Schaffner jo…",
    "pubdate": "11/12/2014 22:33:41",
    "Latitude": 11.064007116234318,
    "Longitude": -3.60181977669111
  },
  {
    "": 395,
    "title": "Online Homeland security: #Nigeria - #Ebola Virus Disease http://t.co/zGOQlcgOcr",
    "pubdate": "11/12/2014 22:33:37",
    "Latitude": 14.62473117839617,
    "Longitude": -4.642314133725171
  },
  {
    "": 396,
    "title": "#EBOLA has been trending 30min on the OUTBREAK page http://t.co/3P1gzZ03k7 #Tweetzup",
    "pubdate": "11/12/2014 22:33:29",
    "Latitude": 14.933820412234496,
    "Longitude": -4.619783146502936
  },
  {
    "": 397,
    "title": "RT @MelissaTweets: If #Ebola and #Gruber tweet on Twitter and media ignores it, do they exist?",
    "pubdate": "11/12/2014 22:33:25",
    "Latitude": 18.440586058746465,
    "Longitude": -3.5570870091578057
  },
  {
    "": 398,
    "title": "RT @WSJ: Behind the scenes at Bellevue’s #Ebola treatment ward: http://t.co/4Ee7DpsR3B http://t.co/CW8eIXjRfu",
    "pubdate": "11/12/2014 22:33:23",
    "Latitude": 11.987420886320933,
    "Longitude": -5.588613650646989
  },
  {
    "": 399,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:33:19",
    "Latitude": 18.755788974453466,
    "Longitude": -6.4520238629297895
  },
  {
    "": 400,
    "title": "#Ebola Victim\\'s Family Agree Deal With Hospital http://t.co/jKAOlgPsh4",
    "pubdate": "11/12/2014 22:33:15",
    "Latitude": 10.723363141472635,
    "Longitude": -7.3995796713264514
  },
  {
    "": 401,
    "title": "#Ebola outbreak deaths pass 5000 - BBC News http://t.co/AdrXxBwatt",
    "pubdate": "11/12/2014 22:33:14",
    "Latitude": 13.754702648111456,
    "Longitude": -1.4996637619088635
  },
  {
    "": 402,
    "title": "#EBOLA: #Minister Claims #U.S. #Scientists Created #Race-Based #Bioweapons: http://t.co/8OZAJv1Qo5 via @YouTube #populationcontrol #class",
    "pubdate": "11/12/2014 22:33:11",
    "Latitude": 17.717273418715976,
    "Longitude": -5.0491476534152975
  },
  {
    "": 403,
    "title": "RT @theOFDA: 30 metric tons of personal protective equip arrives in #Liberia to protect healthcare workers on frontlines of #Ebola http://t…",
    "pubdate": "11/12/2014 22:33:11",
    "Latitude": 14.389559327816126,
    "Longitude": -1.9696105701678257
  },
  {
    "": 404,
    "title": "RT @MelissaTweets: If #Ebola and #Gruber tweet on Twitter and media ignores it, do they exist?",
    "pubdate": "11/12/2014 22:33:01",
    "Latitude": 14.882545986575304,
    "Longitude": -5.662121424874225
  },
  {
    "": 405,
    "title": "#Ebola In 3-D: A Video Game To Guide Health Care Workers Through A Ward http://t.co/ogKwVpZErQ",
    "pubdate": "11/12/2014 22:32:51",
    "Latitude": 17.695738514616544,
    "Longitude": -4.580645422324164
  },
  {
    "": 406,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:32:35",
    "Latitude": 18.142204678768092,
    "Longitude": -4.521703324909627
  },
  {
    "": 407,
    "title": "RT @TheTakeaway: There are a number of conspiracy theories in W. Africa about #Ebola,  says @hirondelleus. Fear is hard to fight. http://t.…",
    "pubdate": "11/12/2014 22:32:33",
    "Latitude": 15.34104312175523,
    "Longitude": -5.967102420093923
  },
  {
    "": 408,
    "title": "RT @Reslizumab: No evidence that the Ebola vaccine causes autism!👪👪👪👪#autism #aspergers #healthcare #CDCwhistleblower #Ebola👪👪👪👪http://…",
    "pubdate": "11/12/2014 22:32:33",
    "Latitude": 17.92693199354717,
    "Longitude": -0.35921494295834444
  },
  {
    "": 409,
    "title": "Eco: Mali confirms its second and third #Ebola deaths: Washington Post: Two more people -- a patient from Guin... http://t.co/3ghvwcCDJN",
    "pubdate": "11/12/2014 22:32:28",
    "Latitude": 12.825557592401829,
    "Longitude": -3.2151820119137353
  },
  {
    "": 410,
    "title": "If #Ebola and #Gruber tweet on Twitter and media ignores it, do they exist?",
    "pubdate": "11/12/2014 22:32:22",
    "Latitude": 18.266037238069472,
    "Longitude": -6.171953122090067
  },
  {
    "": 411,
    "title": "#Ebola: The need to act, rather than respond http://t.co/yxP5sN9YwW @kevinmd #health #healthcare #medicine",
    "pubdate": "11/12/2014 22:32:18",
    "Latitude": 18.990067443217697,
    "Longitude": -7.1214461052153695
  },
  {
    "": 412,
    "title": "\\\"#Ebola: for-profit #disastercapitalists are already out looking to make money from misery\\\" #predatorycapitalismhttp://t.co/U30KOEkQGv",
    "pubdate": "11/12/2014 22:32:14",
    "Latitude": 15.266095399359807,
    "Longitude": -4.751625429230334
  },
  {
    "": 413,
    "title": "#Ebola Vaccine Trials to Start in West Africa http://t.co/M0bZTPY4RJ",
    "pubdate": "11/12/2014 22:32:12",
    "Latitude": 16.745815197153078,
    "Longitude": -9.178150683132248
  },
  {
    "": 414,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:32:10",
    "Latitude": 14.009966495800574,
    "Longitude": -5.897340829912304
  },
  {
    "": 415,
    "title": "#Ebola #Imam in #Bamako infected not only a nurse, but also a Doctor. His son, his brother&amp; 2th wife. His 1th wife, daughter and friend died",
    "pubdate": "11/12/2014 22:32:08",
    "Latitude": 14.289116131059691,
    "Longitude": -6.665088126802966
  },
  {
    "": 416,
    "title": "RT @AfricaACSS: As #Mali faces a new #Ebola outbreak, Nigeria and Uganda offer important lessons in stopping it early: http://t.co/Kiqq44de…",
    "pubdate": "11/12/2014 22:31:57",
    "Latitude": 17.319960071590128,
    "Longitude": -4.444153431124649
  },
  {
    "": 417,
    "title": "Congressman #Duffy talks about #Ebola research funding - Nov 12 @ 9:31 PM ET http://t.co/ZahgziUwFb",
    "pubdate": "11/12/2014 22:31:56",
    "Latitude": 17.967965189964282,
    "Longitude": -4.036691527656092
  },
  {
    "": 418,
    "title": "@juliarose67890 @cass_rogerss no school for you too #ebola",
    "pubdate": "11/12/2014 22:31:31",
    "Latitude": 18.90847434856648,
    "Longitude": -5.842188973735238
  },
  {
    "": 419,
    "title": "Nurses March, Demand Better #Ebola Protection http://t.co/78YDSKlEQx",
    "pubdate": "11/12/2014 22:31:22",
    "Latitude": 19.471276075641487,
    "Longitude": -4.258874350812862
  },
  {
    "": 420,
    "title": "RT @KNX1070: #Ebola Fears, Start Of Flu Season Spur Jump In Sales For #Clorox Disinfectant Wipes http://t.co/iwWZe8ERWd",
    "pubdate": "11/12/2014 22:31:11",
    "Latitude": 18.29410268836558,
    "Longitude": -4.515734618007927
  },
  {
    "": 421,
    "title": "News: This is the largest #Ebola outbreak ever recorded, with more than 14,000 people... http://t.co/AaakE3rOru",
    "pubdate": "11/12/2014 22:31:01",
    "Latitude": 16.652081073925782,
    "Longitude": -5.926187042602139
  },
  {
    "": 422,
    "title": "Skyrocketing food costs &amp; a decrease in income are part of the economic toll caused by #Ebola. Read more: http://t.co/Zv14QrHhS2",
    "pubdate": "11/12/2014 22:30:28",
    "Latitude": 16.256598026423426,
    "Longitude": -4.332586947374315
  },
  {
    "": 423,
    "title": "RT @genophilia: RT if you are sick of Obama exposing our children to foreign diseases. #EVD68 #Ebola #EbolaOutbreak #uniteblue http://t.co/…",
    "pubdate": "11/12/2014 22:30:24",
    "Latitude": 16.121047586242035,
    "Longitude": -5.419102951372752
  },
  {
    "": 424,
    "title": "RT @Reslizumab: No evidence that the Ebola vaccine causes autism!👪👪👪👪#autism #aspergers #healthcare #CDCwhistleblower #Ebola👪👪👪👪http://…",
    "pubdate": "11/12/2014 22:30:21",
    "Latitude": 16.378870772068534,
    "Longitude": -1.864394732627685
  },
  {
    "": 425,
    "title": "Ugh. \\\"@kasujja: Africa, the land of simba, Cleopatra...oh and #Ebola! According to @TMZ. Really? http://t.co/yHUsZrl0oO\\\",\"Ugh. \\\"@kasujja: Africa, the land of simba, Cleopatra...oh and #Ebola! According to @TMZ. Really? http://t.co/yHUsZrl0oO\\\",\"Twitter for Android",
    "pubdate": "11/12/2014 22:30:19",
    "Latitude": 13.78093419881572,
    "Longitude": -1.1681605593956523
  },
  {
    "": 426,
    "title": "#population Mali confirms its second and third #Ebola deaths: Washington Post http://t.co/MUiQtE8tA3 *spreading http://t.co/L3Nc07zU7X",
    "pubdate": "11/12/2014 22:30:13",
    "Latitude": 13.941978700454937,
    "Longitude": -1.8028130510933322
  },
  {
    "": 427,
    "title": "#population Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/a0G05VIaLY *MORE @EI_Ebola http://t.co/f1kIJJcM8Y",
    "pubdate": "11/12/2014 22:30:13",
    "Latitude": 13.96738863426798,
    "Longitude": -4.9948689105206014
  },
  {
    "": 428,
    "title": "RT @buissonnierem: “@MSF: Any questions about #Ebola? Sign up for #MSF\\'s new e-learning platform about the virus http://t.co/WD2kxGESBA htt…",
    "pubdate": "11/12/2014 22:30:10",
    "Latitude": 14.29499288833102,
    "Longitude": -7.349996757831563
  },
  {
    "": 429,
    "title": "RT @mwhaites: Pres of Nigerian nurses union says #Ebola is a global crises. We need equipment, funding and coordination. #G20 @PSIglobaluni…",
    "pubdate": "11/12/2014 22:30:01",
    "Latitude": 18.396300566874345,
    "Longitude": -4.705032513082254
  },
  {
    "": 430,
    "title": "“@MSF: Any questions about #Ebola? Sign up for #MSF\\'s new e-learning platform about the virus http://t.co/WD2kxGESBA http://t.co/l5mKrPxikF”",
    "pubdate": "11/12/2014 22:29:48",
    "Latitude": 15.123357279137554,
    "Longitude": -2.405573974700213
  },
  {
    "": 431,
    "title": "RT @kim_tastiic: \\\"WHO staff are paid $200-300 per hour. We are doing the dirty work and get paid $300 monthly.\\\"- disgruntled Liberian healt…",
    "pubdate": "11/12/2014 22:29:38",
    "Latitude": 16.85087636181613,
    "Longitude": -5.048692513902471
  },
  {
    "": 432,
    "title": "Zero #Ebola cases. We no longer need a Czar and certainly not a Surgeon General. #TheInmatesareRunningtheAsylum",
    "pubdate": "11/12/2014 22:29:36",
    "Latitude": 16.975414031409343,
    "Longitude": -6.808020105867445
  },
  {
    "": 433,
    "title": "RT @UpfrontAfrica: U.S. is scaling back on number of soldiers being sent to #Ebola-stricken Liberia http://t.co/xmORFnNQqc http://t.co/u9dG…",
    "pubdate": "11/12/2014 22:29:11",
    "Latitude": 12.556246481372801,
    "Longitude": -3.537318381206686
  },
  {
    "": 434,
    "title": "RT @newswatchcanada: #Bamako: #Mali quarantines dozens as second #Ebola outbreak spreads in countryhttp://t.co/1W7vvKw9w9",
    "pubdate": "11/12/2014 22:29:11",
    "Latitude": 15.667991439568185,
    "Longitude": -4.874110963521487
  },
  {
    "": 435,
    "title": "VIDEO: #EbolaLoveStory Can #CraigSpencer #MorganDixon romance survive #Ebola? http://t.co/fUwzpRIXRZ... http://t.co/tpQsWMi3aL",
    "pubdate": "11/12/2014 22:29:09",
    "Latitude": 14.353032423509143,
    "Longitude": -2.8910292311057386
  },
  {
    "": 436,
    "title": "RT @UCIEngineering: @UCIrvine is waging an #Ebola battle that might lead to cure. @michelledigman #biomedicalengineering #Ebolacure #zotht…",
    "pubdate": "11/12/2014 22:29:06",
    "Latitude": 14.496807845142465,
    "Longitude": -1.903122236752668
  },
  {
    "": 437,
    "title": "RT @ONEcampaignUK: SHOCKING: One in 7 women risk dying in #childbirth in #Ebola-hit countries  http://t.co/psMrOjUD4O via @Reuters http://t…",
    "pubdate": "11/12/2014 22:28:50",
    "Latitude": 16.4335054920923,
    "Longitude": -5.840155957486942
  },
  {
    "": 438,
    "title": "RT @Barbi_Twins: Hendry Co defends #monkey breeding lab negligence including #Ebola-Typical&gt;govt protects biz over bodies @JVM @ALDF http:/…",
    "pubdate": "11/12/2014 22:28:48",
    "Latitude": 20.407251887097463,
    "Longitude": -5.990694871073806
  },
  {
    "": 439,
    "title": "#Ebola In 3-D: A Video Game To Guide Health Care Workers Through A Ward http://t.co/20gASLOEfF Via @nprnews:",
    "pubdate": "11/12/2014 22:28:26",
    "Latitude": 17.496129138069733,
    "Longitude": -3.5983253000000133
  },
  {
    "": 440,
    "title": "RT @FollowEbola: US nurses hold strikes, protests over #Ebola measures. http://t.co/bIlGv6zSbH",
    "pubdate": "11/12/2014 22:28:17",
    "Latitude": 12.429954673235688,
    "Longitude": -3.2755940539021475
  },
  {
    "": 441,
    "title": "RT @UNICEF: How #Ebola survivors like Patience, 19, are playing a key role in the response http://t.co/VMwaIpapbx via @irinnews",
    "pubdate": "11/12/2014 22:28:12",
    "Latitude": 15.54626717379551,
    "Longitude": -5.780985896998399
  },
  {
    "": 442,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 22:28:11",
    "Latitude": 12.891280012282781,
    "Longitude": -4.0120299461813325
  },
  {
    "": 443,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:28:03",
    "Latitude": 12.945432914350391,
    "Longitude": -9.190801661380739
  },
  {
    "": 444,
    "title": "RT @SuburbanFiveOh: Real #EMT call: \\\"man feels sick. Says his girlfriend is from W. Africa. She hasn\\'t been there in 3 years, but he\\'s worr…",
    "pubdate": "11/12/2014 22:27:57",
    "Latitude": 19.686899086680526,
    "Longitude": -6.7281715277896055
  },
  {
    "": 445,
    "title": "RT @EI_Forest: #forest Mali confirms its second and third #Ebola deaths: Washington Post http://t.co/YmqncuIRpx *spreading http://t.co/4ZX0…",
    "pubdate": "11/12/2014 22:27:45",
    "Latitude": 15.251425834890869,
    "Longitude": -3.7551401664511124
  },
  {
    "": 446,
    "title": "@JEZUSCEAZAR even if its not possessed the shit still dirty bitch #WhatTheDoll #Annabelle #Ebola",
    "pubdate": "11/12/2014 22:27:32",
    "Latitude": 17.26691880350797,
    "Longitude": -3.3918150407709384
  },
  {
    "": 447,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 22:27:31",
    "Latitude": 14.510542182874145,
    "Longitude": -0.7609825750948658
  },
  {
    "": 448,
    "title": "#WHO staff assume that many mourners attended the ceremonies. In #Bamako and the mosque in #Guinee. #Ebola #Imam",
    "pubdate": "11/12/2014 22:27:23",
    "Latitude": 15.595367689881359,
    "Longitude": -5.215189553136697
  },
  {
    "": 449,
    "title": "RT @intldogooder: Not to miss! @FaraiToday\\'s 3-part series @Forbes on #Africans\\' work to curb spread of #Ebola http://t.co/18sFZsP6J5 &amp; htt…",
    "pubdate": "11/12/2014 22:27:14",
    "Latitude": 15.704731734234155,
    "Longitude": -3.953845796211128
  },
  {
    "": 450,
    "title": "#sustainable Mali confirms its second and third #Ebola deaths: Washington Post http://t.co/GIVMjuLGUf *spreading http://t.co/Vh9lkVhwX2",
    "pubdate": "11/12/2014 22:27:12",
    "Latitude": 14.243720154009711,
    "Longitude": -4.813781110002394
  },
  {
    "": 451,
    "title": "#forest Mali confirms its second and third #Ebola deaths: Washington Post http://t.co/YmqncuIRpx *spreading http://t.co/4ZX00sZpoq",
    "pubdate": "11/12/2014 22:27:11",
    "Latitude": 17.538526931323098,
    "Longitude": -5.345531975790301
  },
  {
    "": 452,
    "title": "#sustainable Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/X5qrfndMue *MORE @EI_Ebola http://t.co/lqIKVEjY6P",
    "pubdate": "11/12/2014 22:27:11",
    "Latitude": 17.630441029942684,
    "Longitude": -4.078855405502101
  },
  {
    "": 453,
    "title": "#forest Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/oxxfMXVTnB *MORE @EI_Ebola http://t.co/i3fRgEyrhh",
    "pubdate": "11/12/2014 22:27:10",
    "Latitude": 15.323609122261793,
    "Longitude": -2.709492892309051
  },
  {
    "": 454,
    "title": "US urges #IMF to give debt relief to #Ebola stricken countries. #Liberia #SierraLeone #Guinea #development http://t.co/GHD1oU37Td",
    "pubdate": "11/12/2014 22:26:53",
    "Latitude": 15.41422642728823,
    "Longitude": 0.7158221963899969
  },
  {
    "": 455,
    "title": "#Mali Is Worried About #Ebola, #Quarantines Nearly 100 http://t.co/Gxumwu86xy Via @nprnews",
    "pubdate": "11/12/2014 22:26:50",
    "Latitude": 19.74197909550255,
    "Longitude": -3.3849704362348496
  },
  {
    "": 456,
    "title": "If #Ebola enters #india it\\'s over fr the country http://t.co/n5eCk9bByD” #fb @narendramodi",
    "pubdate": "11/12/2014 22:26:45",
    "Latitude": 13.153083013535143,
    "Longitude": -1.1983405417708655
  },
  {
    "": 457,
    "title": "RT @Reslizumab: No evidence that the Ebola vaccine causes autism!👪👪👪👪#autism #aspergers #healthcare #CDCwhistleblower #Ebola👪👪👪👪http://…",
    "pubdate": "11/12/2014 22:26:43",
    "Latitude": 14.425848155561571,
    "Longitude": -2.5855279521970633
  },
  {
    "": 458,
    "title": "RT @FAOnews: #Nowreading: West Africa ‘on brink’ of major food crisis in wake of #Ebola outbreak – @UN expert http://t.co/X5LmrXPrub via @U…",
    "pubdate": "11/12/2014 22:26:39",
    "Latitude": 17.853477858830736,
    "Longitude": -5.35153402058672
  },
  {
    "": 459,
    "title": "RT @Ebolatrends: Family of #Ebola Victim #ThomasEricDuncan Settles With #DallasHospital - #NBCNews... http://t.co/DmD767NfLQ http://t.co/B2…",
    "pubdate": "11/12/2014 22:26:27",
    "Latitude": 11.449752754695751,
    "Longitude": -4.409281084103756
  },
  {
    "": 460,
    "title": "RT @energyaccessPN: Hear @SE4ALL CEO @KYumkella on imp of #energy #Ebola: http://t.co/CSX40YALwN Donate to @unfoundation Ebola Fund http:/…",
    "pubdate": "11/12/2014 22:26:26",
    "Latitude": 12.864764587204117,
    "Longitude": -4.579943213145779
  },
  {
    "": 461,
    "title": "RT @UpfrontAfrica: U.S. is scaling back on number of soldiers being sent to #Ebola-stricken Liberia http://t.co/xmORFnNQqc http://t.co/u9dG…",
    "pubdate": "11/12/2014 22:26:03",
    "Latitude": 14.714322140514536,
    "Longitude": -6.572923938381026
  },
  {
    "": 462,
    "title": "Ethical Issues: Medical Experts Look For New Ways To Test #Ebola Drugs http://t.co/VtylobE9Be Via @nprnews",
    "pubdate": "11/12/2014 22:25:53",
    "Latitude": 15.381188113990763,
    "Longitude": -2.6365754359875546
  },
  {
    "": 463,
    "title": "shares that supportive care really isn\\'t treatment for #Ebola so our success rate of 100% (#KentBrantly,... http://t.co/5envJehOL1",
    "pubdate": "11/12/2014 22:25:50",
    "Latitude": 13.026615837256944,
    "Longitude": -5.431004859992179
  },
  {
    "": 464,
    "title": "RT @AashishChaudh20: Checkout our latest blog and demo on #ebola http://t.co/0ib3J5NZdq",
    "pubdate": "11/12/2014 22:25:46",
    "Latitude": 18.50441940902186,
    "Longitude": -8.39442121892873
  },
  {
    "": 465,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 22:25:44",
    "Latitude": 12.208259926510959,
    "Longitude": -3.5458248760030724
  },
  {
    "": 466,
    "title": "RT @SSIReview: The $338 Million #Ebola Giving Gap #philanthropy @DalbergTweet @VickyHausman  http://t.co/UTqvO76ejb",
    "pubdate": "11/12/2014 22:25:25",
    "Latitude": 13.543972265940358,
    "Longitude": -9.302067385010744
  },
  {
    "": 467,
    "title": "RT @MSF: MSF is offering doctors, nurses, health educators and psychologists involved in the #Ebola fight an interactive tool http://t.co/v…",
    "pubdate": "11/12/2014 22:25:25",
    "Latitude": 15.265920197422417,
    "Longitude": -7.3885151828415
  },
  {
    "": 468,
    "title": "RT @CAMAServices: Criticizing others who take risks to serve is the exact opposite reaction we should have. http://t.co/Av4puWAH6m via @REL…",
    "pubdate": "11/12/2014 22:25:14",
    "Latitude": 16.90392871951211,
    "Longitude": -0.06476093521968629
  },
  {
    "": 469,
    "title": "RT @YannMSF: #Ebola: #MSF Online Briefing Now Available to the Public  http://t.co/WqSnY8W8hL http://t.co/Qo9BVL3FrC",
    "pubdate": "11/12/2014 22:24:55",
    "Latitude": 18.271261064429996,
    "Longitude": -3.4684899440925245
  },
  {
    "": 470,
    "title": "#Ebola #outbreak #deaths #pass #5000: The number of people killed by the worst outbreak of Ebola has risen to 5,160… http://t.co/SY6ti5iPPM",
    "pubdate": "11/12/2014 22:24:43",
    "Latitude": 17.860469166152434,
    "Longitude": -1.4275165755336778
  },
  {
    "": 471,
    "title": "Single-dose, needle-free #Ebola #vaccine provides long-term protection in macaques  http://t.co/HXbxeDTLYM",
    "pubdate": "11/12/2014 22:24:40",
    "Latitude": 16.386478541938445,
    "Longitude": -3.532319247571766
  },
  {
    "": 472,
    "title": "#Ebola #outbreak #deaths #pass #5000: The number of people killed by the worst outbreak of… http://t.co/NqjvlwedkK",
    "pubdate": "11/12/2014 22:24:35",
    "Latitude": 13.282978945989212,
    "Longitude": -3.2577366039352276
  },
  {
    "": 473,
    "title": "RT @AlertNet: @Oxfam says half of G20 countries have failed to deliver in fight against #Ebola - latest from @mishahussain http://t.co/u5IN…",
    "pubdate": "11/12/2014 22:24:27",
    "Latitude": 15.9212955580543,
    "Longitude": -6.603088585077008
  },
  {
    "": 474,
    "title": "As #Ebola takes lives in #Liberia it leaves hunger in its wake http://t.co/I9XMpcmrRc",
    "pubdate": "11/12/2014 22:24:14",
    "Latitude": 15.3621602000113,
    "Longitude": -3.810758916617326
  },
  {
    "": 475,
    "title": "#rainforest Mali confirms its second and third #Ebola deaths: Washington Post http://t.co/qKhvjhqqhh *spreading http://t.co/rOvqG0tLjk",
    "pubdate": "11/12/2014 22:24:09",
    "Latitude": 16.348506152554158,
    "Longitude": -4.820007999195112
  },
  {
    "": 476,
    "title": "#rainforest Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/KQLC8d9MlX *MORE @EI_Ebola http://t.co/Arbs4RHAus",
    "pubdate": "11/12/2014 22:24:09",
    "Latitude": 12.293381706267619,
    "Longitude": -7.6914873162876205
  },
  {
    "": 477,
    "title": "@YoursTrulyNisa Riiiiiiiiiiiiiiiiiiiiiiiiight #ebola",
    "pubdate": "11/12/2014 22:24:02",
    "Latitude": 14.688795072537335,
    "Longitude": -2.7463943071374963
  },
  {
    "": 478,
    "title": "Settlement Quickly Reached in Ebola Death Case - http://t.co/6peMykKiuY #ebola",
    "pubdate": "11/12/2014 22:23:56",
    "Latitude": 19.99248556601408,
    "Longitude": -8.944672064514334
  },
  {
    "": 479,
    "title": "West Africa now on the brink of a food crisis, UN reports. #Ebola http://t.co/bLCTMxV51i",
    "pubdate": "11/12/2014 22:23:56",
    "Latitude": 15.056743305496374,
    "Longitude": -4.465910648031025
  },
  {
    "": 480,
    "title": "Health and Human Services: We Have the Right Strategy in Place - http://t.co/zAZZhPqZ1W #ebola",
    "pubdate": "11/12/2014 22:23:55",
    "Latitude": 12.355129783960127,
    "Longitude": -4.04083637861631
  },
  {
    "": 481,
    "title": "RT @hniman: #Ebola nosocomial cluster in Pasteur Clinic in Bamako Mali grows to five #EbolaOutbreak CIDRAP http://t.co/3BtjBU0Cc9",
    "pubdate": "11/12/2014 22:23:55",
    "Latitude": 18.178453493567286,
    "Longitude": -7.120974473934222
  },
  {
    "": 482,
    "title": "Foundout.. Gumi sceptical about Jonathan\\'s declaration: A patient that recovers from Ebola ... http://t.co/xveOQE053y ..#Ebola..#Nigeria",
    "pubdate": "11/12/2014 22:23:54",
    "Latitude": 16.428681251633044,
    "Longitude": -6.772340913705148
  },
  {
    "": 483,
    "title": "#Ebola nasal#vaccine under threat as funding runs dry http://t.co/MZ09zVb7qI via @InPharmaTechno",
    "pubdate": "11/12/2014 22:23:48",
    "Latitude": 14.141054250588303,
    "Longitude": -5.999182957958493
  },
  {
    "": 484,
    "title": "#Liberia\\'s #Ebola Corpse Squads http://t.co/7ncXPcLOFR http://t.co/8ngMzeITNJ\\\",\"#Liberia\\'s #Ebola Corpse Squads http://t.co/7ncXPcLOFR http://t.co/8ngMzeITNJ\\\",\"Twitter for Android",
    "pubdate": "11/12/2014 22:23:43",
    "Latitude": 13.325444733089338,
    "Longitude": -4.028624570434576
  },
  {
    "": 485,
    "title": "RT @RT_com: #Ebola death toll surpasses 5,000 - WHO http://t.co/vdsIIjJoQE http://t.co/NvufkGGuCm",
    "pubdate": "11/12/2014 22:23:38",
    "Latitude": 13.112702909209093,
    "Longitude": -6.2317772725305804
  },
  {
    "": 486,
    "title": "RT @kasujja: Africa, the land of simba, Cleopatra...oh and #Ebola! According to @TMZ.  Really? Humour? Ignorance? Indifference? http://t.co…",
    "pubdate": "11/12/2014 22:23:04",
    "Latitude": 11.573363080836913,
    "Longitude": -5.511931594773902
  },
  {
    "": 487,
    "title": "RT @newswatchcanada: #Bamako: #Mali quarantines dozens as second #Ebola outbreak spreads in countryhttp://t.co/1W7vvKw9w9",
    "pubdate": "11/12/2014 22:22:53",
    "Latitude": 17.354969636378513,
    "Longitude": -4.213773738487169
  },
  {
    "": 488,
    "title": "#Ebola nosocomial cluster in Pasteur Clinic in Bamako Mali grows to five #EbolaOutbreak CIDRAP http://t.co/3BtjBU0Cc9",
    "pubdate": "11/12/2014 22:22:46",
    "Latitude": 18.450808308558962,
    "Longitude": -6.851423312432531
  },
  {
    "": 489,
    "title": "RT @WSJ: Behind the scenes at Bellevue’s #Ebola treatment ward: http://t.co/4Ee7DpsR3B http://t.co/CW8eIXjRfu",
    "pubdate": "11/12/2014 22:22:43",
    "Latitude": 16.676937278781367,
    "Longitude": -4.423454145965696
  },
  {
    "": 490,
    "title": "RT @theOFDA: 30 metric tons of personal protective equip arrives in #Liberia to protect healthcare workers on frontlines of #Ebola http://t…",
    "pubdate": "11/12/2014 22:22:15",
    "Latitude": 16.12933209491681,
    "Longitude": -7.322998331081655
  },
  {
    "": 491,
    "title": "Now that ppl n #America getn #Ebola had a cure all this time.Ppl have been dying n #Africa Now you want a donation😒 http://t.co/aP995SxHbK",
    "pubdate": "11/12/2014 22:22:09",
    "Latitude": 16.428838462075163,
    "Longitude": -2.788943950270782
  },
  {
    "": 492,
    "title": "#Ebola Mali confirms its second and third #Ebola deaths: Washington Post http://t.co/TjZEg7sw2X *spreading http://t.co/LSRybxxr1d",
    "pubdate": "11/12/2014 22:22:07",
    "Latitude": 17.563552384172922,
    "Longitude": -7.05938348507333
  },
  {
    "": 493,
    "title": "Africa, the land of simba, Cleopatra...oh and #Ebola! According to @TMZ.  Really? Humour? Ignorance? Indifference? http://t.co/vOc1asFXrc",
    "pubdate": "11/12/2014 22:22:06",
    "Latitude": 18.073228745971715,
    "Longitude": -4.130589423555829
  },
  {
    "": 494,
    "title": "RT @TheTakeaway: There are a number of conspiracy theories in W. Africa about #Ebola,  says @hirondelleus. And fear is hard to fight. http:…",
    "pubdate": "11/12/2014 22:21:54",
    "Latitude": 15.921655302219715,
    "Longitude": -2.6862479129410026
  },
  {
    "": 495,
    "title": "#Ebola survivor, Dr. Craig Spencer: ‘Please join me in turning our attention back to West Africa’... http://t.co/r0roBgWBbr",
    "pubdate": "11/12/2014 22:21:49",
    "Latitude": 16.450327074912888,
    "Longitude": -4.517392537221373
  },
  {
    "": 496,
    "title": "Background about the new #Ebola case in #Mali: the transmission chain starts in #Guinea on 17th of oct. http://t.co/Ezwxbuzypl",
    "pubdate": "11/12/2014 22:21:49",
    "Latitude": 16.856633635796815,
    "Longitude": -2.622427566238277
  },
  {
    "": 497,
    "title": "RT @DFID_UK: .@BillGates meets the DFID #Ebola team today ahead of his @UKHouseofLords speech and Q&amp;A this evening. http://t.co/hwKR63ufpF",
    "pubdate": "11/12/2014 22:21:31",
    "Latitude": 15.559104505881006,
    "Longitude": -1.7220495719611377
  },
  {
    "": 498,
    "title": "RT @katarinah: Swedish troops just arrived in #Timbuktu, more expected next week. Let\\'s hope #MINUSMA has #Ebola action plan for staff outs…",
    "pubdate": "11/12/2014 22:21:29",
    "Latitude": 16.124077799088315,
    "Longitude": -3.3514937918710874
  },
  {
    "": 499,
    "title": "@jimmymackin at least it is not #ebola.. I hope #WaterCooler",
    "pubdate": "11/12/2014 22:21:23",
    "Latitude": 19.061385125239486,
    "Longitude": -2.7239608581492565
  },
  {
    "": 500,
    "title": "RT @AJConsiderThis: Was the panic over #Ebola more virulent than the disease? http://t.co/LINv5xsMsm @VUMChealth\\'s Dr. William Schaffner jo…",
    "pubdate": "11/12/2014 22:21:22",
    "Latitude": 20.08593595847469,
    "Longitude": -2.329040109888836
  },
  {
    "": 501,
    "title": "Facebook to encourage users to donate to Ebola fight   http://t.co/1Jb8umF0i4  #ebola #facebook #theredcross",
    "pubdate": "11/12/2014 22:21:22",
    "Latitude": 20.870252482331757,
    "Longitude": -6.75340918751896
  },
  {
    "": 502,
    "title": "RT @BK00023: @morrislaw he is with the #Ebola Czar",
    "pubdate": "11/12/2014 22:21:21",
    "Latitude": 15.85268555737867,
    "Longitude": -2.0892230825576434
  },
  {
    "": 503,
    "title": "Mali confirms its second and third #Ebola deaths http://t.co/m0BjIUpNOI http://t.co/EcOlg6uL4e",
    "pubdate": "11/12/2014 22:21:06",
    "Latitude": 21.732692100743076,
    "Longitude": -8.168960700531027
  },
  {
    "": 504,
    "title": "@abronxchick @DaleMoss2 not only should they have sent him home, they Should of sent his #ebola ass ass back HOME TO AFRICA! FOH",
    "pubdate": "11/12/2014 22:21:06",
    "Latitude": 16.370500726423362,
    "Longitude": 2.3295983816709596
  },
  {
    "": 505,
    "title": "#Ebola Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/644IYqazNJ *MORE @EI_Ebola http://t.co/1PxKZpcWYg",
    "pubdate": "11/12/2014 22:21:05",
    "Latitude": 14.424745822529669,
    "Longitude": -3.5748283050832366
  },
  {
    "": 506,
    "title": "RT @AlaOG: Listen to Anne Bennett @HirondelleUSA on fear and mistrust during the ebola epidemic in Africa http://t.co/uxNwMds5m3 @hirondell…",
    "pubdate": "11/12/2014 22:21:01",
    "Latitude": 18.222790127249365,
    "Longitude": -0.8611140915608715
  },
  {
    "": 507,
    "title": "Kinda hope the #EbolaCrisis wipes out humanity #Ebola",
    "pubdate": "11/12/2014 22:20:54",
    "Latitude": 13.895661012547922,
    "Longitude": -5.4366996247502914
  },
  {
    "": 508,
    "title": "RT @qldnursesunion: Earlier today Australian nurses spoke with Liberian Ebola workers on the frontline. #g20 #ebola #oznurses #qldpol http:…",
    "pubdate": "11/12/2014 22:20:49",
    "Latitude": 14.30902508680116,
    "Longitude": -3.6555993893746557
  },
  {
    "": 509,
    "title": "\\\"@WorkoutHumor: This deserves endless RT’s http://t.co/TWgD6jOyK8\\\" #Ebola",
    "pubdate": "11/12/2014 22:20:45",
    "Latitude": 18.02930917808857,
    "Longitude": -4.954424488544445
  },
  {
    "": 510,
    "title": "RT @TheTakeaway: There are a number of conspiracy theories in W. Africa about #Ebola,  says @hirondelleus. Fear is hard to fight. http://t.…",
    "pubdate": "11/12/2014 22:20:27",
    "Latitude": 16.752436658560292,
    "Longitude": -5.152498334263301
  },
  {
    "": 511,
    "title": "Was the panic over #Ebola more virulent than the disease? http://t.co/LINv5xsMsm @VUMChealth\\'s Dr. William Schaffner joins @AMoraTV tonight",
    "pubdate": "11/12/2014 22:20:22",
    "Latitude": 16.95964277736544,
    "Longitude": -3.6678927963223464
  },
  {
    "": 512,
    "title": "#Ebola US veterinary group issues guidelines for handling Ebola exposure in pets - Xinhua http://t.co/C7FRdMWWyB",
    "pubdate": "11/12/2014 22:20:20",
    "Latitude": 13.850365225606755,
    "Longitude": -5.9020606951416745
  },
  {
    "": 513,
    "title": "More than 5,000 #Ebola deaths, says WHO http://t.co/TzBOekydeK via @YahooNews #SierraLeon #Liberia #CDC #WestAfrica #ThomasEricDuncan",
    "pubdate": "11/12/2014 22:20:17",
    "Latitude": 15.2955879094587,
    "Longitude": -6.454335411527307
  },
  {
    "": 514,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:20:13",
    "Latitude": 12.331153197733816,
    "Longitude": -3.199288492306523
  },
  {
    "": 515,
    "title": "@RocketsManJoel @Rags2Rockets cuz I get stupid i mean outrageous stay away if ur contagious! #Ebola",
    "pubdate": "11/12/2014 22:20:08",
    "Latitude": 16.240975839653178,
    "Longitude": -3.390477955746771
  },
  {
    "": 516,
    "title": "@abronxchick @DaleMoss2 wait what!!!! The hospital should be suing THEM!!!! He shouldn\\'t have brought his #ebola ass to America",
    "pubdate": "11/12/2014 22:19:57",
    "Latitude": 12.4317834218015,
    "Longitude": -9.534085403701312
  },
  {
    "": 517,
    "title": "Sierra Leone Ship docks in #florida Cape Canaveral some sightseeing in and fun, would you like to meet them too? #ksc #Ebola #SierraLeone",
    "pubdate": "11/12/2014 22:19:47",
    "Latitude": 16.176108709563614,
    "Longitude": -1.790046573105116
  },
  {
    "": 518,
    "title": "RT @Int_Travelers: RT @JubileeUSA: Huge News: US asks #IMF to cancel debt for countries dealing with #Ebola. http://t.co/nYnCsVc1m1 @Eric_L…",
    "pubdate": "11/12/2014 22:19:45",
    "Latitude": 17.393904614086587,
    "Longitude": -3.8993871582301662
  },
  {
    "": 519,
    "title": "RT @Peepsqueak: US nurses strike over insufficient #Ebola protections | rt #news http://t.co/CmFXQc9n7C",
    "pubdate": "11/12/2014 22:19:41",
    "Latitude": 12.80434410773696,
    "Longitude": -5.169439600356025
  },
  {
    "": 520,
    "title": "RT @Laurie_Garrett: Today @UNDP took over payroll at #Liberia MinHlth. Some got paid for 1st time in 3 mos, but I know 2 #Ebola staff got 1…",
    "pubdate": "11/12/2014 22:19:28",
    "Latitude": 17.802568354847043,
    "Longitude": -5.393176792768718
  },
  {
    "": 521,
    "title": "Ebola fight to be a top topic for Congress http://t.co/285XhUGHLJ #ebola",
    "pubdate": "11/12/2014 22:19:24",
    "Latitude": 16.24432460343634,
    "Longitude": -5.305819291800379
  },
  {
    "": 522,
    "title": "Mali races to head off Ebola outbreak after second death http://t.co/Q74XtkNGkO #ebola",
    "pubdate": "11/12/2014 22:19:23",
    "Latitude": 17.319854064744835,
    "Longitude": -4.969408290477048
  },
  {
    "": 523,
    "title": "Band Aid song Do They Know Its Christmas? re-recorded for Ebola cause http://t.co/bITeGx1bvw #ebola",
    "pubdate": "11/12/2014 22:19:23",
    "Latitude": 15.324213642194987,
    "Longitude": -3.0594346143662063
  },
  {
    "": 524,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:19:13",
    "Latitude": 15.237238205505024,
    "Longitude": -3.9401698418456004
  },
  {
    "": 525,
    "title": "RT @SandroDemaio: Our PM talks about #Ebola &amp; building the economy - missing the biggest issues of #NCDs &amp; economic inequality! #H20MELB #a…",
    "pubdate": "11/12/2014 22:19:07",
    "Latitude": 17.117666380070386,
    "Longitude": -3.95890723685103
  },
  {
    "": 526,
    "title": "RT @EbolaOutbreakUS: #Ebola is in #Florida  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:19:07",
    "Latitude": 15.682158805762265,
    "Longitude": -2.3705479555927846
  },
  {
    "": 527,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:19:04",
    "Latitude": 14.610269877751964,
    "Longitude": -6.146087791924795
  },
  {
    "": 528,
    "title": "RT @ftcomment: \\\"We need the WHO more than ever - starving it of funds is reckless\\\" - Lawrence Summers (@LHSummers) http://t.co/n4QSTRFsQg #…",
    "pubdate": "11/12/2014 22:19:02",
    "Latitude": 20.34492883949405,
    "Longitude": -4.02492670101058
  },
  {
    "": 529,
    "title": "RT fml_katie: RT SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affec... http://t.co/xEaEiM9Gvx",
    "pubdate": "11/12/2014 22:18:59",
    "Latitude": 12.161593833382614,
    "Longitude": -4.359640568986489
  },
  {
    "": 530,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:18:54",
    "Latitude": 14.592002595137833,
    "Longitude": -5.965320909245747
  },
  {
    "": 531,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 22:18:51",
    "Latitude": 12.32741874806608,
    "Longitude": -7.559328470871183
  },
  {
    "": 532,
    "title": "RT GODRUS: RT Potrblog: It appears #Obama flew an #IllegalImmigrant #African #Ebola Victim To #USA from #Maspalo... http://t.co/CtGUK6SlNr",
    "pubdate": "11/12/2014 22:18:50",
    "Latitude": 16.15898147789009,
    "Longitude": -5.570709049460438
  },
  {
    "": 533,
    "title": "#Disney #JustinBieber ROLL ONE TO THIS SONG!! VERY RARE VISUALZ OMG WOW #NewToronto https://t.co/pDX2AVK3wz #Frozen #Ebola",
    "pubdate": "11/12/2014 22:18:49",
    "Latitude": 16.342617036576893,
    "Longitude": -4.488773804391873
  },
  {
    "": 534,
    "title": "Most detailed report on new #Ebola cases in #Mali. Imam traveled a lot sick before he died and still traveled on dead http://t.co/Ezwxbuzypl",
    "pubdate": "11/12/2014 22:18:41",
    "Latitude": 15.812650573186948,
    "Longitude": -6.728872216287259
  },
  {
    "": 535,
    "title": "RT @eAsiaMediaHub: @StateDeptSpox Psaki: We welcome #Japan’s ... additional $100 million contribution to the response to the #Ebola crisis …",
    "pubdate": "11/12/2014 22:18:32",
    "Latitude": 13.214865075695506,
    "Longitude": -5.163814604962042
  },
  {
    "": 536,
    "title": "RT @Potrblog: Late Saturday night, #HealthDept notified media outlets that a person with \\\"some risk\\\" for #Ebola is in #Charlottehttp://t.…",
    "pubdate": "11/12/2014 22:18:32",
    "Latitude": 15.217819620134437,
    "Longitude": -3.3717324605627574
  },
  {
    "": 537,
    "title": "RT @Barbi_Twins: Hendry Co defends #monkey breeding lab negligence including #Ebola-Typical&gt;govt protects biz over bodies @JVM @ALDF http:/…",
    "pubdate": "11/12/2014 22:18:29",
    "Latitude": 14.51582426402672,
    "Longitude": -4.4842045287798
  },
  {
    "": 538,
    "title": "RT @UN: Stopping #Ebola as fast as possible is #1 priority - @UNMEER\\'s @UNBanbury on #EbolaResponse http://t.co/oL7D5eySMw http://t.co/jSu0…",
    "pubdate": "11/12/2014 22:18:27",
    "Latitude": 12.762339409774961,
    "Longitude": -3.2073912985220865
  },
  {
    "": 539,
    "title": "RT @EminemsRevenge: @MotherJones #Ebola, #Darfut, #BringBackOurGirls?? GREAT hashtags for a RT?",
    "pubdate": "11/12/2014 22:18:27",
    "Latitude": 13.602046508988344,
    "Longitude": -7.08781829845543
  },
  {
    "": 540,
    "title": "RT @neva9257: So actually, the government keeping serums under wraps is pretty similar to the current #Ebola outbreak.",
    "pubdate": "11/12/2014 22:18:26",
    "Latitude": 14.034563110162683,
    "Longitude": -4.088360252195024
  },
  {
    "": 541,
    "title": "RT @RT_com: #Ebola death toll surpasses 5,000 - WHO http://t.co/vdsIIjJoQE http://t.co/NvufkGGuCm",
    "pubdate": "11/12/2014 22:18:24",
    "Latitude": 16.4489280771875,
    "Longitude": -3.9394602885388683
  },
  {
    "": 542,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:18:23",
    "Latitude": 16.392216633455224,
    "Longitude": -6.487935105897542
  },
  {
    "": 543,
    "title": "RT @Potrblog: It appears #Obama flew an #IllegalImmigrant #African #Ebola Victim To #USA from #Maspalomashttps://t.co/wemnyMeEG6 http://t…",
    "pubdate": "11/12/2014 22:18:14",
    "Latitude": 15.716672868438886,
    "Longitude": -2.8865790472514306
  },
  {
    "": 544,
    "title": "RT @ChannelNewsAsia: New Zealand police rule out presence of #Ebola in one of three vials found in mailboxes http://t.co/vV7uxDOlBz http://…",
    "pubdate": "11/12/2014 22:18:10",
    "Latitude": 13.143401920406642,
    "Longitude": -0.24467897777718584
  },
  {
    "": 545,
    "title": "RT @Laurie_Garrett: Today @UNDP took over payroll at #Liberia MinHlth. Some got paid for 1st time in 3 mos, but I know 2 #Ebola staff got 1…",
    "pubdate": "11/12/2014 22:18:04",
    "Latitude": 16.813380349664627,
    "Longitude": -4.522954889548145
  },
  {
    "": 546,
    "title": "#ecology Mali reports 2 new #Ebola deaths in capital: Canadian Press http://t.co/oqUmUiMb6l *MORE @EI_Ebola http://t.co/e8vTvwDFJD",
    "pubdate": "11/12/2014 22:18:00",
    "Latitude": 12.41512902511504,
    "Longitude": -4.470887696768036
  },
  {
    "": 547,
    "title": "RT @wessmith123: The U.S. is now #Ebola Free! Fox must be FREAKING OUT! #UniteBlue #TNTweeters #LibCrib http://t.co/GmjcPnGgid http://t.co/…",
    "pubdate": "11/12/2014 22:17:50",
    "Latitude": 18.157614241960218,
    "Longitude": -4.502532952795441
  },
  {
    "": 548,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:17:35",
    "Latitude": 15.354103359680837,
    "Longitude": -7.4148215639362585
  },
  {
    "": 549,
    "title": "Mali reports 2 new #Ebola deaths in capital http://t.co/okubSNH7VM http://t.co/KrnPmFptjW",
    "pubdate": "11/12/2014 22:17:31",
    "Latitude": 17.316608070731824,
    "Longitude": -8.057563297815141
  },
  {
    "": 550,
    "title": "RT @GSK: ‘The fight against #Ebola needs big pharma on board’ @wellcometrust article in @FT: http://t.co/Nt9n5qB9ZU (subscription req.)",
    "pubdate": "11/12/2014 22:17:29",
    "Latitude": 19.006629833339836,
    "Longitude": -3.978279225629495
  },
  {
    "": 551,
    "title": "@morrislaw he is with the #Ebola Czar",
    "pubdate": "11/12/2014 22:17:23",
    "Latitude": 15.558562216711788,
    "Longitude": -4.010949188928174
  },
  {
    "": 552,
    "title": "\\\"@AJENews: Dozens placed in quarantine in Mali after a 25-year-old nurse dies from #Ebola  http://t.co/JnqC2uoSRT\\\",\"\\\"@AJENews: Dozens placed in quarantine in Mali after a 25-year-old nurse dies from #Ebola  http://t.co/JnqC2uoSRT\\\",\"Twitter for Android",
    "pubdate": "11/12/2014 22:17:20",
    "Latitude": 20.45311349142726,
    "Longitude": -3.0680226767960916
  },
  {
    "": 553,
    "title": "So actually, the government keeping serums under wraps is pretty similar to the current #Ebola outbreak.",
    "pubdate": "11/12/2014 22:17:16",
    "Latitude": 16.216488854606816,
    "Longitude": -1.364573440193916
  },
  {
    "": 554,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:17:15",
    "Latitude": 10.281839358049462,
    "Longitude": -2.467134133418238
  },
  {
    "": 555,
    "title": "Unsafe burial practices are a major cause of new #Ebola cases in Sierra Leone. This week\\'s #EbolaBigIdea is SAFE BURIALS SAVE LIVES",
    "pubdate": "11/12/2014 22:17:13",
    "Latitude": 13.774163495263702,
    "Longitude": -2.2857888768825485
  },
  {
    "": 556,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:16:55",
    "Latitude": 15.081780963035635,
    "Longitude": -3.961377862640678
  },
  {
    "": 557,
    "title": "😹😹😹😹 #Ebola scared tf out of the little boy 🙈🙈🙀🙀🙀😿😿 https://t.co/QDpmIfN82f",
    "pubdate": "11/12/2014 22:16:51",
    "Latitude": 16.827141725617846,
    "Longitude": -7.321006162375227
  },
  {
    "": 558,
    "title": "St Vincent carnival preparations will not be affected by #Ebola | Caribbean News Now http://t.co/dcxGrALtnB via @caribnewsnow",
    "pubdate": "11/12/2014 22:16:51",
    "Latitude": 19.692692953159085,
    "Longitude": -5.68404608422167
  },
  {
    "": 559,
    "title": "Ebola False Flag Conspiracy FULLY Exposed! Complete Compilation: http://t.co/mCuxqM2fKn #ebola #false #flag #new #world #order #NWO",
    "pubdate": "11/12/2014 22:16:48",
    "Latitude": 13.404305955777774,
    "Longitude": -2.801336622347684
  },
  {
    "": 560,
    "title": "RT @ChannelNewsAsia: New Zealand police rule out presence of #Ebola in one of three vials found in mailboxes http://t.co/vV7uxDOlBz http://…",
    "pubdate": "11/12/2014 22:16:45",
    "Latitude": 13.148031627691637,
    "Longitude": -2.1035145121518473
  },
  {
    "": 561,
    "title": "RT @Barbi_Twins: Hendry Co defends #monkey breeding lab negligence including #Ebola-Typical&gt;govt protects biz over bodies @JVM @ALDF http:/…",
    "pubdate": "11/12/2014 22:16:42",
    "Latitude": 14.197674837141493,
    "Longitude": -5.666467881004031
  },
  {
    "": 562,
    "title": "Joining us in Cape Town for #ASLM2014 this month? Special sessions on #Ebola and many other public health priorities http://t.co/uoVLbi3Gu2",
    "pubdate": "11/12/2014 22:16:37",
    "Latitude": 16.431902631316973,
    "Longitude": -5.951441595988371
  },
  {
    "": 563,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:16:23",
    "Latitude": 16.401237287217,
    "Longitude": -3.4031642910474362
  },
  {
    "": 564,
    "title": "RT @Barbi_Twins: Hendry Co defends #monkey breeding lab negligence including #Ebola-Typical&gt;govt protects biz over bodies @JVM @ALDF http:/…",
    "pubdate": "11/12/2014 22:16:13",
    "Latitude": 17.727618797716286,
    "Longitude": -1.378886265024022
  },
  {
    "": 565,
    "title": "RT @Barbi_Twins: Hendry Co defends #monkey breeding lab negligence including #Ebola-Typical&gt;govt protects biz over bodies @JVM @ALDF http:/…",
    "pubdate": "11/12/2014 22:16:12",
    "Latitude": 14.975268779345331,
    "Longitude": -8.810034641919783
  },
  {
    "": 566,
    "title": "RT @ColumbiaSIPA: China needs to spend more to combat #Ebola in Africa, writes @prabhjotsinghNY: @USATODAY http://t.co/Fp5TYkOPsq",
    "pubdate": "11/12/2014 22:16:10",
    "Latitude": 16.63510221731334,
    "Longitude": -4.113378277448243
  },
  {
    "": 567,
    "title": "Could you walk thru an #Ebola ward w/o catching the virus?This new video game could teach you how.http://t.co/NdCRIWvb4y @nprGlobalHealth",
    "pubdate": "11/12/2014 22:16:02",
    "Latitude": 15.87163214391711,
    "Longitude": -5.06873634665564
  },
  {
    "": 568,
    "title": "There are a number of conspiracy theories in W. Africa about #Ebola,  says @hirondelleus. Fear is hard to fight. http://t.co/NQpKXGeCy0",
    "pubdate": "11/12/2014 22:16:02",
    "Latitude": 14.203855427033158,
    "Longitude": -2.344838649018696
  },
  {
    "": 569,
    "title": "RT @RT_com: #Ebola death toll surpasses 5,000 - WHO http://t.co/vdsIIjJoQE http://t.co/NvufkGGuCm",
    "pubdate": "11/12/2014 22:16:01",
    "Latitude": 14.655930039903694,
    "Longitude": -1.8588179893763033
  },
  {
    "": 570,
    "title": "There are a number of conspiracy theories in W. Africa about #Ebola,  says @hirondelleus. And fear is hard to fight. http://t.co/8gCIxyHx4H",
    "pubdate": "11/12/2014 22:16:01",
    "Latitude": 13.137350353237387,
    "Longitude": -4.152192796405513
  },
  {
    "": 571,
    "title": "#Ebola is in #Florida  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:16:00",
    "Latitude": 14.981107673802784,
    "Longitude": -6.530729804275741
  },
  {
    "": 572,
    "title": "RT @ndnstyl: @JamiaStarheart @milesjreed Profit based HealthCare allowed #Ebola to threaten an entire lineage",
    "pubdate": "11/12/2014 22:15:46",
    "Latitude": 15.954509463156537,
    "Longitude": -3.8685551137682723
  },
  {
    "": 573,
    "title": "RT @Lamarche: #US #nurses strike over insufficient #Ebola protections: http://t.co/kpI4Nrefks http://t.co/QlidsBDx5s #HealthCare",
    "pubdate": "11/12/2014 22:15:45",
    "Latitude": 14.743321188751802,
    "Longitude": -3.5344515472081794
  },
  {
    "": 574,
    "title": "http://t.co/iuk9He0OO8  Combatting Stigma is a key element to defeating #ebola. #StopEbolaStigma",
    "pubdate": "11/12/2014 22:15:32",
    "Latitude": 13.362703429745865,
    "Longitude": -5.964722666998986
  },
  {
    "": 575,
    "title": "#Ebola Fears, Start Of Flu Season Spur Jump In Sales For #Clorox Disinfectant Wipes http://t.co/iwWZe8ERWd",
    "pubdate": "11/12/2014 22:15:27",
    "Latitude": 14.06337978952204,
    "Longitude": -0.6805068456991124
  },
  {
    "": 576,
    "title": "Bioweapons Expert Obama Admin Has Made a ‘Fundamental Mistake’ in Its Handlin of #Ebola  http://t.co/e2KgaumVlT #deadlyvirus #ObamaAdmin",
    "pubdate": "11/12/2014 22:15:25",
    "Latitude": 18.798680957309912,
    "Longitude": -5.424083643364087
  },
  {
    "": 577,
    "title": "#Ebola US veterinary group issues guidelines for handling Ebola exposure in pets - Xinhua http://t.co/w23DxASOzM",
    "pubdate": "11/12/2014 22:15:25",
    "Latitude": 15.843117277642456,
    "Longitude": -4.556916147207918
  },
  {
    "": 578,
    "title": "Why my stomach bothers me everyday makes me wonder #ebola",
    "pubdate": "11/12/2014 22:15:20",
    "Latitude": 19.853959663706426,
    "Longitude": -2.5040444859189788
  },
  {
    "": 579,
    "title": "Hendry Co defends #monkey breeding lab negligence including #Ebola-Typical&gt;govt protects biz over bodies @JVM @ALDF http://t.co/cYA5VItFGb",
    "pubdate": "11/12/2014 22:15:14",
    "Latitude": 14.27031151948599,
    "Longitude": -5.903311973109057
  },
  {
    "": 580,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:15:12",
    "Latitude": 14.00449256493084,
    "Longitude": -6.1966669750912695
  },
  {
    "": 581,
    "title": "9 Ways New Yorkers Benefit From The #Ebola Panic http://t.co/s9lxZdedSw #NewYork #NewYorkCity #BigApple #ILoveNewYork #Election2014",
    "pubdate": "11/12/2014 22:15:09",
    "Latitude": 14.31802648212893,
    "Longitude": 1.6598590872122143
  },
  {
    "": 582,
    "title": "Ebola ravages health care in #SierraLeone capital: http://t.co/5Fwgg8rZRj #AP #News #Ebola",
    "pubdate": "11/12/2014 22:15:02",
    "Latitude": 15.880238217616578,
    "Longitude": -2.19328693540907
  },
  {
    "": 583,
    "title": "RT @CIDRAP: WHO reports 3 more #Ebola cases in Mali http://t.co/mNNLPU6OLv",
    "pubdate": "11/12/2014 22:15:01",
    "Latitude": 15.052737710844733,
    "Longitude": -6.8739967474238135
  },
  {
    "": 584,
    "title": "RT @thesethbishop: I\\'m so sick right now :/ if I got Ebola and die there better be twerking at my funeral #Ebola",
    "pubdate": "11/12/2014 22:15:00",
    "Latitude": 13.811646505000654,
    "Longitude": -3.844243529227186
  },
  {
    "": 585,
    "title": "Ebola ravages health care in #SierraLeone capital: http://t.co/D6BYQGKSAp #AP #News #Ebola",
    "pubdate": "11/12/2014 22:15:00",
    "Latitude": 18.861066117797595,
    "Longitude": -6.259067197618117
  },
  {
    "": 586,
    "title": "RT @cpa61: RT @Daniel_Kudro: UCI is waging an  battle that might lead to cure.: UCI is waging an #Ebola battle that might... http://t.co/OA…",
    "pubdate": "11/12/2014 22:14:55",
    "Latitude": 14.142178476914031,
    "Longitude": -4.668266637735548
  },
  {
    "": 587,
    "title": "RT @cpa61: RT @Daniel_Kudro: UCI is waging an  battle that might lead to cure.: UCI is waging an #Ebola battle that might... http://t.co/OA…",
    "pubdate": "11/12/2014 22:14:54",
    "Latitude": 15.783529220010532,
    "Longitude": -3.6920915387342017
  },
  {
    "": 588,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:14:54",
    "Latitude": 14.454166328656417,
    "Longitude": -4.906241360159044
  },
  {
    "": 589,
    "title": "Politics keeps coming before science in threat of Ebola #ebola http://t.co/454ioNg1VG",
    "pubdate": "11/12/2014 22:14:54",
    "Latitude": 12.912767995471038,
    "Longitude": -4.337798724310453
  },
  {
    "": 590,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 22:14:49",
    "Latitude": 16.076580886764027,
    "Longitude": -2.705328156558463
  },
  {
    "": 591,
    "title": "@BushJennaaaaaa I mean ya 💁 #ebola is is basically my cousin #we\\'re #besties",
    "pubdate": "11/12/2014 22:14:47",
    "Latitude": 12.917776941790086,
    "Longitude": -4.604505872391722
  },
  {
    "": 592,
    "title": "RT @chantalrebelle: #Ebola death toll surpasses 5,000 - WHO http://t.co/Ld3a9JPeQV http://t.co/alEo16KQ4t c @DocteurK_ :((",
    "pubdate": "11/12/2014 22:14:45",
    "Latitude": 15.264429159999173,
    "Longitude": -6.541386504392291
  },
  {
    "": 593,
    "title": "Steep increases in #ebola deaths in Sierra Leone. http://t.co/Bv4Z5B0omD",
    "pubdate": "11/12/2014 22:14:32",
    "Latitude": 11.841630016782222,
    "Longitude": -4.586840422964384
  },
  {
    "": 594,
    "title": "RT @jbejinariu_: #Bobbybitch remix #ebola bitch // jess &amp; hann‼️#MIXTAPE COMING SOON #JWOI💀😂🎶🎶 #fwu https://t.co/w0aXT7A60f",
    "pubdate": "11/12/2014 22:14:32",
    "Latitude": 17.37469793072656,
    "Longitude": -3.0866308431752736
  },
  {
    "": 595,
    "title": "Politics keeps coming before science in threat of Ebola #ebola http://t.co/mGKInWVyt5",
    "pubdate": "11/12/2014 22:14:25",
    "Latitude": 15.035922349721014,
    "Longitude": -7.36609219202086
  },
  {
    "": 596,
    "title": "hope organisations of world will soon find the vaccine of treating dangerous #Ebola",
    "pubdate": "11/12/2014 22:14:23",
    "Latitude": 17.120091148755854,
    "Longitude": -0.21063751485916438
  },
  {
    "": 597,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:14:23",
    "Latitude": 16.93216309197211,
    "Longitude": -2.184711698835903
  },
  {
    "": 598,
    "title": "FROM EVRY INDICTN AMER IS #EBOLA FREE #GOP OPPRTNST FEAR MONGRNG DCPTN! FLU SEASN IS HERE! 6-8 MIL W/OUT #healthcare GVS OPT OT MED EXP! #p2",
    "pubdate": "11/12/2014 22:14:12",
    "Latitude": 16.609408976122587,
    "Longitude": -3.5108542747861673
  },
  {
    "": 599,
    "title": "RT @ColumbiaMSPH: Plenty of hugs as Alumnus Craig Spencer, recovered #Ebola patient, goes home via @nytimes @anemonanyc @MarcSantoraNYT htt…",
    "pubdate": "11/12/2014 22:13:59",
    "Latitude": 16.065171925643767,
    "Longitude": -3.980530334534519
  },
  {
    "": 600,
    "title": "RT @SusanWojcicki: Google matches $2 for every $1 donated in the fight against Ebola. Join the fight! #Ebola http://t.co/B8DLzqFLv4)",
    "pubdate": "11/12/2014 22:13:56",
    "Latitude": 15.723798423962768,
    "Longitude": -2.498631916696636
  },
  {
    "": 601,
    "title": "#U.S. nurses hold strikes, #protests #over #Ebola measures #Ebolanoia @Ebolanoia http://t.co/QVJ6ErPxXp http://t.co/0j7anSWeu3",
    "pubdate": "11/12/2014 22:13:51",
    "Latitude": 16.003349095901257,
    "Longitude": -4.566433561763132
  },
  {
    "": 602,
    "title": "#Ebola survivor demands £120k compensation after #pet #dog put down over killer disease fears in #Spain http://t.co/6ohurbKDPh RIP Excalibur",
    "pubdate": "11/12/2014 22:13:50",
    "Latitude": 21.75332824875918,
    "Longitude": -4.454009078622795
  },
  {
    "": 603,
    "title": "Politics keeps coming before science in threat of Ebola #ebola http://t.co/4WZP1379lj",
    "pubdate": "11/12/2014 22:13:38",
    "Latitude": 14.71797187524867,
    "Longitude": -3.430747654711354
  },
  {
    "": 604,
    "title": "Now Google Cares about Ebola#Ebola #google #googlecares http://t.co/ALzUrPXNW5",
    "pubdate": "11/12/2014 22:13:36",
    "Latitude": 16.94652376704383,
    "Longitude": -5.288847673422504
  },
  {
    "": 605,
    "title": "RT @Laurie_Garrett: Today @UNDP took over payroll at #Liberia MinHlth. Some got paid for 1st time in 3 mos, but I know 2 #Ebola staff got 1…",
    "pubdate": "11/12/2014 22:13:36",
    "Latitude": 14.017238741329642,
    "Longitude": -2.892945055924839
  },
  {
    "": 606,
    "title": "RT @GlblCtzn: Bob Geldof is right: #Ebola must be stopped. But is #BandAid30 the right approach? Thoughts? http://t.co/CR1EhhBeVE http://t.…",
    "pubdate": "11/12/2014 22:13:20",
    "Latitude": 14.622502426427962,
    "Longitude": -3.365027695092267
  },
  {
    "": 607,
    "title": "This is kinda brilliant. @nprnews: #Ebola In 3-D: A Video Game To Guide Health Care Workers Through A Ward http://t.co/yRZ2xuP1vW",
    "pubdate": "11/12/2014 22:13:18",
    "Latitude": 15.848996743199912,
    "Longitude": -5.606378600515104
  },
  {
    "": 608,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 22:13:13",
    "Latitude": 20.053785593309808,
    "Longitude": -4.518141540852147
  },
  {
    "": 609,
    "title": "WASHINGTON (@AP) - Pentagon: US to cut number of planned #Ebola-mission troops in Liberia to 3,000, down from 4,000",
    "pubdate": "11/12/2014 22:13:08",
    "Latitude": 15.009930900769069,
    "Longitude": -1.8394341836730534
  },
  {
    "": 610,
    "title": "RT @Ebolatrends: Family of #Ebola Victim #ThomasEricDuncan Settles With #DallasHospital - #NBCNews... http://t.co/DmD767NfLQ http://t.co/B2…",
    "pubdate": "11/12/2014 22:13:07",
    "Latitude": 13.879874738999915,
    "Longitude": -5.729442438417688
  },
  {
    "": 611,
    "title": "New Zealand police rule out presence of #Ebola in one of three vials found in mailboxes http://t.co/vV7uxDOlBz http://t.co/nlbFP8q1Vj",
    "pubdate": "11/12/2014 22:13:03",
    "Latitude": 13.444913684644995,
    "Longitude": -6.691664566829029
  },
  {
    "": 612,
    "title": "There have been 5160 reported deaths.In #Mali, there have been 4 reported confirmed and probable cases, and 4 deaths.#EBOLA#WHO",
    "pubdate": "11/12/2014 22:13:03",
    "Latitude": 11.99364683842791,
    "Longitude": -4.448187972428593
  },
  {
    "": 613,
    "title": "RT @Ebolatrends: Family of #Ebola Victim #ThomasEricDuncan Settles With #DallasHospital - #NBCNews... http://t.co/DmD767NfLQ http://t.co/B2…",
    "pubdate": "11/12/2014 22:13:00",
    "Latitude": 12.405944991553111,
    "Longitude": -2.7436371107514903
  },
  {
    "": 614,
    "title": "RT @Daniel_Kudro: UCI is waging an  battle that might lead to cure.: UCI is waging an #Ebola battle that might... http://t.co/OAl6ygedEv",
    "pubdate": "11/12/2014 22:12:48",
    "Latitude": 14.783425891583127,
    "Longitude": -8.051924863191894
  },
  {
    "": 615,
    "title": "RT @mterry337: #ISIS IS COMING! #EBOLA IS COMING!! #ZOMBIES ARE COMING!! THEY\\'RE GOING TO KILL US ALL!!!#LindsayGrahamHysteria#GopFearMon…",
    "pubdate": "11/12/2014 22:12:35",
    "Latitude": 11.082724344179454,
    "Longitude": -2.6536100800217572
  },
  {
    "": 616,
    "title": "@rdsalbert  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:12:26",
    "Latitude": 16.339634484785492,
    "Longitude": -2.7838269599757792
  },
  {
    "": 617,
    "title": "Family of #Ebola Victim #ThomasEricDuncan Settles With #DallasHospital - #NBCNews... http://t.co/DmD767NfLQ http://t.co/B2hh8AGZYq",
    "pubdate": "11/12/2014 22:12:10",
    "Latitude": 14.671482385117372,
    "Longitude": -2.9812855245653527
  },
  {
    "": 618,
    "title": "#Ebola US veterinary group issues guidelines for handling Ebola exposure in pets - Xinhua http://t.co/obV8iwt1w6",
    "pubdate": "11/12/2014 22:12:06",
    "Latitude": 10.537455804281421,
    "Longitude": -3.8405545104928236
  },
  {
    "": 619,
    "title": "#Ebola US veterinary group issues guidelines for handling Ebola exposure in pets - Xinhua http://t.co/iBqY1wzRZl",
    "pubdate": "11/12/2014 22:12:03",
    "Latitude": 14.72992089455957,
    "Longitude": -4.71556720365352
  },
  {
    "": 620,
    "title": "RT @qldnursesunion: Earlier today Australian nurses spoke with Liberian Ebola workers on the frontline. #g20 #ebola #oznurses #qldpol http:…",
    "pubdate": "11/12/2014 22:11:53",
    "Latitude": 15.421270964878097,
    "Longitude": -5.604409607969237
  },
  {
    "": 621,
    "title": "the difference between doing nothing and doing something in Pharma is the real #ValleyOfDeath - their response to #ebola epitomizes it #oddt",
    "pubdate": "11/12/2014 22:11:51",
    "Latitude": 17.02730517608929,
    "Longitude": -2.2390437525161446
  },
  {
    "": 622,
    "title": "#Ebola US nurses strike over insufficient Ebola protections   http://t.co/rgAlwajS1n http://t.co/2Je0DyhSll",
    "pubdate": "11/12/2014 22:11:46",
    "Latitude": 13.158972221892157,
    "Longitude": -2.591420308472225
  },
  {
    "": 623,
    "title": "#Mali races to head off #Ebola outbreak after second death http://t.co/CnuCe9wm1a",
    "pubdate": "11/12/2014 22:11:38",
    "Latitude": 16.02259115957629,
    "Longitude": -3.9878340696491135
  },
  {
    "": 624,
    "title": "@Ashmoneytaylor  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:11:32",
    "Latitude": 11.72127080655026,
    "Longitude": -7.065866333627122
  },
  {
    "": 625,
    "title": "RT @nytgraphics: After weeks of fewer #Ebola cases in Liberia, @WHO says it appears “trend is real” http://t.co/qPWzVH1PEf http://t.co/oJXA…",
    "pubdate": "11/12/2014 22:11:20",
    "Latitude": 11.651317471424287,
    "Longitude": -7.6156791814889
  },
  {
    "": 626,
    "title": "RT @PIH: A nurse\\'s audio diary: treating patients &amp; preparing to open PIH\\'s first #Ebola clinic in #Liberia: http://t.co/18UiDFp08X via @WB…",
    "pubdate": "11/12/2014 22:11:11",
    "Latitude": 10.991042222397649,
    "Longitude": -6.259986806935543
  },
  {
    "": 627,
    "title": "\\\"@RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/vzXHUdSgzH http://t.co/po4BH7DCKw\\\",\"\\\"@RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/vzXHUdSgzH http://t.co/po4BH7DCKw\\\",\"Twitter for Android",
    "pubdate": "11/12/2014 22:11:06",
    "Latitude": 10.665051080552153,
    "Longitude": -5.1344824685532595
  },
  {
    "": 628,
    "title": "#Ebola survivor demands £120k #compensation after dog put down over killer disease... http://t.co/8Tur8ct2FW http://t.co/Civs8MT09X",
    "pubdate": "11/12/2014 22:11:01",
    "Latitude": 19.555758267893765,
    "Longitude": -6.033657697172147
  },
  {
    "": 629,
    "title": "RT @Taybae_Duh: Game tomorrow at Locust Grove against Ola 😈🏀 5:30 Varsity Girls n Boys .. Come Support ! 😩🍴💯 Beat #ebOLA 😂",
    "pubdate": "11/12/2014 22:10:52",
    "Latitude": 11.91973577128577,
    "Longitude": -3.8607772864870658
  },
  {
    "": 630,
    "title": "#Bobbybitch remix #ebola bitch // jess &amp; hann‼️#MIXTAPE COMING SOON #JWOI💀😂🎶🎶 #fwu https://t.co/w0aXT7A60f",
    "pubdate": "11/12/2014 22:10:51",
    "Latitude": 14.072009409534731,
    "Longitude": -3.9789672635052944
  },
  {
    "": 631,
    "title": "RT @mcpharm: #Ebola Training Challenge - a serious games hackathon w @bkolko: http://t.co/sajrMdoYkQ via @YouTube",
    "pubdate": "11/12/2014 22:10:42",
    "Latitude": 15.136421572930779,
    "Longitude": -5.316048057231805
  },
  {
    "": 632,
    "title": "@BrianneCrossan  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:10:32",
    "Latitude": 17.028209003699413,
    "Longitude": -7.280543746946041
  },
  {
    "": 633,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:10:25",
    "Latitude": 17.197141959117232,
    "Longitude": -6.48960393083045
  },
  {
    "": 634,
    "title": "This is the largest #Ebola outbreak ever recorded, with more than 14,000 people... http://t.co/xD9IA41U70",
    "pubdate": "11/12/2014 22:10:22",
    "Latitude": 16.787807210829254,
    "Longitude": -3.4680009237233285
  },
  {
    "": 635,
    "title": "UCI is waging an #Ebola battle that might lead to cure. #zotzothttp://t.co/qQn6I9tMla",
    "pubdate": "11/12/2014 22:10:16",
    "Latitude": 14.866336088154473,
    "Longitude": -6.156922875107185
  },
  {
    "": 636,
    "title": "RT @maddiejotilley: Proud to work for @ChickAdvisor💛Checkout this article: #ICareAfrica -They Need Our Help Now!#ebola #charityhttp://t.…",
    "pubdate": "11/12/2014 22:10:15",
    "Latitude": 17.50731981970679,
    "Longitude": -5.4646127779150655
  },
  {
    "": 637,
    "title": "Thousands of nurses on strike over #Ebola training. Read more: http://t.co/73SoVnYkTh #ACA #Obamacare",
    "pubdate": "11/12/2014 22:10:09",
    "Latitude": 14.049762610350657,
    "Longitude": -5.475393710339358
  },
  {
    "": 638,
    "title": "#Ebola isn\\'t the only issue plaguing #SierraLeone. 70% lives in poverty. 1 in 5 children die before 5YO and 2/3 of adults are illiterate.",
    "pubdate": "11/12/2014 22:10:09",
    "Latitude": 19.25241758675546,
    "Longitude": -3.7147731890658795
  },
  {
    "": 639,
    "title": "RT @Taybae_Duh: Game tomorrow at Locust Grove against Ola 😈🏀 5:30 Varsity Girls n Boys .. Come Support ! 😩🍴💯 Beat #ebOLA 😂",
    "pubdate": "11/12/2014 22:10:04",
    "Latitude": 17.258914640015533,
    "Longitude": -2.0889480047603675
  },
  {
    "": 640,
    "title": "@MotherJones #Ebola, #Darfut, #BringBackOurGirls?? GREAT hashtags for a RT?",
    "pubdate": "11/12/2014 22:10:01",
    "Latitude": 15.847344433787665,
    "Longitude": -2.7420336182436573
  },
  {
    "": 641,
    "title": "RT @soniashah: More diversity in biomedicine = more people who can counter xenophobia AND science illiteracy.#Ebola reaction in US shows we…",
    "pubdate": "11/12/2014 22:09:33",
    "Latitude": 15.904317759311875,
    "Longitude": -6.6934733708049725
  },
  {
    "": 642,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 22:09:31",
    "Latitude": 14.374796607306052,
    "Longitude": -4.76974082553661
  },
  {
    "": 643,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:09:08",
    "Latitude": 14.935847997812466,
    "Longitude": -2.6721629565334846
  },
  {
    "": 644,
    "title": "Earlier today Australian nurses spoke with Liberian Ebola workers on the frontline. #g20 #ebola #oznurses #qldpol http://t.co/DkrPrHIp5x",
    "pubdate": "11/12/2014 22:08:57",
    "Latitude": 15.579334683703468,
    "Longitude": -5.052423589403338
  },
  {
    "": 645,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:08:57",
    "Latitude": 18.686817034369753,
    "Longitude": -3.492303995742873
  },
  {
    "": 646,
    "title": "RT @maddiejotilley: Proud to work for @ChickAdvisor💛Checkout this article: #ICareAfrica -They Need Our Help Now!#ebola #charityhttp://t.…",
    "pubdate": "11/12/2014 22:08:53",
    "Latitude": 11.376714207490547,
    "Longitude": -3.249295639401314
  },
  {
    "": 647,
    "title": "@efflorescent  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:08:51",
    "Latitude": 14.506275240733157,
    "Longitude": -5.364953132836834
  },
  {
    "": 648,
    "title": "RT @PhRMA: Mark Mosely of @mapintl lists key items for quick response at initial onset of outbreak like #Ebola in #HealthPOV http://t.co/p4…",
    "pubdate": "11/12/2014 22:08:47",
    "Latitude": 16.687027376408828,
    "Longitude": -6.531578928780889
  },
  {
    "": 649,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:08:46",
    "Latitude": 17.271798279669216,
    "Longitude": -7.424765327134569
  },
  {
    "": 650,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/Va04wxYIhf",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.41213710904202,
    "Longitude": -4.365140592104527
  },
  {
    "": 651,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/tBgpJORGj5",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 11.11193930828964,
    "Longitude": -7.76142206663728
  },
  {
    "": 652,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/htzt9QsCn9",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 15.743441883574414,
    "Longitude": -6.614589513052913
  },
  {
    "": 653,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/19hA289ssX",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 13.622385775849606,
    "Longitude": -1.4161975286208195
  },
  {
    "": 654,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/oeMKy6fycr",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 17.52108911961013,
    "Longitude": -5.47287388633252
  },
  {
    "": 655,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/zLSh2U4HK2",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 19.174976878898114,
    "Longitude": -9.202963936719925
  },
  {
    "": 656,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/Ip59jDJuVP",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.089277090345455,
    "Longitude": -2.6819462993173664
  },
  {
    "": 657,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/PkTuIli4Ky",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 18.940211669094552,
    "Longitude": -2.4959174731864398
  },
  {
    "": 658,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/TA68eI00lW",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 15.964780466075709,
    "Longitude": -2.917056244838456
  },
  {
    "": 659,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/XYXSHy9p5S",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.211304764049377,
    "Longitude": -2.4796241977596107
  },
  {
    "": 660,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/ePfBD4gPVb",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.5041199108712,
    "Longitude": -6.47290564709429
  },
  {
    "": 661,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/9ELvdQi2O7",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 18.522064121308446,
    "Longitude": -3.9876559958571924
  },
  {
    "": 662,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/r1vOkTcTSV",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 15.354491243380656,
    "Longitude": -4.1269458826105945
  },
  {
    "": 663,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/gV33Qm1mak",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 17.352329945354917,
    "Longitude": -3.307139678065242
  },
  {
    "": 664,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/5u8YxT2nCa",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.554667009562703,
    "Longitude": -2.9873291840893663
  },
  {
    "": 665,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/XLorboRJaI",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 15.547534885853791,
    "Longitude": -1.172570954645868
  },
  {
    "": 666,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/m7xSFnh0uq",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.891295753893758,
    "Longitude": -3.2975091393950304
  },
  {
    "": 667,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/6v3wvtr4q7",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 17.00299225018542,
    "Longitude": -6.685742204497968
  },
  {
    "": 668,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/WdN4Mo0wpr",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 15.320960365410894,
    "Longitude": -1.385975487209374
  },
  {
    "": 669,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/0vFnU9fR3N",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.52107885946514,
    "Longitude": -6.565636722882161
  },
  {
    "": 670,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/cTL0mdwCiz",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 13.113263488044105,
    "Longitude": -4.906062255529014
  },
  {
    "": 671,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/aK7hRxwSvY",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 16.656367526097405,
    "Longitude": -5.880655111548229
  },
  {
    "": 672,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/5mNOfwj7kO",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 18.905075814316742,
    "Longitude": -4.4574023724033776
  },
  {
    "": 673,
    "title": "#ebola Ebola: UN special envoy says combating stigma integral to overall crisis response  http://t.co/iLsuDTWCVr",
    "pubdate": "11/12/2014 22:08:40",
    "Latitude": 15.2105947678901,
    "Longitude": -9.819122936911144
  },
  {
    "": 674,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:08:37",
    "Latitude": 15.118971982383304,
    "Longitude": -3.2657165557222827
  },
  {
    "": 675,
    "title": "#WHO says sharp increase of #Ebola in Sierra Leone with 421 new infections this week.#health #news #alert http://t.co/nZUtw7Xelp",
    "pubdate": "11/12/2014 22:08:33",
    "Latitude": 16.87790044582222,
    "Longitude": -6.3821016880271255
  },
  {
    "": 676,
    "title": "RT @GlobalEnvision: Ebola’s Other Toll: Food On the Table http://t.co/cOJwRDf9OR via @TIME @MercyCorps tackles the long-term consequences o…",
    "pubdate": "11/12/2014 22:08:21",
    "Latitude": 13.790942209019246,
    "Longitude": -4.303391751624019
  },
  {
    "": 677,
    "title": "#Ebola outbreak deaths pass 5000 - BBC News http://t.co/u4YVeU5Xr2",
    "pubdate": "11/12/2014 22:08:15",
    "Latitude": 13.333736230316006,
    "Longitude": -3.6061060337492394
  },
  {
    "": 678,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 22:08:10",
    "Latitude": 16.32634904139506,
    "Longitude": -3.114020098547414
  },
  {
    "": 679,
    "title": "I\\'d rather catch #Ebola than #feelings. At least they\\'re working on a #cure for Ebola. #life",
    "pubdate": "11/12/2014 22:07:56",
    "Latitude": 18.748108478791064,
    "Longitude": -6.6741668544231985
  },
  {
    "": 680,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:07:51",
    "Latitude": 17.684323018270973,
    "Longitude": -4.002169112713309
  },
  {
    "": 681,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 22:07:24",
    "Latitude": 17.82054918628363,
    "Longitude": -7.28802089775394
  },
  {
    "": 682,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:07:16",
    "Latitude": 17.29072620448819,
    "Longitude": -3.059165597745105
  },
  {
    "": 683,
    "title": "RT @hp_ems: We\\'re so bad at assessing real risk. #Ebola http://t.co/4x5zPkA8JK via @Cowan4President",
    "pubdate": "11/12/2014 22:07:08",
    "Latitude": 17.687455002575604,
    "Longitude": -5.080242451231966
  },
  {
    "": 684,
    "title": "#KaciHickox &amp;amp; Dr. Spencer are #Ebola-free, but at least the media and politicians stayed calm. Kidding! http://t.co/V0sT5sdCxZ",
    "pubdate": "11/12/2014 22:07:06",
    "Latitude": 14.343802390493845,
    "Longitude": -5.856885680241221
  },
  {
    "": 685,
    "title": "Hanging with my self #highfive #FollowMe #funny #loops #comedy #me #idk #Bored #meandme #haha #Ebola #edit ... https://t.co/put4KVZuye",
    "pubdate": "11/12/2014 22:07:00",
    "Latitude": 12.371184565963315,
    "Longitude": 1.1968697227077918
  },
  {
    "": 686,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:06:56",
    "Latitude": 13.999930039316009,
    "Longitude": -2.426671749782451
  },
  {
    "": 687,
    "title": "@steplyk  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:06:43",
    "Latitude": 15.323151005600005,
    "Longitude": -6.388424111230046
  },
  {
    "": 688,
    "title": "US nurses strike over insufficient #Ebola protections | rt #news http://t.co/CmFXQc9n7C",
    "pubdate": "11/12/2014 22:06:33",
    "Latitude": 15.588987492145893,
    "Longitude": -3.301099767248416
  },
  {
    "": 689,
    "title": "@goodvibesxD  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:06:29",
    "Latitude": 13.086856725863798,
    "Longitude": -5.475248682445585
  },
  {
    "": 690,
    "title": "RT @mcpharm: #Ebola Training Challenge - a serious games hackathon w @bkolko: http://t.co/sajrMdoYkQ via @YouTube",
    "pubdate": "11/12/2014 22:06:25",
    "Latitude": 18.90359731092502,
    "Longitude": -5.656393940732053
  },
  {
    "": 691,
    "title": "RT @mcpharm: #Ebola Training Challenge - a serious games hackathon w @bkolko: http://t.co/sajrMdoYkQ via @YouTube",
    "pubdate": "11/12/2014 22:06:25",
    "Latitude": 13.295812235383666,
    "Longitude": -5.888519932640582
  },
  {
    "": 692,
    "title": "RT @globalpulsemag: #CRS president urges US Senate to oppose West Africa travel restrictions http://t.co/FAuFlwesRK #Ebola #Catholic",
    "pubdate": "11/12/2014 22:06:16",
    "Latitude": 14.746680572723212,
    "Longitude": -6.287819421642655
  },
  {
    "": 693,
    "title": "@yungcaiazzo  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:06:12",
    "Latitude": 13.749224214269539,
    "Longitude": -3.07030574396334
  },
  {
    "": 694,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 22:06:07",
    "Latitude": 16.70902995724291,
    "Longitude": -7.469189155974721
  },
  {
    "": 695,
    "title": "Proud to work for @ChickAdvisor💛Checkout this article: #ICareAfrica -They Need Our Help Now!#ebola #charityhttp://t.co/NtrJCJAmt7",
    "pubdate": "11/12/2014 22:06:06",
    "Latitude": 15.257171529533538,
    "Longitude": -2.695928057730649
  },
  {
    "": 696,
    "title": "#Ebola outbreak deaths pass 5000 - BBC News http://t.co/u6KfswK3D7",
    "pubdate": "11/12/2014 22:06:00",
    "Latitude": 20.274035643020838,
    "Longitude": -6.15852035191338
  },
  {
    "": 697,
    "title": "@Marcelle_Crist @RickyRayment  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:05:58",
    "Latitude": 13.499185882123884,
    "Longitude": -8.32110488133685
  },
  {
    "": 698,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 22:05:54",
    "Latitude": 15.879686614483521,
    "Longitude": -5.288813297050018
  },
  {
    "": 699,
    "title": "RT @WHOhd: Quarantined Iowan showing no signs of Ebola symptoms. http://t.co/KPNtWV0hCA #13now #Ebola http://t.co/WOf4gQCciH",
    "pubdate": "11/12/2014 22:05:50",
    "Latitude": 15.088453064195997,
    "Longitude": -5.065218094505143
  },
  {
    "": 700,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:05:39",
    "Latitude": 14.680373977926928,
    "Longitude": -7.023255102353703
  },
  {
    "": 701,
    "title": "RT @unfoundation: Let\\'s discuss the role of clean #energyaccess in tackling infectious diseases ranging from #Pneumonia to #Ebola Join w/ #…",
    "pubdate": "11/12/2014 22:05:37",
    "Latitude": 13.707889970112086,
    "Longitude": -1.9795981993648795
  },
  {
    "": 702,
    "title": "RT @mterry337: #ISIS IS COMING! #EBOLA IS COMING!! #ZOMBIES ARE COMING!! THEY\\'RE GOING TO KILL US ALL!!!#LindsayGrahamHysteria#GopFearMon…",
    "pubdate": "11/12/2014 22:05:35",
    "Latitude": 14.891370798010078,
    "Longitude": -6.074785807555855
  },
  {
    "": 703,
    "title": "Programming &amp; Web Solutions http://t.co/al0eNyVRc5 #ebola http://t.co/QFQXElnNZD",
    "pubdate": "11/12/2014 22:05:30",
    "Latitude": 16.75750650347995,
    "Longitude": -4.645720870578852
  },
  {
    "": 704,
    "title": "@plastikirsten  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:05:26",
    "Latitude": 16.939668746503624,
    "Longitude": -1.4645704430417736
  },
  {
    "": 705,
    "title": "Tmrw: NH #Ebola protocol w/ @JoseTMontero. Also, @emerrens, @BrighamWomens Dr. Baden, @pattywight. http://t.co/ozhWXc74XA @nhdhhspio",
    "pubdate": "11/12/2014 22:05:21",
    "Latitude": 15.109769783709043,
    "Longitude": -6.283078973403009
  },
  {
    "": 706,
    "title": "Tmrw: NH #Ebola protocol w/ @JoseTMontero. Also, @emerrens, @BrighamWomens Dr. Baden, @pattywight. http://t.co/AzlpxidDRj @nhdhhspio",
    "pubdate": "11/12/2014 22:05:20",
    "Latitude": 13.875647847583659,
    "Longitude": -6.849415194050122
  },
  {
    "": 707,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:05:18",
    "Latitude": 17.23026667454911,
    "Longitude": -6.3992469210654335
  },
  {
    "": 708,
    "title": "RT @TerryFairbanks: \\\"They haven\\'t said a thing about #Ebola all week--The epidemic must be over!\\\" http://t.co/v9FFafFGDP via @newyorker",
    "pubdate": "11/12/2014 22:05:16",
    "Latitude": 14.720631586850699,
    "Longitude": -5.456497561702743
  },
  {
    "": 709,
    "title": "Criticizing others who take risks to serve is the exact opposite reaction we should have. http://t.co/Av4puWAH6m via @RELEVANT #Ebola",
    "pubdate": "11/12/2014 22:05:14",
    "Latitude": 16.774260295369974,
    "Longitude": -1.0621189861884863
  },
  {
    "": 710,
    "title": "@dbeezy1017  RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:05:10",
    "Latitude": 14.65198994466315,
    "Longitude": -5.5146773930910165
  },
  {
    "": 711,
    "title": "RT @JubileeUSA: Huge News: US asks #IMF to cancel debt for countries dealing with #Ebola. http://t.co/nYnCsVc1m1 @Eric_LeCompte",
    "pubdate": "11/12/2014 22:05:06",
    "Latitude": 15.379388409192108,
    "Longitude": -8.702517562069499
  },
  {
    "": 712,
    "title": "“@MarkMobius: Nigeria has demonstrated the ability to contain and eradicate #Ebola in Africa’s most populous country. http://t.co/eQ0f9fzxXs",
    "pubdate": "11/12/2014 22:05:03",
    "Latitude": 19.568237378415297,
    "Longitude": -4.8451480460826755
  },
  {
    "": 713,
    "title": "Trending Now: \n\n#Ebola | #China | #Us | #Comet | #Obama | #World | #Deal | #Who | #Big | #Ukraine\n\n via http://t.co/942kPJKfeu",
    "pubdate": "11/12/2014 22:05:02",
    "Latitude": 14.357122757511368,
    "Longitude": -3.069427767053944
  },
  {
    "": 714,
    "title": "Listen to Anne Bennett @HirondelleUSA on fear and mistrust during the ebola epidemic in Africa http://t.co/uxNwMds5m3 @hirondelleus #Ebola",
    "pubdate": "11/12/2014 22:04:59",
    "Latitude": 16.02593872547857,
    "Longitude": -5.832348400311874
  },
  {
    "": 715,
    "title": "RT @mjsmith11: @TeamSueEllen Have you heard the latest #Ebola joke? You probably will not get it. I am with you and the rest of Team Sue El…",
    "pubdate": "11/12/2014 22:04:54",
    "Latitude": 14.381255858503534,
    "Longitude": -3.6946534358452285
  },
  {
    "": 716,
    "title": "RT @UNICEF: Combating #Ebola with culture: how songs, radio soap operas &amp; local artists spread key messages, via @NewYorker http://t.co/Dbw…",
    "pubdate": "11/12/2014 22:04:44",
    "Latitude": 14.873301679812887,
    "Longitude": -2.204579109930179
  },
  {
    "": 717,
    "title": "@plumopal73   RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:04:40",
    "Latitude": 13.571916681875015,
    "Longitude": -6.773166643215472
  },
  {
    "": 718,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 22:04:35",
    "Latitude": 15.922063256263813,
    "Longitude": -3.423108739570436
  },
  {
    "": 719,
    "title": "RT @hp_ems: We\\'re so bad at assessing real risk. #Ebola http://t.co/4x5zPkA8JK via @Cowan4President",
    "pubdate": "11/12/2014 22:04:26",
    "Latitude": 14.423401971771433,
    "Longitude": -2.0873707196053832
  },
  {
    "": 720,
    "title": "RT @AMREFCanada: Dr. Bogoch: we need to stop the outbreak at its source (West Africa) to stop international spread #Ebola #AmrefCoffeehouse",
    "pubdate": "11/12/2014 22:04:19",
    "Latitude": 14.249326866197238,
    "Longitude": -2.2944305279021946
  },
  {
    "": 721,
    "title": "RT @EbolaOutbreakUS: @Ceromancyvision RT #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:04:10",
    "Latitude": 14.832946538698842,
    "Longitude": -5.357889180407343
  },
  {
    "": 722,
    "title": "RT @AMREFCanada: Dr. Fisman: Height of hypocrisy that the country that fought travel advisory from WHO during SARS would restrict travel vi…",
    "pubdate": "11/12/2014 22:04:10",
    "Latitude": 16.045810169700015,
    "Longitude": -5.114396418766117
  },
  {
    "": 723,
    "title": "@kayla_hemmingss RT PLEASE THANKS! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:04:08",
    "Latitude": 15.36192203841243,
    "Longitude": -3.657414576065825
  },
  {
    "": 724,
    "title": "RT @WBUR: Nurse John Welch records \\\"desperately sad\\\" experiences treating #Ebola patients in Liberia: http://t.co/YAUFow94d1 http://t.co/Kl…",
    "pubdate": "11/12/2014 22:03:55",
    "Latitude": 13.65395879719208,
    "Longitude": -5.720088694478834
  },
  {
    "": 725,
    "title": "RT @HoodDeaconShow: @RickeySmiley look what happens when u tell a bad ass lil kid he got #Ebola 😂😂😂 https://t.co/2uOkLgAltS",
    "pubdate": "11/12/2014 22:03:50",
    "Latitude": 13.76130541685433,
    "Longitude": -4.797075767033899
  },
  {
    "": 726,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 22:03:49",
    "Latitude": 14.494214435175273,
    "Longitude": -4.654885934850641
  },
  {
    "": 727,
    "title": "RT @HelenBranswell: There are new cases of #Ebola in Mali, in the capital, Bamako. This is not good. Unrelated to the 1st introduced case h…",
    "pubdate": "11/12/2014 22:03:48",
    "Latitude": 15.61057014883012,
    "Longitude": -8.84370422937731
  },
  {
    "": 728,
    "title": "@maggyyy_xo RT #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:03:44",
    "Latitude": 14.995362928249847,
    "Longitude": -4.218440888618142
  },
  {
    "": 729,
    "title": "RT @UAB_Tyler_Greer: @RussellAuthor is gearing up for his new book release Friday. What has Mackie McKay gotten into now? Not #Ebola? http:…",
    "pubdate": "11/12/2014 22:03:36",
    "Latitude": 16.08201045456071,
    "Longitude": -5.316047159977231
  },
  {
    "": 730,
    "title": "@_karaaaa__ RT #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:03:35",
    "Latitude": 18.63272569679345,
    "Longitude": -2.879716767790487
  },
  {
    "": 731,
    "title": "RT @USABillOfRights: Contained? NYC Department Of Health Actively Monitoring 357 Individuals For #Ebolahttp://t.co/DxPIRQdNuM",
    "pubdate": "11/12/2014 22:03:29",
    "Latitude": 18.473192958103866,
    "Longitude": -5.993104619462475
  },
  {
    "": 732,
    "title": "#Ebola-hit Africa expecting positive news from #APEChttp://t.co/4K4khihD8P",
    "pubdate": "11/12/2014 22:03:27",
    "Latitude": 19.27592673469922,
    "Longitude": -4.187586735808421
  },
  {
    "": 733,
    "title": "@Ceromancyvision RT #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:03:25",
    "Latitude": 15.164106129674055,
    "Longitude": -4.72136391485585
  },
  {
    "": 734,
    "title": "#Ebola: #MSF Online Briefing Now Available to the Public  http://t.co/WqSnY8W8hL http://t.co/Qo9BVL3FrC",
    "pubdate": "11/12/2014 22:03:25",
    "Latitude": 15.218624080341701,
    "Longitude": -8.242644010751075
  },
  {
    "": 735,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 22:03:22",
    "Latitude": 16.133092182637785,
    "Longitude": -5.912441298853804
  },
  {
    "": 736,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 22:03:13",
    "Latitude": 15.637955816823073,
    "Longitude": -6.484200721656046
  },
  {
    "": 737,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:03:04",
    "Latitude": 12.436363736877539,
    "Longitude": -2.2080892291940812
  },
  {
    "": 738,
    "title": "@KateWyman44 @CaseyBerry99 RT #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:03:04",
    "Latitude": 17.434014081568982,
    "Longitude": -6.6206059285761025
  },
  {
    "": 739,
    "title": "Late #Ebola Patient\\'s #Fiancee Gets Nothing in #HospitalSettlement http://t.co/NSXosM4rvE http://t.co/YwxvrflfRK",
    "pubdate": "11/12/2014 22:03:02",
    "Latitude": 17.526167317726127,
    "Longitude": -2.2056672617048627
  },
  {
    "": 740,
    "title": "Honestly, what do we do if @Beyonce gets #ebola ?😳",
    "pubdate": "11/12/2014 22:02:56",
    "Latitude": 15.361149399332346,
    "Longitude": -4.243146600099993
  },
  {
    "": 741,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:02:56",
    "Latitude": 11.9338638861425,
    "Longitude": -7.536393699031819
  },
  {
    "": 742,
    "title": "RT @AmeriCares: You can join the fight to stop #Ebola. Hear stories from front lines &amp; learn how you can help. http://t.co/Nqm8ZW5hzL http:…",
    "pubdate": "11/12/2014 22:02:54",
    "Latitude": 12.620354227837119,
    "Longitude": -5.750834881378644
  },
  {
    "": 743,
    "title": "http://t.co/hw29mkkDI8 learn latest about Ebola, as of November 12, 2014 at 06:02PM. Stay healthy. #Ebola",
    "pubdate": "11/12/2014 22:02:42",
    "Latitude": 18.55429802398854,
    "Longitude": -3.7118442605948854
  },
  {
    "": 744,
    "title": "RT @healthmap: ICYMI! Highlights of most recent @WHO #Ebola SitRep live at: http://t.co/0BC5W86Fv3 - 4 deaths in #Mali, 421 new cases in #S…",
    "pubdate": "11/12/2014 22:02:35",
    "Latitude": 12.529368371223669,
    "Longitude": -3.3504876396862535
  },
  {
    "": 745,
    "title": "#NYTimes: #Clinic and #Mosque now closed in #Bamako after visit from dead Imam. He died 27th oct of propbely #Ebola. http://t.co/MopXgF9VYX",
    "pubdate": "11/12/2014 22:02:23",
    "Latitude": 14.459972907198432,
    "Longitude": -1.7269794527862272
  },
  {
    "": 746,
    "title": "Seriously, #ebola would be sweet reprieve to discussing #gamergate. I think it\\'s time a few people are elected leaders, develop content, [1]",
    "pubdate": "11/12/2014 22:02:22",
    "Latitude": 15.511617205593282,
    "Longitude": -0.05081367862316721
  },
  {
    "": 747,
    "title": "All of a sudden #kimk is naked and u dont hear about #isis or #ebolA ANYMORE SMH",
    "pubdate": "11/12/2014 22:02:22",
    "Latitude": 16.824880451203196,
    "Longitude": -5.223428269367159
  },
  {
    "": 748,
    "title": "@lifeasangelina RT PLEASE THANK YOU! #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:02:18",
    "Latitude": 17.643937230970977,
    "Longitude": -4.338609859632478
  },
  {
    "": 749,
    "title": "RT @Dina_bintSahar: #Ebola fades back to being a whisper in the dark: http://t.co/vdLKfQYYT0",
    "pubdate": "11/12/2014 22:02:15",
    "Latitude": 10.92038527372354,
    "Longitude": -3.2542504049748953
  },
  {
    "": 750,
    "title": "RT @USABillOfRights: Contained? NYC Department Of Health Actively Monitoring 357 Individuals For #Ebolahttp://t.co/DxPIRQdNuM",
    "pubdate": "11/12/2014 22:02:02",
    "Latitude": 16.633222425978346,
    "Longitude": -2.78583514656491
  },
  {
    "": 751,
    "title": "@mrtom2360 Yeah, big just like #Ebola. .",
    "pubdate": "11/12/2014 22:01:56",
    "Latitude": 14.869601145020194,
    "Longitude": -2.596929522513144
  },
  {
    "": 752,
    "title": "@Crimsix R.I.P. #Ebola",
    "pubdate": "11/12/2014 22:01:45",
    "Latitude": 12.90581779707927,
    "Longitude": -5.37877528174239
  },
  {
    "": 753,
    "title": "2014 #Ebola Outbreaks - Timeline - Interactive Map http://t.co/a0Cmk0wvw6 RT @PLOSCurrentsOut http://t.co/XwfWqIMiyf",
    "pubdate": "11/12/2014 22:01:39",
    "Latitude": 14.947336848994178,
    "Longitude": -3.26139671766008
  },
  {
    "": 754,
    "title": "RT @LS_Health: How deadly is #Pneumonia? More #kids have died from it since Monday than all #Ebola victims this year! http://t.co/4tHLVSJn7x",
    "pubdate": "11/12/2014 22:01:37",
    "Latitude": 12.120619102073848,
    "Longitude": -5.362825003397154
  },
  {
    "": 755,
    "title": "MUST read: One in 7 women risk dying in childbirth in #Ebola-hit countries http://t.co/i7fSNOFgzG via @ReutersAfrica",
    "pubdate": "11/12/2014 22:01:36",
    "Latitude": 14.358417497386835,
    "Longitude": -5.179759402963294
  },
  {
    "": 756,
    "title": "RT @HelenBranswell: There are new cases of #Ebola in Mali, in the capital, Bamako. This is not good. Unrelated to the 1st introduced case h…",
    "pubdate": "11/12/2014 22:01:29",
    "Latitude": 15.727751677726465,
    "Longitude": -5.317627655967438
  },
  {
    "": 757,
    "title": "WATCH: Morocco axed as CAN hosts over #Ebola [News Bulletin](http://t.co/YnPtUcPURj)http://t.co/MFGjW2VjnJ",
    "pubdate": "11/12/2014 22:01:20",
    "Latitude": 16.381202679834907,
    "Longitude": -4.2054312210801434
  },
  {
    "": 758,
    "title": "Inner Melbourne GPs can now access step by step info on suspected #Ebola cases via HealthPathways Melbourne. http://t.co/WLrE3yMrik.",
    "pubdate": "11/12/2014 22:01:17",
    "Latitude": 15.227872900631986,
    "Longitude": -5.949335246382782
  },
  {
    "": 759,
    "title": "RT @CalHealthline: The Quiet End to the U.S. #Ebola Panic (via @theatlantic)http://t.co/mkOlRG9gqr",
    "pubdate": "11/12/2014 22:01:16",
    "Latitude": 17.467878908566142,
    "Longitude": -6.095914761565688
  },
  {
    "": 760,
    "title": "As If #Ebola Weren\\'t Bad Enough, Here\\'s Another Deadly #Disease Invading America Across The #Border http://t.co/SDvDIy4rzv via @po_st",
    "pubdate": "11/12/2014 22:01:16",
    "Latitude": 16.7120979195082,
    "Longitude": -7.02736197661425
  },
  {
    "": 761,
    "title": "RT @oxfamgb: #Ebola could become the humanitarian disaster of our generation. @oxfamgb is making sure it doesn\\'t. Can you help? http://t.co…",
    "pubdate": "11/12/2014 22:01:09",
    "Latitude": 15.828706293283213,
    "Longitude": -4.6435370550309365
  },
  {
    "": 762,
    "title": "@UsaNowWeb RT #florida is monitoring 9 people for #ebola in #florida! http://t.co/HmI3GzKD5q",
    "pubdate": "11/12/2014 22:01:09",
    "Latitude": 14.04675642915607,
    "Longitude": -5.84007384194524
  },
  {
    "": 763,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:00:54",
    "Latitude": 13.47490537038482,
    "Longitude": -4.551891092016508
  },
  {
    "": 764,
    "title": "RT @MarkMobius: Nigeria has demonstrated the ability to contain and eradicate #Ebola in Africa’s most populous country. http://t.co/RndtBuB…",
    "pubdate": "11/12/2014 22:00:51",
    "Latitude": 17.231656707694537,
    "Longitude": -4.643997719771642
  },
  {
    "": 765,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 22:00:51",
    "Latitude": 16.357558670448704,
    "Longitude": -5.037890548552454
  },
  {
    "": 766,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 22:00:49",
    "Latitude": 19.054677580647134,
    "Longitude": -7.081060245799073
  },
  {
    "": 767,
    "title": "Workers on #Ebola front say need for help urgent as Congress deliberates $6 billion aid request http://t.co/OAzrih6h2u",
    "pubdate": "11/12/2014 22:00:39",
    "Latitude": 15.19206197820535,
    "Longitude": -2.9683066103960902
  },
  {
    "": 768,
    "title": "Fifa has confirmed that the Club W/Cup will hold in Morocco next month, despite the country refusing to host 2015 #AFCON over #Ebola fears.",
    "pubdate": "11/12/2014 22:00:38",
    "Latitude": 16.650199640443795,
    "Longitude": -2.723063641086855
  },
  {
    "": 769,
    "title": "Nigeria has demonstrated the ability to contain and eradicate #Ebola in Africa’s most populous country. http://t.co/RndtBuBETH",
    "pubdate": "11/12/2014 22:00:36",
    "Latitude": 14.292270799600669,
    "Longitude": -4.399451225799842
  },
  {
    "": 770,
    "title": "@KVH &amp; @Videotel_Marine offer free Ebola safety video to mariners around the world http://t.co/8c8Yo1Egbo #ebola http://t.co/qlUbUY7waU",
    "pubdate": "11/12/2014 22:00:23",
    "Latitude": 17.294571106639243,
    "Longitude": -1.5052486495996655
  },
  {
    "": 771,
    "title": "RT @AmeriCares: RT @Anna_Z: Join @OgilvyDC on 11/18 for #Ebola inperson discussion. Speakers from #NIH &amp; #AmeriCares. Register: http://t.co…",
    "pubdate": "11/12/2014 22:00:23",
    "Latitude": 12.45975465980041,
    "Longitude": -4.05442394751346
  },
  {
    "": 772,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 22:00:21",
    "Latitude": 17.84650389756799,
    "Longitude": -5.936657872590067
  },
  {
    "": 773,
    "title": "RT @mterry337: #ISIS IS COMING! #EBOLA IS COMING!! #ZOMBIES ARE COMING!! THEY\\'RE GOING TO KILL US ALL!!!#LindsayGrahamHysteria#GopFearMon…",
    "pubdate": "11/12/2014 22:00:19",
    "Latitude": 18.02735426640821,
    "Longitude": -4.52217204486142
  },
  {
    "": 774,
    "title": "RT @AsCorrespondent: UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 22:00:18",
    "Latitude": 16.331656697254775,
    "Longitude": -1.6095876533924631
  },
  {
    "": 775,
    "title": "#Mali\\'s Ministry of Health has confirmed 2nd #Ebola fatal case, which occurred to a #Bamako nurse http://t.co/GnHM8ZGC2P @WHO",
    "pubdate": "11/12/2014 22:00:16",
    "Latitude": 11.810564489791076,
    "Longitude": -4.555278064211566
  },
  {
    "": 776,
    "title": "RT @UNICEF: How #Ebola survivors like Patience, 19, are playing a key role in the response http://t.co/VMwaIpapbx via @irinnews",
    "pubdate": "11/12/2014 22:00:09",
    "Latitude": 12.69111408405718,
    "Longitude": -7.020965325593359
  },
  {
    "": 777,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 22:00:02",
    "Latitude": 12.41726158559867,
    "Longitude": -5.413171420578864
  },
  {
    "": 778,
    "title": "RT @thesethbishop: I\\'m so sick right now :/ if I got Ebola and die there better be twerking at my funeral #Ebola",
    "pubdate": "11/12/2014 22:00:01",
    "Latitude": 19.18815912916572,
    "Longitude": -6.764034867241495
  },
  {
    "": 779,
    "title": "@Youtube_Agent Africa - where people can be force vaccinated with experimental vaccines at gun-point #ebola",
    "pubdate": "11/12/2014 21:59:54",
    "Latitude": 15.530214810030046,
    "Longitude": -4.5384447177326805
  },
  {
    "": 780,
    "title": "Donald Trump Hospitalized with Ebola, Verbal Diarrhea   http://t.co/T8rPSeVquG  #donaldtrump #ebola via @humortimes",
    "pubdate": "11/12/2014 21:59:52",
    "Latitude": 18.56678012892008,
    "Longitude": -4.556120183926089
  },
  {
    "": 781,
    "title": "UN\\'s Ban Ki-moon calls on Asia to step up #Ebola fight  http://t.co/yH3UkYPXfX  #Asia http://t.co/uv1hXYFXtM",
    "pubdate": "11/12/2014 21:59:51",
    "Latitude": 14.14923135539413,
    "Longitude": -4.398783909825417
  },
  {
    "": 782,
    "title": "RT @theOFDA: 30 metric tons of personal protective equip arrives in #Liberia to protect healthcare workers on frontlines of #Ebola http://t…",
    "pubdate": "11/12/2014 21:59:51",
    "Latitude": 14.503385260409965,
    "Longitude": -4.7149586320399415
  },
  {
    "": 783,
    "title": "Nerdnalist Thanks for following me. My fb: http://t.co/uS667xjdMz. Visit and \\\"Like\\\" if you like. #civilwar #ebola #history",
    "pubdate": "11/12/2014 21:59:41",
    "Latitude": 15.882185690275517,
    "Longitude": -2.674522920735778
  },
  {
    "": 784,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 21:59:39",
    "Latitude": 17.957461082326965,
    "Longitude": -7.243197883710895
  },
  {
    "": 785,
    "title": "#Wearables for Managing Epidemics http://t.co/yYY1AyQhLQ #Ebola",
    "pubdate": "11/12/2014 21:59:31",
    "Latitude": 14.811334205272445,
    "Longitude": -5.977779010929789
  },
  {
    "": 786,
    "title": "RT @healthmap: ICYMI! Highlights of most recent @WHO #Ebola SitRep live at: http://t.co/0BC5W86Fv3 - 4 deaths in #Mali, 421 new cases in #S…",
    "pubdate": "11/12/2014 21:59:14",
    "Latitude": 14.602798807073153,
    "Longitude": -3.888787846387176
  },
  {
    "": 787,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:58:37",
    "Latitude": 12.634950005823573,
    "Longitude": -6.187515544680368
  },
  {
    "": 788,
    "title": "RT @reteralolipy: RT @RedNationRising 3 Democrats Sent Obama A Letter Wanting Troops To Directly Treat #Ebola @RepKeithEllison @RepB",
    "pubdate": "11/12/2014 21:58:35",
    "Latitude": 15.070742919639125,
    "Longitude": -6.234312982089507
  },
  {
    "": 789,
    "title": "RT @McCarthyism101: #Ebola is our beautiful creation.A Frankenstein we deliberately let loose from our laboratories. Our #Agenda21! Now suc…",
    "pubdate": "11/12/2014 21:58:33",
    "Latitude": 14.097714811829796,
    "Longitude": -2.1045551283818584
  },
  {
    "": 790,
    "title": "First Outbreak Quashed, #Ebola Reappears in Mali: The West African nation of Mali, which just beat its first o... http://t.co/wBRlMUuJ4Z",
    "pubdate": "11/12/2014 21:58:28",
    "Latitude": 14.504806349528423,
    "Longitude": -1.8529424421341605
  },
  {
    "": 791,
    "title": "RT @janinemccready: #Mali confirms its second fatal case of #Ebola virus disease http://t.co/C35mjxF1h9",
    "pubdate": "11/12/2014 21:58:26",
    "Latitude": 15.916133696064277,
    "Longitude": -4.177376223405188
  },
  {
    "": 792,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:58:21",
    "Latitude": 14.287546532295698,
    "Longitude": -4.166676732176935
  },
  {
    "": 793,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 21:58:21",
    "Latitude": 17.80377034827625,
    "Longitude": -7.382536414188093
  },
  {
    "": 794,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:58:13",
    "Latitude": 12.016977257056352,
    "Longitude": -5.837519810783214
  },
  {
    "": 795,
    "title": "RT JohnGrindstaff: RT hp_ems: We\\'re so bad at assessing real risk. #Ebola http://t.co/5eJy3PLLGR via Cowan4President",
    "pubdate": "11/12/2014 21:58:12",
    "Latitude": 14.842458893365245,
    "Longitude": -6.330039475490036
  },
  {
    "": 796,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 21:58:02",
    "Latitude": 16.885918897073033,
    "Longitude": -2.6664989435347035
  },
  {
    "": 797,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:58:00",
    "Latitude": 16.21565448022686,
    "Longitude": -7.8689288728191915
  },
  {
    "": 798,
    "title": "RT @dirkstanley: First Outbreak Quashed, #Ebola Reappears in Mali , via @nytimes http://t.co/lKbwZw4c2C",
    "pubdate": "11/12/2014 21:57:58",
    "Latitude": 15.894309806442884,
    "Longitude": -4.334819177566694
  },
  {
    "": 799,
    "title": "RT @hp_ems: We\\'re so bad at assessing real risk. #Ebola http://t.co/4x5zPkA8JK via @Cowan4President",
    "pubdate": "11/12/2014 21:57:32",
    "Latitude": 14.465891983811021,
    "Longitude": -2.30650433690131
  },
  {
    "": 800,
    "title": "RT @DrLindseyFitz: Is the #Ebola hazmat gear a modern-day PLAGUE DOC? More in Episode 2 of #UnderTheKnife - https://t.co/JuwLfCJwHD http://…",
    "pubdate": "11/12/2014 21:57:16",
    "Latitude": 17.311000529125057,
    "Longitude": -3.2138046999457135
  },
  {
    "": 801,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:57:14",
    "Latitude": 16.510662475919748,
    "Longitude": -6.700911272901978
  },
  {
    "": 802,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:57:04",
    "Latitude": 17.383249092889326,
    "Longitude": -4.168533913993796
  },
  {
    "": 803,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 21:56:47",
    "Latitude": 17.291691145078374,
    "Longitude": -3.289531908360167
  },
  {
    "": 804,
    "title": "RT @McCarthyism101: #Ebola is our beautiful creation.A Frankenstein we deliberately let loose from our laboratories. Our #Agenda21! Now suc…",
    "pubdate": "11/12/2014 21:56:45",
    "Latitude": 15.826247619785585,
    "Longitude": -1.5009166599657378
  },
  {
    "": 805,
    "title": "We\\'re so bad at assessing real risk. #Ebola http://t.co/4x5zPkA8JK via @Cowan4President",
    "pubdate": "11/12/2014 21:56:44",
    "Latitude": 14.17771123381534,
    "Longitude": -4.082694985935517
  },
  {
    "": 806,
    "title": "RT @VaccineXchange: NIH wont test #ebola vaccine for safety in people w/ autoimmune disease due to reactions, but they will be allowed to g…",
    "pubdate": "11/12/2014 21:56:43",
    "Latitude": 16.192306220890107,
    "Longitude": -4.322179491532962
  },
  {
    "": 807,
    "title": "RT @DrThomasPaul: #Ebola is here. It will kill millions of people in their #minds. Resolve fears of #disease and #death.  Release #pastlive…",
    "pubdate": "11/12/2014 21:56:33",
    "Latitude": 17.326731849172702,
    "Longitude": -6.4482868916716285
  },
  {
    "": 808,
    "title": "RT @VaccineXchange: NIH wont test #ebola vaccine for safety in people w/ autoimmune disease due to reactions, but they will be allowed to g…",
    "pubdate": "11/12/2014 21:56:24",
    "Latitude": 13.030454205857412,
    "Longitude": -3.016450498415492
  },
  {
    "": 809,
    "title": "#ISIS IS COMING! #EBOLA IS COMING!! #ZOMBIES ARE COMING!! THEY\\'RE GOING TO KILL US ALL!!!#LindsayGrahamHysteria#GopFearMongers#UniteBlue",
    "pubdate": "11/12/2014 21:56:13",
    "Latitude": 14.086539820544994,
    "Longitude": -1.9990227295271383
  },
  {
    "": 810,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 21:56:12",
    "Latitude": 13.616659915217841,
    "Longitude": -10.922712894940421
  },
  {
    "": 811,
    "title": "#Imam was in two mosks! said #NYtimes \\\"Large mosque in Bamako\\\" and an other in Guinee. Did they mean the \\\"Grande Mosque\\\" in #Bamako? #Ebola",
    "pubdate": "11/12/2014 21:56:07",
    "Latitude": 16.4146725381437,
    "Longitude": -1.2882628324192074
  },
  {
    "": 812,
    "title": "#Ebola death toll tops 5000; steep rise in Sierra Leone cases: WHO - Reuters UK http://t.co/CHqJr3BIgN",
    "pubdate": "11/12/2014 21:56:05",
    "Latitude": 19.666313829386546,
    "Longitude": -3.986375592472289
  },
  {
    "": 813,
    "title": "NIH wont test #ebola vaccine for safety in people w/ autoimmune disease due to reactions, but they will be allowed to get the vaccine-F\\'d Up",
    "pubdate": "11/12/2014 21:55:28",
    "Latitude": 12.267243636409443,
    "Longitude": -7.8747845763636235
  },
  {
    "": 814,
    "title": "RT @tvkatesnow: \\\"I am no one. I am nobody\\\" heartbreaking comment from an #Ebola patient to an American doctor. @NBCNightlyNews http://t.co/…",
    "pubdate": "11/12/2014 21:55:16",
    "Latitude": 16.65489304636686,
    "Longitude": -3.1921676009508753
  },
  {
    "": 815,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:55:15",
    "Latitude": 14.379528021006994,
    "Longitude": -4.94850439345768
  },
  {
    "": 816,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 21:55:09",
    "Latitude": 17.973998399967652,
    "Longitude": -5.789996815761405
  },
  {
    "": 817,
    "title": "Special Edition Health Care Law Update - November 11, 2014 http://t.co/z3t5QJ3Ya6 @MintzLevin #healthcare #health #Ebola #lameduck",
    "pubdate": "11/12/2014 21:55:08",
    "Latitude": 17.169541504218763,
    "Longitude": -6.43719188379697
  },
  {
    "": 818,
    "title": "RT @USABillOfRights: Contained? NYC Department Of Health Actively Monitoring 357 Individuals For #Ebolahttp://t.co/DxPIRQdNuM",
    "pubdate": "11/12/2014 21:54:49",
    "Latitude": 18.880041823012917,
    "Longitude": -4.726174035931589
  },
  {
    "": 819,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:54:38",
    "Latitude": 16.94104701277939,
    "Longitude": -6.538250166829801
  },
  {
    "": 820,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:54:34",
    "Latitude": 13.264044187715442,
    "Longitude": -2.7476530224819244
  },
  {
    "": 821,
    "title": "First Outbreak Quashed, Ebola Reappears in Mali - New York Times http://t.co/5LNPURDnyU #ebola #EVD",
    "pubdate": "11/12/2014 21:54:31",
    "Latitude": 18.068297625039495,
    "Longitude": -5.380805421808834
  },
  {
    "": 822,
    "title": "US Scaling Back Troop Presence in Ebola-Hit Liberia - http://t.co/VlsO6jigf9 http://t.co/eZig3jmZQy #ebola #EVD",
    "pubdate": "11/12/2014 21:54:31",
    "Latitude": 17.338666054233574,
    "Longitude": -4.859806681839927
  },
  {
    "": 823,
    "title": "US nurses hold strikes, protests over Ebola measures - Reuters http://t.co/p9OVFZrm2J #ebola #EVD",
    "pubdate": "11/12/2014 21:54:31",
    "Latitude": 14.20988993491694,
    "Longitude": -3.476596961961416
  },
  {
    "": 824,
    "title": "RT @USABillOfRights: Contained? NYC Department Of Health Actively Monitoring 357 Individuals For #Ebolahttp://t.co/DxPIRQdNuM",
    "pubdate": "11/12/2014 21:54:30",
    "Latitude": 12.763806578087106,
    "Longitude": -4.2184081515107
  },
  {
    "": 825,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:54:24",
    "Latitude": 13.228360076911336,
    "Longitude": -1.5825592094619365
  },
  {
    "": 826,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 21:54:15",
    "Latitude": 16.159099516812944,
    "Longitude": -5.853492285930463
  },
  {
    "": 827,
    "title": "RT @Lamarche: #US #nurses strike over insufficient #Ebola protections: http://t.co/kpI4Nrefks http://t.co/QlidsBDx5s #HealthCare",
    "pubdate": "11/12/2014 21:54:10",
    "Latitude": 13.31370471866198,
    "Longitude": -2.577740288636906
  },
  {
    "": 828,
    "title": "RT @tonyblair_agi: A look inside Liberia\\'s #Ebola Incident Management System meeting at the Emergency Operations Centre in Monrovia: http:/…",
    "pubdate": "11/12/2014 21:54:04",
    "Latitude": 14.996475996087302,
    "Longitude": -5.432310992289866
  },
  {
    "": 829,
    "title": "RT @RT_com: #Ebola death toll surpasses 5,000 - WHO http://t.co/vdsIIjJoQE http://t.co/NvufkGGuCm",
    "pubdate": "11/12/2014 21:53:54",
    "Latitude": 14.086568101702998,
    "Longitude": -4.166337891308729
  },
  {
    "": 830,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:53:50",
    "Latitude": 18.459544957900192,
    "Longitude": -5.500558439379567
  },
  {
    "": 831,
    "title": "RT @DrJoshuaTepper: Great piece by @DrAndrewB on a focus on Quality as the cure for #Ebola @JAMA_current:http://t.co/YuvrqACtRn",
    "pubdate": "11/12/2014 21:53:49",
    "Latitude": 19.05819293935246,
    "Longitude": -2.714828461716225
  },
  {
    "": 832,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 21:53:47",
    "Latitude": 18.083967403625866,
    "Longitude": -3.0952290727566503
  },
  {
    "": 833,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 21:53:46",
    "Latitude": 18.68538213985219,
    "Longitude": -3.1675437644986153
  },
  {
    "": 834,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 21:53:41",
    "Latitude": 15.429279291651474,
    "Longitude": -3.679803590611334
  },
  {
    "": 835,
    "title": "RT @tonyblair_agi: Listen: @tonyblairoffice &amp; President Sirleaf short remarks on #Ebola during a visit to the AGI team in #Liberia   https:…",
    "pubdate": "11/12/2014 21:53:30",
    "Latitude": 16.308798562313875,
    "Longitude": -1.6764559423285803
  },
  {
    "": 836,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:53:22",
    "Latitude": 16.169931510542987,
    "Longitude": -3.0819388247197317
  },
  {
    "": 837,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 21:53:20",
    "Latitude": 13.216239116409644,
    "Longitude": -6.783297404336936
  },
  {
    "": 838,
    "title": "RT @Reslizumab: No evidence that the Ebola vaccine causes autism!👪👪👪👪#autism #aspergers #healthcare #CDCwhistleblower #Ebola👪👪👪👪http://…",
    "pubdate": "11/12/2014 21:53:13",
    "Latitude": 14.653027045274966,
    "Longitude": -3.5258232525467226
  },
  {
    "": 839,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:53:13",
    "Latitude": 17.476744953562047,
    "Longitude": -5.483503954962056
  },
  {
    "": 840,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:53:13",
    "Latitude": 15.372218281339379,
    "Longitude": -1.7086144601609683
  },
  {
    "": 841,
    "title": "Dublin concert tribute to heroes of Ebola crisis - http://t.co/eqrwC9WGlR #ebola",
    "pubdate": "11/12/2014 21:53:12",
    "Latitude": 17.110561848848867,
    "Longitude": -4.108216003507353
  },
  {
    "": 842,
    "title": "Guidance for Screening and Caring for Pregnant Women with Ebola Virus Disease for Healthcare ... - http://t.co/Ay3baNKtKO #ebola",
    "pubdate": "11/12/2014 21:53:11",
    "Latitude": 13.66106895420785,
    "Longitude": -1.4098827684070026
  },
  {
    "": 843,
    "title": "RT @viewfromthecave: The value of an #Ebola health worker\\'s life in Sierra Leone = $5,000 http://t.co/471lxw2cOW #SierraLeone",
    "pubdate": "11/12/2014 21:52:42",
    "Latitude": 12.563785539123833,
    "Longitude": -3.6578049003221085
  },
  {
    "": 844,
    "title": "#US nurses strike over insufficient #Ebola protections http://t.co/8XZ5XBFAFT http://t.co/y7IdBOU8gZ",
    "pubdate": "11/12/2014 21:52:37",
    "Latitude": 13.381686476855878,
    "Longitude": -1.9606048253863486
  },
  {
    "": 845,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:52:37",
    "Latitude": 16.282367133476495,
    "Longitude": -4.5300638297354885
  },
  {
    "": 846,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:52:33",
    "Latitude": 13.342267117443079,
    "Longitude": -3.0102204731088165
  },
  {
    "": 847,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:52:25",
    "Latitude": 16.152519732682265,
    "Longitude": -4.930559353473504
  },
  {
    "": 848,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:52:13",
    "Latitude": 14.673714668401775,
    "Longitude": -3.1784628210884165
  },
  {
    "": 849,
    "title": "#US #nurses strike over insufficient #Ebola protections: http://t.co/kpI4Nrefks http://t.co/QlidsBDx5s #HealthCare",
    "pubdate": "11/12/2014 21:52:07",
    "Latitude": 18.465519452383198,
    "Longitude": -5.695366695321321
  },
  {
    "": 850,
    "title": "RT @mterry337: 3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP…",
    "pubdate": "11/12/2014 21:52:07",
    "Latitude": 16.15180050343573,
    "Longitude": -4.851954997969173
  },
  {
    "": 851,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:52:02",
    "Latitude": 14.15364191220516,
    "Longitude": -2.435246322650207
  },
  {
    "": 852,
    "title": "Activist Post: Does the #Ebola virus exist? #newshttp://t.co/1N9uuBs1C6 #news #vaccines #fraud #lies #health",
    "pubdate": "11/12/2014 21:51:59",
    "Latitude": 16.151539209564653,
    "Longitude": -5.108864749689586
  },
  {
    "": 853,
    "title": "Thx for leading out @BioFireDX and  \\\"@biomerieux_inc: Researchers seek faster tools for #Ebola screening http://t.co/pJ1TVTsGB9",
    "pubdate": "11/12/2014 21:51:58",
    "Latitude": 14.47963478083336,
    "Longitude": -1.500863901806209
  },
  {
    "": 854,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:51:48",
    "Latitude": 14.89656952043328,
    "Longitude": -1.9915736666334984
  },
  {
    "": 855,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 21:51:46",
    "Latitude": 15.469709683352807,
    "Longitude": -6.376245838169276
  },
  {
    "": 856,
    "title": "RT @the_sy_guy: So if I\\'m reading this right #Ebola death toll has risen past 5,100 in West Africa but mortality rate down to ~36.6%? http:…",
    "pubdate": "11/12/2014 21:51:41",
    "Latitude": 12.54708982673154,
    "Longitude": -6.122273526977202
  },
  {
    "": 857,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:51:39",
    "Latitude": 14.04400771479589,
    "Longitude": -5.591113561001732
  },
  {
    "": 858,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 21:51:36",
    "Latitude": 14.245866711306675,
    "Longitude": -0.9906751463996324
  },
  {
    "": 859,
    "title": "#US nurses strike over insufficient #Ebola protections... http://t.co/XNAuU5G2Bg http://t.co/CmqBan1yn0",
    "pubdate": "11/12/2014 21:51:32",
    "Latitude": 14.210171903767169,
    "Longitude": -6.462668850351517
  },
  {
    "": 860,
    "title": "RT @newswatchcanada: #Bamako: #Mali quarantines dozens as second #Ebola outbreak spreads in countryhttp://t.co/1W7vvKw9w9",
    "pubdate": "11/12/2014 21:51:27",
    "Latitude": 12.887802860436338,
    "Longitude": -0.8698255583849597
  },
  {
    "": 861,
    "title": "3 cases of #Ebola in the U.S. &amp; the #GOP blames #PBO for an all out epidemic! We have 305 #GunShotVictims each day &amp; the GOP says nothing!!!",
    "pubdate": "11/12/2014 21:51:26",
    "Latitude": 17.916226013613414,
    "Longitude": -5.175361278165242
  },
  {
    "": 862,
    "title": "RT @EnEfectivoBlog: #Ebola WRAPUP 1-Ebola death toll tops 5000; Mali quarantines 90 - Reuters http://t.co/MqbyGexAi6",
    "pubdate": "11/12/2014 21:51:17",
    "Latitude": 12.717657004071974,
    "Longitude": -4.1864894959043175
  },
  {
    "": 863,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 21:51:15",
    "Latitude": 19.637183487574013,
    "Longitude": -3.1320284719776197
  },
  {
    "": 864,
    "title": "RT @thesethbishop: I\\'m so sick right now :/ if I got Ebola and die there better be twerking at my funeral #Ebola",
    "pubdate": "11/12/2014 21:51:05",
    "Latitude": 10.050722998616958,
    "Longitude": -6.3209065793396375
  },
  {
    "": 865,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:51:00",
    "Latitude": 14.332104625424897,
    "Longitude": -3.343539745780056
  },
  {
    "": 866,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:50:59",
    "Latitude": 13.151003730292434,
    "Longitude": -3.727156090711869
  },
  {
    "": 867,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:50:52",
    "Latitude": 14.48759878938738,
    "Longitude": -2.095830049715687
  },
  {
    "": 868,
    "title": "RT @ONECampaign: NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS vi…",
    "pubdate": "11/12/2014 21:50:48",
    "Latitude": 17.472158748498405,
    "Longitude": -4.368785618019937
  },
  {
    "": 869,
    "title": "Ebola: Mali Reports New Cases http://t.co/MCv8UlvjZH #ebola",
    "pubdate": "11/12/2014 21:50:42",
    "Latitude": 16.128668299564428,
    "Longitude": -4.816451346690619
  },
  {
    "": 870,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:50:28",
    "Latitude": 16.583983578216163,
    "Longitude": -5.319172247471649
  },
  {
    "": 871,
    "title": "RT @YourAnonGlobal: #US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 21:50:28",
    "Latitude": 13.535725303761776,
    "Longitude": 0.5994100981496349
  },
  {
    "": 872,
    "title": "RT @newswatchcanada: #Bamako: #Mali quarantines dozens as second #Ebola outbreak spreads in countryhttp://t.co/1W7vvKw9w9",
    "pubdate": "11/12/2014 21:50:21",
    "Latitude": 12.790428422873806,
    "Longitude": -7.789547074003149
  },
  {
    "": 873,
    "title": "RT @amnestyOz: \\\"It feels like the whole country is in quarantine\\\" Amnesty\\'s Sierra Leone Director on #Ebola&gt; http://t.co/8xjHAOJc9D",
    "pubdate": "11/12/2014 21:50:20",
    "Latitude": 15.723028273107179,
    "Longitude": -4.6608054374106125
  },
  {
    "": 874,
    "title": "RT WhySharksMatter: 20 minutes until #OutbreakChat ! Join us. Watch Outbreak and chat about #ebola with public health experts. Also snark...",
    "pubdate": "11/12/2014 21:50:13",
    "Latitude": 17.37258321266307,
    "Longitude": -3.4326180869225618
  },
  {
    "": 875,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:50:12",
    "Latitude": 15.860182538789019,
    "Longitude": -3.905234095208462
  },
  {
    "": 876,
    "title": "#Ebola vaccine trials planned for West Africa - New Zealand Herald http://t.co/FV8YJDBNi7",
    "pubdate": "11/12/2014 21:50:11",
    "Latitude": 15.85190324678985,
    "Longitude": -4.683952612101602
  },
  {
    "": 877,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:50:10",
    "Latitude": 17.122608549617947,
    "Longitude": -6.8741612883377545
  },
  {
    "": 878,
    "title": "#US nurses strike over insufficient #Ebola protections http://t.co/mYv6Aget3r http://t.co/GMGV5KtPVg",
    "pubdate": "11/12/2014 21:50:08",
    "Latitude": 13.063931122612146,
    "Longitude": -5.024435889176328
  },
  {
    "": 879,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:50:07",
    "Latitude": 16.58163039005673,
    "Longitude": -1.6148598198681716
  },
  {
    "": 880,
    "title": "NEWS: More than 14,000 #Ebola cases (including 4 now confirmed in Mali) &amp; more than 5,100 deaths http://t.co/WWxHYheIOS via @WHO",
    "pubdate": "11/12/2014 21:50:07",
    "Latitude": 14.551150289039793,
    "Longitude": -3.004266322704852
  },
  {
    "": 881,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:50:05",
    "Latitude": 14.819751391163082,
    "Longitude": -3.245018235260007
  },
  {
    "": 882,
    "title": "What happens I\\'m #vegas stays in Vegas. Except #Ebola. Wash your hands regularly.",
    "pubdate": "11/12/2014 21:50:04",
    "Latitude": 15.39644577530403,
    "Longitude": -7.067933115577953
  },
  {
    "": 883,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:50:04",
    "Latitude": 17.000353363577258,
    "Longitude": -7.097300384018546
  },
  {
    "": 884,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 21:50:00",
    "Latitude": 14.43817973585994,
    "Longitude": -0.7076616530124027
  },
  {
    "": 885,
    "title": "RT @RT_com: #US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:49:57",
    "Latitude": 14.985497642597256,
    "Longitude": -4.813383641259453
  },
  {
    "": 886,
    "title": "RT @avantisempre: Was Thomas Eric Duncan sent home without bring treated on his first trip to the ER because he was not insured? #Ebola",
    "pubdate": "11/12/2014 21:49:32",
    "Latitude": 14.825179296483459,
    "Longitude": -6.77024529767804
  },
  {
    "": 887,
    "title": "RT @CalHospitals: #Hospitals are continuing to follow @CDCgov #Ebola guidelines to protect patients, healthcare workforce &amp; the public http…",
    "pubdate": "11/12/2014 21:49:31",
    "Latitude": 12.856262900771156,
    "Longitude": -6.1107354898303825
  },
  {
    "": 888,
    "title": "Youth group at St. Andrew\\'s College Park MD project to send help for #ebola care in Africa, contact office@saeccp.org",
    "pubdate": "11/12/2014 21:49:13",
    "Latitude": 15.74505986576124,
    "Longitude": -2.175471307388549
  },
  {
    "": 889,
    "title": "#US nurses strike over insufficient #Ebola protections http://t.co/iCYbZDlQkv http://t.co/CYku6t0gVU",
    "pubdate": "11/12/2014 21:49:13",
    "Latitude": 14.722713251755483,
    "Longitude": -5.2002728743908495
  },
  {
    "": 890,
    "title": "You\\'re telling me these Kats touched down on a moving Comet, but we still can\\'t figure out how to not get #Ebola EVEN when wearing garments",
    "pubdate": "11/12/2014 21:49:08",
    "Latitude": 15.304426753252912,
    "Longitude": -2.960284008795377
  },
  {
    "": 891,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:49:03",
    "Latitude": 17.10225330511217,
    "Longitude": -4.540956376729296
  },
  {
    "": 892,
    "title": "RT @DistrictKaraoke: Alexis is All By Herself. For one reason: #ebola. http://t.co/vBXJX9rhdJ",
    "pubdate": "11/12/2014 21:49:03",
    "Latitude": 14.757833358535075,
    "Longitude": -3.4946107458422127
  },
  {
    "": 893,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 21:48:59",
    "Latitude": 11.971488105682614,
    "Longitude": -3.7287823886576694
  },
  {
    "": 894,
    "title": "Hey ...is everyone suddenly cured from #Ebola? CNN / HLN has been mad quiet about it!",
    "pubdate": "11/12/2014 21:48:33",
    "Latitude": 15.926910790848101,
    "Longitude": -5.215936349757662
  },
  {
    "": 895,
    "title": "RT @DrewDavis850: I know facebook didn\\'t just ask me for #ebola money.",
    "pubdate": "11/12/2014 21:48:31",
    "Latitude": 14.747530921995969,
    "Longitude": 0.194497741255935
  },
  {
    "": 896,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:48:12",
    "Latitude": 17.118785273397837,
    "Longitude": -2.248397989192121
  },
  {
    "": 897,
    "title": "#Survey: #available #Training #Time, #Shipping Certifications #Challenge #hospitals’ #Ebola Preparedness #Ebolanoia @ http://t.co/SsSBfEB2tA",
    "pubdate": "11/12/2014 21:48:07",
    "Latitude": 12.56562108429231,
    "Longitude": -5.512121314137305
  },
  {
    "": 898,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 21:48:05",
    "Latitude": 12.747111947689827,
    "Longitude": -3.7034801080913686
  },
  {
    "": 899,
    "title": "RT @WBUR: Nurse John Welch records \\\"desperately sad\\\" experiences treating #Ebola patients in Liberia: http://t.co/YAUFow94d1 http://t.co/Kl…",
    "pubdate": "11/12/2014 21:47:57",
    "Latitude": 14.062567463883681,
    "Longitude": -6.9386110858338395
  },
  {
    "": 900,
    "title": "RT @RepDennisRoss: Until the #CDC can ascertain that #Ebola is eradicated, we must be vigilant in keeping Americans safe by being proactive…",
    "pubdate": "11/12/2014 21:47:38",
    "Latitude": 17.362840588602133,
    "Longitude": -1.890372699914661
  },
  {
    "": 901,
    "title": "let Ebola try me try me. running round sneezing on everybody 😂 😂 💯 #Ebola #tryme @DeJLoaf https://t.co/BaqZDPvmD0",
    "pubdate": "11/12/2014 21:47:37",
    "Latitude": 13.649320853241047,
    "Longitude": -5.831772286883725
  },
  {
    "": 902,
    "title": "RT @Philip_far_away: A #Doctor in #Mali is suspected of having #Ebola. He saw both Ebola victims. Now he is in Quaratine outside #Bamako ht…",
    "pubdate": "11/12/2014 21:47:17",
    "Latitude": 14.934569053916173,
    "Longitude": -7.7936951695240335
  },
  {
    "": 903,
    "title": "RT @Philip_far_away: A #Doctor in #Mali is suspected of having #Ebola. He saw both Ebola victims. Now he is in Quaratine outside #Bamako ht…",
    "pubdate": "11/12/2014 21:46:30",
    "Latitude": 15.358696371186559,
    "Longitude": -5.0907086568981175
  },
  {
    "": 904,
    "title": "RT @GlblCtzn: Bob Geldof is right: #Ebola must be stopped. But is #BandAid30 the right approach? Thoughts? http://t.co/CR1EhhBeVE http://t.…",
    "pubdate": "11/12/2014 21:46:22",
    "Latitude": 15.711245300522213,
    "Longitude": -3.1137426296674455
  },
  {
    "": 905,
    "title": "#Swineflu #aids #ebola #brownrecluse and now this? The world is a dangerous place. I\\'m outta hurr! http://t.co/5Ka69AzsKe",
    "pubdate": "11/12/2014 21:46:07",
    "Latitude": 14.43712918658476,
    "Longitude": -2.2483438286246726
  },
  {
    "": 906,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 21:46:01",
    "Latitude": 15.55592814116585,
    "Longitude": -4.028719688452809
  },
  {
    "": 907,
    "title": "RT @theOFDA: 30 metric tons of personal protective equip arrives in #Liberia to protect healthcare workers on frontlines of #Ebola http://t…",
    "pubdate": "11/12/2014 21:46:00",
    "Latitude": 13.621121457827323,
    "Longitude": -5.091468866291029
  },
  {
    "": 908,
    "title": "RT @UNICEF: How #Ebola survivors like Patience, 19, are playing a key role in the response http://t.co/VMwaIpapbx via @irinnews",
    "pubdate": "11/12/2014 21:45:58",
    "Latitude": 14.773191347039248,
    "Longitude": -5.487920172466284
  },
  {
    "": 909,
    "title": "RT @SenateApprops: Happening now: @SenatorBarb holds Full Committee hearing on US Gov response to #Ebola outbreak. Watch live: http://t.co/…",
    "pubdate": "11/12/2014 21:45:50",
    "Latitude": 12.771579639062884,
    "Longitude": -5.421759577220737
  },
  {
    "": 910,
    "title": "RT @healthandcents: Ben Carson MD: strong statements #Ebola issues on Cavuto: http://t.co/qiphPxnvvU @RedNationRising @ConScores @WayneBogd…",
    "pubdate": "11/12/2014 21:45:38",
    "Latitude": 13.193531150926294,
    "Longitude": -3.3575782011779904
  },
  {
    "": 911,
    "title": "RT @TerryFairbanks: \\\"They haven\\'t said a thing about #Ebola all week--The epidemic must be over!\\\" http://t.co/v9FFafFGDP via @newyorker",
    "pubdate": "11/12/2014 21:45:33",
    "Latitude": 18.390998418138516,
    "Longitude": -1.7255627623580758
  },
  {
    "": 912,
    "title": "RT @wessmith123: The U.S. is now #Ebola Free! Fox must be FREAKING OUT! #UniteBlue #TNTweeters #LibCrib http://t.co/GmjcPnGgid http://t.co/…",
    "pubdate": "11/12/2014 21:45:26",
    "Latitude": 13.75298969781357,
    "Longitude": -1.6161176533200279
  },
  {
    "": 913,
    "title": "Prof. @drSteveMorse: \\'No End in Sight\\' for #Ebola crisis via @Newsmax_Media http://t.co/uzkG4oE9vm",
    "pubdate": "11/12/2014 21:45:13",
    "Latitude": 13.630735293635812,
    "Longitude": -4.295760498446451
  },
  {
    "": 914,
    "title": "RT @NewsonEbola: #Ebola #EbolaOutbreak  Mali suffers second case of Ebola http://t.co/W90PF4pdfn",
    "pubdate": "11/12/2014 21:45:11",
    "Latitude": 17.44310342326807,
    "Longitude": -5.696647861180012
  },
  {
    "": 915,
    "title": "A single dose respiratory vaccine provides long-term protection for non-human primates from #Ebola.  http://t.co/aiBFtXwKuY @ACSPublications",
    "pubdate": "11/12/2014 21:45:09",
    "Latitude": 16.75571565124975,
    "Longitude": -6.840109301144379
  },
  {
    "": 916,
    "title": "RT @neva9257: Ew they mentioned Newsweek. Given its #Ebola coverage, that makes my teeth itch.",
    "pubdate": "11/12/2014 21:44:55",
    "Latitude": 15.920452074215547,
    "Longitude": -5.77682752708463
  },
  {
    "": 917,
    "title": "RT @TheStarPress: OpEd: \\\"The only #Ebola \\'outbreak\\' in the United States is one of irrational fear propagated by cable news\\\" http://t.co/UU…",
    "pubdate": "11/12/2014 21:44:53",
    "Latitude": 15.460248365585246,
    "Longitude": -4.487770774099657
  },
  {
    "": 918,
    "title": "RT @jamesian: 2 mds tell us about #ebola and reporting/writing http://t.co/EOSrbqPVMa 7:30 p.m. tonight FREE if you belong to @nswa, or $5 …",
    "pubdate": "11/12/2014 21:44:32",
    "Latitude": 15.956970206635292,
    "Longitude": -4.183057551106029
  },
  {
    "": 919,
    "title": "RT @sethmnookin: How did \\\"Hot Zone\\\" get it wrong? (Lots of ways.) Learn specifics (&amp; other tales of #Ebola) from @DavidQuammen:   http://t.…",
    "pubdate": "11/12/2014 21:44:27",
    "Latitude": 14.239783210813911,
    "Longitude": -4.363571373509205
  },
  {
    "": 920,
    "title": "U.S. Scaling Back #TroopPresence in #Ebola-HitLiberia - #NBCNews #Pentagon http://t.co/xKPj030KIH http://t.co/A7CV4MwMAq",
    "pubdate": "11/12/2014 21:44:26",
    "Latitude": 16.732725836242732,
    "Longitude": -0.5154990925094629
  },
  {
    "": 921,
    "title": "RT @CIDRAP: WHO reports 3 more #Ebola cases in Mali http://t.co/mNNLPU6OLv",
    "pubdate": "11/12/2014 21:44:07",
    "Latitude": 14.083646986266189,
    "Longitude": -7.806995294661204
  },
  {
    "": 922,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:44:04",
    "Latitude": 17.095349466598215,
    "Longitude": -5.7461760984721515
  },
  {
    "": 923,
    "title": "@Emirates #profits up 8% despite closures, #Ebola | Travel Weekly: http://t.co/3EruVkvpos via @travel_today",
    "pubdate": "11/12/2014 21:44:02",
    "Latitude": 15.817060095740686,
    "Longitude": -6.484072166125147
  },
  {
    "": 924,
    "title": "RT @OxfamAustralia: PM Tony Abbott says #ebola is not an economic crisis, but in reality it has both economic causes &amp; consequences https:/…",
    "pubdate": "11/12/2014 21:43:51",
    "Latitude": 12.214456592084838,
    "Longitude": -7.0925965054714135
  },
  {
    "": 925,
    "title": "RT @JohnsHopkinsSPH: By training local health care workers, #JHSPH faculty hope to “send in a cavalry” to combat #Ebola in West Africa. htt…",
    "pubdate": "11/12/2014 21:43:36",
    "Latitude": 16.991313545988543,
    "Longitude": -1.9794302915883444
  },
  {
    "": 926,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:43:32",
    "Latitude": 12.041107527223009,
    "Longitude": -4.184879383960463
  },
  {
    "": 927,
    "title": "RT @CIDRAP: WHO reports 3 more #Ebola cases in Mali http://t.co/mNNLPU6OLv",
    "pubdate": "11/12/2014 21:43:26",
    "Latitude": 14.791747539645842,
    "Longitude": -5.273615207547268
  },
  {
    "": 928,
    "title": "RT @Anna_Z: Join @OgilvyDC on 11/18 for #Ebola inperson discussion. Speakers from #NIH &amp; #AmeriCares. Register: http://t.co/SYZkGlzMCa",
    "pubdate": "11/12/2014 21:43:16",
    "Latitude": 13.132177844945998,
    "Longitude": -4.8910532991812135
  },
  {
    "": 929,
    "title": "A #Doctor in #Mali is suspected of having #Ebola. He saw both Ebola victims. Now he is in Quaratine outside #Bamako http://t.co/Mj4yn8d1N1",
    "pubdate": "11/12/2014 21:43:13",
    "Latitude": 16.83059795953553,
    "Longitude": -2.8560065720352847
  },
  {
    "": 930,
    "title": "RT @Potrblog: @frLarousse2 @drscott_atlanta @KBinSC @Pudingtane @NMLifestyles how long till Ducan\\'s family settles with the nurses he infec…",
    "pubdate": "11/12/2014 21:43:10",
    "Latitude": 12.111607592849222,
    "Longitude": -6.531168483933659
  },
  {
    "": 931,
    "title": "RT @3DOTNEWS: WHO: 5,160 people had died of Ebola in eight countries out of 14,098 cases of infection • #Ebola #Africa • http://t.co/Y3fSDZ…",
    "pubdate": "11/12/2014 21:43:10",
    "Latitude": 16.315754931836842,
    "Longitude": -0.37720154369003245
  },
  {
    "": 932,
    "title": "RT @CIDRAP: Senate committee probes proposed US #Ebola funding http://t.co/0kKkX2Nrri",
    "pubdate": "11/12/2014 21:43:10",
    "Latitude": 15.12448001861946,
    "Longitude": -3.0972025916851766
  },
  {
    "": 933,
    "title": "RT @WillieMoses_: Download \\\"Ebola\\\" Now on SoundCloud. #Moses #ShareTheTruth #Ebola http://t.co/TJj2MUK7lM",
    "pubdate": "11/12/2014 21:43:08",
    "Latitude": 15.29673450294674,
    "Longitude": -3.557259004554034
  },
  {
    "": 934,
    "title": "RT @tamarindlemur: :\\'\\'\\'\\'\\'( #Ebola death toll rises to 5,000: #WHO http://t.co/dIe90S4vk5 #Africa #hemorrhagicfever #CDC #bioweapon?",
    "pubdate": "11/12/2014 21:43:08",
    "Latitude": 12.652948882499404,
    "Longitude": -3.611073361699148
  },
  {
    "": 935,
    "title": "RT @UNICEF: How #Ebola survivors like Patience, 19, are playing a key role in the response http://t.co/VMwaIpapbx via @irinnews",
    "pubdate": "11/12/2014 21:43:01",
    "Latitude": 15.893780480271966,
    "Longitude": -4.46161268436262
  },
  {
    "": 936,
    "title": "RT @RT_America: Nurses strike over lack of #Ebola protection [VIDEO] http://t.co/04afLLyeGN @AmeeraDavid",
    "pubdate": "11/12/2014 21:42:53",
    "Latitude": 16.60605265275443,
    "Longitude": -4.896150411194608
  },
  {
    "": 937,
    "title": "RT @RT_America: Nurses strike over lack of #Ebola protection [VIDEO] http://t.co/04afLLyeGN @AmeeraDavid",
    "pubdate": "11/12/2014 21:42:51",
    "Latitude": 17.465795884282056,
    "Longitude": -8.649969117358205
  },
  {
    "": 938,
    "title": "RT @ghcorps: 3 lessons on local #health infrastrure from #ebola #globalhealth  http://t.co/wJDen8Av4j",
    "pubdate": "11/12/2014 21:42:47",
    "Latitude": 17.70392563039373,
    "Longitude": -6.733320175481203
  },
  {
    "": 939,
    "title": "U.S. is scaling back on number of soldiers being sent to #Ebola-stricken Liberia http://t.co/xmORFnNQqc http://t.co/u9dGoHlI8T via @NBCNews",
    "pubdate": "11/12/2014 21:42:43",
    "Latitude": 13.530429699296679,
    "Longitude": -2.1884449808934354
  },
  {
    "": 940,
    "title": "RT @WhySharksMatter: http://t.co/1M4nNJ0NzM List of organizations fighting the real #ebola outbreak that need your donation. Via @rocza #Ou…",
    "pubdate": "11/12/2014 21:42:40",
    "Latitude": 14.377921917382757,
    "Longitude": -4.988198931350131
  },
  {
    "": 941,
    "title": "Heart breaking over #Ebola crisis, woman left to die unaided by roadside #WorldStandUp #Humanity #TreatPeopleAsPeople",
    "pubdate": "11/12/2014 21:42:19",
    "Latitude": 16.077775518817138,
    "Longitude": -5.150158956338344
  },
  {
    "": 942,
    "title": "RT @CalNurses: Fired up! #Nurses march to federal building to demand best #Ebola #PPE NOW! #NursesfightEbola #rnstrike http://t.co/l6Ksr2B2…",
    "pubdate": "11/12/2014 21:42:16",
    "Latitude": 13.097390023013373,
    "Longitude": -5.3378440462068335
  },
  {
    "": 943,
    "title": "#Bamako: #Mali quarantines dozens as second #Ebola outbreak spreads in countryhttp://t.co/1W7vvKw9w9",
    "pubdate": "11/12/2014 21:42:05",
    "Latitude": 15.059273010239778,
    "Longitude": -4.688863930741298
  },
  {
    "": 944,
    "title": "Bob Geldof is right: #Ebola must be stopped. But is #BandAid30 the right approach? Thoughts? http://t.co/CR1EhhBeVE http://t.co/2HULMc5Iq6",
    "pubdate": "11/12/2014 21:42:01",
    "Latitude": 17.03946357437929,
    "Longitude": -4.512376139244688
  },
  {
    "": 945,
    "title": "Ebola crisis could last for years if not controlled quickly, CDC says. http://t.co/nX474j8dg1 via #usatoday #health. #EbolaOutbreak #Ebola",
    "pubdate": "11/12/2014 21:41:48",
    "Latitude": 13.535502360435414,
    "Longitude": -5.745971206022302
  },
  {
    "": 946,
    "title": "Ebola crisis could last for years if not controlled quickly, CDC says. http://t.co/95dUK7tF9Q #usatoday #health. #EbolaOutbreak #Ebola",
    "pubdate": "11/12/2014 21:41:46",
    "Latitude": 17.224882196756628,
    "Longitude": -3.809696020901556
  },
  {
    "": 947,
    "title": "West African national &amp; intl journalists on a panel at #Ebola Communication Coordination meeting in Dakar. http://t.co/IlGqj2VMH5 #CDCglobal",
    "pubdate": "11/12/2014 21:41:46",
    "Latitude": 14.820028142364828,
    "Longitude": -4.664047474355519
  },
  {
    "": 948,
    "title": "#Ebola update: Health care workers (#HCWs) 564 cases, 320 deaths (Nov 10). Many happened outside #EVD treatment/care context. @WHO #EVD",
    "pubdate": "11/12/2014 21:41:41",
    "Latitude": 14.110662610046795,
    "Longitude": -4.605973415440662
  },
  {
    "": 949,
    "title": "RT @Ch_Suter: RT @NovoArgumente http://t.co/6TGwtLGxWc - #WHO - #Ezigarette statt #Ebola #ecigs",
    "pubdate": "11/12/2014 21:41:35",
    "Latitude": 13.072448888130223,
    "Longitude": -3.4340723931559705
  },
  {
    "": 950,
    "title": "Aid expert claims the fight against #Ebola is months behind where it should be: http://t.co/jjBPR282Kn #HuffPostGreen #EbolaOutbreak #Green",
    "pubdate": "11/12/2014 21:41:34",
    "Latitude": 18.332380763949505,
    "Longitude": -5.2332016072127665
  },
  {
    "": 951,
    "title": "Senate committee probes proposed US #Ebola funding http://t.co/0kKkX2Nrri",
    "pubdate": "11/12/2014 21:41:33",
    "Latitude": 19.02376930362374,
    "Longitude": -4.180079257609468
  },
  {
    "": 952,
    "title": "#Ebola vaccine trials planned for West Africa - New Zealand Herald http://t.co/bYSD3jywr1",
    "pubdate": "11/12/2014 21:41:24",
    "Latitude": 17.408639492979425,
    "Longitude": -2.269761233613078
  },
  {
    "": 953,
    "title": "RT @Oxfam: #G20 must not allow West Africa to be destabilized. The window of opportunity is closing fast. http://t.co/AeSgyzsWZT #Ebola",
    "pubdate": "11/12/2014 21:41:18",
    "Latitude": 13.560481570194133,
    "Longitude": -5.440812680972357
  },
  {
    "": 954,
    "title": "RT @healthmap: ICYMI! Highlights of most recent @WHO #Ebola SitRep live at: http://t.co/0BC5W86Fv3 - 4 deaths in #Mali, 421 new cases in #S…",
    "pubdate": "11/12/2014 21:41:14",
    "Latitude": 15.859666331388519,
    "Longitude": -7.463877777526454
  },
  {
    "": 955,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:41:11",
    "Latitude": 13.387980067584804,
    "Longitude": -2.7204474050987733
  },
  {
    "": 956,
    "title": "RT @ONEcampaignUK: SHOCKING: One in 7 women risk dying in #childbirth in #Ebola-hit countries  http://t.co/psMrOjUD4O via @Reuters http://t…",
    "pubdate": "11/12/2014 21:41:06",
    "Latitude": 15.232484667207666,
    "Longitude": -4.975312374050139
  },
  {
    "": 957,
    "title": "WHO reports 3 more #Ebola cases in Mali http://t.co/mNNLPU6OLv",
    "pubdate": "11/12/2014 21:40:50",
    "Latitude": 18.088144884492856,
    "Longitude": -3.879233157129116
  },
  {
    "": 958,
    "title": "BBC News - #Ebola outbreak deaths pass 5,000 http://t.co/2qXH00Hgzz",
    "pubdate": "11/12/2014 21:40:50",
    "Latitude": 17.82718757196904,
    "Longitude": -5.702897170650773
  },
  {
    "": 959,
    "title": "Late Ebola Patient\\'s Fiancee Gets Nothing in Settlement #Ebola #tcot #tlot #ccot @ABCNews @FoxNews @CNN  http://t.co/PM73cFiDgz",
    "pubdate": "11/12/2014 21:40:44",
    "Latitude": 13.929530932489643,
    "Longitude": -5.327337642434438
  },
  {
    "": 960,
    "title": "RT @pcfafard: Canada, Australia &amp; others imposing restrictions on mobility in response to #Ebola. Good book suggests this isn\\'t new http://…",
    "pubdate": "11/12/2014 21:40:25",
    "Latitude": 15.264753761153633,
    "Longitude": -4.4596337119383715
  },
  {
    "": 961,
    "title": "Pandemic plans and key actions to manage the impact of #Ebola on your business http://t.co/BqjJN2NIrM",
    "pubdate": "11/12/2014 21:40:19",
    "Latitude": 15.585485744049572,
    "Longitude": -4.835560173634373
  },
  {
    "": 962,
    "title": "RT @KingGeorges1: Mali about to become a fair ground for #Ebola. Corruption to be blamed. Money does not always help. Here is an example.",
    "pubdate": "11/12/2014 21:40:04",
    "Latitude": 17.91715633714184,
    "Longitude": -2.8798943107457866
  },
  {
    "": 963,
    "title": "RT @djheakin: Forget those window washers @1worldtrade. CSPAN is back with live @SenateFloor speeches and #ebola Congressional hearings!",
    "pubdate": "11/12/2014 21:39:59",
    "Latitude": 16.978970602825118,
    "Longitude": -7.9407538211416515
  },
  {
    "": 964,
    "title": "RT @KingGeorges1: #Ebola a \\'poor man\\'s disease\\' – Kofi Annan. H. He is right on this one.",
    "pubdate": "11/12/2014 21:39:59",
    "Latitude": 16.528598630364705,
    "Longitude": -7.745384946122146
  },
  {
    "": 965,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 21:39:58",
    "Latitude": 19.316084409623677,
    "Longitude": 0.9239562385352729
  },
  {
    "": 966,
    "title": "👏wash👏yo👏damn👏hands👏after flushing 👊👊👊 #you could be the reason for #ebola 😳😩",
    "pubdate": "11/12/2014 21:39:47",
    "Latitude": 16.20416759872767,
    "Longitude": -5.734182705131175
  },
  {
    "": 967,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 21:39:43",
    "Latitude": 18.72839319270569,
    "Longitude": -6.764268507197441
  },
  {
    "": 968,
    "title": "\\\"Who\\'s Going To Be Your Protector\\\" Check out @IBlackShepherd new track #Ebola http://t.co/QX00HT2Ahs",
    "pubdate": "11/12/2014 21:39:18",
    "Latitude": 17.44615642764597,
    "Longitude": -6.942301609025264
  },
  {
    "": 969,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 21:39:08",
    "Latitude": 16.21892139861042,
    "Longitude": -4.642341061784178
  },
  {
    "": 970,
    "title": "RT @Potrblog: @frLarousse2 @drscott_atlanta @KBinSC @Pudingtane @NMLifestyles how long till Ducan\\'s family settles with the nurses he infec…",
    "pubdate": "11/12/2014 21:38:51",
    "Latitude": 11.613100828794996,
    "Longitude": -4.530392959829692
  },
  {
    "": 971,
    "title": "I\\'d like to see Ron Klain\\'s first check for becoming Ebola czar. At least two years to go. Not a bad gig. #DeportGruber #tcot #Ebola",
    "pubdate": "11/12/2014 21:38:48",
    "Latitude": 20.210927729380693,
    "Longitude": -4.621832172693896
  },
  {
    "": 972,
    "title": "RT @frLarousse2: @potrblog #Ebola victim\\'s family, hospital reach settlement http://t.co/DK2sgXaTPF @drscott_atlanta @KBinsc @pudingtane @N…",
    "pubdate": "11/12/2014 21:38:43",
    "Latitude": 19.74238435215954,
    "Longitude": -4.782118014406648
  },
  {
    "": 973,
    "title": "RT @MomStuffPodcast: A preview on today\\'s upcoming podcast on why #Ebola (and pandemics generally) kills more women http://t.co/7phnfhbflG …",
    "pubdate": "11/12/2014 21:38:38",
    "Latitude": 18.88921795374662,
    "Longitude": -1.0256019388959348
  },
  {
    "": 974,
    "title": "#Ebola death toll tops 5000; steep rise in Sierra Leone cases: WHO - Reuters UK http://t.co/C3zFA5OA3o",
    "pubdate": "11/12/2014 21:38:36",
    "Latitude": 16.41948974490149,
    "Longitude": -5.004407591299508
  },
  {
    "": 975,
    "title": "#Ebola a \\'poor man\\'s disease\\' – Kofi Annan. H. He is right on this one.",
    "pubdate": "11/12/2014 21:38:31",
    "Latitude": 16.181868697987724,
    "Longitude": -2.6993944311918385
  },
  {
    "": 976,
    "title": "RT @SatishKTM: #Ebola update: 9 countries, 14,098 cases, 5,160 deaths (9 Nov). No longer increasing in #Guinea &amp; #Liberia. @WHO #EVD http:/…",
    "pubdate": "11/12/2014 21:38:29",
    "Latitude": 12.178459490459375,
    "Longitude": -3.047074049727353
  },
  {
    "": 977,
    "title": "RT @brucepknight: RIP, “the #Ebola threat”: How a toxic narrative served its political purpose http://t.co/7gYDCvD530 via @Salon",
    "pubdate": "11/12/2014 21:38:29",
    "Latitude": 15.035791183971646,
    "Longitude": -2.3812173498290323
  },
  {
    "": 978,
    "title": "#Ebola is More Than Medical Challenge, Experts Say http://t.co/kV9JFVdJpY",
    "pubdate": "11/12/2014 21:38:28",
    "Latitude": 13.057809494130787,
    "Longitude": -6.094502035149421
  },
  {
    "": 979,
    "title": "Support is needed for those small NGOs working out in the villages. Most of the #Ebola resources are sent to the big cities and used there.",
    "pubdate": "11/12/2014 21:38:25",
    "Latitude": 15.149677942638426,
    "Longitude": -6.889729244817054
  },
  {
    "": 980,
    "title": "Congress boost efforts in 2 areas for #Ebola: equipment &amp; funding to revive healthcare systems @RepCummings @thehill  http://t.co/gtvZ6djWD3",
    "pubdate": "11/12/2014 21:38:24",
    "Latitude": 16.137764519271478,
    "Longitude": -7.326021100600875
  },
  {
    "": 981,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 21:38:20",
    "Latitude": 18.587111086866358,
    "Longitude": -3.2445294627090555
  },
  {
    "": 982,
    "title": "RT nonsequitur12: RT FollowEbola: First Outbreak Quashed, #Ebola Reappears in Mali. http://t.co/xXztIgf9sS",
    "pubdate": "11/12/2014 21:38:20",
    "Latitude": 12.538378628826251,
    "Longitude": -1.2036603221451805
  },
  {
    "": 983,
    "title": "#Ebola #drug #testing sparks #ethics #debate  #Ebolanoia @Ebolanoia http://t.co/jlR02P6K3b",
    "pubdate": "11/12/2014 21:38:19",
    "Latitude": 13.464234619035249,
    "Longitude": -8.865456268400088
  },
  {
    "": 984,
    "title": "RT neva9257: Ew they mentioned Newsweek. Given its #Ebola coverage, that makes my teeth itch.",
    "pubdate": "11/12/2014 21:38:18",
    "Latitude": 15.302276583017886,
    "Longitude": -3.5330131681759678
  },
  {
    "": 985,
    "title": "Nurses\\' Union Strikes over #Ebola, Puts Americans\\' Health at Risk. My column today at @TheBlaze:http://t.co/TdPKxe9nZf #unions #healthcare",
    "pubdate": "11/12/2014 21:37:58",
    "Latitude": 15.298846203733204,
    "Longitude": -8.135191553640155
  },
  {
    "": 986,
    "title": "https://t.co/pgfRI816uwHEY FAGS I MADE A NEW DOCUMENTARY WATCH OR GET #Ebola",
    "pubdate": "11/12/2014 21:37:57",
    "Latitude": 15.040282254237145,
    "Longitude": -4.718181065931184
  },
  {
    "": 987,
    "title": "RT @FollowEbola: First Outbreak Quashed, #Ebola Reappears in Mali. http://t.co/XEvEckh2vL",
    "pubdate": "11/12/2014 21:37:47",
    "Latitude": 15.107342412780183,
    "Longitude": -8.39128633844084
  },
  {
    "": 988,
    "title": "Ew they mentioned Newsweek. Given its #Ebola coverage, that makes my teeth itch.",
    "pubdate": "11/12/2014 21:37:44",
    "Latitude": 13.85077917236115,
    "Longitude": -1.9213182355817775
  },
  {
    "": 989,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:37:43",
    "Latitude": 15.699257023806092,
    "Longitude": -4.187583727017546
  },
  {
    "": 990,
    "title": "RT @LukeRussert: #USA media needs 2 b more concerned w 22 vets committing suicide a day &amp; vet unemployment rate than #Ebola or #MH370 http:…",
    "pubdate": "11/12/2014 21:37:41",
    "Latitude": 16.198136041154143,
    "Longitude": -5.890810518733947
  },
  {
    "": 991,
    "title": "RT @SavetheChildren: #Ebola Crisis at a \\\"Tipping Point:\\\" 2.5 Million Children under 5 Live in Affected Areas http://t.co/6Rgwvi5OJw",
    "pubdate": "11/12/2014 21:37:39",
    "Latitude": 17.65201297991223,
    "Longitude": -4.716651203773938
  },
  {
    "": 992,
    "title": "RT @NEJM: Editorial: Out of Africa — Caring for Patients with #Ebola. http://t.co/2glOHxjA8W",
    "pubdate": "11/12/2014 21:37:21",
    "Latitude": 16.91569389698276,
    "Longitude": -2.1796326312208962
  },
  {
    "": 993,
    "title": "RT @GOPTeens: #Teens: Elect a #Republican Senate -- less #American cases of #Ebola.#Coincidence?",
    "pubdate": "11/12/2014 21:37:20",
    "Latitude": 16.126887883164663,
    "Longitude": -2.3419371084588327
  },
  {
    "": 994,
    "title": "RT @FollowEbola: First Outbreak Quashed, #Ebola Reappears in Mali. http://t.co/XEvEckh2vL",
    "pubdate": "11/12/2014 21:37:11",
    "Latitude": 14.474732066756042,
    "Longitude": -6.596276865654522
  },
  {
    "": 995,
    "title": "First Outbreak Quashed, #Ebola Reappears in Mali. http://t.co/Vl4JQOST4u",
    "pubdate": "11/12/2014 21:37:07",
    "Latitude": 12.816198167872317,
    "Longitude": -2.366639994618894
  },
  {
    "": 996,
    "title": "United Nations News Centre - #WestAfrica ‘on brink’ of major #foodcrisis in wake of #Ebola outbreak – UN expert: http://t.co/riOS1wlvRI",
    "pubdate": "11/12/2014 21:37:00",
    "Latitude": 18.991604232788287,
    "Longitude": -3.1608420646451516
  },
  {
    "": 997,
    "title": "RT @natlawreview: HHS Issues Bulletin on HIPAA #Privacy In Emergency Situations In Light of the Ebola Outbreak http://t.co/1zn3jYwpKB @BTLa…",
    "pubdate": "11/12/2014 21:37:00",
    "Latitude": 14.961278161342447,
    "Longitude": 1.4776569676817477
  },
  {
    "": 998,
    "title": "RT @TackleEbola: Great read by @eklib on Facebook and Google\\'s #Ebola relief fundraising campaigns http://t.co/zjkfECizcN via @NPR http://t…",
    "pubdate": "11/12/2014 21:36:42",
    "Latitude": 12.838221925100502,
    "Longitude": -6.163087363737091
  },
  {
    "": 999,
    "title": "RT @WhySharksMatter: I mean, sure, he\\'s dying from #Ebola , but he\\'s still Patrick Dempsey. I wouldn\\'t reject making out with him out of ha…",
    "pubdate": "11/12/2014 21:36:37",
    "Latitude": 13.89365438778416,
    "Longitude": -4.792394960603655
  }];


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
	var myCenter = new google.maps.LatLng(51.508742, -0.120850);

	var mapProp= {
			center: myCenter,
			zoom:2,
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
		newmarkers.push(new google.maps.Marker({
			position: new google.maps.LatLng(json[i]["Longitude"] , json[i]["Latitude"] +8),
			icon:'./assets/red3.png'
			// animation:google.maps.Animation.BOUNCE
		}))
		newmarkers[i].setMap(map);
	}
}

function checkSpread(date){
	console.log(date);
	console.log("spread");

	// clear the map first
	for (var i = 0; i < newmarkers.length; i++) {
		newmarkers[i].setMap(null);
	}


	// draw
	for (var i = 0; i < 100; i++) {
		newmarkers.push(new google.maps.Marker({
			position: new google.maps.LatLng(Math.random()*100, Math.random()*100),
			icon:'./assets/red3.png'
			// animation:google.maps.Animation.BOUNCE
		}));
		newmarkers[i].setMap(map);
	}

}



