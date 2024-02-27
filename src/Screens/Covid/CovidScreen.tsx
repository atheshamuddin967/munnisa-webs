import { useLanguage } from "../../context/LanguageContext";

function CovidScreen() {
  const { language } = useLanguage();

  return (
    <div className="covidsec">
      {language == "en" && (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headings">
                <h2>COVID-19 (Coronavirus Disease 2019)</h2>
              </div>
              <div className="coviddetails">
                <p>
                  {" "}
                  <span> Caused by a Novel Coronavirus:</span> COVID-19 is
                  caused by the SARS-CoV-2 virus, a novel coronavirus that was
                  first identified in Wuhan, China, in late 2019.
                </p>{" "}
                <p>
                  {" "}
                  <span> Transmission:</span> The virus primarily spreads
                  through respiratory droplets when an infected person coughs,
                  sneezes, or talks. It can also spread by touching surfaces
                  contaminated with the virus and then touching the face.
                </p>{" "}
                <p>
                  <span> Symptoms:</span> Common symptoms include fever, cough,
                  and shortness of breath. Other symptoms may include fatigue,
                  body aches, loss of taste or smell, sore throat, and
                  gastrointestinal symptoms.
                </p>
                <p>
                  {" "}
                  <span> Prevention:</span> Preventive measures include
                  practicing good hand hygiene, wearing masks, practicing
                  physical distancing, and getting vaccinated.
                </p>{" "}
                <p>
                  {" "}
                  <span> Vaccination:</span> Several COVID-19 vaccines have been
                  developed and authorized for emergency use in various
                  countries. Vaccination efforts aim to reduce the severity of
                  illness and prevent the spread of the virus.{" "}
                </p>
                <p>
                  {" "}
                  <span> Global Impact: </span>The pandemic has had significant
                  global impacts, affecting public health, economies, and daily
                  life. Various countries have implemented measures such as
                  lockdowns, travel restrictions, and social distancing to curb
                  the spread of the virus.
                </p>
                <div className="headings">
                  <h2>Protect your self and those around you</h2>
                </div>
                <h5>01)Stay Home and Safe:</h5>
                <ul>
                  <li>Avoid unnecessary outings and social gatherings.</li>
                  <li>Work from home if possible.</li>
                  <li>Follow local guidelines and restrictions.</li>
                </ul>
                <h5>02)Wash Your Hands Regularly:</h5>
                <ul>
                  <li>
                    Wash hands with soap and water for at least 20 seconds.
                  </li>
                  <li>
                    Use hand sanitizer with at least 60% alcohol if soap is not
                    available.
                  </li>
                  <li>Clean hands after touching surfaces or objects.</li>
                </ul>
                <h5>03)Cover Your Cough and Sneezes:</h5>
                <ul>
                  <li>
                    Use a tissue or your elbow to cover your mouth and nose when
                    coughing or sneezing.
                  </li>
                  <li>Dispose of used tissues properly.</li>
                  <li>Wash hands immediately after coughing or sneezing.</li>
                </ul>
                <h5>04)Keep 1.5 Meters Away from Others:</h5>
                <ul>
                  <li>
                    Practice physical distancing to reduce the risk of virus
                    transmission.
                  </li>
                  <li>
                    Maintain a distance of at least 1.5 meters (or as per local
                    guidelines) from individuals who are not from your
                    household.
                  </li>
                </ul>
                <h5>05)Avoid Touching Your Face:</h5>
                <ul>
                  <li>
                    Refrain from touching your face, especially the eyes, nose,
                    and mouth.
                  </li>
                  <li>
                    Touching the face with contaminated hands can introduce the
                    virus into the body.
                  </li>
                </ul>
                <h5>06)Get Tested if You Have Symptoms:</h5>
                <ul>
                  <li>
                    If you experience symptoms such as fever, cough, or
                    difficulty breathing, get tested for COVID-19.
                  </li>
                  <li>
                    Follow local testing guidelines and contact healthcare
                    providers for guidance.
                  </li>
                </ul>
                <p>
                  These measures are crucial in reducing the risk of contracting
                  and spreading the virus. It's important to stay informed about
                  the latest guidelines from health authorities, as
                  recommendations may vary based on the evolving situation and
                  regional considerations. Additionally, vaccination is another
                  important step in preventing severe illness and reducing the
                  impact of the virus on individuals and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
      {language == "hindi" && (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headings">
                <h2>कोविड-19 (कोरोनावायरस रोग 2019)</h2>
              </div>
              <div className="coviddetails">
                <p>
                  <span> नए कोरोनावायरस के कारण:</span> कोविड-19 का कारण
                  SARS-CoV-2 वायरस है, एक नए कोरोनावायरस जो कि 2019 के अंत में
                  चीन के वुहान में पहली बार पहचाना गया था।
                </p>
                <p>
                  <span> संचरण:</span> वायरस मुख्यतः संप्रेषण बूंदों के माध्यम
                  से फैलता है जब एक संक्रमित व्यक्ति खांसता है, छींकता है, या
                  बातचीत करता है। इसका फैलाव भी वायरस से संकलित सतहों को छूने और
                  फिर चेहरे को छूने के माध्यम से हो सकता है।
                </p>
                <p>
                  <span> लक्षण:</span> सामान्य लक्षण में बुखार, खांसी, और सांस
                  की तकलीफ शामिल हैं। अन्य लक्षणों में थकान, शरीर दर्द, स्वाद या
                  गंध की कमी, गले का दर्द, और जीवाणुकीय लक्षण शामिल हो सकते हैं।
                </p>
                <p>
                  <span> रोकथाम:</span> निवारक उपायों में अच्छे हैं साफ हाथी
                  अच्छे स्वास्थ्य, मास्क पहनना, भौतिक दूरी अभ्यास करना, और
                  टीकाकरण करवाना।
                </p>
                <p>
                  <span> टीकाकरण:</span> कई COVID-19 टीके विकसित किए गए हैं और
                  विभिन्न देशों में आपातकालीन उपयोग के लिए अधिमत्तानुमति प्राप्त
                  है। टीकाकरण प्रयास इलाज की तीव्रता को कम करने और वायरस के
                  प्रसार को रोकने का उद्देश्य है।
                </p>
                <p>
                  <span> वैश्विक प्रभाव:</span> महामारी ने सार्वजनिक स्वास्थ्य,
                  अर्थव्यवस्थाएँ, और दैहिक जीवन को प्रभावित किया है। विभिन्न
                  देशों ने वायरस के प्रसार को रोकने के लिए लॉकडाउन, यात्रा
                  परिसीमा, और सामाजिक दूरी जैसे उपायों को लागू किया है।
                </p>
                <div className="headings">
                  <h2>अपने आप को और आपके चारों ओर को सुरक्षित रखें</h2>
                </div>
                <h5>01)घर में रहें और सुरक्षित रहें:</h5>
                <ul>
                  <li>अनावश्यक बाहर जाने और सामाजिक सभा से बचें।</li>
                  <li>यदि संभव हो तो घर से काम करें।</li>
                  <li>स्थानीय मार्गदर्शन और प्रतिबंधों का पालन करें।</li>
                </ul>
                <h5>02)नियमित रूप से हाथ धोएं:</h5>
                <ul>
                  <li>कम से कम 20 सेकंड के लिए साबुन और पानी से हाथ धोएं।</li>
                  <li>
                    यदि साबुन नहीं मिलता है तो कम से कम 60% एल्कोहल के साथ हैंड
                    सैनिटाइज़र का उपयोग करें।
                  </li>
                  <li>सतहों या वस्त्रों को छूने के बाद हाथ साफ करें।</li>
                </ul>
                <h5>03)अपने खांसी और छींकों को ढ़कें:</h5>
                <ul>
                  <li>
                    जब खांसी या छींकते समय मुंह और नाक ढ़कने के लिए एक टिश्यू या
                    अपनी कोहनी का उपयोग करें।
                  </li>
                  <li>उपयुक्त रूप से प्रयुक्त टिश्यू को निर्धारित करें।</li>
                  <li>खांसी या छींकने के बाद तुरंत हाथ धोएं।</li>
                </ul>
                <h5>04)दूसरों से 1.5 मीटर दूर रहें:</h5>
                <ul>
                  <li>
                    वायरस प्रसार के जोखिम को कम करने के लिए भौतिक दूरी अभ्यास
                    करें।
                  </li>
                  <li>
                    अपने घर से नहीं होने वाले व्यक्तियों से कम से कम 1.5 मीटर की
                    दूरी बनाए रखें (या स्थानीय मार्गदर्शन के अनुसार)।
                  </li>
                </ul>
                <h5>05)अपना चेहरा छूने से बचें:</h5>
                <ul>
                  <li>
                    अपने चेहरे को छूने से बचें, विशेषकर आंखें, नाक, और मुँह।
                  </li>
                  <li>
                    दुषित हाथों से चेहरे को छूना वायरस को शरीर में प्रवेश करा
                    सकता है।
                  </li>
                </ul>
                <h5>06)यदि आपके पास लक्षण हैं तो परीक्षण करें:</h5>
                <ul>
                  <li>
                    यदि आप बुखार, खांसी, या सांस लेने में कठिनाई जैसे लक्षण
                    महसूस करते हैं, तो COVID-19 के लिए परीक्षण करें।
                  </li>
                  <li>
                    स्थानीय परीक्षण दिशानिर्देशों का पालन करें और मार्गदर्शन के
                    लिए स्वास्थ्य सेवा प्रदाताओं से संपर्क करें।
                  </li>
                </ul>
                <p>
                  इन उपायों में से कोई भी भारी बीमारी और वायरस के प्रभाव को कम
                  करने में महत्वपूर्ण है। यह महत्वपूर्ण है कि आप स्वास्थ्य
                  प्राधिकृतियों के नवीनतम मार्गदर्शन के बारे में सूचित रहें,
                  क्योंकि सिफारिशें स्थिति और क्षेत्रीय परिस्थितियों के अनुसार
                  बदल सकती हैं। इसके अलावा, टीकाकरण व्यक्तियों और समुदायों पर
                  वायरस के प्रभाव को कम करने में एक और महत्वपूर्ण कदम है।
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {language == "bengali" && (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headings">
                <h2>কোভিড-19 (করোনাভাইরাস রোগ ২০১৯)</h2>
              </div>
              <div className="coviddetails">
                <p>
                  <span> একটি নভেল করোনাভাইরাস দ্বারা উত্পন্ন:</span> কোভিড-19
                  হলো SARS-CoV-2 ভাইরাস দ্বারা উত্পন্ন, এটি হিসেবে প্রথমবার
                  চীনের উহানে, ২০১৯ সালে চোখ দেখানো হয়।
                </p>
                <p>
                  <span> সংক্রমণ:</span> ভাইরাস প্রধানভাবে হয়তো ছুঁচোয়া
                  ড্রপলেট দ্বারা প্রসারিত হয় যখন একজন আক্রান্ত ব্যক্তি কাশ করে,
                  ছুঁকযোগ করে, বা কথা বলে। এটি ছুঁচোয়া ভাইরাসের সহিত সংলগ্ন
                  উপাদানে স্পর্শ হতে ও তারপর মুখে স্পর্শ হতেও প্রসারিত হতে পারে।
                </p>
                <p>
                  <span> লক্ষণ:</span> সাধারিত লক্ষণের মধ্যে হলো জ্বর, কাশি, এবং
                  শ্বাস কষ্ট। অন্যান্য লক্ষণগুলি অতিরিক্ত ক্লান্তি, শরীরের
                  ব্যথা, স্বাদ বা গন্ধ হারানো, গলার ব্যথা, এবং পাচনতন্ত্রিক
                  লক্ষণগুলি থাকতে পারে।
                </p>
                <p>
                  <span> প্রতিরোধ:</span> প্রতিরোধের উপায় হলো ভাল হ্যান্ড
                  হায়জিন অনুষ্ঠান করা, মাস্ক পরা, ভৌতিক দূরত্ব অনুষ্ঠান করা,
                  এবং টিকার জন্য।
                </p>
                <p>
                  <span> টিকাকরণ:</span> বিভিন্ন দেশে আপাতকালীন ব্যবহারের জন্য
                  অনুমোদিত কয়েকটি COVID-19 টিকা তৈরি হয়েছে। টিকাদানের
                  প্রচেষ্টা রোগের তীব্রতা কমাতে এবং ভাইরাসের প্রসার রোধ করতে
                  মোকাবিলার লক্ষ্য করে।
                </p>
                <p>
                  <span> বৈশ্বিক প্রভাব:</span> এই প্যানডেমিকটি জনসাধারণের
                  স্বাস্থ্য, অর্থনীতি, এবং দৈনন্দিন জীবনকে অসীম প্রভাবিত করেছে।
                  বিভিন্ন দেশের মধ্যে ভাইরাসের প্রসার দমন করতে লকডাউন, যাত্রা
                  সীমাবদ্ধ, এবং সামাজিক দূরত্ব ইত্যাদির মত উপায়গুলি নেয়া
                  হয়েছে।
                </p>
                <div className="headings">
                  <h2>নিজেকে এবং আপনার চারপাশের মানুষকে রক্ষা করুন</h2>
                </div>
                <h5>01)বাড়িতে থাকুন এবং নিরাপদ থাকুন:</h5>
                <ul>
                  <li>
                    অপ্রয়োজনে বাইরে বেড়ে যাওয়া এবং সামাজিক সম্মেলন এড়ানো
                    হওয়া এড়ানো করুন।
                  </li>
                  <li>যদি সম্ভব হয়, তাদের বা থাকতে হয়।</li>
                  <li>স্থানীয় নির্দেশনাগুলি এবং প্রতিবন্ধন অনুসরণ করুন।</li>
                </ul>
                <h5>02)নিয়মিতভাবে আপনার হাত ধোয়া:</h5>
                <ul>
                  <li>সাবান এবং জলে কমপ্রয়োজনে নিয়মিতভাবে হাত ধুয়ে নিন।</li>
                  <li>
                    সাবান না থাকলে ৬০% এলকোহল সহ হ্যান্ড স্যানিটাইজার ব্যবহার
                    করুন।
                  </li>
                  <li>উপাদান বা বস্তু ছুঁতে পরে তারপর হাত ধুয়ে নিন।</li>
                </ul>
                <h5>03)আপনার খাঁচা এবং ছুঁকো ঢ়াকুন:</h5>
                <ul>
                  <li>
                    কখনই কাশি বা ছুঁকতে সময় টিশ্যু বা আপনার কনু ব্যবহার করুন।
                  </li>
                  <li>ব্যবহৃত টিশ্যুগুলি সঠিকভাবে বিস্তার করুন।</li>
                  <li>কাশি বা ছুঁকতে পরে তাৎক্ষণিকভাবে হাত ধুয়ে নিন।</li>
                </ul>
                <h5>04)অন্যকে 1.5 মিটার দূরে থাকুন:</h5>
                <ul>
                  <li>
                    ভাইরাস প্রসার করার ঝুঁকি কমাতে ভৌতিক দূরত্ব অনুষ্ঠান করুন।
                  </li>
                  <li>
                    আপনার অবাস্থান থেকে অবাস্থান করার ব্যাপারে কমপ্রয়োজনে 1.5
                    মিটার দূরত্ব বজায় রাখুন (বা স্থানীয় নির্দেশনাগুলি
                    অনুযায়ী)।
                  </li>
                </ul>
                <h5>05)আপনার মুখ ছুঁয়া থাকুন:</h5>
                <ul>
                  <li>আপনার মুখ ছুঁতে থাকুন, বিশেষত চোখ, নাক, এবং মুখ।</li>
                  <li>
                    দুষিত হাতের সাথে মুখ ছুঁতে ভাইরাসটি শরীরে ঢুকাতে পারে।
                  </li>
                </ul>
                <h5>06)যদি আপনার কাছে লক্ষণ থাকে তাদের পরীক্ষা করুন:</h5>
                <ul>
                  <li>
                    যদি আপনি জ্বর, কাশি, অথবা শ্বাস নেওয়ার সময় লক্ষণ অনুভব
                    করেন, তবে COVID-19 জন্য পরীক্ষা করুন।
                  </li>
                  <li>
                    স্থানীয় পরীক্ষা নির্দেশিকা অনুসরণ করুন এবং মার্গদর্শনের
                    জন্য হেলথকেয়ার প্রদাতাদের সাথে যোগাযোগ করুন।
                  </li>
                </ul>
                <p>
                  এই উপায়গুলি ভাইরাসের সংক্রমণ হওয়ার এবং প্রসার করার ঝুঁকি
                  কমাতে প্রমুখ। এটি গুরুত্বপূর্ণ যে আপনি স্বাস্থ্য কর্মকর্তা দের
                  সাথে আপনার প্রিয়জনদের এবং সমুদ্র দলীয় চিন্তা করতে বোঝেন কেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {language == "soomali" && (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headings">
                <h2>COVID-19 (Cudurka Koroonafayras 2019)</h2>
              </div>
              <div className="coviddetails">
                <p>
                  {" "}
                  <span> Koroonafayras Madow:</span> COVID-19 waa cudurka
                  viruska SARS-CoV-2, koroonafayras cusub oo loo ogaanay Wuhan,
                  Shiinaha, sannadkan 2019.
                </p>{" "}
                <p>
                  {" "}
                  <span> Soo Dhowaada:</span> Wiruska wuxuu gaarayaa ilmaha
                  isboortiga markuu neefo, yaryar, ama yiri. Wuxuu sidoo kale
                  gaarayaa dabaylaha isboortiga markay ka gasho ilmahooda oo
                  laga tago.
                </p>{" "}
                <p>
                  <span> Tibaax:</span> Calaamadaha caadiga ah waxay ku jiraan
                  qandho, isha, iyo noocyo kale oo dhibaatooyin. Calaamadaha
                  kale waxaa ka mid ah dhacdadan, da’daqaqa, madhaw, rugta, iyo
                  calaamadaha jidhka.
                </p>
                <p>
                  {" "}
                  <span> Kaabayaasha:</span> Habka kaabayaasha waxay ka mid
                  tahay sifooyinka nolosha oo wanaagsan, dharka maskaxda,
                  isu-soo rididda jinsiga, iyo talaalka.
                </p>{" "}
                <p>
                  {" "}
                  <span> Talaalka:</span> Talaalada COVID-19 waxaa laga
                  samaynayaa qalab talaaleed oo la ogolaaday isticmaalka
                  dhaqdhaqaaqyada ku salaysan dalalka kala duwan. Jiritaanka
                  waxay u baahan tahay inay yareeyaan dhibaatada iyo inay dib
                  uga baxaan wiruska.
                </p>
                <p>
                  {" "}
                  <span> Saamiga Caalamiga ah: </span> Pandemiggu wuxuu saameyn
                  caalamiga ah u yeeshay, waxaana ku dhowaaday caafimaad,
                  dhaqaale, iyo maalinta maalinlaha ah. Dalalka kala duwan waxay
                  ku qabteen xeerarka sida xirfadlayaal, xadidan, iyo isku dayga
                  si loo yareeyo korontooyinka.
                </p>
                <div className="headings">
                  <h2>Ku bax Korontooyinka iyo Kuwa Dhowrka ah</h2>
                </div>
                <h5>01)Xaafad buuxa hawlada:</h5>
                <ul>
                  <li>Ha ceebto socodka iyo shirarka bulshada.</li>
                  <li>Shaqaalaaha hawsha horteeda ka shaqo.</li>
                  <li>
                    Isku day inaad u soo jeediso xeerarka & xadgudubyada gudaha
                    kasta wixii wakhtiga ah.
                  </li>
                </ul>
                <h5>02)Xasuuso Xadaaradaada Mararka Qaar:</h5>
                <ul>
                  <li>
                    Xasuus xadaaradaada biyo iyo macaan ilaa 20 ilbiriqsi.
                  </li>
                  <li>
                    Isticmaal sanitizerka biyo isku mid ah haddii xaaladu khatar
                    ku tahay.
                  </li>
                  <li>
                    Xasuus xadaaradaada ka dib markaad dharka ama wax soo
                    saarto.
                  </li>
                </ul>
                <h5>03)Gudub Dabeecadaha iyo Chutusheeda:</h5>
                <ul>
                  <li>
                    3. Xisaabtanka ama gadaalkeeda codsiga ama ku gadaal guriga
                    inta aanu ahaanay ama garanayn in uu khatar yahay.
                  </li>
                  <li>Gadoodka korontooyinka baahiyaha.</li>
                  <li>
                    Guduudka korontooyinka markaad ka qaadato ama xaajada karaan
                    isaga oo dabaysha si tartiib ah.
                  </li>
                </ul>
                <h5>04)Ku bax 1.5 Mitir Dhowr ka Xiga:</h5>
                <ul>
                  <li>
                    4. Xiriir xuduudka jinsiiba si loo yareeyo khatarta
                    korontooyinka.
                  </li>
                  <li>
                    Ku wareejinta doorka u dhaxeeya ugu yaraan 1.5 mitir (ama
                    sida xeerarka waayey) kuwa aan ahayn gurigaaga.
                  </li>
                </ul>
                <h5>05)Ka Bax Dharkaaga:</h5>
                <ul>
                  <li>
                    5. Rukso ka dhiga dharkaaga, gaar ahaan iyada, ilmada, iyo
                    mawlibaanka.
                  </li>
                  <li>
                    Qaadatada wajiga xun inay dhacdo kuma soo gudbin karo marka
                    korontooyinka laga keenayso dharka.
                  </li>
                </ul>
                <h5>06)Soo Gudbi Haddii Aadan Ku Xanuunin:</h5>
                <ul>
                  <li>
                    Haddii aad dareento cudur, kashi, ama jiritaanka, gudbi
                    korontooyinka.
                  </li>
                  <li>
                    Ka qayb qaadan taariikhda dhaqanka ee korontooyinka iyo la
                    xiriir maamulaha haddii aad wax su’aal ah qabtid.
                  </li>
                </ul>
                <p>
                  Talaaladan waa mufaax oo leh in la joojiyo cudurka, waxayna
                  kaalmo u yeelanayaan khatarta korontooyinka, gaar ahaan markii
                  ay la tahay khatarta cudurka iyo safaarada korontooyinka.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {language == "arabic" && (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headings">
                <h2>COVID-19 (مرض فيروس كورونا 2019)</h2>
              </div>
              <div className="coviddetails">
                <p>
                  {" "}
                  <span> ناجم عن فيروس كورونا جديد:</span> يسبب COVID-19 فيروس
                  SARS-CoV-2 ، وهو فيروس كورونا جديد تم التعرف عليه لأول مرة في
                  ووهان، الصين، في نهاية عام 2019.
                </p>{" "}
                <p>
                  {" "}
                  <span> الانتقال:</span> ينتشر الفيروس أساساً من خلال قطرات
                  الجهاز التنفسي عندما يسعل الشخص المصاب أو يعطس أو يتحدث. يمكن
                  أيضًا أن ينتقل عن طريق لمس الأسطح الملوثة بالفيروس ثم لمس
                  الوجه.
                </p>{" "}
                <p>
                  <span> الأعراض:</span> تشمل الأعراض الشائعة الحمى والسعال
                  وصعوبة التنفس. قد تشمل الأعراض الأخرى التعب وآلام الجسم وفقدان
                  الذوق أو الرائحة والتهاب الحلق وأعراض الجهاز الهضمي.
                </p>
                <p>
                  {" "}
                  <span> الوقاية:</span> تشمل التدابير الوقائية الحفاظ على نظافة
                  اليدين وارتداء الأقنعة وممارسة التباعد الاجتماعي وأخذ التطعيم.
                </p>{" "}
                <p>
                  {" "}
                  <span> التطعيم:</span> تم تطوير العديد من لقاحات COVID-19
                  والمصادقة على استخدامها الطارئ في مختلف البلدان. تهدف جهود
                  التطعيم إلى تقليل شدة المرض ومنع انتشار الفيروس.{" "}
                </p>
                <p>
                  {" "}
                  <span> التأثير العالمي: </span>شهدت الجائحة تأثيرات عالمية
                  كبيرة، مؤثرة على الصحة العامة والاقتصادات والحياة اليومية.
                  قامت مختلف البلدان بتنفيذ تدابير مثل الإغلاقات وقيود السفر
                  والتباعد الاجتماعي للحد من انتشار الفيروس.
                </p>
                <div className="headings">
                  <h2>احمِ نفسك والآخرين من حولك</h2>
                </div>
                <h5>01)ابق في المنزل وكن آمنًا:</h5>
                <ul>
                  <li>تجنب الخروجات والتجمعات الاجتماعية غير الضرورية.</li>
                  <li>العمل من المنزل إذا كان ذلك ممكنًا.</li>
                  <li>اتبع الإرشادات والقيود المحلية.</li>
                </ul>
                <h5>02)اغسل يديك بانتظام:</h5>
                <ul>
                  <li>اغسل يديك بالصابون والماء لمدة لا تقل عن 20 ثانية.</li>
                  <li>
                    استخدم معقم اليدين بنسبة على الأقل 60٪ كحول إذا لم يكن هناك
                    صابون.
                  </li>
                  <li>نظّف يديك بعد لمس الأسطح أو الأشياء.</li>
                </ul>
                <h5>03)احمِ سعالك وعطساتك:</h5>
                <ul>
                  <li>
                    استخدم منديلًا أو ذراعك لتغطية فمك وأنفك عند السعال أو
                    العطس.
                  </li>
                  <li>تخلص من الأنسجة المستخدمة بشكل صحيح.</li>
                  <li>اغسل يديك فورًا بعد السعال أو العطس.</li>
                </ul>
                <h5>04)ابتعد 1.5 مترًا عن الآخرين:</h5>
                <ul>
                  <li>ممارسة التباعد الاجتماعي لتقليل خطر انتقال الفيروس.</li>
                  <li>
                    الحفاظ على مسافة لا تقل عن 1.5 متر (أو حسب الإرشادات
                    المحلية) من الأفراد الذين ليسوا من عائلتك.
                  </li>
                </ul>
                <h5>05)تجنب لمس وجهك:</h5>
                <ul>
                  <li>امتنع عن لمس وجهك، خاصة العينين والأنف والفم.</li>
                  <li>
                    يمكن أن يدخل الفيروس إلى الجسم عند لمس الوجه بأيدي ملوثة.
                  </li>
                </ul>
                <h5>06)احصل على اختبار إذا كانت لديك أعراض:</h5>
                <ul>
                  <li>
                    إذا كنت تعاني من أعراض مثل الحمى أو السعال أو صعوبة في
                    التنفس، احصل على اختبار لفيروس COVID-19.
                  </li>
                  <li>
                    اتبع الإرشادات المحلية للاختبار واتصل بمقدمي الرعاية الصحية
                    للإرشادات.
                  </li>
                </ul>
                <p>
                  هذه التدابير ضرورية لتقليل خطر الإصابة بالفيروس ونقله. من
                  المهم البقاء على اطلاع على أحدث الإرشادات من السلطات الصحية،
                  حيث قد تختلف التوصيات استنادًا إلى التطورات الحالية
                  والاعتبارات الإقليمية. بالإضافة إلى ذلك، التطعيم هو خطوة أخرى
                  مهمة في منع المرض الشديد وتقليل تأثير الفيروس على الأفراد
                  والمجتمعات.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CovidScreen;
