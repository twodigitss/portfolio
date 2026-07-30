import { parse } from 'yaml';

export async function AboutMe(){
  const CvData = await fetch(
    "https://gist.githubusercontent.com/twodigitss/fdd80b8202366fb4454f4bb470416ff1/raw/cv.txt",
  ).then((res) => res.text()).then((text) => parse(text).cv);

  const experience = CvData.sections.experience;
  return experience
}


export async function Summary(){
  const CvData = await fetch(
    "https://gist.githubusercontent.com/twodigitss/fdd80b8202366fb4454f4bb470416ff1/raw/cv.txt",
  ).then((res) => res.text()).then((text) => parse(text).cv);

  const experience = CvData.sections.professional_summary;
  return experience
}
