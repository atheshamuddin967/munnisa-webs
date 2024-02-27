import Images from "../../images/Images";
import { useLanguage } from "../../context/LanguageContext";
function Philosphy() {
  const { language } = useLanguage();
  return (
    <div className="philosphy">
      <div className="container">
        <div className="row  rows">
          <div className="col-sm-6">
            {language === "en" && (
              <div data-aos="fade-right" className="Philosphy-details">
                <div className="headings">
                  <h2>Our Philosophy of care.</h2>
                </div>
                <p>
                  It's the aim of Munissa Kare to deliver a service of personal
                  care and associated domestic services to meet the needs of
                  dependent Service User in their own home environment. All
                  individuals supported by, who work as an employee offer
                  skilled care to enable people supported by us to achieve their
                  optimum state of health and well-being. Individual choice and
                  personal decision-making are the right of all Service Users
                  and will be supported by all the people who work for Munissa
                  Kare. The right of independence will be respected and
                  encouraged for all Service Users. The individual uniqueness of
                  the Service Users, staff and visitors will be recognised and
                  these people will be treated with dignity and respect at all
                  times. The individual requirement for privacy will be
                  respected at all times and all information relating to
                  individuals will be treated in a confidential manner. We very
                  much recognise the individual need for personal fulfilment and
                  aim to offer individualised programmes of meaningful activity
                  to satisfy that needs of our Service Users and staff of
                  Munissa Kare.
                </p>
                <h5>
                  Munissa Kare Services is based on the Principle and Values
                  that:
                </h5>
                <h5>
                  Privacy:{" "}
                  <span>
                    Your care worker recognises your right to be left
                    alone,undisturbed and free from intrusion and public
                    attention.
                  </span>
                </h5>
              </div>
            )}
            {language === "arabic" && (
              <div data-aos="fade-right" className="Philosphy-details">
                <div className="headings">
                  <h2>فلسفتنا في الرعاية.</h2>
                </div>
                <p>
                  إن هدف Munissa Kare هو تقديم خدمة شخصية الرعاية والخدمات
                  المنزلية المرتبطة بها لتلبية احتياجات مستخدم الخدمة التابع في
                  بيئته المنزلية. الجميع الأفراد المدعومين الذين يعملون كموظف
                  عرض الرعاية الماهرة لتمكين الأشخاص الذين ندعمهم من تحقيق
                  أهدافهم الحالة المثلى من الصحة والرفاهية. الاختيار الفردي و
                  اتخاذ القرار الشخصي هو حق لجميع مستخدمي الخدمة وسيتم دعمه من
                  قبل جميع الأشخاص الذين يعملون في مونيسا كاري. سيتم احترام حق
                  الاستقلال و تشجيع لجميع مستخدمي الخدمة. التفرد الفردي سيتم
                  التعرف على مستخدمي الخدمة والموظفين والزوار و سيتم التعامل مع
                  هؤلاء الأشخاص بكرامة واحترام على الإطلاق مرات. سيكون الشرط
                  الفردي للخصوصية احترامها في جميع الأوقات وجميع المعلومات
                  المتعلقة سيتم التعامل مع الأفراد بطريقة سرية. نحن جدا يدرك
                  الكثير الحاجة الفردية لتحقيق الشخصية و تهدف إلى تقديم برامج
                  فردية ذات نشاط هادف لتلبية احتياجات مستخدمي الخدمة وموظفينا
                  مونيسا كاري.
                </p>
                <h5>
                  تعتمد خدمات Munissa Kare على المبادئ والقيم الذي - التي:
                </h5>
                <h5>
                  خصوصية:
                  <span>
                    يعترف عامل الرعاية الخاص بك بحقك في أن تُترك وحيدًا، دون
                    إزعاج، بعيدًا عن التطفل والجمهور انتباه.
                  </span>
                </h5>
              </div>
            )}

            {language === "bengali" && (
              <div data-aos="fade-right" className="Philosphy-details">
                <div className="headings">
                  <h2>আমাদের যত্নের দৃষ্টিভঙ্গি।</h2>
                </div>
                <p>
                  Munissa Kare-র লক্ষ্য হলো তাদের নিজেদের বাসায় নির্ভরশীল
                  সার্ভিস প্রদান করতে, ব্যক্তিগত যত্ন এবং সম্পর্কিত গৃহসেবা
                  সরবরাহ করতে, যাতে সেবা ব্যবহারকারীর প্রয়োজনীয়তা পূরণ হতে
                  পারে। Munissa Kare-র সমর্থিত সমস্ত ব্যক্তিগুলি, যারা একটি
                  কর্মচারী হিসেবে কাজ করে, তারা সবসময়ই যত্ন প্রদান করে, যাতে
                  আমরা যাদেরকে সমর্থন করি তাদের সম্পূর্ণ স্বাস্থ্য এবং ভালবাসার
                  সর্বোচ্চ অবস্থা অর্জন করতে পারে। সমস্ত সেবা ব্যবহারকারীর
                  ক্ষেত্রে ব্যক্তিগত চয়ন এবং ব্যক্তিগত সিদ্ধান্ত নিতে সমস্ত
                  ব্যক্তিগত সমর্থন করা হবে এবং Munissa Kare এর জন্য কাজ করে যারা
                  সবচেয়ে বড় বৈশিষ্ট্য এবং উৎসাহী হয়। সেবা ব্যবহারকারীদের জন্য
                  স্বাধীনতা হবে আদর্শ এবং এটি সমর্থন করা হবে এবং সমস্ত সেবা
                  ব্যবহারকারীদের জন্য সময় সময়ে আদর্শ এবং সমর্থন করা হবে। সেবা
                  ব্যবহারকারী, কর্মচারী এবং আগমনকারী ব্যক্তির ব্যক্তিগত অদ্ভুততা
                  চেনা হবে এবং এই সময়গুলিতে এই মানুষগুলি সবসময় মর্যাদা এবং
                  শ্রদ্ধাশীলতা দেখানো হবে। ব্যক্তিগত গোপনীয়তা প্রয়োজনে সবসময়
                  মর্যাদা করা হবে এবং সমস্ত ব্যক্তিগুলির তথ্য সংক্ষেপভাবে
                  ব্যবহৃত হবে। আমরা প্রায়ই সমস্ত ব্যক্তিগুলির জন্য ব্যক্তিগত
                  পূর্ণতা প্রয়োজন মেলে এবং আমাদের Munissa Kare এর সেবা
                  ব্যবহারকারীদের এবং কর্মচারীদের জন্য অর্থনীতি করতে চেষ্টা করছি।
                </p>
                <h5>
                  Munissa Kare Services হলো এমন উপায়ে ভিত্তি এবং মৌল্যবানের উপর
                  যা:
                </h5>
                <h5>
                  গোপনীয়তা:{" "}
                  <span>
                    আপনার যত্ন কর্মী আপনারকে একক থাকতে, বিচ্ছিন্ন এবং অব্যাহত
                    এবং সর্বাধিক উপকৃত এবং সার্বজনীন মনোভাবে ছাড়া দেওয়ার
                    অধিকার পর্যন্ত।
                  </span>
                </h5>
              </div>
            )}

            {language === "soomali" && (
              <div data-aos="fade-right" className="Philosophy-details">
                <div className="headings">
                  <h2>Falsafadayada Kaalinta.</h2>
                </div>
                <p>
                  Munissa Kare wuxuu ku dadaalayaa inuu bixiyo adeegyo kaalinta
                  shakhsiga ah iyo adeegyada gudaha ee la xiriira si loo maaro
                  waxyaabooyinka ay adeegsadaan Hay'adda Adeega ee ay ku
                  xadgudbayaan xaaladaha xaaladaha. Dhammaan dadka ay
                  adeegsadaan, waxaana ka shaqaynaya shaqaale ku filan si loo
                  gaaro xaaladaha ugu danbeeya ee caafimaadka iyo wanaagsan.
                  Xiriirka shakhsi iyo qalqalinta shakhsiyaadka waa xaquuq kasta
                  oo dadka adeegsan Munissa Kare uu taageero. Xaquuqda madaniga
                  waa inay aqbalaan karaan iyo inay wax ka qabtaan dhammaan
                  dadka adeegsan ee Munissa Kare. Uniqueness shakhsiyeed ee
                  Adeega, shaqaale iyo booqdayaasha waxa lagu aqoonsan karaa,
                  waxayna lagu k treating dignitaad iyo hormariyeysan dhammaan
                  wakhtigan. Talowadaadka shakhsi waa inay lagu taageeraan
                  wakhtigan oo dhan, waxaana lagu tijaabi karaa dhammaan
                  macluumaadka ku saabsan shakhsiyeedka. Waxa aan ku
                  aaminsannahay ujeedada shakhsiga ah ee ku filan, waxaana aan
                  ku talinaynaa barnaamijyo farsamo oo kaliya oo lagu waantoobo
                  hagidda ugu sareeya ee Adeega iyo shaqaale Munissa Kare.
                </p>
                <h5>
                  Munissa Kare Services waxaa la xiriira Axdiyada iyo Qalimada
                  ah:
                </h5>
                <h5>Privaasi:</h5>
                <span>
                  Shaqaalahaaga adeega wuxuu ku aqoonsan doonaa haqkii aad u
                  ekaan lahayd, aan dhicin, aan midna lahayn, iyo aan xadhiga
                  bulshada lahayn.
                </span>
              </div>
            )}

            {language === "hindi" && (
              <div data-aos="fade-right" className="Philosphy-details">
                <div className="headings">
                  <h2>हमारी देखभाल का सिद्धांत।</h2>
                </div>
                <p>
                  Munissa Kare का लक्ष्य है कि वह व्यक्तिगत देखभाल और संबंधित
                  घरेलू सेवाएं प्रदान करे ताकि विशेषज्ञ सेवा प्रयोगकर्ता की
                  आवश्यकताओं को उनके खुद के घर के वातावरण में पूरा कर सके। जो
                  लोग हमारे साथ कर्मचारी के रूप में काम करते हैं, वे सभी क़दर की
                  देखभाल प्रदान करते हैं ताकि हमारे द्वारा समर्थित लोग अपने
                  सर्वोत्तम स्वास्थ्य और भलाइ की स्थिति तक पहुँच सकें। सभी सेवा
                  प्रयोगकर्ताओं का अधिकार है व्यक्तिगत चयन और व्यक्तिगत निर्णय
                  लेने का, और यह सभी Munissa Kare के लोगों द्वारा समर्थित किया
                  जाएगा। सभी सेवा प्रयोगकर्ताओं के लिए स्वतंत्रता का अधिकार
                  समर्थन किया जाएगा और उनको प्रोत्साहित किया जाएगा। सेवा
                  प्रयोगकर्ताओं, कर्मचारियों और परिदृश्यकर्ताओं की व्यक्तिगत
                  अद्वितीयता को मान्यता दी जाएगी और इन लोगों के साथ सभी समय
                  गरिमा और आदर से व्यवहार किया जाएगा। व्यक्तिगत गोपनीयता की
                  आवश्यकता का समय के साथ समर्थन किया जाएगा और व्यक्तिगतों से
                  संबंधित सभी जानकारी को एक गोपनीय तरीके से व्यवस्थित किया
                  जाएगा। हम बहुत अच्छी तरह से स्वीकृत करते हैं व्यक्तिगत पूर्ति
                  की आवश्यकता को और उसे पूर्ण करने के लिए हमारे सेवा
                  प्रयोगकर्ताओं और Munissa Kare के कर्मचारियों की आवश्यकताओं को
                  संतुष्ट करने के लिए व्यक्तिगतीकृत कार्यक्रम प्रदान करने का
                  लक्ष्य है।
                </p>
                <h5>
                  Munissa Kare सेवाएं इस सिद्धांत और मूल्यों पर आधारित हैं जो
                  हैं:
                </h5>
                <h5>
                  गोपनीयता:{" "}
                  <span>
                    आपका देखभाल कार्यकर्ता आपको अकेले, अबाधित और उत्कृष्टता और
                    सार्वजनिक ध्यान से मुक्त रहने का अधिकार स्वीकार करता है।
                  </span>
                </h5>
              </div>
            )}
          </div>
          <div data-aos="fade-left" className="col-sm-6">
            <img src={Images.games} alt="game" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosphy;
