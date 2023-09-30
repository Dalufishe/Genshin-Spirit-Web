export interface CharacterInfo {
  localeName: string;
  nick: string;
  occupation: string;
  area: string;
  rare: string;
  weapon: string;
  element: string;
  constellation: string;
  desc: string;
  birth: string;
  battle_talent: BattleTalent;
  basic_talent: BasicTalent;
  sof: Sof;
}

interface BattleTalent {
  normal_name: string;
  normal_img: string;
  normal_desc1: string;
  normal_desc2: string;
  normal_desc3: string;
  element_name: string;
  element_img: string;
  element_desc: string;
  final_name: string;
  final_img: string;
  final_desc: string;
}

interface BasicTalent {
  talent1_name: string;
  talent1_img: string;
  talent1_desc: string;
  talent2_name: string;
  talent2_img: string;
  talent2_desc: string;
  talent3_name: string;
  talent3_img: string;
  talent3_desc: string;
}

interface Sof {
  sof1_name: string;
  sof1_img: string;
  sof1_desc: string;
  sof2_name: string;
  sof2_img: string;
  sof2_desc: string;
  sof3_name: string;
  sof3_img: string;
  sof3_desc: string;
  sof4_name: string;
  sof4_img: string;
  sof4_desc: string;
  sof5_name: string;
  sof5_img: string;
  sof5_desc: string;
  sof6_name: string;
  sof6_img: string;
  sof6_desc: string;
}
