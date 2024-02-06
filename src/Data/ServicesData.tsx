import { LiaUserNurseSolid } from "react-icons/lia";
import { GiMeal } from "react-icons/gi";
import { MdOutlineMedication } from "react-icons/md";
import { GiStreetLight } from "react-icons/gi";
import { GiCompanionCube } from "react-icons/gi";
import { IoIosAirplane } from "react-icons/io";
import { FaHandshake } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

export const ServiceData: any = [
  {
    title: "Personal care",
    images: LiaUserNurseSolid,
    discription:
      "We assist and support with toileting use, brushing teeth/dentures, shower/strip wash, applying cream, getting dresses, groom and make the bed.",
  },
  {
    title: "Meal Preparation",
    images: GiMeal,
    discription:
      "We assist and make light breakfast, heat up pre-cooked meals and serve ",
  },
  {
    title: "Medication",
    images: MdOutlineMedication,
    discription:
      "We can prompt medication as long as its in blister pack in order to monitor any missed medication and that can be arranged with the chemist.",
  },
  {
    title: "Light Domestic",
    images: GiStreetLight,
    discription:
      "We do a light domestic cleaning within reach (not deep) and support cleanliness on a day-to-day basis.",
  },
  {
    title: "Companionship",
    images: GiCompanionCube,
    discription:
      "We would visit your home, spend time with you perhaps have coffee or tea, help you with simple tasks, play games to stimulate the mind, and perhaps encourage you to go out and about to improve mobility.",
  },
  {
    title: "Escorting Outdoors and International Travel",
    images: IoIosAirplane,
    discription:
      "We would escort you to the post office, bank, outdoor activities and an international travel too (on condition all expenses are taken care by the Client)",
  },
  {
    title: "Respite",
    images: FaHandshake,
    discription:
      "We would sit with the client while the primary carer goes out to let them take time out to look after themself and help stop them becoming exhausted and run down. While away we would assist with meal, toileting and any other assistance they may require.",
  },
  {
    title: "General & Mental Health",
    images: MdOutlineHealthAndSafety,
    discription:
      "We support and monitor our clients emotional, psychological, and social well-being. We focus on how they are thinking, feeling, and acting at the time of the visit in order to determine how they handle stress, relate to others, and make healthy choices.",
  },
  {
    title: "Shopping",
    images: IoCartOutline,
    discription: "We do shopping call under 5KG but No Alcohol purchases.",
  },
];
