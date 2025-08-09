import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const surahFatiha = [
  {
    verse: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillah ir-Rahman ir-Raheem",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful"
  },
  {
    verse: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Alhamdu lillahi Rabbil 'aalameen",
    translation: "All praise is due to Allah, Lord of the worlds"
  },
  {
    verse: 3,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Ar-Rahman ir-Raheem",
    translation: "The Most Gracious, the Most Merciful"
  },
  {
    verse: 4,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    transliteration: "Maliki Yawm id-Deen",
    translation: "Master of the Day of Judgment"
  },
  {
    verse: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    transliteration: "Iyyaka na'budu wa iyyaka nasta'een",
    translation: "You alone we worship, and You alone we ask for help"
  },
  {
    verse: 6,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdinas-siratal-mustaqeem",
    translation: "Guide us to the Straight Path"
  },
  {
    verse: 7,
    arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration: "Siratal-ladheena an'amta 'alayhim ghayril-maghdoobi 'alayhim walad-dalleen",
    translation: "The path of those You have blessed, not of those who have earned Your anger, nor of those who go astray"
  }
];

export async function uploadSurahFatiha() {
  try {
    const colRef = collection(db, "surah_fatiha");
    for (let verse of surahFatiha) {
      const docRef = doc(colRef, `verse${verse.verse}`); // fixed ID
      await setDoc(docRef, verse);
      console.log(`✅ Uploaded verse ${verse.verse}`);
    }
    console.log("✅ All verses uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading verses:", error);
  }
}
