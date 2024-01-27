const qaContainer = document.querySelector('.faq-container');
const questionContainer = document.querySelector('.question-container')

const faqs = [
  {
   id: 0,
   question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
   answer: `
         <p>
            კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:
         </p>
         <ul>
            <li><span>I ეტაპი</span> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. </li>
            <li><span>II ეტაპი</span> - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.</li>
            <li><span>III ეტაპი</span> - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.</li>
            <li><span>IV ეტაპი</span> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.</li>
         </ul>
      <p>
         * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. 
      </p>
      `,
  },
  {
   id: 1,
   question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
   answer: `
            <p>
               TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
            </p>
      `,
  },
  {
   id: 2,
   question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
   answer: `
            <p>
               პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.
            </p>
    `,
  },
];

qaContainer.addEventListener('click', (e) => {
   const questionContainer = e.target.closest('.question-container');
   if (questionContainer) {
      const answerContainer = questionContainer.nextElementSibling;
      answerContainer.classList.toggle('toggle-visibility');
   }

   // Rotate the accordion arrow
   const accordionImg = questionContainer.querySelector('.accordion-img');
   accordionImg.classList.toggle('rotate');
});

faqs.forEach(QApair => {
   const html = `
      <div class="single-qa">
         <div class="question-container">
            <h3>${QApair.question}</h3>
            <img class="accordion-img" src="./img/accordionArrow.svg" alt="accordion-arrow">
         </div>
         <div class="answer-container">
            ${QApair.answer}
         </div>
      </div>
   `
   qaContainer.insertAdjacentHTML('beforeend', html);
});