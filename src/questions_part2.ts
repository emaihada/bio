import { Question } from './questions';

export const questionsPart2: Question[] = [
  // --- 1. 생명체의 유기적 구성 (organization) - 심화 10제 ---
  { id: "o-s11", chapterId: "organization", type: "short", question: "식물의 구성 단계 중, 뿌리, 줄기, 잎 등에 넓게 분포하며 물질 대사의 중심이 되는 조직계는?", answer: "기본조직계", explanation: "식물의 내부를 채우는 유조직 등이 기본조직계에 속합니다." },
  { id: "o-s12", chapterId: "organization", type: "short", question: "생명체의 창발적 특성은 하위 단위들의 단순한 부분의 합인가요, 아니면 상호작용으로 나타나는 새로운 특성인가요?", answer: "상호작용으로 나타나는 새로운 특성", explanation: "부분의 합 이상의 기능이 나타나는 것을 창발적 특성이라 합니다." },
  { id: "o-s13", chapterId: "organization", type: "short", question: "동물의 상피 조직은 몸의 표면이나 내장 기관의 안쪽 벽을 덮고 있습니다. 이 조직의 주된 기능 2가지는 보호와 무엇인가요?", answer: "분비", explanation: "상피 조직은 외부 보호뿐만 아니라 땀, 침 등의 분비(샘 상피) 역할도 합니다." },
  { id: "o-s14", chapterId: "organization", type: "short", question: "신경 세포(뉴런)들이 모여서 정보 전달망을 구성하는 단계는 어떤 '조직'인가요?", answer: "신경조직", explanation: "뉴런과 아교세포로 이루어진 신경 조직입니다." },
  { id: "o-s15", chapterId: "organization", type: "short", question: "식물에서 물과 무기 양분이 이동하는 통로 역할을 하는 조직계는?", answer: "관다발조직계", explanation: "물관과 체관으로 이루어져 있습니다." },
  { id: "o-m11", chapterId: "organization", type: "multiple", question: "다음 중 사람을 구성하는 '결합 조직'에 해당하지 않는 것은?", options: ["혈액", "뼈", "지방 조직", "근육"], answer: "근육", explanation: "근육은 운동을 담당하는 무리인 '근육 조직'으로 따로 분류됩니다." },
  { id: "o-m12", chapterId: "organization", type: "multiple", question: "배설계에 속하는 기관으로, 혈액 속 요소 등의 노폐물을 걸러 오줌을 만드는 곳은?", options: ["방광", "신장(콩팥)", "요도", "간"], answer: "신장(콩팥)", explanation: "신장은 배설계를 구성하는 핵심 기관입니다." },
  { id: "o-m13", chapterId: "organization", type: "multiple", question: "식물의 기관 중 잎에 대한 설명으로 틀린 것은?", options: ["빛에너지를 흡수하는 영양 기관이다.", "광합성을 한다.", "수분 증발을 조절하는 기공이 있다.", "종자를 만들어 번식하는 생식 기관이다."], answer: "종자를 만들어 번식하는 생식 기관이다.", explanation: "종자를 만드는 기관은 꽃과 열매입니다." },
  { id: "o-m14", chapterId: "organization", type: "multiple", question: "포유류 생명체 구성의 계층 구조를 작은 단위부터 옳게 나열한 것은?", options: ["분자-소기관-세포-조직-기관-기관계-개체", "분자-조직-세포-소기관-기관계-개체", "세포-분자-조직-기관계-기관-개체", "소기관-세포-조직-기관계-기관-개체"], answer: "분자-소기관-세포-조직-기관-기관계-개체", explanation: "생화학적 단위(분자)부터 시작하여 유기적으로 확장됩니다." },
  { id: "o-m15", chapterId: "organization", type: "multiple", question: "같은 종의 개미들이 한 군락에 모여 여왕개미, 병정개미 등 역할을 분담하며 살아가는 집단은 어느 구성 단계에 해당하는가?", options: ["개체군", "군집", "생태계", "생물권"], answer: "개체군", explanation: "같은 개미(동종)의 집단이므로 개체군 내의 사회적 행동입니다." },

  // --- 2. 생명체의 구성 성분 (components) - 심화 10제 ---
  { id: "c-s11", chapterId: "components", type: "short", question: "필수 아미노산은 체내에서 합성되지 않거나 합성량이 부족하여 반드시 무엇을 통해 섭취해야 하나요?", answer: "음식", explanation: "필수 아미노산은 외부 섭취(식사)가 필수입니다." },
  { id: "c-s12", chapterId: "components", type: "short", question: "스테로이드성 지질 중 하나로, 동물 세포막의 유동성을 조절하는 핵심 성분은?", answer: "콜레스테롤", explanation: "콜레스테롤은 막에 박혀 유동성을 조율합니다." },
  { id: "c-s13", chapterId: "components", type: "short", question: "DNA 구조를 제안한 과학자 웟슨과 크릭의 모델에서 DNA는 어떤 나선 구조인가요?(글자수 4글자)", answer: "이중나선", explanation: "두 가닥이 나선형으로 꼬인 이중 나선 구조입니다." },
  { id: "c-s14", chapterId: "components", type: "short", question: "아미노산 사이의 펩타이드 결합을 화학적으로 분해할 때 소모되는 분자는 무엇인가요?", answer: "물", explanation: "단백질이 분해될 때는 가수분해(물이 첨가됨)가 일어납니다." },
  { id: "c-s15", chapterId: "components", type: "short", question: "효소를 약한 불꽃이나 고온에 장시간 노출시키면 변성이 일어납니다. 단백질 구조의 몇 차 구조 이상이 파괴된 것일까요?", answer: "2차", explanation: "수소결합으로 유지되는 2차, 3차 구조가 일그러집니다." },
  { id: "c-m11", chapterId: "components", type: "multiple", question: "탄수화물의 단당류에 속하지 않는 것은?", options: ["포도당", "과당", "갈락토스", "설탕"], answer: "설탕", explanation: "설탕은 포도당과 과당이 결합한 이당류입니다." },
  { id: "c-m12", chapterId: "components", type: "multiple", question: "핵산에 대한 설명으로 올바른 것은?", options: ["뉴클레오타이드는 당, 인산, 염기가 1:2:1 로 결합한다.", "DNA 염기 종류는 A, G, C, U이다.", "RNA는 보통 단일 가닥의 폴리뉴클레오타이드로 이루어진다.", "형질 발현에 전혀 관여하지 않는다."], answer: "RNA는 보통 단일 가닥의 폴리뉴클레오타이드로 이루어진다.", explanation: "RNA는 1가닥, DNA는 2가닥입니다." },
  { id: "c-m13", chapterId: "components", type: "multiple", question: "중성 지방은 어떻게 구성되는가?", options: ["글리세롤 1분자 + 지방산 3분자", "글리세롤 3분자 + 지방산 1분자", "인지질 1분자 + 콜레스테롤", "아미노산 3분자 + 지방산 1분자"], answer: "글리세롤 1분자 + 지방산 3분자", explanation: "가장 일반적인 지방 저장 형태(에스터 결합)입니다." },
  { id: "c-m14", chapterId: "components", type: "multiple", question: "다음 중 물리적으로 가장 많은 에너지를 발생시키는(g당 kcal 관점) 생체 화합물은?", options: ["탄수화물", "지질", "단백질", "무기염류"], answer: "지질", explanation: "지질(지방)은 g당 약 9kcal로 저장 효율이 제일 좋습니다." },
  { id: "c-m15", chapterId: "components", type: "multiple", question: "단백질의 1차 구조를 결정짓는 요인은 무엇인가?", options: ["수소 결합의 분포", "이황화 결합의 개수", "펩타이드 결합으로 이어진 아미노산의 종류와 배열 순서", "분자 내 소수성 상호작용"], answer: "펩타이드 결합으로 이어진 아미노산의 종류와 배열 순서", explanation: "단백질의 1차 구조는 아미노산 서열 그 자체를 뜻합니다." },

  // --- 3. 세포의 구조와 소기관 (cells) - 심화 10제 ---
  { id: "cl-s11", chapterId: "cells", type: "short", question: "엽록체 내부에 동전 모양으로 포개져 쌓여있는 구조물로 광합성의 명반응이 일어나는 곳은 어디인가?", answer: "틸라코이드", explanation: "틸라코이드(그라나)에서 빛 에너지를 포획합니다." },
  { id: "cl-s12", chapterId: "cells", type: "short", question: "미토콘드리아 내부의 구불구불하게 주름져 표면적을 넓히는 내막의 명칭은 무엇인가?", answer: "크리스테", explanation: "크리스테 구조 덕에 에너지 생성 효율이 파격적으로 오릅니다." },
  { id: "cl-s13", chapterId: "cells", type: "short", question: "원핵세포가 가지는 생존 보조 무기로, 주 유전체와 독립적으로 복제되는 작은 원형 DNA는?", answer: "플라스미드", explanation: "항생제 내성 유전자 등을 가진 보조 DNA조각입니다." },
  { id: "cl-s14", chapterId: "cells", type: "short", question: "핵막과 같이 이중막으로 둘러싸여 있는 세포 소기관을 2개 대시오. (미토콘드리아, OOO)", answer: "엽록체", explanation: "핵, 미토콘드리아, 엽록체 3종만이 진핵세포 2중막 기관입니다." },
  { id: "cl-s15", chapterId: "cells", type: "short", question: "동물세포의 분열 시 방추사가 뻗어나오는 기점이 되는 십자(+)모양의 작은 원통형 소기관은?", answer: "중심체", explanation: "중심립 2개가 수직 방향으로 교차해 중심체를 이룹니다." },
  { id: "cl-m11", chapterId: "cells", type: "multiple", question: "리소좀 내부에 존재하는 단백질의 특징과 출처로 옳은 것은?", options: ["활면소포체에서 만들어진 중성 단백질", "조면소포체에서 만들어져 골지체를 거친 산성 가수분해 효소", "엽록체에서 만들어진 에너지 당류", "세포막 밖에서 세포내 유입으로 가져온 외부 단백질"], answer: "조면소포체에서 만들어져 골지체를 거친 산성 가수분해 효소", explanation: "리소좀 속 효소는 지독한 산성을 띠는 파괴적 가수분해 효소들입니다." },
  { id: "cl-m12", chapterId: "cells", type: "multiple", question: "세포 소기관 중 막(Membrane) 구조가 아예 없는 곳(비막성 기관)은 어디인가?", options: ["골지체와 액포", "조면소포체와 활면소포체", "리보솜과 인(Nucleolus)", "리소좀과 미토콘드리아"], answer: "리보솜과 인(Nucleolus)", explanation: "리보솜과 핵 안의 인, 그리고 중심체는 막이 없습니다." },
  { id: "cl-m13", chapterId: "cells", type: "multiple", question: "엽록체와 미토콘드리아의 내부에서 박테리아성 리보솜과 독자적 원형 DNA가 발견되는 사실을 근거로 하는 생물학 이론은?", options: ["화학 진화설", "내공생설(세포내 공생설)", "자연 발생설", "아포토시스"], answer: "내공생설(세포내 공생설)", explanation: "과거 독립된 박테리아가 세포 안으로 들어와 정착했다는 학설입니다." },
  { id: "cl-m14", chapterId: "cells", type: "multiple", question: "식물세포의 세포벽과 인접 식물세포 사이에 통로가 뚫려 물과 저분자 물질이 소통되게 하는 구조의 명칭은?", options: ["데스모솜", "원형질연락사", "간극 결합", "밀착 연접"], answer: "원형질연락사", explanation: "식물세포 간의 두꺼운 벽을 뚫고 지나가는 연결 통로입니다." },
  { id: "cl-m15", chapterId: "cells", type: "multiple", question: "액포에 주로 저장되는 성분이 아닌 것은?", options: ["핵산(원본 DNA)", "수분", "색소(안토시아닌 등)", "노폐물 및 당류"], answer: "핵산(원본 DNA)", explanation: "DNA 원본은 핵과 미토콘드리아, 엽록체에만 존재합니다." },

  // --- 4. 세포막과 물질의 이동 (transport) - 심화 10제 ---
  { id: "t-s11", chapterId: "transport", type: "short", question: "능동 수송에서 막단백질이 형태를 변형할 때 인산기를 제공하여 펌프를 구동시키는 에너지 화합물은?", answer: "ATP", explanation: "ATP 단위체 공급이 능동수송의 본질입니다." },
  { id: "t-s12", chapterId: "transport", type: "short", question: "단백질 통로 중 입구가 열려있다 하더라도, 일정한 '크기'와 '전하'를 가진 이온만을 선택적으로 골라 투과시키는 채널의 성질은?", answer: "선택적투과성", explanation: "세포막 이온 채널의 고유한 능력입니다." },
  { id: "t-s13", chapterId: "transport", type: "short", question: "포도당이 농도 차이를 이용해 세포 내로 들어갈 때 주로 사용하는 확산 형태는 (단순/촉진) 확산인가?", answer: "촉진", explanation: "포도당 같은 수용성 거대 분자는 단백질을 통한 촉진확산이 필수입니다." },
  { id: "t-s14", chapterId: "transport", type: "short", question: "삼투압을 구하는 반트호프 방정식에서 삼투압의 크기는 용액의 섭씨온도와 '무엇'의 농도에 비례하는가?", answer: "몰농도", explanation: "몰농도(Molarity)가 높을수록 삼투압이 세집니다." },
  { id: "t-s15", chapterId: "transport", type: "short", question: "콜레스테롤은 기온이 떨어질 때(저온) 세포막의 유동성이 굳어지는 것을 상대적으로 (억제/촉진) 한다.", answer: "억제", explanation: "저온에선 동결을 방지하고 고온에선 무너지는걸 잡아줍니다." },
  { id: "t-m11", chapterId: "transport", type: "multiple", question: "신경 세포축삭 돌기 말단에서 신경 전달 물질을 다음 세포로 뿜어낼 때 이용되는 대량 물질 수송 방법은?", options: ["촉진 확산", "음세포 작용", "세포외 배출 작용 (외포)", "나트륨-칼륨 펌프 1회전"], answer: "세포외 배출 작용 (외포)", explanation: "큰 소낭(시냅스소포)이 세포막과 융합되어 내부의 화학물질을 대량으로 한 번에 밖으로 퍼트립니다." },
  { id: "t-m12", chapterId: "transport", type: "multiple", question: "아메바, 백혈구가 세균을 집어 삼키는 '위족(거짓발)' 운동에 주로 활발하게 조립/분해되는 세포골격은?", options: ["미세소관", "액틴 필라멘트(미세섬유)", "인접 중심체", "튜불린"], answer: "액틴 필라멘트(미세섬유)", explanation: "위족 운동, 세포질 만입 등 막 아래의 미세 움직임은 액틴이 맡습니다." },
  { id: "t-m13", chapterId: "transport", type: "multiple", question: "다음 중 단순확산 속도를 증가시키는 요인이 아닌 조건은?", options: ["세포막(인지질층)의 두께가 매우 얇을 때", "안팎의 농도 차이가 클 때", "막단백질 펌프의 갯수가 현저히 줄었을 때", "지용성 분자의 크기가 가벼울 때"], answer: "막단백질 펌프의 갯수가 현저히 줄었을 때", explanation: "단순확산은 막단백질(펌프/통로)을 아예 이용하지 않으므로 무관합니다." },
  { id: "t-m14", chapterId: "transport", type: "multiple", question: "어떤 용매(물)가 식물세포로 들어와 최대 팽압을 이루고 더이상 부피 변화가 없을 때, 식물세포의 흡수력은 얼마인가?", options: ["무한대", "삼투압과 팽압의 곱", "0 (Zero)", "마이너스 상태"], answer: "0 (Zero)", explanation: "흡수력 = 삼투압 - 팽압. 최고 팽팽해지면 둘이 같아져 흡수력이 0이 됩니다." },
  { id: "t-m15", chapterId: "transport", type: "multiple", question: "나트륨-칼륨 펌프가 ATP 1개를 소모하여 각 이온들을 내보내고 들일 때의 교환 비율로 가장 널리 알려진 것은?", options: ["Na+ 1개 배출, K+ 1개 유입", "Na+ 3개 배출, K+ 2개 유입", "Na+ 2개 배출, K+ 3개 유입", "포도당 1개 배출, K+ 1개 유입"], answer: "Na+ 3개 배출, K+ 2개 유입", explanation: "정확히 나트륨이 3개 나가고, 칼륨이 2개 들어오며 전위차를 만듭니다." },

  // --- 5. 효소와 항상성 (enzymes) - 심화 10제 ---
  { id: "e-s11", chapterId: "enzymes", type: "short", question: "기질의 농도가 계속 무한히 증가해도, 세포 내의 전체 효소가 꽉 차서 반응 속도가 더 이상 빨라지지 않고 일정해지는 한계 속도를 무엇이라 하나요?", answer: "최대반응속도", explanation: "Vmax 라고도 불리는, 모든 효소 공장이 포화된 상태의 속도입니다." },
  { id: "e-s12", chapterId: "enzymes", type: "short", question: "효소의 주성분은 단백질 이지만, 활성을 돕기 위해 비타민 등 다른 분자 조각이 추가로 결합되어야 하는 경우가 있습니다. 이 조각 분자를 무엇이라 부를까요?", answer: "조효소", explanation: "효소를 보조하는 비단백질성 유기 화합물입니다." },
  { id: "e-s13", chapterId: "enzymes", type: "short", question: "효소가 정상적인 단백질 입체 구조를 가질 수 있도록, 가장 촘촘하고 활성화된 핏(Fit)을 보여주는 최적 온도, 최적 pH를 벗어날 때 떨어지는 구조적 유연성을 일컫는 말은?", answer: "변성", explanation: "단백질이 파괴되는 것(Denaturation)입니다." },
  { id: "e-s14", chapterId: "enzymes", type: "short", question: "저해제 중, 진짜 기질과 모양이 비슷하여 효소의 중심 부위(자물쇠 구멍)를 먼저 스틸 차지해 반응을 방해하는 저해제 종류는?", answer: "경쟁적저해제", explanation: "효소의 활성부위를 두고 진짜 기질과 경쟁합니다." },
  { id: "e-s15", chapterId: "enzymes", type: "short", question: "저온(예: 0~4도씨 빙점)에서는 효소의 반응 속도가 매우 느려집니다. 이때 효소는 변성(파괴)된 것인가요, 아니면 분자 운동이 둔화된 것인가요?", answer: "분자 운동이 둔화", explanation: "저온은 효소를 영구 파괴시키지 않습니다. 동결되었다가 온도를 올리면 다시 작동합니다." },
  { id: "e-m11", chapterId: "enzymes", type: "multiple", question: "비경쟁적 저해제(Non-competitive inhibitor)의 주된 작용 방식은 무엇인가?", options: ["활성 부위에 결합하여 기질을 밀어낸다.", "효소의 다른 부위(다른 홈)에 결합하여 효소의 입체 형태 자체를 비틀어버린다.", "아예 효소를 절반으로 찢어버린다.", "기질 덩어리들을 자기네들끼리 뭉치게 만든다."], answer: "효소의 다른 부위(다른 홈)에 결합하여 효소의 입체 형태 자체를 비틀어버린다.", explanation: "알로스테릭 부위 등에 결합하여 자물쇠 핏감을 변형시켜버립니다." },
  { id: "e-m12", chapterId: "enzymes", type: "multiple", question: "인슐린 호르몬과 완전히 정반대 작용을 가져, 혈당량이 낮을 때 활동하여 혈당 수치를 높여주는 이자(췌장) 분비 호르몬은?", options: ["아드레날린", "티록신", "글루카곤", "옥시토신"], answer: "글루카곤", explanation: "글루카곤은 간의 글리코젠을 포도당으로 분해시킵니다." },
  { id: "e-m13", chapterId: "enzymes", type: "multiple", question: "항상성 조절의 핵심 원리 중 하나로, 어떤 결과물이 지속적으로 많아지면, 윗 단계 시스템에 피드백을 넣어 자신의 생산을 도로 억제시키는 자가 규제 메커니즘 체계는?", options: ["도미노 효과", "양성 피드백", "음성 피드백", "역방향 시너지"], answer: "음성 피드백", explanation: "Negative Feedback은 넘치면 멈추게 하는 항상성 안정화의 핵심 회로입니다." },
  { id: "e-m14", chapterId: "enzymes", type: "multiple", question: "혈액에 적혈구를 넣어두고, 강한 산성 용액 몇 방울을 떨어뜨렸을 때 pH가 7.4에서 쉽게 떨어지지 않고 꽤 버텨내는, 혈액 내부의 방어 작용을 주로 담당하는 체계 시스템 명칭은?", options: ["능동 수송 펌프", "완충 작용 (완충 용액)", "식세포 작용", "리놀레산 합성"], answer: "완충 작용 (완충 용액)", explanation: "단백질과 탄산 이온 등이 수소이온을 흡수, 방출하여 pH를 강력히 완충합니다." },
  { id: "e-m15", chapterId: "enzymes", type: "multiple", question: "효소의 촉매 작용이 활성화 에너지를 낮춘다고 할 때, 전혀 변화시키지 '않는' 것은 무엇인가?", options: ["반응 경로의 저항", "효소기질복합체의 형성 밀도", "반응물과 생성물 간의 궁극적인 '에너지 격차' (반응열)", "반응 최고점 문턱 높이"], answer: "반응물과 생성물 간의 궁극적인 '에너지 격차' (반응열)", explanation: "효소는 시작점과 도착점은 건들지 못하며 오직 그 사이의 산등성이(문턱)만 낮출 뿐입니다." },

  // --- 6. 세포 주기와 세포 분열 (division) - 심화 10제 ---
  { id: "d-s11", chapterId: "division", type: "short", question: "세포 주기 중 DNA 복제가 이루어지는 S기 보다 앞서 가장 폭발적인 RNA 및 단백질 생장이 일어나는 사이클의 명칭은?", answer: "G1기", explanation: "Gap 1, 즉 가장 먼저 생장하며 덩치를 불리는 시기입니다." },
  { id: "d-s12", chapterId: "division", type: "short", question: "암세포란, 세포 분열 사이클의 무엇이 망가져 폭주하는 세포를 뜻할까요? (OOO 조절 실패)", answer: "세포주기", explanation: "브레이크 없는 무한 분열 세포 주기가 암세포의 본질입니다." },
  { id: "d-s13", chapterId: "division", type: "short", question: "다운 증후군 등 염색체의 수 이상의 원인이 되는 현상으로, 감수 1분열 또는 2분열에서 염색체가 양극으로 온전히 찢어지지 못한 사고를 무엇이라 하나요?", answer: "비분리", explanation: "상동염색체나 염색분체가 떨어지지 않고 한쪽으로 쏠린 현상입니다." },
  { id: "d-s14", chapterId: "division", type: "short", question: "체세포 분열 과정의 관찰 실험 중, 염색체가 풀린 실(염색사) 상태임을 가장 확실히 알 수 있는 쭈글쭈글하고 핵이 확연히 보이는 시기는? (간기/전기)", answer: "간기", explanation: "염색체가 꼬이지 않고 실로 풀린 휴식 상태를 관찰할 수 있습니다." },
  { id: "d-s15", chapterId: "division", type: "short", question: "동물세포의 체세포 분열 말기에, 세포 중앙의 세포막이 밖에서 안쪽으로 잘록하게 조여들며 2개로 쪼개지는 현상의 명칭은?", answer: "세포질만입", explanation: "함입 또는 만입이라 하며 액틴 링이 조이는 기작입니다." },
  { id: "d-m11", chapterId: "division", type: "multiple", question: "체세포 분열 후 만들어진 2개의 딸세포 간에 차이가 나는 부분은 관념상 무엇인가?", options: ["세포 내 보관된 DNA 염기 서열 내용", "핵 안에 든 총 염색체 숫자 (2n)", "각 딸세포의 초기 세포질 크기 등 약간의 질량적 부피", "상동염색체의 존재 유무"], answer: "각 딸세포의 초기 세포질 크기 등 약간의 질량적 부피", explanation: "분열 직후 세포질은 자로 잰듯 5:5가 아니기에 질량이나 소기관 개수 등 물리적 부피만 다릅니다." },
  { id: "d-m12", chapterId: "division", type: "multiple", question: "감수 분열 결과물(생식세포)을 통해 유전적 다양성이 크게 증대되는 물리적 메커니즘 2가지는 키아즈마 교차와 또 무엇인가?", options: ["S기 생략", "염색체 개수의 완전 보존", "상동 염색체의 무작위(독립적) 분리와 나열", "단성 생식 분열"], answer: "상동 염색체의 무작위(독립적) 분리와 나열", explanation: "중기에 정렬될 때 엄마쪽 아빠쪽 염색체가 왼쪽/오른쪽 랜덤으로 갈라섬으로써 확률이 폭증합니다." },
  { id: "d-m13", chapterId: "division", type: "multiple", question: "세포 분열 전기(Prophase)의 3가지 핵심 사건으로 잘못 짝지어진 것은?", options: ["핵막 소실(분해)", "염색사가 염색체로 응축(꼬임)", "방추사 조립 시작", "상동염색체가 적도면에 1열 정렬"], answer: "상동염색체가 적도면에 1열 정렬", explanation: "적도면에 1열 정렬하는 것은 '중기(Metaphase)'의 사건입니다." },
  { id: "d-m14", chapterId: "division", type: "multiple", question: "신경 세포(뉴런)나 심장 근육 세포 등은 어른이 된 후 분열하지 않는 방어 상태로 빠져듭니다. 이러한 세포들이 머무는 영구 휴식 상태의 주기는 어디인가요?", options: ["G2기 후반", "G0기 (G zero)", "M기", "S기"], answer: "G0기 (G zero)", explanation: "세포 주기를 탈출하여 기능만 수행하는 휴지기 상태입니다." },
  { id: "d-m15", chapterId: "division", type: "multiple", question: "다음 난자(22개 상염색체 + X)와 융합하여 딸(여성)을 낳기 위해 들어온 정상적인 정자의 염색체 구성은 무엇인가?", options: ["22개 상염색체 + X", "22개 상염색체 + Y", "44개 상염색체 + XX", "22개 상염색체 + XY"], answer: "22개 상염색체 + X", explanation: "딸이 되려면 X + X 가 되어야 하므로 아버지는 X를 가진 정자를 제공해야 합니다." },

  // --- 7. 유전 정보의 흐름 (central dogma) - 심화 10제 ---
  { id: "cd-s11", chapterId: "central-dogma", type: "short", question: "유전자 발현 시, DNA에서 유전 정보가 지시된 의미있는 구역만을 따로 이어붙이기 위해 RNA가 재련되는 과정을 무엇이라 부르나요?", answer: "스플라이싱", explanation: "스플라이싱(Splicing)을 통해 무의미한 인트론을 떼고 엑손만 이어붙입니다." },
  { id: "cd-s12", chapterId: "central-dogma", type: "short", question: "하나의 mRNA 가닥에 리보솜 수십 개가 기차처럼 붙어서 동시에 동일한 단백질을 엄청나게 대량 찍어내는 공장식 구조물을 지칭하는 용어는?", answer: "폴리솜", explanation: "폴리리보솜, 효율 극대화의 산물입니다." },
  { id: "cd-s13", chapterId: "central-dogma", type: "short", question: "번역 과정 중, 아미노산을 달고 들어오는 tRNA가 리보솜의 결합 구역 3군데(E, P, A) 중 가장 '처음(두번째부터)' 안착하는 아미노아실 진입 도킹 자리는 알파벳 무어인가요?", answer: "A자리", explanation: "Aminoacyl site, 즉 새로운 아미노산 tRNA가 들어오는 A자리입니다." },
  { id: "cd-s14", chapterId: "central-dogma", type: "short", question: "디엔에이(DNA) 이중 나선 중 실제로 mRNA를 복사해내는 쪽(틀이 되는 쪽) 가닥을 무엇이라 부르나요?", answer: "주형가닥", explanation: "주형(Template) 가닥을 대고 상보적으로 mRNA가 합성됩니다." },
  { id: "cd-s15", chapterId: "central-dogma", type: "short", question: "코돈 암호표는 세균부터 사람에 이르기까지 지구상의 거의 모든 생물체가 약속한 듯 동일하게 공유합니다. 이 특성을 유전 암호의 무엇이라 하나요?", answer: "보편성", explanation: "유전 암호 시스템의 보편적 공유는 생명 공동 기원의 강력한 증거입니다." },
  { id: "cd-m11", chapterId: "central-dogma", type: "multiple", question: "유전자 돌연변이 유형 중, 코돈의 특정 염기 하나가 다른 염기로 교체(치환)되었음에도 우연히 다행스럽게 '기존과 완전 똑같은 아미노산'을 지정하게 되어 기능상 문제가 없는 돌연변이는?", options: ["과오 돌연변이 (Missense)", "침묵 돌연변이 (Silent)", "난센스 돌연변이 (Nonsense)", "프레임시프트 돌연변이 (Frameshift)"], answer: "침묵 돌연변이 (Silent)", explanation: "아미노산 변동이 일어남 없이 숨겨진 채 침묵하기 때문입니다." },
  { id: "cd-m12", chapterId: "central-dogma", type: "multiple", question: "진핵세포와 달리 원핵세포(대장균)의 유전 정보 흐름 경로만이 갖는 독특한 특징은 무엇인가?", options: ["코돈 1개 당 5개의 아미노산을 배정한다.", "DNA 복제가 전혀 없다.", "전사와 번역이 세포질 한 공간에서 동시에(연속적으로) 일어난다.", "리보솜 대신 골지체에서 번역한다."], answer: "전사와 번역이 세포질 한 공간에서 동시에(연속적으로) 일어난다.", explanation: "핵막이 없으므로 mRNA가 만들어지자마자 리보솜이 달려들어 번역을 시작합니다." },
  { id: "cd-m13", chapterId: "central-dogma", type: "multiple", question: "어느 DNA 엑손 유전자 코딩 부위의 염기 서열이 1500개 염기 쌍으로 되어있다 가정할 때, 종결 코돈을 빼면 대략 몇 개의 아미노산 길이의 단백질이 탄생하겠는가? (시작은 1번 염기부터라 가정)", options: ["1500개", "500개", "300개", "100개"], answer: "500개", explanation: "3개의 염기(코돈)가 1개의 아미노산을 지정하므로 1500 / 3 = 대략 500개 언저리입니다." },
  { id: "cd-m14", chapterId: "central-dogma", type: "multiple", question: "다음 구조 중, 리보솜이라는 소기관 자신을 구성하는 뼈대 RNA의 이름은 무엇인가?", options: ["mRNA", "tRNA", "rRNA", "snRNA"], answer: "rRNA", explanation: "리보솜 RNA (ribosomal RNA)는 단백질과 결합하여 리보솜 알갱이를 구성합니다." },
  { id: "cd-m15", chapterId: "central-dogma", type: "multiple", question: "아미노산 메싸이오닌을 부름과 동시에 번역의 출발 신호 역할을 하는 유일한 개시 코돈 가닥의 3글자 이름은?", options: ["UAA", "AUG", "UGA", "GUA"], answer: "AUG", explanation: "항상 AUG만이 유일무이한 번역 개시 코드입니다." }
];
