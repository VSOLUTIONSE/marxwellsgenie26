type Answer = { who: string; text: string };
type Question = { question: string; answers: Answer[] };

const questions: Question[] = [
  {
    question: "What is your favourite thing about each other?",
    answers: [
      { who: "Marxwell", text: "Her effervescent aura and playful nature." },
      { who: "Genius", text: "How he tells stories. It's always exciting and makes me laugh." },
    ],
  },
  {
    question: "What are you most excited about for the wedding?",
    answers: [
      { who: "Marxwell", text: "Doing life with her every day, and watching her become so much more." },
      { who: "Genius", text: "Spending forever with the love of my life (a handsome bearded man)." },
    ],
  },
  {
    question: "How did you know they were the one?",
    answers: [
      { who: "Marxwell", text: "She is beautiful, kind, happy and genuinely likes helping people." },
      {
        who: "Genius",
        text: "I was at peace. I felt so much safety, and he loved my personality and helped me grow into a better person.",
      },
    ],
  },
  {
    question: "What is your favourite memory together?",
    answers: [
      { who: "Marxwell", text: "Every day we get to meet is my favourite, even when we fight." },
      { who: "Genius", text: "Eating beans made by him, whenever he gives me food." },
    ],
  },
  {
    question: "What is your vision for your future together?",
    answers: [{ who: "Marxwell & Genius", text: "To build, grow, impact and fulfil purpose together." }],
  },
  {
    question: "What is your favourite song?",
    answers: [{ who: "Marxwell & Genius", text: "Make You Feel My Love by Anendlessocean." }],
  },
];

export default function QASection() {
  return (
    <section className="flex w-[1440px] flex-col bg-forest px-[120px] pb-[124px] pt-[118px] max-md:w-full max-md:px-6 max-md:pb-16 max-md:pt-16">
      <div className="flex flex-col items-center pb-[62px] max-md:pb-8">
        <div className="text-[10.5px] uppercase leading-[14px] tracking-[0.32em] text-mist-sage">In Their Words</div>
        <h2 className="mt-4 font-serif text-[38px] italic leading-[130%] text-cream max-md:text-[28px]">
          Six questions, answered honestly.
        </h2>
      </div>
      <div className="flex flex-col">
        {questions.map((item) => (
          <div key={item.question} className="flex gap-12 border-t border-[#F7F4F029] py-9 max-md:flex-col max-md:gap-4 max-md:py-7">
            <div className="w-[300px] shrink-0 font-serif text-[22px] italic leading-[138%] text-cream max-md:w-full max-md:text-[19px]">
              {item.question}
            </div>
            <div className="flex flex-1 gap-10 max-md:flex-col max-md:gap-4">
              {item.answers.map((answer) => (
                <div
                  key={answer.who + answer.text}
                  className="flex flex-1 basis-0 flex-col gap-2 border-l border-[#F7F4F029] pl-7 max-md:basis-auto max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-4"
                >
                  <div className="text-[9.5px] font-medium uppercase leading-3 tracking-[0.26em] text-mist-sage">
                    {answer.who}
                  </div>
                  <p className="font-serif text-[18.5px] font-light leading-[160%] text-pale max-md:text-[16.5px]">{answer.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
