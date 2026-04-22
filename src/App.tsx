import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { lectureData } from './data';
import { questions } from './questions';
import { BookOpen, Menu, X, CheckCircle2, FlaskConical, LayoutList, ChevronRight } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'notes' | 'quiz'>('notes');
  const [activeSection, setActiveSection] = useState(lectureData[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Quiz States */
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [selectedQuizType, setSelectedQuizType] = useState<'all' | 'short' | 'multiple'>('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([...questions]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizInput, setQuizInput] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const startQuiz = () => {
    const freshQuestions = questions.filter(q => {
      const matchChapter = selectedChapter === 'all' || q.chapterId === selectedChapter;
      const matchType = selectedQuizType === 'all' || q.type === selectedQuizType;
      return matchChapter && matchType;
    }).sort(() => Math.random() - 0.5); // shuffle for fun memory recall

    setFilteredQuestions(freshQuestions);
    setQuizIndex(0);
    setScore(0);
    setQuizFinished(false);
    setShowExplanation(false);
    setQuizInput('');
    setIsAnswerCorrect(null);
    setQuizStarted(true);
  };

  const handleAnswerSubmit = (givenAnswer: string) => {
    if (showExplanation) return;

    const currentQ = filteredQuestions[quizIndex];
    let correct = false;

    if (currentQ.type === 'multiple') {
      correct = givenAnswer === currentQ.answer;
    } else {
      // Basic text matching, remove spaces
      const normalizedGiven = givenAnswer.replace(/\s+/g, '').toLowerCase();
      const normalizedAnswer = currentQ.answer.replace(/\s+/g, '').toLowerCase();
      correct = normalizedGiven === normalizedAnswer || normalizedAnswer.includes(normalizedGiven);
      if (normalizedGiven.length < 2 && currentQ.answer.length >= 2) correct = false; // crude guard
    }

    setIsAnswerCorrect(correct);
    if (correct) setScore(s => s + 1);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (quizIndex + 1 < filteredQuestions.length) {
      setQuizIndex(i => i + 1);
      setShowExplanation(false);
      setIsAnswerCorrect(null);
      setQuizInput('');
    } else {
      setQuizFinished(true);
    }
  };

  const scrollToSection = (id: string) => {
    setViewMode('notes');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (viewMode !== 'notes') return;
    const handleScroll = () => {
      const sections = lectureData.map(d => document.getElementById(d.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  return (
    <div className="flex bg-[#f8fafc] min-h-screen text-slate-800 font-sans selection:bg-emerald-200">
      
      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-0 w-full bg-[#f8fafc] border-b border-[#e2e8f0] z-50 px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center justify-between w-full">
           <div className="flex items-center gap-2 text-emerald-700 font-bold">
            <BookOpen className="w-5 h-5" />
            <span className="tracking-tight text-sm">Bio Dash</span>
          </div>

          <div className="flex items-center gap-1 mx-2 bg-slate-200/50 p-1 rounded-md">
            <button 
              onClick={() => setViewMode('notes')}
              className={`text-[10px] px-2 py-1 rounded font-bold ${viewMode === 'notes' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'}`}
            >
              노트
            </button>
            <button 
              onClick={() => setViewMode('quiz')}
              className={`text-[10px] px-2 py-1 rounded font-bold ${viewMode === 'quiz' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500'}`}
            >
              문제풀이
            </button>
          </div>

          <button className="text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Only show in Notes mode to jump, or just standard links) */}
      <AnimatePresence>
        {isMobileMenuOpen && viewMode === 'notes' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-[53px] w-full bg-white border-b border-[#e2e8f0] z-40 flex flex-col"
          >
            {lectureData.map((item) => (
              <button
                key={`mobile-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`py-3 px-6 text-left border-b border-slate-50 font-medium text-sm last:border-0 ${
                  activeSection === item.id ? 'text-emerald-700 bg-emerald-50/50' : 'text-slate-600'
                }`}
              >
                {item.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 h-screen flex-col bg-[#f8fafc] border-r border-[#e2e8f0] fixed top-0 left-0 pt-6 pb-4 z-30">
        <div className="px-5 pb-5 flex flex-col gap-4 border-b border-[#e2e8f0] mb-4 mx-2">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-1.5 rounded text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-black text-[14px] text-slate-900 tracking-tight leading-none">Bio Dashboard</h1>
              <span className="text-[9px] text-slate-500 font-bold tracking-widest uppercase mt-0.5">Series 2024</span>
            </div>
          </div>
          
          <div className="flex p-1 bg-slate-200/50 rounded-lg">
            <button 
              onClick={() => { setViewMode('notes'); setQuizStarted(false); }}
              className={`flex-1 flex justify-center items-center gap-1.5 text-xs py-1.5 rounded-md font-bold transition-all ${viewMode === 'notes' ? 'bg-white text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <LayoutList className="w-3.5 h-3.5" /> 노트 학습
            </button>
            <button 
              onClick={() => { setViewMode('quiz'); setQuizStarted(false); }}
              className={`flex-1 flex justify-center items-center gap-1.5 text-xs py-1.5 rounded-md font-bold transition-all ${viewMode === 'quiz' ? 'bg-emerald-500 text-white shadow-[0_1px_2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <FlaskConical className="w-3.5 h-3.5" /> 문제 풀기
            </button>
          </div>
        </div>
        
        {viewMode === 'notes' && (
          <nav className="flex-1 px-3 space-y-1 overflow-y-auto w-full custom-scrollbar">
            {lectureData.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={`desktop-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 group ${
                    isActive 
                      ? 'sleek-card text-emerald-700 font-bold !shadow-sm' 
                      : 'text-slate-500 hover:text-slate-800 hover:bg-white/50 text-sm font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`${isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-500'} scale-90`}>
                      {item.icon}
                    </div>
                    <span className="text-[13px]">{item.title}</span>
                  </div>
                  {isActive && (
                    <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              );
            })}
          </nav>
        )}
        
        {viewMode === 'quiz' && (
          <div className="flex-1 px-5 flex flex-col justify-center">
            <p className="text-xs text-slate-500 leading-relaxed text-center">
              주제별 맞춤 퀴즈를 통해<br/>개념을 완벽하게 암기해보세요.<br/><br/>우측 화면에서 설정을 선택하고<br/>학습을 시작하세요.
            </p>
          </div>
        )}
        
        <div className="px-6 pt-4 mt-auto text-center mx-2 border-t border-slate-200/60">
           <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold flex flex-col gap-1 items-center justify-center">
             <span>Integrated Study</span>
             <span className="text-emerald-600/50">L1-L3 Synced</span>
           </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 w-full pt-14 lg:pt-0 pb-12 flex flex-col">
        <div className="max-w-4xl mx-auto p-4 lg:p-6 flex flex-col gap-4 w-full flex-1">
          
          <header className="flex justify-between items-end border-b border-[#e2e8f0] pb-3 mb-2 mt-4 lg:mt-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-emerald-600 tracking-wider">BIO-LECTURE SERIES 2024</span>
              <h1 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mt-1">
                {viewMode === 'notes' ? '생명체의 특징과 구성 성분' : 'Interactive 암기 훈련'} <span className="text-slate-400 font-light italic text-xl">Integrated Study</span>
              </h1>
            </div>
            <div className="hidden sm:flex gap-2"> 
              <div className="sleek-card py-1 px-3 flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${viewMode==='quiz'?'bg-rose-500':'bg-emerald-500'} animate-pulse`}></div>
                <span className="text-[10px] font-bold text-[#0f172a] uppercase">{viewMode === 'notes' ? 'L1-L3 Synced' : 'Testing Mode'}</span>
              </div>
            </div>
          </header>

          {viewMode === 'notes' ? (
            <div className="flex flex-col gap-4">
              {lectureData.map((section, idx) => (
                <motion.section 
                  key={`section-${section.id}`} 
                  id={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3 }}
                  className="scroll-mt-16 lg:scroll-mt-8 sleek-card p-4 lg:p-5 flex flex-col"
                >
                  <div className="sleek-section-title text-[15px] flex items-center gap-2 !mb-1">
                    {section.title}
                  </div>
                  
                  <div className="mt-3 prose max-w-none text-[#334155] text-[13px] leading-[1.6]
                    prose-headings:font-bold prose-headings:text-slate-800
                    prose-strong:text-[#059669] prose-strong:font-semibold
                    prose-ul:pl-4 prose-li:marker:text-slate-300">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>
          ) : (
            /* QUIZ SCREEN */
            <div className="flex-1 flex flex-col mt-4">
              {!quizStarted ? (
                 <div className="sleek-card p-8 flex flex-col gap-6 max-w-lg mx-auto w-full mt-10">
                    <h2 className="text-xl font-extrabold text-slate-800 border-b border-slate-100 pb-4">학습 모드 설정</h2>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500">진도 (챕터) 선택</label>
                      <select 
                        value={selectedChapter} 
                        onChange={(e)=>setSelectedChapter(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded p-2 text-sm text-slate-700 outline-none focus:border-emerald-500"
                      >
                        <option value="all">전체 범위</option>
                        {lectureData.map(ch => <option key={`q-ch-${ch.id}`} value={ch.id}>{ch.title}</option>)}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500">문제 형식</label>
                      <div className="flex bg-slate-100 p-1 rounded gap-1">
                        <button onClick={()=>setSelectedQuizType('all')} className={`flex-1 text-sm py-1.5 rounded font-semibold ${selectedQuizType==='all' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>혼합</button>
                        <button onClick={()=>setSelectedQuizType('short')} className={`flex-1 text-sm py-1.5 rounded font-semibold ${selectedQuizType==='short' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>단답형</button>
                        <button onClick={()=>setSelectedQuizType('multiple')} className={`flex-1 text-sm py-1.5 rounded font-semibold ${selectedQuizType==='multiple' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}>선택형</button>
                      </div>
                    </div>

                    <button 
                      onClick={startQuiz}
                      className="mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg shadow-md transition-colors"
                    >
                      암기 시작하기
                    </button>
                 </div>
              ) : quizFinished ? (
                 <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} className="sleek-card p-10 flex flex-col items-center text-center gap-6 max-w-lg mx-auto w-full mt-10">
                    <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900">학습 완료!</h2>
                      <p className="text-slate-500 mt-2 text-sm">
                        총 {filteredQuestions.length}문제 중 <strong className="text-emerald-600 text-lg mx-1">{score}</strong>문제를 정답으로 맞혔습니다.
                      </p>
                    </div>
                    <button onClick={()=>setQuizStarted(false)} className="mt-4 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 font-bold py-2 px-8 rounded-lg outline-none cursor-pointer">
                       다시 설정하기
                    </button>
                 </motion.div>
              ) : (
                <div className="flex flex-col items-center w-full">
                  <div className="w-full max-w-xl flex justify-between items-center mb-4 px-2">
                     <div className="flex items-center gap-2">
                       <span className="sleek-label-blue !bg-slate-200 !text-slate-600 px-2 py-1">
                         문제 {quizIndex + 1} / {filteredQuestions.length}
                       </span>
                       <span className="text-xs font-bold text-slate-400">
                         {filteredQuestions[quizIndex].type === 'short' ? '✍️ 주관식 단답형' : '🎯 객관식 4지선다'}
                       </span>
                     </div>
                     <button
                       onClick={() => { setQuizStarted(false); setQuizFinished(false); }}
                       className="text-[10px] font-bold text-slate-400 hover:text-slate-600 border border-slate-200 px-2 py-1 rounded bg-white transition-colors"
                     >
                       종료
                     </button>
                  </div>

                  <motion.div 
                    key={filteredQuestions[quizIndex].id}
                    initial={{x: 20, opacity:0}} animate={{x:0, opacity:1}}
                    className="sleek-card p-6 md:p-8 max-w-xl w-full flex flex-col gap-6"
                  >
                     <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-relaxed min-h-[80px]">
                       Q. {filteredQuestions[quizIndex].question}
                     </h3>

                     {!showExplanation ? (
                       <div className="mt-2">
                         {filteredQuestions[quizIndex].type === 'short' ? (
                           <div className="flex gap-2">
                             <input 
                               type="text" 
                               value={quizInput}
                               onChange={(e)=>setQuizInput(e.target.value)}
                               onKeyDown={(e)=>e.key === 'Enter' && handleAnswerSubmit(quizInput)}
                               placeholder="정답 입력 (단일 단어 권장)"
                               className="flex-1 bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:border-emerald-500 outline-none"
                             />
                             <button 
                               onClick={()=>handleAnswerSubmit(quizInput)}
                               className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 rounded font-bold text-sm"
                             >확인</button>
                           </div>
                         ) : (
                           <div className="grid grid-cols-1 gap-2">
                             {filteredQuestions[quizIndex].options?.map((opt, i) => (
                               <button 
                                 key={i}
                                 onClick={()=>handleAnswerSubmit(opt)}
                                 className="text-left bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 p-3.5 rounded text-sm text-slate-700 font-medium transition-colors"
                               >
                                 <span className="text-slate-400 mr-2">{i+1}.</span> {opt}
                               </button>
                             ))}
                           </div>
                         )}
                       </div>
                     ) : (
                       <motion.div initial={{opacity:0, height: 0}} animate={{opacity:1, height:'auto'}} className="flex flex-col gap-4">
                          <div className={`p-4 rounded-md border ${isAnswerCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
                            <div className="font-bold text-base mb-1">
                              {isAnswerCorrect ? '정답입니다! 🎉' : '아쉽네요. 오답입니다.'}
                            </div>
                            <p className="text-sm">
                              올바른 정답: <strong>{filteredQuestions[quizIndex].answer}</strong>
                            </p>
                          </div>
                          
                          {filteredQuestions[quizIndex].explanation && (
                            <div className="text-sm text-slate-600 bg-slate-100 p-4 rounded-md">
                              <strong>💡 해설:</strong> {filteredQuestions[quizIndex].explanation}
                            </div>
                          )}

                          <button 
                            onClick={nextQuestion}
                            className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded font-bold text-sm flex justify-center items-center gap-2 mt-2"
                          >
                            {quizIndex + 1 === filteredQuestions.length ? '결과 보기' : '다음 문제로'} <ChevronRight className="w-4 h-4"/>
                          </button>
                       </motion.div>
                     )}
                  </motion.div>
                </div>
              )}
            </div>
          )}
          
          <footer className="mt-8 text-[10px] text-slate-400 flex flex-col items-center sm:flex-row sm:justify-between italic px-2">
             <span>Based on Biological Sciences Lecture Modules</span>
             <span>Optimized for Sleek Dashboard View</span>
          </footer>
        </div>
      </main>

    </div>
  );
}
