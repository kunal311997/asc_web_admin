import { Link } from "react-router-dom"

export default function LatestQuestions({ onQuestionClicked, sidebar }) {

    const questionsList = [
        {
            id: 1,
            title: "What is the general outlook of my health?",
            date: "25 Sep 21",
            askedBy: 'Lokesh Sharma',
            location: "Austria",
            price: "20$"
        },
        {
            id: 2,
            title: "Do I have any tendencies for disease?",
            date: "13 Sep 21",
            askedBy: 'Lokesh Sharma',
            location: "Austria",
            price: "67$"
        },
        {
            id: 3,
            title: "When will I recover from my current ailment?",
            date: "11 Sep 21",
            askedBy: 'Kunal Pandey',
            location: "Austria",
            price: "45$"
        },
        {
            id: 4,
            title: "What can I do to help myself recover from my current ailment?",
            date: "1 Sep 21",
            askedBy: 'John Doe',
            location: "Austria",
            price: "4$"
        },
        {
            id: 5,
            title: "What type of job should I pursue? What career am I most suited for?",
            date: "29 Aug 21",
            askedBy: 'Kunal Pandey',
            location: "Austria",
            price: "1$"
        },
        {
            id: 6,
            title: "What course of training/education should I enroll in? What are good fields/subjects for me to study?",
            date: "21 Aug 21",
            askedBy: 'John Doe',
            location: "Austria",
            price: "21$"
        },
        {
            id: 7,
            title: "How can I improve my relationship with my partner/family/boss/colleagues, etc…?",
            date: "20 Aug 21",
            askedBy: 'John Doe',
            location: "Austria",
            price: "25$"
        },
        {
            id: 8,
            title: "Are there any foreseeable disputes/problems coming up between me and my partner/family/friends, etc…?",
            date: "13 Aug 21",
            askedBy: 'John Doe',
            location: "Austria",
            price: "2$"
        }
    ]


    const onTakeOverClicked = (index) => {
        console.log(index)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ display: 'flex', color: 'white' }}>
                Latest Questions</h1>
            {
                questionsList.map((question, index) => (
                    <div key={index} className="questionMain"
                    onClick={() => onQuestionClicked(questionsList[index])}>

                        <p>{question.date}</p>

                        <div className='question'  >
                            <p style={{
                                flex: '1',
                                fontSize: '1.05rem',
                                color: '#f5d678',
                                fontWeight: 'bold',
                                marginRight: '0.1rem'
                            }}
                                key={index}
                               >
                                {question.title}</p>
                            <button className='button'>Take Over</button>
                        </div>

                        <p>Asked by <b>{question.askedBy}</b>,  {question.location}</p>

                    </div>


                ))
            }
        </div>

    )
}

// time, who have asked, location, 1 button takeover wala, price 
// remove past ques
// myprofile 