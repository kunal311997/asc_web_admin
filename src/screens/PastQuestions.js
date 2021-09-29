

export default function PastQuestions() {


    const questionsList = [
        {
            title: "I have few doubts related to my kundli, when will my career grow?"
        },
        {
            title: "My today's horoscope is not so good for today. What should I do?"
        }
    ]

    const onQuestionClicked = () => {

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                Past Questions</h1>
            {
                questionsList.map((question) => (
                    <h4 className='question' onClick={onQuestionClicked}>
                        {question.title}</h4>
                ))
            }
        </div>

    )
}