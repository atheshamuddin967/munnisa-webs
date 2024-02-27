import { BiInjection } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaHeadSideCoughSlash } from "react-icons/fa";
import { MdFaceRetouchingOff } from "react-icons/md";
import { FaHandsWash } from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import covid from "../../images/covid.png";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function Covid() {
  const { language } = useLanguage();

  const navigate = useNavigate();
  const goCovid = () => {
    navigate("/Covid");
  };
  return (
    <div className="covid">
      {language == "en" && (
        <div className="container">
          <div className="headings">
            <h2> Covid-19 Guidelines 2024</h2>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="coviddetail">
                <p>
                  <span> Munissa Kare Services</span> recognises the right of
                  all Clients to receive appropriate care, regardless of their
                  condition, or circumstances, which give rise to their need for
                  care. Clients are expected to disclose any communicable
                  diseases to which there is a risk of exposure and to give
                  consent, where appropriate, for GP’s, District Nurses and
                  other health professionals to disclose and discuss such
                  information.{" "}
                </p>
                <p>
                  Clients have a right to be protected from preventable
                  infection and staff have a duty to safeguard the well-being of
                  their clients. Owing to the nature of the work staff undertake
                  in assignments, good basic hygiene practices should be
                  followed at all times
                </p>
                <p>
                  Management will brief staff on known conditions relating to
                  the client, to enable them to provide appropriate care for
                  COVID19. Our staff will be taking Lateral Flow Test (LFT) on a
                  weekly test and if they feel under the weather on the day
                  test. Testing supports our clients and care givers in order to
                  safely maintain a balance between infection control and the
                  vital benefits of visiting to the health and wellbeing of our
                  clients.
                </p>
                <p>
                  The vaccine programme has been highly successful in breaking
                  the link between infection and serious illness. We have come a
                  long way since March 2020, but there are still some outbreaks
                  of coronavirus in the community, with some clients and
                  employees unfortunately still becoming ill. Getting the
                  vaccination/booster when it is offered to you is one of our
                  best defences to combat infection. It significantly reduces
                  the transmission of infection, particularly after two doses
                </p>
                <p>
                  We want to make visiting our clients as easy and
                  straightforward as possible, while keeping them safe. Nothing
                  can replace the care and love family and friends provide. We
                  know the period of the pandemic has been a particularly
                  difficult and emotional time for care providers, their loved
                  ones, and staff.
                </p>
                <h6>
                  Staff will continue to wear PPE where appropriate and practise
                  strict infection control. We would expect the families & the
                  next of kin to play your part too.{" "}
                </h6>
                <p>It is particularly important that you MUST:</p>
                <p>
                  - Wash your hands thoroughly with soap and water, for at least
                  20 seconds, or use the hand sanitiser provided, when you
                  arrive at a client’s home.
                </p>
                <p>
                  - Cooperate and communicate with the office at all times.{" "}
                </p>
                <p>
                  If you have any other questions about the safety of your loved
                  ones, please contact the manager at Munissa Kare Services Ltd.
                </p>
                <p>
                  Thank you in advance for your support and cooperation. We will
                  continue to do everything we can to keep your loved ones safe
                  and enable you to visit them safely.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="covidli">
                <h4>Protect your self and those around you</h4>
                <ul>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <FaHome />
                    </div>{" "}
                    Stay at home if you are sick
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHandsWash />
                    </div>{" "}
                    Wash Your Hand regularly
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHeadSideCoughSlash />
                    </div>{" "}
                    Cover yur cough and sneezes
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      {" "}
                      <MdOutlineSocialDistance />
                    </div>{" "}
                    Keep 1.5 meters away from others
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <MdFaceRetouchingOff />
                    </div>{" "}
                    Avoid touchng your face
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <BiInjection />
                    </div>{" "}
                    Get tested if you have symptoms
                  </li>
                </ul>
                <img src={covid} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {language == "arabic" && (
        <div className="container">
          <div className="headings">
            <h2> إرشادات كوفيد-19 لعام 2024</h2>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="coviddetail">
                <p>
                  <span> Munissa Kare Services</span> يعترف بحق حصول جميع
                  العملاء على الرعاية المناسبة، بغض النظر عن حالتهم الظروف أو
                  الظروف التي تؤدي إلى حاجتهم إليها رعاية. من المتوقع من العملاء
                  الكشف عن أي معدية الأمراض التي يوجد خطر التعرض لها والعطاء
                  الموافقة، عند الاقتضاء، للأطباء العامين وممرضي المنطقة و
                  المهنيين الصحيين الآخرين للكشف عن ذلك ومناقشته معلومة.{" "}
                </p>
                <p>
                  للعملاء الحق في الحماية مما يمكن الوقاية منه العدوى وعلى
                  الموظفين واجب الحفاظ على رفاههم عملائهم. نظرا لطبيعة العمل
                  الذي يقوم به طاقم العمل في المهام، ينبغي أن تكون ممارسات
                  النظافة الأساسية الجيدة يتبع في جميع الأوقات
                </p>
                <p>
                  ستقوم الإدارة بإطلاع الموظفين على الشروط المعروفة المتعلقة
                  العميل، لتمكينه من تقديم الرعاية المناسبة له كوفيد19. سيقوم
                  موظفونا بإجراء اختبار التدفق الجانبي (LFT) على أ الاختبار
                  الأسبوعي وما إذا كانوا يشعرون بالطقس في ذلك اليوم امتحان. يدعم
                  الاختبار عملائنا ومقدمي الرعاية من أجل الحفاظ على التوازن
                  بأمان بين مكافحة العدوى و الفوائد الحيوية للزيارة على صحة
                  ورفاهية شعبنا عملاء.
                </p>
                <p>
                  لقد حقق برنامج اللقاح نجاحًا كبيرًا في الانهيار العلاقة بين
                  العدوى والأمراض الخطيرة. لقد وصلنا أ لقد قطعنا شوطاً طويلاً
                  منذ مارس/آذار 2020، ولكن لا تزال هناك بعض حالات التفشي من
                  فيروس كورونا في المجتمع، مع بعض العملاء و لسوء الحظ، لا يزال
                  الموظفون يصابون بالمرض. الحصول على التطعيم/التطعيم عندما يتم
                  تقديمه لك هو أحد منتجاتنا أفضل الدفاعات لمكافحة العدوى. أنه
                  يقلل بشكل ملحوظ نقل العدوى، خاصة بعد تناول جرعتين
                </p>
                <p>
                  نريد أن نجعل زيارة عملائنا سهلة وبسيطة واضحة قدر الإمكان، مع
                  الحفاظ على سلامتهم. لا شئ يمكن أن يحل محل الرعاية والحب الذي
                  توفره العائلة والأصدقاء. نحن أعرف أن فترة الوباء كانت خاصة وقت
                  صعب وعاطفي لمقدمي الرعاية وأحبائهم منها، والموظفين.
                </p>
                <h6>
                  سيستمر الموظفون في ارتداء معدات الوقاية الشخصية عند الاقتضاء
                  والممارسة السيطرة الصارمة على العدوى. كنا نتوقع العائلات و أن
                  يلعب أقرب أقربائك دورك أيضًا.
                </h6>
                <p>من المهم بشكل خاص أنه يجب عليك:</p>
                <p>
                  - اغسل يديك جيدًا بالماء والصابون، على الأقل 20 ثانية، أو
                  استخدم معقم اليدين المتوفر معك الوصول إلى منزل العميل.
                </p>
                <p>- التعاون والتواصل مع المكتب في جميع الأوقات. </p>
                <p>
                  ذا كان لديك أي أسئلة أخرى حول سلامة أحبائك منها، يرجى الاتصال
                  بالمدير في Munissa Kare Services Ltd.
                </p>
                <p>
                  نشكركم مقدمًا على دعمكم وتعاونكم. ونحن سوف استمر في بذل كل ما
                  في وسعنا للحفاظ على سلامة أحبائك وتمكينك من زيارتهم بأمان.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="covidli">
                <h4>احمي نفسك ومن حولك</h4>
                <ul>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <FaHome />
                    </div>{" "}
                    ابق في المنزل إذا كنت مريضًا
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHandsWash />
                    </div>{" "}
                    اغسل يدك بانتظام
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHeadSideCoughSlash />
                    </div>{" "}
                    قم بتغطية السعال والعطس{" "}
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      {" "}
                      <MdOutlineSocialDistance />
                    </div>{" "}
                    ابتعد مسافة 1.5 متر عن الآخرين
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <MdFaceRetouchingOff />
                    </div>{" "}
                    تجنب لمس وجهك{" "}
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <BiInjection />
                    </div>{" "}
                    قم بإجراء الاختبار إذا كان لديك أعراض
                  </li>
                </ul>
                <img src={covid} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {language == "hindi" && (
        <div className="container">
          <div className="headings">
            <h2> कोविड-19 मार्गदर्शिका 2024</h2>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="coviddetail">
                <p>
                  <span> मुनिसा केयर सर्विसेज</span> सभी ग्राहकों को उचित देखभाल
                  प्राप्त करने का अधिकार मानती है, चाहे उनकी स्थिति हो जैसी भी,
                  जो उनकी देखभाल की आवश्यकता को उत्पन्न करती है। ग्राहकों से
                  अपेक्षित है कि वे जिन्हें संबंधित होने की संभावना है, उन्हें
                  बताएं और यहां तक कि उन्हें सहमति दें कि जीपी, जिले के नर्सेस
                  और अन्य स्वास्थ्य पेशेवर ऐसी जानकारी को खुल करने और चर्चा करने
                  के लिए सहमति दी जा सकती है।
                </p>
                <p>
                  ग्राहकों का अधिकार है कि उन्हें रोका जाए संग्रहणीय संक्रमण से
                  और कर्मचारियों का कर्तव्य है कि वे अपने ग्राहकों की भलाइ की
                  रक्षा करें। कार्य जो यात्राएँ करने में कर्मचारी करते हैं,
                  उन्हें हमेशा सभी समय अच्छी मूलभूत स्वच्छता अनुष्ठान करना चाहिए
                </p>
                <p>
                  प्रबंधन कर्मचारियों को ग्राहक से संबंधित ज्ञात शर्तों पर
                  चेतावनी देगा, जिससे उन्हें COVID19 के लिए उचित देखभाल प्रदान
                  करने में सहायक हो सके। हमारे कर्मचारी साप्ताहिक टेस्ट और यदि
                  वे उस दिन अच्छा महसूस करते हैं, तो टेस्ट करेंगे। टेस्टिंग
                  हमारे ग्राहकों और देखभालकर्ताओं का समर्थन करता है ताकि संक्रमण
                  नियंत्रण और हमारे ग्राहकों के स्वास्थ्य और भलाइयों के बीच
                  सुरक्षित रूप से यात्रा करने के लिए एक संतुलन बनाए रखा जा सके।
                </p>
                <p>
                  टीका कार्यक्रम ने संक्रमण और गंभीर बीमारी के बीच का लिंक
                  तोड़ने में बहुत अच्छा कार्य किया है। हमने 2020 मार्च से बहुत
                  कुछ किया है, लेकिन समुदाय में कुछ क्षेत्रों में कोरोनावायरस के
                  प्रकोप हो रहे हैं, जिसके कुछ ग्राहक और कर्मचारी दुर्दंत रूप से
                  बीमार हो रहे हैं। जब आपको यह पेश किया जाए, तो उसे प्राप्त करना
                  हमारी संक्रमण के खिलाफ सबसे अच्छा बचावों में से एक है। यह
                  संक्रमण के प्रसार को सांठगांठ बढ़ाता है, विशेषकर दो खुराकों के
                  बाद।
                </p>
                <p>
                  हम चाहते हैं कि आपके ग्राहकों की यात्रा को संभालना आसान और
                  सीधा हो, जबकि हम उन्हें सुरक्षित रखते हैं। कोई चीज परिवार और
                  दोस्तों द्वारा प्रदान करेगा नहीं। हम जानते हैं कि महामारी का
                  काल देखभाल प्रदाताओं, उनके प्रियजनों और कर्मचारियों के लिए
                  विशेष रूप से कठिन और भावनात्मक समय रहा है।
                </p>
                <h6>
                  कर्मचारी सबसे उपयुक्त हैजीन धारण करेंगे और कड़ी संक्रमण
                  नियंत्रण अनुष्ठान करेंगे। हम परिवारों और अगले आस-पास को भी
                  आपका हिस्सा खेलने की उम्मीद करेंगे।{" "}
                </h6>
                <p>यह विशेष रूप से महत्वपूर्ण है कि आपको अवश्यकता है:</p>
                <p>
                  - जब आप किसी ग्राहक के घर पहुंचते हैं, तो कम से कम 20 सेकंड के
                  लिए साबुन और पानी से अच्छी तरह से हाथ धोएं, या जब आपको पहुंचते
                  हैं, तो प्रदान किए गए हैंड सैनिटाइज़र का उपयोग करें।
                </p>
                <p>- सभी समय कार्यालय के साथ सहयोग और संवाद करें।</p>
                <p>
                  आपके प्रियजनों की सुरक्षा के बारे में कोई और सवाल हो, कृपया
                  Munissa Kare सेवा लिमिटेड के प्रबंधक से संपर्क करें।
                </p>
                <p>
                  आपके समर्थन और सहयोग के लिए पहले ही धन्यवाद। हम आपके प्रियजनों
                  को सुरक्षित रखने और उन्हें सुरक्षित रूप से यात्रा करने के लिए
                  हम जो कुछ भी कर सकते हैं, वह करते रहेंगे।
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="covidli">
                <h4>अपने आप को और आपके आस-पास को सुरक्षित रखें</h4>
                <ul>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <FaHome />
                    </div>{" "}
                    अगर आप बीमार हैं तो घर पर रहें
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHandsWash />
                    </div>{" "}
                    नियमित रूप से अपने हाथ धोएं
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHeadSideCoughSlash />
                    </div>{" "}
                    अपनी खांसी और छींकों को ढंकें
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      {" "}
                      <MdOutlineSocialDistance />
                    </div>{" "}
                    अन्यों से 1.5 मीटर दूर रहें
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <MdFaceRetouchingOff />
                    </div>{" "}
                    अपना चेहरा छूने से बचें
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <BiInjection />
                    </div>{" "}
                    यदि आपके पास लक्षण हैं, तो टेस्ट करें
                  </li>
                </ul>
                <img src={covid} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {language == "soomali" && (
        <div className="container">
          <div className="headings">
            <h2> U Talaabada Xilliga 2024 ee Covid-19</h2>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="coviddetail">
                <p>
                  <span> Adeega Munissa Kare</span> waxay garanteysaa haqabtirka
                  dhamaan macaamiisha la rabo inay helo dejiyeel aanay ahayn mid
                  aanay jirin, ama xaaladdooda, ama xaaladaha ay khasabtay inay
                  u baahan yihiin dejiyeelka. Waxa lagu darsaday in macaamiisha
                  ay ku sheegaan noocyada cudurada laga xumaado, iyaga oo lagu
                  ogaa inay ka hortagaan in dib loo eego, halkaas oo loo baahan
                  yahay, haddii la eego, inay ogolaato in GP's, Ganacsatooyinka
                  Gobolka iyo qof kale oo caafimaad leh ay ku hadlaan iyo kala
                  hadlaan macluumaadkaas.
                </p>
                <p>
                  Adeega waxay leedahay xaquuqda dhamaan macaamiisha inay la
                  kulmaan casriga ah, haddii ay tahay inay isla ogsoonyihiin
                  noocyada cudurada laga xumaado, waxayna ku bixisaa aqoonsi,
                  halka ay tahay, in GP's, Ganacsatooyinka Gobolka iyo qof kale
                  oo caafimaad leh ay ka warrameeyaan iyo ka warrameeyaan
                  macluumaadkaas. Waa inay ka warantay inay dhimanayaan nidaamka
                  la shaqaysa ee shaqada ay maamulaan, iyaga oo raali ka ahaan
                  jiray xigta dhamaan wakhtiyada
                </p>
                <p>
                  Maamulka waxay kala hadli doontaa shaqaalaha xaaladaha looga
                  baahan yahay ee ku saabsan macaamiisha, si loo oggolaado inay
                  bixiyaan dejiyeelka COVID19. Shaqaalaha waxay qaadan doonaan
                  Dib u Eegis Lateral Flow Test (LFT) toddobaadkii iyo haddii ay
                  iska daahdayaan maalinimadaas. Qiimaynta waxay taageeraan
                  macaamiisha iyo gargaarka si loo hubiyo inay ku dhaqaaqayaan
                  nidaamka nabadgelyada iyo faa'iidooyinka muhiimka ah ee la
                  kulmo caafimaadka iyo wanaajinta macaamiishooda.
                </p>
                <p>
                  Barnaamijka tikaas waxa uu ahaa mid fiican oo u gaar ah in dib
                  loogu laaban lahaa cinwaanka cudurka. Waxa aanu ku soo baxnay
                  tan iyo Maarso 2020, laakiin waa sidaas darteed waa wakhtiyo
                  ku dhow. Tirakoobyo ayaa weli jira kuwaas oo ay ilaashadaan
                  qaar ka mid ah macaamiisha iyo shaqaalaha ay uunbaanayn
                  lahaayeen. Xagga tiikada/boostarka marka laga tago waa mid ka
                  mid ah nooca ugu wanaagsan ee loo dhisayo sidii infeekshanka
                  loo xiriri lahaa, gaar ahaan marka la tartamo laba doosan
                </p>
                <p>
                  Waxaan rabnaa inay macaamiishooda soo booqdaan sidii loo heli
                  lahaa iyo sidii loo heli lahaa si looga hubiyo inay ku nool
                  yihiin. Midda ay qadiyada ku tahay iyo jacaylka qoysaska iyo
                  saaxiibadu ay bixiyaan, ma garanayno. Waxaan ognahay in
                  xilliyooyinka khilaafka ah ee jiray ay tahay wakhti dheer oo
                  kuwaas oo ka dhexeeya dhammaan kalsoonida, ehelkooda, iyo
                  shaqaalaha.
                </p>
                <h6>
                  Shaqaalaha waxay sii wataan PPE marka la baahan yahay iyo
                  waxay abuurtaan nidaamka xiritaanka cudur. Waxaanu rajaynaynaa
                  qoysaska iyo nebiga inay gacan ka geystaan sidii ugu
                  helitaankaaga ah.
                </h6>
                <p>Waa gaar ah inaad MISTO:</p>
                <p>
                  - Ha dhihi karoontooda kulankeeda marka aad guriga kaga soo
                  kiciyey, iskuulka kastaana waxa lagu dayn doonaa xanaanada,
                  ama isticmaal hand saniteeyzarka laga bixiyo.
                </p>
                <p>- Iskaashi iyo iskaashi gacmaha kasta wakhtigan oo dhan.</p>
                <p>
                  Haddii aad su'aalo kale qabtid ku saabsan nabadgelyada
                  ehelkooda, fadlan kala soo xiriir maamulka Munissa Kare
                  Services Ltd.
                </p>
                <p>
                  Mahadsanid hore ugu socodsiin waana inaanu sii wadnaa inaanu
                  kullaynno wakhti dheer siinayna inaanu kugu ilaalino inaad u
                  booqdo.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="covidli">
                <h4>Isku deji nafsigaada iyo kuwa ku xadgudubka</h4>
                <ul>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <FaHome />
                    </div>{" "}
                    Hilib guriga haddii aad cudurbaa
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHandsWash />
                    </div>{" "}
                    Dhoowo Xanuunkeeda oo keliya
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHeadSideCoughSlash />
                    </div>{" "}
                    Qaxo gacanta iyo korontooyinkaaga
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      {" "}
                      <MdOutlineSocialDistance />
                    </div>{" "}
                    Ka daal 1.5 mitir ka baxsan dadka kale
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <MdFaceRetouchingOff />
                    </div>{" "}
                    Ijira gacantaada
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <BiInjection />
                    </div>{" "}
                    Xidhiidh si aad hesho haweeneydaa
                  </li>
                </ul>
                <img src={covid} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      {language == "bengali" && (
        <div className="container">
          <div className="headings">
            <h2> কোভিড-19 নির্দেশিকা 2024</h2>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="coviddetail">
                <p>
                  <span> মুনিসা কেয়ার সার্ভিসেস</span> সব ক্লায়েন্টদের কে সঠিক
                  যত্ন প্রদানের অধিকার প্রদান করে, তাদের অবস্থা, অথবা যেগুলি
                  তাদের যত্নের জন্য প্রয়োজনীয়, বা তাদের জন্য উপস্থিত করার
                  কারণে কোনও পরিস্থিতি, যা তাদের যত্নের জন্য প্রয়োজনীয়।
                  ক্লায়েন্টদের থেকে প্রত্যাখ্যান করা আবশ্যক যে সকল সংগঠিত রোগের
                  ক্ষতির ঝুঁকি রয়েছে এবং যেখানে তাদের জন্য একটি ঝুঁকি রয়েছে
                  এমন কোনও রোগের ক্ষতি নিয়ে এবং যদি প্রয়োজন হয়, জিপি, জেলা
                  নার্স এবং অন্যান্য স্বাস্থ্য পেশাদারদের তাদের তথ্য প্রকাশ এবং
                  আলোচনা করার জন্য।
                </p>
                <p>
                  ক্লায়েন্টদেরকে আপরাধিক সংক্রমণ থেকে রক্ষা প্রদান করার অধিকার
                  রয়েছে এবং স্টাফের কর্তব্য রয়েছে তাদের ক্লায়েন্টদের ভাল
                  থাকার জন্য তাদের সুরক্ষা করা। কাজের সকল সময়ে সুন্দর মৌলিক
                  স্বচ্ছতা অনুসরণ করা উচিত
                </p>
                <p>
                  পরিচালনা কর্মচারীদেরকে ক্লায়েন্টের সম্পর্কে জ্ঞাত শর্তগুলি
                  সহীত আপডেট করতে দেবে, যাতে তারা COVID19-এর জন্য উপযুক্ত যত্ন
                  প্রদান করতে পারে। আমাদের কর্মচারীরা প্রতি সপ্তাহে Lateral Flow
                  Test (LFT) নেবে এবং তাদের যদি তাদের বোঝা যায় যে তারা তাদের
                  ঠান্ডা মন মনে করে, তাদের যত্ন নিতে সহায়ক হতে হবে। টেস্টিংটি
                  আমাদের ক্লায়েন্টগুলি এবং যত্নকারীদের সহায়ে পারমাণবিক
                  নিয়ন্ত্রণ এবং তাদের ক্লায়েন্টদের সহায়ে একটি নিরাপদ ভিত্তি
                  বজায় রাখতে।
                </p>
                <p>
                  টিকা প্রোগ্রামটি আবেগী সফল হয়েছে সংক্রমণ এবং গম্ভীর অসুস্থতা
                  মধ্যে দৈবদাত্ত লংক ভেঙ্গে দিতে। আমরা মার্চ 2020 হতে বহুদিন
                  প্রবর্তিত হইনি, তবে কমিউনিটিতে কিছু করোনাভাইরাসের আপত্তিগুলি
                  আছে, কিছু ক্লায়েন্ট এবং কর্মচারীগুলি দুঃখজনকভাবে আবার
                  আক্রান্ত হতে থাকছে। যখন এটি আপনার কাছাকাছি পেশাদার হতে দেবে,
                  এটি প্রসারের নিরাপত্তা মোকাবিলায় আমাদের সেরা প্রতিরক্ষা মধ্যে
                  একটি। এটি সংক্রমণের প্রচুর পরিমাণকে সামার্থ্যশীলভাবে হ্রাস
                  করে, বিশেষত দুটি ডোজ প্রদানের পরে।
                </p>
                <p>
                  আমরা চাইছি ক্লায়েন্টগুলির যাত্রা যত্নে সহজ এবং সোজা হয়,
                  তাদেরকে নিরাপদ রাখতে সাহায্য করতে। কোনওটি পরিবার এবং
                  বন্ধুবান্ধব সরবরাহ করতে পারে না। আমরা জানি যে মহামারির কালে
                  দেখানো হয়েছে বিশেষভাবে কঠিন এবং ভাবনামূলক সময় ছিল দেখার,
                  তাদের প্রিয়জনের, এবং কর্মচারীদের জন্য।
                </p>
                <h6>
                  স্টাফ কোথাও উপযুক্ত হায়জীন পরিধান করবে এবং কঠোর সংক্রমণ
                  নিয়ন্ত্রণ অনুষ্ঠান করতে অপেক্ষা করছি। আমরা পুরস্কৃত পরিবার
                  এবং পরবর্তী আস্তে আস্তে খেলতে আশা করি।
                </h6>
                <p>এটি বিশেষভাবে গুরুত্বপূর্ণ যে আপনি অবশ্যই করতে হবে:</p>
                <p>
                  - গুণগত হাত প্রস্তুত করুন সাবান এবং জল, অথবা যখন আপনি একটি
                  ক্লায়েন্টের বাড়িতে আসেন, সর্বনিম্ন 20 সেকেন্ড বা হ্যান্ড
                  স্যানিটাইজার ব্যবহার করুন।
                </p>
                <p>- সব সময় কার্যালয়ের সাথে সহযোগিতা এবং যোগাযোগ করুন।</p>
                <p>
                  আপনার প্রিয়জনের নিরাপত্তা সম্মত কোনও অন্য প্রশ্ন থাকলে দয়া
                  করে Munissa Kare Services Ltd ম্যানেজারের সাথে যোগাযোগ করুন।
                </p>
                <p>
                  আপনার সাহায্য এবং সহযোগিতার জন্য আগেই ধন্যবাদ। আমরা তাদের
                  নিরাপত্তা বাঞ্ছিত রাখতে এবং আপনাকে তাদের সম্পর্কে সুরক্ষিতভাবে
                  দেখার জন্য আমরা যা করতে পারব তা চাই।
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="covidli">
                <h4>নিজেকে এবং আপনার চারপাশের ব্যক্তিদের সুরক্ষা করুন</h4>
                <ul>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <FaHome />
                    </div>{" "}
                    যদি আপনি অসুস্থ হন তবে বাড়িতে থাকুন
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHandsWash />
                    </div>{" "}
                    নিয়মিতভাবে আপনার হাত ধোয়া
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <FaHeadSideCoughSlash />
                    </div>{" "}
                    আপনার কাশ এবং হাঁচি ঢাকুন
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      {" "}
                      <MdOutlineSocialDistance />
                    </div>{" "}
                    অন্যদের থেকে 1.5 মিটার দূরে থাকুন
                  </li>
                  <li data-aos="fade-right" onClick={goCovid}>
                    <div className="iconsist">
                      <MdFaceRetouchingOff />
                    </div>{" "}
                    আপনার মুখে হাত দিয়ে স্পর্শ করবেন না
                  </li>
                  <li onClick={goCovid}>
                    <div className="iconsist">
                      <BiInjection />
                    </div>{" "}
                    আপনি যদি লক্ষণ হয় তবে পরীক্ষা করুন
                  </li>
                </ul>
                <img src={covid} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Covid;
