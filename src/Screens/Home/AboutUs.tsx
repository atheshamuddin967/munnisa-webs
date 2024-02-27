import Images from "../../images/Images";
import { useLanguage } from "../../context/LanguageContext";

function AboutUs() {
  const { language } = useLanguage();
  return (
    <div className="philosphy">
      <div className="container">
        <div className="headings text-center">
          {language === "bengali" && <h2>আমাদের সম্পর্কে</h2>}
          {language === "soomali" && <h2>Ku saabsan</h2>}

          {language == "hindi" && <h2>हमारे बारे में</h2>}
        </div>

        <div className="row   rows">
          <div data-aos="fade-right" className="col-sm-6">
            <img src={Images.About} alt="game" />
          </div>
          <div className="col-sm-6">
            {language == "en" && (
              <div data-aos="fade-left" className="Philosphy-details">
                <div className="headings">
                  <h3>Our Team</h3>
                </div>
                <p>
                  Munissa Kare is a private family-owned organisation that has
                  developed and designed to enhance and promote independence to
                  our services user in the community. We provide a quality
                  domiciliary and special care services. Our organisation is
                  dedicated to supporting people whatever their age, gender
                  ,ethnicity, religion and level of care needed on a one to one
                  basis within the sanctity of their own home environment. Our
                  team is highly trained, experienced staff are commited to the
                  highest level of quality service to meet the needs of each
                  individual recieving our specialist support.
                </p>
              </div>
            )}
            {language == "arabic" && (
              <div data-aos="fade-left" className="Philosphy-details">
                <div className="headings">
                  <h3>فريقنا</h3>
                </div>
                <p>
                  Munissa Kare هي منظمة خاصة مملوكة لعائلة لديها تم تطويرها
                  ومصممة لتعزيز وتعزيز الاستقلال مستخدم خدماتنا في المجتمع. نحن
                  نقدم الجودة خدمات الرعاية المنزلية والخاصة. منظمتنا هي مكرسة
                  لدعم الناس مهما كان عمرهم أو جنسهم والعرق والدين ومستوى
                  الرعاية اللازمة على واحد لواحد أساس ضمن حرمة بيئتهم المنزلية.
                  ملكنا فريق مدرب تدريبا عاليا، وملتزمون الموظفين ذوي الخبرة ل
                  أعلى مستوى من جودة الخدمة لتلبية احتياجات كل فرد فرد يتلقى
                  دعمنا المتخصص.
                </p>
              </div>
            )}
            {language == "hindi" && (
              <div data-aos="fade-left" className="Philosphy-details">
                <div className="headings">
                  <h3>हमारी टीम</h3>
                </div>
                <p>
                  Munissa Kare एक निजी परिवार स्वामित्व वाली संगठन है जो समुदाय
                  में हमारे सेवा प्रयोगकर्ता की स्वतंत्रता को बढ़ाने और प्रचारित
                  करने के लिए विकसित और डिज़ाइन किया गया है। हम गुणवत्ता युक्त
                  और विशेष देखभाल सेवाएं प्रदान करते हैं। हमारा संगठन हर उम्र,
                  लिंग, जाति, धर्म और देखभाल की आवश्यकता के स्तर पर एक से एक
                  मिलाकर उनके खुद के घर के वातावरण की शरण में व्यक्ति की समर्थन
                  करने के लिए समर्पित है। हमारी टीम उच्च प्रशिक्षित, अनुभवी
                  कर्मचारी हैं जो हर विशेषज्ञ समर्थन प्राप्त करने वाले व्यक्ति
                  की आवश्यकताओं को पूरा करने के लिए सर्वोच्च सेवा गुणस्तर की
                  कमीटेड हैं।
                </p>
              </div>
            )}
            {language === "bengali" && (
              <div data-aos="fade-left" className="Philosophy-details">
                <div className="headings">
                  <h3>আমাদের দল</h3>
                </div>
                <p>
                  মুনিসা কারে একটি ব্যক্তিগত পরিবার মালিক সংস্থা যা আমাদের সেবা
                  গ্রাহকদের মোকাবিলার মধ্যে স্বাধীনতা এবং প্রচুর করার জন্য উন্নত
                  এবং ডিজাইন করেছে। আমরা একটি গুণগত দক্ষতামূলক এবং বিশেষ যত্ন
                  প্রদান সেবা দান করি। আমাদের সংস্থা সমর্থন করছে একে একে একে
                  তাদের নিজেদের বাড়ির পরিবেশের মধ্যে এক থেকে এক ভিত্তিতে সেবা
                  প্রদান করতে, তাদের বয়স, লিঙ্গ, জাতি, ধর্ম এবং যত্নের স্তর হোক
                  তা হোক। আমাদের দল অত্যন্ত প্রশিক্ষিত, অভিজ্ঞ কর্মীরা প্রতিটি
                  ব্যক্তির প্রতি আমাদের বিশেষজ্ঞ সাপোর্ট প্রাপ্ত করার জন্য
                  সর্বোচ্চ মানের সেবা দেওয়ার জন্য প্রতিশ্রুতিবদ্ধ।
                </p>
              </div>
            )}
            {language === "soomali" && (
              <div data-aos="fade-left" className="Philosophy-details">
                <div className="headings">
                  <h3>Xiriirkaaga</h3>
                </div>
                <p>
                  Munissa Kare waa urur gaar ah oo qoysas ah oo ay sameysay iyo
                  soo diyaariyay si ay u kobciyaan iyo ugu dhaqaaqdaan nolosha
                  adeegsiga ee bulshada. Waxaan bixinaa adeegyada ku qeexo iyo
                  adeega gaarka ah. Ururkeena waxa loo dedejinayaa taageerida
                  dadka nool, waqtiga, qabiilka, diinta, iyo heerka nolosha ee
                  loo baahan yahay mid mid ah oo ku xadgudub inuu gacmahaaga ka
                  saaro xaaladaha xiriirkaaga gurigaaga. Xiriirkaaga waxa ku
                  jira shaqaale ugu dhow iyo aqoonyahan, kuwaas oo go'an ku gaar
                  ah inay u dadaalaan heerka adeega iyo inay u maareeyaan
                  talooyinka kasta oo ka soo horjeeda dadka ay taageeraan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
