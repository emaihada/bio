import { ReactNode } from 'react';
import { 
  Network, 
  Beaker, 
  BoxSelect, 
  MoveRight, 
  Activity, 
  SplitSquareHorizontal, 
  Dna 
} from 'lucide-react';

export type SectionData = {
  id: string;
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export const lectureData: SectionData[] = [
  {
    id: "organization",
    title: "생명체의 유기적 구성",
    icon: <Network className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          생명체는 세포부터 생물권까지 이어지는 정교하고 복잡한 여러 단계의 유기적 구성을 가집니다.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>세포 (Cell):</strong> 생명체의 구조적, 기능적 기본 단위. 여러 세포 소기관들이 모여 형성됩니다.</li>
          <li><strong>조직 (Tissue):</strong> 모양과 기능이 비슷한 세포들의 모임. (예: 상피 조직, 근육 조직)</li>
          <li><strong>기관 (Organ):</strong> 여러 조직이 모여 특정한 형태와 고유의 기능을 나타내는 단계. (예: 심장, 잎)</li>
          <li><strong>기관계 (Organ System):</strong> <span className="text-blue-600 font-semibold">동물에만 존재</span>하며, 연관된 기능을 수행하는 여러 기관들의 모임. (예: 소화계, 순환계) *사람은 총 11개의 기관계를 지님.</li>
          <li><strong>조직계 (Tissue System):</strong> <span className="text-green-600 font-semibold">식물에만 존재</span>하며, 조직과 기관 사이의 단계. (예: 관다발 조직계)</li>
          <li><strong>개체 (Organism):</strong> 기관계(또는 기관)가 모여 독립된 생명체를 형성하는 단계.</li>
          <li><strong>개체군 (Population):</strong> 일정한 지역에 사는 동종 개체(같은 종)들의 모임.</li>
          <li><strong>군집 (Community):</strong> 일정한 지역에 사는 여러 개체군(여러 종)들의 모임.</li>
          <li><strong>생태계 (Ecosystem):</strong> 군집과 무기 환경(빛, 물, 토양 등)이 상호작용하는 유기적인 체계.</li>
          <li><strong>생물권 (Biosphere):</strong> 생태계가 모두 모여 지구 전체의 생물과 무기 환경을 포함하는 가장 큰 체계.</li>
        </ul>
      </div>
    )
  },
  {
    id: "components",
    title: "생명체의 구성 성분",
    icon: <Beaker className="w-5 h-5" />,
    content: (
      <div className="space-y-6 flex flex-col">
        <p className="text-gray-700 leading-relaxed">
          생명체를 구성하는 주요 성분은 물, 단백질, 지질, 탄수화물, 핵산, 무기염류 등입니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">물 (Water)</h3>
            <p className="text-sm text-gray-700">
              생명체 구성 성분 중 가장 많은 양(약 70%)을 차지합니다. 
              비열과 기화열이 커서 체온을 일정하게 유지하는 데 핵심적인 역할을 하며, 생명 유지의 용매로 작용합니다.
            </p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 mb-2">단백질 (Protein)</h3>
            <p className="text-sm text-gray-700 mb-2">
              세포막, 소기관의 주성분이며 효소, 항체, 호르몬의 성분으로써 근육 조직 등을 구성합니다. 기본 단위는 20종류의 <strong>아미노산</strong>입니다.
            </p>
            <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
              <li><strong>아미노산 구조:</strong> 중심 탄소 + 아미노기 + 카복실기 + 수소 + <span className="font-semibold text-red-600">곁사슬(R기)</span>. R기의 종류에 따라 아미노산 종류가 결정됨.</li>
              <li><strong>펩타이드 결합:</strong> 아미노산들이 결합할 때 물 한 분자가 빠져나가는 <strong>탈수 축합 반응</strong>.</li>
              <li>이 결합으로 폴리펩타이드가 형성되고 입체 구조로 접혀 단백질이 됨.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-800 mb-2">지질 (Lipids)</h3>
            <p className="text-sm text-gray-700 mb-2">
              물에 잘 녹지 않는 소수성을 띠며, 몸의 구성 및 에너지원 역할을 합니다.
            </p>
             <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
              <li><strong>인지질:</strong> 세포막을 구성하는 주성분.</li>
              <li><strong>중성지방 (지방):</strong> 에너지 저장, 피하 지방층에서 체온 유지.</li>
              <li><strong>스테로이드:</strong> 성호르몬 및 세포막(콜레스테롤)의 안정성을 돕는 성분.</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg">
            <h3 className="font-bold text-emerald-800 mb-2">탄수화물 (Carbohydrates)</h3>
            <p className="text-sm text-gray-700 mb-2">
              주로 에너지원으로 사용되며(포도당), 식물 세포벽의 기본 뼈대(셀룰로스)를 형성합니다.
            </p>
            <p className="text-xs text-gray-600">
              기본 단위: 단당류 (포도당, 과당) → 결합하여 이당류 (설탕, 엿당) → 다당류 (식물의 녹말/셀룰로스, 동물의 글리코젠)
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg md:col-span-2">
            <h3 className="font-bold text-purple-800 mb-2">핵산 (Nucleic Acids)</h3>
            <p className="text-sm text-gray-700 mb-2">
              유전 정보를 저장하고 전달. 기본 단위는 <strong>뉴클레오타이드</strong> (인산:당:염기 = 1:1:1 결합).
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-white p-3 rounded shadow-sm">
                <strong className="text-purple-600">DNA</strong>
                <ul className="text-xs text-gray-600 list-disc pl-4 mt-1">
                  <li>이중 나선 구조</li>
                  <li>디옥시리보스 (당)</li>
                  <li>염기: A, G, C, T</li>
                  <li>기능: 유전 정보의 본체 및 저장</li>
                  <li className="mt-1 border-t pt-1">상보적 결합: A=T (2중 수소결합), G≡C (3중 수소결합)</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <strong className="text-purple-600">RNA</strong>
                 <ul className="text-xs text-gray-600 list-disc pl-4 mt-1">
                  <li>단일 가닥 구조</li>
                  <li>리보스 (당)</li>
                  <li>염기: A, G, C, U (T 대신 위치)</li>
                  <li>기능: 유전 정보 전달 및 단백질 합성 관여</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "cells",
    title: "세포의 구조와 소기관",
    icon: <BoxSelect className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
          <h4 className="font-bold mb-1">원핵세포 vs 진핵세포</h4>
          <p className="text-sm text-gray-700">
            <strong>원핵세포:</strong> 핵막이 없어 DNA가 세포질에 퍼져 있으며, 막으로 둘러싸인 세포 소기관(미토콘드리아 등)이 없습니다. (예: 세균, 고세균)<br/>
            <strong>진핵세포:</strong> 뚜렷한 핵막이 존재하여 핵이 구분되며, 다양한 막성 세포 소기관을 가집니다. (예: 동물, 식물, 균류, 원생동물)
          </p>
        </div>

        <h3 className="font-bold text-lg mt-4 border-b pb-2">주요 세포 소기관과 기능</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-3">
          <div>
            <strong className="text-blue-700 block">세포막 (Cell Membrane)</strong>
            <p className="text-gray-600 mb-2">세포를 보호하고 물질 출입을 통제. 인지질 이중층에 단백질이 박혀있는 '유동 모자이크 모델'. 당분자가 결합된 당단백질/당지질 존재.</p>

            <strong className="text-blue-700 block">핵 (Nucleus)</strong>
            <p className="text-gray-600 mb-2">유전물질(DNA) 저장 및 세포의 모든 생명활동 통제. 복제된 RNA가 핵공을 통해 빠져나감.</p>

            <strong className="text-blue-700 block">리보솜 (Ribosome)</strong>
            <p className="text-gray-600 mb-2">막 구조가 없는 알갱이 형태. RNA와 단백질로 구성되며 아미노산을 엮어 <strong>단백질을 합성</strong>하는 공장.</p>

            <strong className="text-blue-700 block">미토콘드리아 (Mitochondria)</strong>
            <p className="text-gray-600 mb-2">세포 호흡을 통해 유기물을 분해하여 에너지원인 <strong>ATP</strong>를 생성하는 기관.</p>
          </div>
          <div>
            <strong className="text-blue-700 block">소포체 (ER)</strong>
            <ul className="text-gray-600 mb-2 list-disc pl-4">
              <li><strong>조면소포체(거친면):</strong> 표면에 리보솜이 붙어있어, 리보솜이 합성한 단백질을 가공하고 골지체로 이동시키는 통로.</li>
              <li><strong>활면소포체(매끈면):</strong> 리보솜이 없으며 지질 합성 및 독성 해독.</li>
            </ul>

            <strong className="text-blue-700 block">골지체 (Golgi Apparatus)</strong>
            <p className="text-gray-600 mb-2">단백질의 <strong>"분리수거 및 택배 센터"</strong>. 소포체에서 온 물질을 분류, 가공, 포장하여 소낭에 담아 분비.</p>

            <strong className="text-blue-700 block">기타 소기관</strong>
            <p className="text-gray-600 mb-2">
              <strong>리소좀:</strong> 가수분해 효소를 포함하여 세포 내 소화 담당.<br/>
              <strong>퍼옥시좀:</strong> 과산화수소 등 독성 물질 분해.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <h4 className="font-bold text-green-800 mb-2">식물세포 특이적 구조</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li><strong>엽록체 (Chloroplast):</strong> 빛 에너지를 이용하여 포도당을 합성하는 광합성의 장소.</li>
            <li><strong>세포벽 (Cell Wall):</strong> 세포막 바깥쪽의 단단한 층으로 보호 및 형태 유지. 주성분은 셀룰로스.</li>
            <li><strong>중심액포 (Central Vacuole):</strong> 물, 색소, 노폐물을 저장. 세포가 성숙할수록 크기가 비대해짐.</li>
          </ul>
        </div>

        <div className="mt-4 p-4 border border-gray-200 rounded-lg">
          <h4 className="font-bold text-lg mb-2">세포 골격 (Cytoskeleton)</h4>
          <p className="text-sm text-gray-700 mb-2">세포의 형태 유지, 운동, 소기관 고정에 관여하는 세 종류의 단백질 섬유입니다.</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li><strong>미세소관 (Microtubule):</strong> 가장 굵은 관. 방추사, 섬모, 편모 구성 및 소기관의 이동 레일 역할.</li>
            <li><strong>중간섬유 (Intermediate filament):</strong> 중간 굵기. 핵 등 소기관 고정, 세포 모양의 내구성 유지.</li>
            <li><strong>미세섬유 (Microfilament / 액틴):</strong> 가장 얇음. 근육 조직의 수축 현상과 위족 운동 같은 실제 세포 운동에 관여.</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mt-4">
          <h4 className="font-bold mb-1">단백질 (유즙/모유) 생성 빛 분비 시퀀스</h4>
          <p className="text-sm text-gray-700">
            1. <strong>핵:</strong> DNA의 정보를 RNA로 복제하여 내보냄<br/>
            2. <strong>조면소포체(리보솜):</strong> RNA 정보대로 아미노산을 결합해 유즙 단백질 합성<br/>
            3. <strong>골지체:</strong> 단백질 가공, 형태 완성 후 분리수거하여 소낭에 포장<br/>
            4. <strong>소낭:</strong> 막 쪽으로 이동<br/>
            5. <strong>세포막:</strong> 소낭과 막이 융합하며 물질을 분비 (세포외 배출)
          </p>
        </div>
      </div>
    )
  },
  {
    id: "transport",
    title: "세포막과 물질의 이동",
    icon: <MoveRight className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-sm">
          <strong>용액(Solution)</strong> = 용매(물) + 용질(녹는 물질, 예: 소금/당). 
          세포는 선택적 투과성을 지닌 세포막을 통해 농도 차이를 이용하거나 에너지를 사용해 물질을 이동시킵니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="p-4 border rounded-lg border-blue-200">
            <h4 className="font-bold text-blue-800 text-lg mb-2">1. 수동 수송 (확산)</h4>
            <p className="text-xs text-gray-500 mb-3"># ATP 미사용 # 고농도 → 저농도</p>
            <ul className="list-disc pl-4 text-sm text-gray-700 space-y-2">
              <li>
                <strong>단순 확산:</strong> 막 단백질 도움 없이 인지질 이중층을 직접 통과. 크기가 매우 작거나 지용성 기체(O2, CO2)들이 이동.
              </li>
              <li>
                <strong>촉진 확산:</strong> 세포막에 박힌 막 단백질의 도움을 받음. 길을 열어주는 <strong>통로 단백질</strong>과 형태가 변하며 나르는 <strong>운반 단백질</strong>을 이용. 이온, 포도당, 수용성 물질들이 이동. 속도가 단순확산보다 빠름.
              </li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg border-red-200">
            <h4 className="font-bold text-red-800 text-lg mb-2">2. 능동 수송 (Pump)</h4>
            <p className="text-xs text-gray-500 mb-3"># ATP 사용 # 저농도 → 고농도</p>
            <p className="text-sm text-gray-700">
              자연스러운 농도 평형의 법칙을 거슬러 저농도에서 고농도로 억지로 펌프질하는 과정입니다. 
              이때 세포막의 <strong>펌프 단백질(Pump protein)</strong>을 사용하며 반드시 <strong>ATP 에너지</strong>를 소모합니다. 
              (예: 나트륨-칼륨 펌프)
            </p>
          </div>
        </div>

        <div className="bg-sky-50 mt-4 p-4 rounded-lg">
          <h4 className="font-bold text-sky-800 text-lg mb-2">3. 삼투 현상 (Osmosis)</h4>
          <p className="text-sm text-gray-700 mb-3">
            덩치가 큰 용질이 막을 통과하지 못할 때, 물(용매)이 스스로 저농도(물 많은 곳)에서 고농도(물 적은 곳)로 반투과성 막을 통과해 이동하여 농도 평형을 맞추는 현상입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-white p-3 rounded border">
              <strong className="text-gray-800 block text-center mb-1">등장액 (Isotonic)</strong>
              <p className="text-gray-600 text-xs text-center">세포 안팎 농도 동일. 물의 유입량=유출량.<br/><strong>적혈구 정상 형태 유지</strong></p>
            </div>
            <div className="bg-white p-3 rounded border">
              <strong className="text-pink-600 block text-center mb-1">고장액 (Hypertonic)</strong>
              <p className="text-gray-600 text-xs text-center">외부 농도가 높음. 내부 물이 밖으로 유출.<br/><strong>적혈구 수축(쪼그라듦)</strong></p>
            </div>
            <div className="bg-white p-3 rounded border">
              <strong className="text-cyan-600 block text-center mb-1">저장액 (Hypotonic)</strong>
              <p className="text-gray-600 text-xs text-center">외부 농도가 낮음. 외부 물이 안으로 유입.<br/><strong>적혈구 팽창 및 용혈(터짐)</strong></p>
            </div>
          </div>
        </div>

        <div className="p-4 border border-indigo-100 rounded-lg">
           <h4 className="font-bold text-indigo-800 text-lg mb-2">4. 집단 수송 (대량 수송)</h4>
           <p className="text-sm text-gray-700 mb-2">덩치가 너무 커서 단백질을 통과할 수 없는 거대 물질을 세포막의 융합/함입 원리로 통째로 이동시키는 에너지 소모 과정입니다.</p>
           <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
             <li><strong>세포내 도입 (Endocytosis):</strong> 막으로 외부 물질을 싸서 소낭 형태로 들여옴. 고형물질을 잡는 식세포작용과 액체를 삼키는 음세포작용으로 나뉨.</li>
             <li><strong>세포외 배출 (Exocytosis):</strong> 세포 내의 소낭이 막과 융합되면서 내부 물질을 외부로 분비. (예: 호르몬 분비)</li>
           </ul>
        </div>
      </div>
    )
  },
  {
    id: "enzymes",
    title: "효소와 항상성",
    icon: <Activity className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-green-800 font-bold mb-2">항상성 (Homeostasis)</h3>
          <p className="text-gray-700 text-sm">
            생명체가 외부 환경의 변화에도 불구하고 체온, 체액의 수분, 혈당량, 혈액의 pH(약 7.4) 등 
            체내 생리적 상태를 항상 일정하게 유지하려는 성질입니다. 이 과정에는 주로 자율신경계와 호르몬이 작용합니다.
          </p>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-bold mb-2">효소 (Enzyme) 기능</h3>
          <p className="text-gray-700 text-sm mb-3">
            효소는 주로 <strong>단백질</strong>로 이루어진 "생체 촉매"입니다. 상온/상압인 체내 환경에서 
            생화학 반응(물질대사)이 빠르게 일어날 수 있도록 반응에 필요한 <strong>활성화 에너지의 문턱을 낮춰줍니다.</strong>
          </p>
          <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-1">
            <li>효소는 자신에게 맞는 특정한 <strong>기질(반응물)</strong>과만 결합합니다.</li>
            <li>효소와 기질이 반응하여 <strong>효소-기질 복합체</strong>를 형성합니다.</li>
            <li>기질은 생성물로 쪼개지거나 합성되고, 역할을 끝낸 효소는 모양이 변하지 않은 채 재사용됩니다.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "division",
    title: "세포 주기와 세포 분열",
    icon: <SplitSquareHorizontal className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">세포 주기 (Cell Cycle)</h3>
          <p className="text-sm text-gray-700 mb-3">분열을 마친 세포가 자라서 다시 분열하기까지의 순환 주기입니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-gray-50 border rounded-lg border-gray-200">
              <strong className="text-gray-800 mb-2 block border-b pb-1">간기 (Interphase) - 분열 준비</strong>
              <ul className="space-y-2 mt-2 text-gray-700">
                <li><strong>G1기:</strong> 세포가 성장하고 세포 소기관이 늘어나는 준비기.</li>
                <li><strong className="text-blue-600">S기 (합성기):</strong> <strong>핵심!!</strong> 분열을 위해 DNA(유전물질) 양을 정확히 2배로 복제(뻥튀기)하는 시기.</li>
                <li><strong>G2기:</strong> 복제 후 최종적으로 분열에 필요한 단백질 등을 합성.</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 border rounded-lg border-blue-200">
              <strong className="text-blue-800 border-b border-blue-200 pb-1 block mb-2">분열기 (M phase)</strong>
              <p className="text-gray-700">체세포 분열 또는 감수 분열이 일어나며, 핵분열과 세포질 분열이 이루어지는 시기.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold border-b pb-2 mb-3">염색체와 분열 구조물</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
             <div className="p-3 bg-white border shadow-sm rounded-lg">
              <strong className="text-purple-700">주요 구조물</strong>
              <p className="text-xs text-gray-600 mt-2">
                <strong>염색체:</strong> DNA와 히스톤 단백질로 이루어지며 분열 시에 응축됨. (평소엔 풀린 염색사 형태)<br/>
                <strong>중심체:</strong> 수직인 두 개의 중심립 쌍. 양극으로 이동해 방추사를 뿜어냄.<br/>
                <strong>동원체:</strong> 염색체 가운데 방추사가 부착되는 잘록한 부위.
              </p>
            </div>
            <div className="p-3 bg-white border shadow-sm rounded-lg">
              <strong className="text-pink-600">체세포 분열</strong>
              <p className="text-xs text-gray-600 mt-2">
                <strong>목적:</strong> 생장 및 조직 재생<br/>
                <strong>결과:</strong> 1회 분열, 염색체 수 유지 (2n → 2n), 딸세포 2개.<br/>
                <strong>특징(중기):</strong> 46개의 염색체가 적도면에 한 줄(일렬)로 나란히 배열되어 염색분체(복제된 반쪽)가 분리됨.
              </p>
            </div>
            <div className="p-3 bg-white border shadow-sm rounded-lg">
              <strong className="text-emerald-600">감수 분열 (생식)</strong>
              <p className="text-xs text-gray-600 mt-2">
                <strong>목적:</strong> 정자/난자 생성<br/>
                <strong>결과:</strong> 2연속 분열, 염색체 반감 (2n → n), 딸세포 4개.<br/>
                <strong>특징(1분열 전기/중기):</strong> 상동염색체가 접합해 <strong>2가 염색체(4분체)</strong>를 형성 후 두 줄로 배열. <span className="font-bold underline">키아즈마 구조</span>에서 유전자 교차 현상 발생 (유전적 다양성 확보).
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "central-dogma",
    title: "유전 정보의 흐름",
    icon: <Dna className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          사람은 <strong>총 46개(23쌍)</strong>의 염색체를 가집니다.<br/>
          이 중 22쌍(44개)은 <strong>상염색체</strong>이며, 1쌍(2개)은 성별을 결정하는 <strong>성염색체</strong>(XX, XY)입니다.
          부모에게 각각 하나씩 받은 크기와 모양이 같은 쌍을 <strong>상동염색체</strong>라고 부릅니다.
        </p>

        <h3 className="font-bold text-xl mt-6 mb-2">중심 원리 (Central Dogma)</h3>
        <p className="text-sm text-gray-600 mb-4">DNA에 암호화된 유전 정보가 해독되어 단백질 공장을 통해 우리 몸을 구성하는 단백질 산물로 바뀌는 절대적인 흐름입니다.</p>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center relative">
          
          <div className="flex-1 border-2 border-indigo-200 rounded-xl p-5 bg-white relative">
            <h4 className="text-center font-bold text-indigo-800 text-lg mb-3">1. 전사 (Transcription)</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>장소:</strong> 세포 내 <strong>핵(Nucleus)</strong> 내부</p>
              <p className="leading-relaxed">
                원본 설계도인 DNA 이중 나선 중 한 가닥을 주형으로 삼아, 효소가 상보적 결합 원리를 이용해 
                지시서인 <strong>mRNA(메신저 RNA)</strong>를 찍어냅니다.
              </p>
              <p className="text-xs font-semibold bg-gray-100 p-2 rounded block text-center text-rose-600">
                ※ 상보적 복제 시 DNA의 아데닌(A)은 RNA의 우라실(U)과 필수로 결합합니다.
              </p>
              <p className="text-xs text-gray-500 mt-2 italic text-center">완성된 mRNA는 핵공을 통해 세포질로 빠져나옵니다.</p>
            </div>
          </div>

          <div className="hidden md:flex self-center">
            <MoveRight className="text-gray-400 w-8 h-8" />
          </div>

          <div className="flex-1 border-2 border-emerald-200 rounded-xl p-5 bg-white relative">
            <h4 className="text-center font-bold text-emerald-800 text-lg mb-3">2. 번역 (Translation)</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>장소:</strong> 세포질의 <strong>리보솜(Ribosome)</strong></p>
              <p className="leading-relaxed">
                거친면 소포체 등에 붙은 리보솜이 mRNA를 읽기 시작합니다. 
                mRNA의 연속된 3개의 염기 서열인 <strong>코돈(Codon)</strong>을 인식하면,
                운반 전문인 <strong>tRNA</strong>가 코돈에 맞는 아미노산들을 물고 옵니다.
              </p>
              <p className="text-xs font-semibold bg-gray-100 p-2 rounded block text-center text-teal-600">
                가져온 아미노산들이 펩타이드 결합으로 길게 이어져(탈수 축합) 거대한 단백질이 됩니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
];
